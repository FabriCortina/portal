import { SetMetadata } from '@nestjs/common';

export const TENANT_KEY = 'tenantId';
export const Tenant = () => SetMetadata(TENANT_KEY, true); 