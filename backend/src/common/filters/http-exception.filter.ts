import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message: exception.message || null,
      error: exception.name,
    };

    // Si es un error de validación, agregar los detalles
    if (status === HttpStatus.BAD_REQUEST) {
      const validationErrors = (exception as any).response?.message;
      if (Array.isArray(validationErrors)) {
        errorResponse['errors'] = validationErrors;
      }
    }

    response.status(status).json(errorResponse);
  }
} 