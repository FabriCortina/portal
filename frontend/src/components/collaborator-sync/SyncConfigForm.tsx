import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, CircularProgress } from '@mui/material';
import { useSyncConfig } from '../../hooks/useSyncConfig';

interface SyncConfigFormInputs {
  sheetId: string;
  range: string;
  updateFrequency: number;
}

const schema = yup.object().shape({
  sheetId: yup.string().required('Campo requerido'),
  range: yup.string().required('Campo requerido'),
  updateFrequency: yup
    .number()
    .required('Campo requerido')
    .min(1, 'Mínimo 1 hora')
    .max(24, 'Máximo 24 horas'),
});

export const SyncConfigForm: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const { data: currentConfig, isLoading } = useSyncConfig();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SyncConfigFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      updateFrequency: 1,
    },
  });

  useEffect(() => {
    if (currentConfig) {
      reset(currentConfig);
    }
  }, [currentConfig, reset]);

  const configMutation = useMutation({
    mutationFn: async (data: SyncConfigFormInputs) => {
      const response = await fetch('/api/collaborator-sync/configure', {
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
        throw new Error('Error al configurar la sincronización');
      }
    },
    onSuccess: () => {
      toast.success(t('sync.configSuccess'));
      queryClient.invalidateQueries(['syncConfig']);
    },
    onError: (error) => {
      toast.error(t('sync.configError'));
      console.error('Error:', error);
    },
  });

  const forceSyncMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`/api/collaborator-sync/${user?.tenantId}/force`, {
        method: 'PUT',
      });

      if (!response.ok) {
        throw new Error('Error al forzar la sincronización');
      }
    },
    onSuccess: () => {
      toast.success(t('sync.forceSuccess'));
      queryClient.invalidateQueries(['collaborators']);
    },
    onError: (error) => {
      toast.error(t('sync.forceError'));
      console.error('Error:', error);
    },
  });

  const onSubmit = (data: SyncConfigFormInputs) => {
    configMutation.mutate(data);
  };

  const handleForceSync = () => {
    forceSyncMutation.mutate();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <CircularProgress />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextField
        {...register('sheetId')}
        label={t('sync.sheetId')}
        fullWidth
        error={!!errors.sheetId}
        helperText={errors.sheetId?.message}
      />

      <TextField
        {...register('range')}
        label={t('sync.range')}
        fullWidth
        error={!!errors.range}
        helperText={errors.range?.message}
      />

      <FormControl fullWidth>
        <InputLabel>{t('sync.updateFrequency')}</InputLabel>
        <Select
          {...register('updateFrequency')}
          error={!!errors.updateFrequency}
          defaultValue={1}
        >
          {[1, 2, 3, 4, 6, 8, 12, 24].map((hours) => (
            <MenuItem key={hours} value={hours}>
              {t('sync.everyXHours', { hours })}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div className="flex space-x-4">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={configMutation.isLoading}
        >
          {configMutation.isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            t('sync.saveConfig')
          )}
        </Button>

        <Button
          type="button"
          variant="outlined"
          color="secondary"
          onClick={handleForceSync}
          disabled={forceSyncMutation.isLoading}
        >
          {forceSyncMutation.isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            t('sync.forceSync')
          )}
        </Button>
      </div>
    </form>
  );
}; 