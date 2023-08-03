import 'dotenv/config';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import rootRouter from './routes/root.routes';

const PORT = 3000;

const app = express();

app.use('/', rootRouter);

const swaggerFile = require('./api.swagger.json');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT);
console.log(`Server started at port ${PORT}`);
console.log(`http://localhost:${PORT}/swagger`);