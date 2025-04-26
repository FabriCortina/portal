# Portal de Gestión de Colaboradores

Sistema de gestión de colaboradores y métricas para empresas, desarrollado con NestJS y React.

## 🚀 Características

- **Multi-tenant**: Soporte para múltiples empresas con datos aislados
- **Gestión de Colaboradores**: Registro y seguimiento de información detallada
- **Métricas y Seguimiento**: Análisis de rendimiento y satisfacción
- **Autenticación Segura**: JWT con refresh tokens
- **Roles y Permisos**: Control de acceso basado en roles
- **API REST**: Documentada con Swagger
- **Interfaz Moderna**: Desarrollada con React y Material-UI

## 🛠️ Tecnologías

### Backend
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Swagger/OpenAPI
- Class Validator
- Jest

### Frontend
- React
- TypeScript
- Material-UI
- React Query
- React Router
- Axios
- Jest

## 📋 Prerrequisitos

- Node.js (v18 o superior)
- PostgreSQL (v14 o superior)
- npm o yarn

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/FabriCortina/portal.git
cd portal
```

2. Instalar dependencias del backend:
```bash
cd backend
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```
Editar el archivo `.env` con los valores correspondientes.

4. Ejecutar migraciones de la base de datos:
```bash
npx prisma migrate dev
```

5. Instalar dependencias del frontend:
```bash
cd ../frontend
npm install
```

## 🚀 Ejecución

### Backend
```bash
cd backend
npm run start:dev
```

### Frontend
```bash
cd frontend
npm start
```

## 📚 Documentación de la API

La documentación de la API está disponible en Swagger UI cuando el servidor está en ejecución:
```
http://localhost:3000/api
```

## 🔐 Autenticación

El sistema utiliza JWT (JSON Web Tokens) para la autenticación:

1. **Login**: POST /auth/login
   - Genera access token y refresh token
   - Valida credenciales

2. **Refresh Token**: POST /auth/refresh
   - Renueva el access token
   - Requiere refresh token válido

3. **Logout**: POST /auth/logout
   - Invalida el refresh token
   - Requiere autenticación

## 👥 Roles de Usuario

- **admin**: Acceso completo al sistema
- **operations**: Gestión de colaboradores y métricas
- **client**: Visualización de métricas y reportes

## 📦 Estructura del Proyecto

```
portal/
├── backend/
│   ├── src/
│   │   ├── auth/           # Autenticación y autorización
│   │   ├── users/          # Gestión de usuarios
│   │   ├── collaborators/  # Gestión de colaboradores
│   │   ├── metrics/        # Métricas y análisis
│   │   └── infrastructure/ # Configuración y servicios
│   └── prisma/            # Modelos y migraciones
└── frontend/
    ├── src/
    │   ├── components/    # Componentes React
    │   ├── pages/        # Páginas de la aplicación
    │   ├── services/     # Servicios API
    │   └── contexts/     # Contextos de React
    └── public/           # Archivos estáticos
```

## 🧪 Testing

### Backend
```bash
cd backend
npm run test
```

### Frontend
```bash
cd frontend
npm test
```

## 📝 Convenciones de Código

- **Commits**: Seguir [Conventional Commits](https://www.conventionalcommits.org/)
- **Branches**: 
  - `main`: Producción
  - `develop`: Desarrollo
  - `feature/*`: Nuevas características
  - `fix/*`: Correcciones

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: add some amazing feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 👨‍💻 Autor

- **Fabricio Cortina** - [GitHub](https://github.com/FabriCortina)

## 🙏 Agradecimientos

- NestJS Team
- Prisma Team
- React Team
- Material-UI Team 