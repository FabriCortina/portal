import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNav from '../components/MainNav';
import { twMerge } from 'tailwind-merge';

interface MainLayoutProps {
  className?: string;
  user?: {
    name: string;
    email: string;
    imageUrl?: string;
  };
  onLogout?: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  className,
  user,
  onLogout,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav user={user} onLogout={onLogout} />
      <main className={twMerge('py-6', className)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout; 