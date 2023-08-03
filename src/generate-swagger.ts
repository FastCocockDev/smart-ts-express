import swaggerAutogen from 'swagger-autogen';

const swaggerDoc = {
  info: {
    title: 'API docs'
  },
  securityDefinitions: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT'
    }
  }
};

const swaggerOutputFile = './api.swagger.json';
const endpointFiles = [
  './dist/routes/hello-world.routes.js',
];

swaggerAutogen({openapi: '3.0.0'})(swaggerOutputFile, endpointFiles, swaggerDoc);