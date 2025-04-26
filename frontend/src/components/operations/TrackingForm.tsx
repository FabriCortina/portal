import React from 'react';
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
} from '@mui/material';
import { useCollaborators } from '../../hooks/useCollaborators';

interface TrackingFormInputs {
  collaboratorId: string;
  sprintPercentage: number;
  bugsCount: number;
  feedback: string;
  last15DaysSatisfaction: number;
  issuesToResolve: string;
}

const schema = yup.object().shape({
  collaboratorId: yup.string().required('Campo requerido'),
  sprintPercentage: yup
    .number()
    .required('Campo requerido')
    .min(0, 'Mínimo 0%')
    .max(100, 'Máximo 100%'),
  bugsCount: yup
    .number()
    .required('Campo requerido')
    .min(0, 'Mínimo 0'),
  feedback: yup.string().required('Campo requerido'),
  last15DaysSatisfaction: yup
    .number()
    .required('Campo requerido')
    .min(1, 'Mínimo 1')
    .max(5, 'Máximo 5'),
  issuesToResolve: yup.string().required('Campo requerido'),
});

export const TrackingForm: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const { data: collaborators, isLoading: isLoadingCollaborators } = useCollaborators();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TrackingFormInputs>({
    resolver: yupResolver(schema),
  });

  const trackingMutation = useMutation({
    mutationFn: async (data: TrackingFormInputs) => {
      const response = await fetch('/api/trackings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          tenantId: user?.tenantId,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al crear el seguimiento');
      }
    },
    onSuccess: () => {
      toast.success(t('tracking.createSuccess'));
      queryClient.invalidateQueries(['trackings']);
      reset();
    },
    onError: (error) => {
      toast.error(t('tracking.createError'));
      console.error('Error:', error);
    },
  });

  const onSubmit = (data: TrackingFormInputs) => {
    trackingMutation.mutate(data);
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
        <InputLabel>{t('tracking.collaborator')}</InputLabel>
        <Select
          {...register('collaboratorId')}
          error={!!errors.collaboratorId}
          label={t('tracking.collaborator')}
        >
          {collaborators?.map((collaborator) => (
            <MenuItem key={collaborator.id} value={collaborator.id}>
              {collaborator.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        {...register('sprintPercentage')}
        type="number"
        label={t('tracking.sprintPercentage')}
        fullWidth
        error={!!errors.sprintPercentage}
        helperText={errors.sprintPercentage?.message}
        inputProps={{ min: 0, max: 100 }}
      />

      <TextField
        {...register('bugsCount')}
        type="number"
        label={t('tracking.bugsCount')}
        fullWidth
        error={!!errors.bugsCount}
        helperText={errors.bugsCount?.message}
        inputProps={{ min: 0 }}
      />

      <TextField
        {...register('feedback')}
        label={t('tracking.feedback')}
        fullWidth
        multiline
        rows={4}
        error={!!errors.feedback}
        helperText={errors.feedback?.message}
      />

      <TextField
        {...register('last15DaysSatisfaction')}
        type="number"
        label={t('tracking.last15DaysSatisfaction')}
        fullWidth
        error={!!errors.last15DaysSatisfaction}
        helperText={errors.last15DaysSatisfaction?.message}
        inputProps={{ min: 1, max: 5 }}
      />

      <TextField
        {...register('issuesToResolve')}
        label={t('tracking.issuesToResolve')}
        fullWidth
        multiline
        rows={4}
        error={!!errors.issuesToResolve}
        helperText={errors.issuesToResolve?.message}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={trackingMutation.isLoading}
        fullWidth
      >
        {trackingMutation.isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          t('tracking.submit')
        )}
      </Button>
    </form>
  );
}; 