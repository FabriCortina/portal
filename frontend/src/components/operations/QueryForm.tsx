import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import { useCollaborators } from '../../hooks/useCollaborators';
import { AttachFile, Link } from '@mui/icons-material';

interface QueryFormInputs {
  collaboratorId: string;
  topicType: string;
  problemDescription: string;
  resolver: string;
  attachments: string[];
}

const schema = yup.object().shape({
  collaboratorId: yup.string().required('Campo requerido'),
  topicType: yup.string().required('Campo requerido'),
  problemDescription: yup.string().required('Campo requerido'),
  resolver: yup.string().required('Campo requerido'),
  attachments: yup.array().of(yup.string()),
});

export const QueryForm: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const { data: collaborators, isLoading: isLoadingCollaborators } = useCollaborators();
  const [attachments, setAttachments] = useState<string[]>([]);
  const [newAttachment, setNewAttachment] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QueryFormInputs>({
    resolver: yupResolver(schema),
  });

  const queryMutation = useMutation({
    mutationFn: async (data: QueryFormInputs) => {
      const response = await fetch('/api/queries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          tenantId: user?.tenantId,
          attachments,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al crear la consulta');
      }
    },
    onSuccess: () => {
      toast.success(t('query.createSuccess'));
      queryClient.invalidateQueries(['queries']);
      reset();
      setAttachments([]);
    },
    onError: (error) => {
      toast.error(t('query.createError'));
      console.error('Error:', error);
    },
  });

  const onSubmit = (data: QueryFormInputs) => {
    queryMutation.mutate(data);
  };

  const handleAddAttachment = () => {
    if (newAttachment.trim()) {
      setAttachments([...attachments, newAttachment.trim()]);
      setNewAttachment('');
    }
  };

  const handleRemoveAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  if (isLoadingCollaborators) {
    return (
      <Box className="flex justify-center items-center h-64">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormControl fullWidth>
        <InputLabel>{t('query.collaborator')}</InputLabel>
        <Select
          {...register('collaboratorId')}
          error={!!errors.collaboratorId}
          label={t('query.collaborator')}
        >
          {collaborators?.map((collaborator) => (
            <MenuItem key={collaborator.id} value={collaborator.id}>
              {collaborator.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>{t('query.topicType')}</InputLabel>
        <Select
          {...register('topicType')}
          error={!!errors.topicType}
          label={t('query.topicType')}
        >
          <MenuItem value="technical">Técnico</MenuItem>
          <MenuItem value="administrative">Administrativo</MenuItem>
          <MenuItem value="human_resources">Recursos Humanos</MenuItem>
          <MenuItem value="other">Otro</MenuItem>
        </Select>
      </FormControl>

      <TextField
        {...register('problemDescription')}
        label={t('query.problemDescription')}
        fullWidth
        multiline
        rows={4}
        error={!!errors.problemDescription}
        helperText={errors.problemDescription?.message}
      />

      <TextField
        {...register('resolver')}
        label={t('query.resolver')}
        fullWidth
        error={!!errors.resolver}
        helperText={errors.resolver?.message}
      />

      <Box className="space-y-2">
        <Typography variant="subtitle1">{t('query.attachments')}</Typography>
        <Box className="flex space-x-2">
          <TextField
            value={newAttachment}
            onChange={(e) => setNewAttachment(e.target.value)}
            placeholder={t('query.addAttachment')}
            fullWidth
          />
          <Button
            variant="outlined"
            onClick={handleAddAttachment}
            startIcon={<Link />}
          >
            {t('query.add')}
          </Button>
        </Box>
        {attachments.map((attachment, index) => (
          <Box key={index} className="flex items-center space-x-2">
            <Typography variant="body2" className="truncate">
              {attachment}
            </Typography>
            <IconButton
              size="small"
              onClick={() => handleRemoveAttachment(index)}
              aria-label={t('query.removeAttachment')}
            >
              <AttachFile fontSize="small" />
            </IconButton>
          </Box>
        ))}
      </Box>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={queryMutation.isLoading}
        fullWidth
      >
        {queryMutation.isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          t('query.submit')
        )}
      </Button>
    </form>
  );
}; 