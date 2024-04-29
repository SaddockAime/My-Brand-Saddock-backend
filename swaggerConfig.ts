import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MyBrand Backend API',
      version: '1.0.0',
      description: 'Documentation for MyBrand Backend API',
    },
    servers: [
      {
        url: 'https://my-brand-saddock-backend.onrender.com/api',
        description: "Live deployed server",
      },
      {
        url: 'http://localhost:7070/api',
        description: "Local Server",
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const specs = swaggerJsdoc(options);

const swaggerSetup = (app: any) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

export default swaggerSetup;
