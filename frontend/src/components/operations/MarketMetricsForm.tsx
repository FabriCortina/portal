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
import { useClients } from '../../hooks/useClients';

interface MarketMetricsFormInputs {
  clientId: string;
  averageRotation: number;
  averageSatisfaction: number;
  completedSprintsPercentage: number;
  averageBugs: number;
  marketMetrics: string;
}

const schema = yup.object().shape({
  clientId: yup.string().required('Campo requerido'),
  averageRotation: yup
    .number()
    .required('Campo requerido')
    .min(0, 'Mínimo 0%')
    .max(100, 'Máximo 100%'),
  averageSatisfaction: yup
    .number()
    .required('Campo requerido')
    .min(1, 'Mínimo 1')
    .max(5, 'Máximo 5'),
  completedSprintsPercentage: yup
    .number()
    .required('Campo requerido')
    .min(0, 'Mínimo 0%')
    .max(100, 'Máximo 100%'),
  averageBugs: yup
    .number()
    .required('Campo requerido')
    .min(0, 'Mínimo 0'),
  marketMetrics: yup.string().required('Campo requerido'),
});

export const MarketMetricsForm: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const { data: clients, isLoading: isLoadingClients } = useClients();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MarketMetricsFormInputs>({
    resolver: yupResolver(schema),
  });

  const metricsMutation = useMutation({
    mutationFn: async (data: MarketMetricsFormInputs) => {
      const response = await fetch('/api/metrics', {
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
        throw new Error('Error al crear las métricas');
      }
    },
    onSuccess: () => {
      toast.success(t('metrics.createSuccess'));
      queryClient.invalidateQueries(['metrics']);
      reset();
    },
    onError: (error) => {
      toast.error(t('metrics.createError'));
      console.error('Error:', error);
    },
  });

  const onSubmit = (data: MarketMetricsFormInputs) => {
    metricsMutation.mutate(data);
  };

  if (isLoadingClients) {
    return (
      <Box className="flex justify-center items-center h-64">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormControl fullWidth>
        <InputLabel>{t('metrics.client')}</InputLabel>
        <Select
          {...register('clientId')}
          error={!!errors.clientId}
          label={t('metrics.client')}
        >
          {clients?.map((client) => (
            <MenuItem key={client.id} value={client.id}>
              {client.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        {...register('averageRotation')}
        type="number"
        label={t('metrics.averageRotation')}
        fullWidth
        error={!!errors.averageRotation}
        helperText={errors.averageRotation?.message}
        inputProps={{ min: 0, max: 100 }}
      />

      <TextField
        {...register('averageSatisfaction')}
        type="number"
        label={t('metrics.averageSatisfaction')}
        fullWidth
        error={!!errors.averageSatisfaction}
        helperText={errors.averageSatisfaction?.message}
        inputProps={{ min: 1, max: 5 }}
      />

      <TextField
        {...register('completedSprintsPercentage')}
        type="number"
        label={t('metrics.completedSprintsPercentage')}
        fullWidth
        error={!!errors.completedSprintsPercentage}
        helperText={errors.completedSprintsPercentage?.message}
        inputProps={{ min: 0, max: 100 }}
      />

      <TextField
        {...register('averageBugs')}
        type="number"
        label={t('metrics.averageBugs')}
        fullWidth
        error={!!errors.averageBugs}
        helperText={errors.averageBugs?.message}
        inputProps={{ min: 0 }}
      />

      <TextField
        {...register('marketMetrics')}
        label={t('metrics.marketMetrics')}
        fullWidth
        multiline
        rows={4}
        error={!!errors.marketMetrics}
        helperText={errors.marketMetrics?.message}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={metricsMutation.isLoading}
        fullWidth
      >
        {metricsMutation.isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          t('metrics.submit')
        )}
      </Button>
    </form>
  );
}; 