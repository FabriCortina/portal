import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDashboardStore } from '@/stores/dashboard.store';
import { Widget } from '@/types/dashboard.types';

interface DraggableWidgetProps {
  widget: Widget;
  children: React.ReactNode;
}

export const DraggableWidget: React.FC<DraggableWidgetProps> = ({ widget, children }) => {
  const { updateWidgetPosition } = useDashboardStore();

  const [{ isDragging }, drag] = useDrag({
    type: 'WIDGET',
    item: { id: widget.id, type: widget.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'WIDGET',
    drop: (item: { id: string }) => {
      if (item.id !== widget.id) {
        updateWidgetPosition(item.id, widget.position);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={(node) => {
        drag(drop(node));
      }}
      className={`relative transition-opacity ${
        isDragging ? 'opacity-50' : 'opacity-100'
      } ${isOver ? 'border-2 border-blue-500' : ''}`}
    >
      {children}
    </div>
  );
}; 