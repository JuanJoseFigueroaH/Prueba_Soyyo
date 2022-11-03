import express, { Response, Request } from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import 'dotenv/config';
import { NotFoundError } from './errors';
import { errorHandler } from './middlewares';
import mainRoute from './routes/_main.route';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Conexión a la base de datos MongoDB
mongoose.Promise = global.Promise;
const dbUrl = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
mongoose.connect(dbUrl, { useCreateIndex: true, useNewUrlParser: true })
  .then(mongoose => console.log('Conectado a la BD en el puerto 27017'))
  .catch(err => console.log(err));

const swaggerDocs = swaggerJsDoc({
  swaggerDefinition: {
    info: {
      title: 'Prueba Linktic',
      description: 'Api Rest Prueba',
      version: '1.0',
      contact: {
        name: 'name'
      },
      servers: [
        {
          url: 'http://localhost:3000/',
          name: 'test'
        }
      ]
    },
    basePath: '/api/v1',
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        scheme: 'Bearer',
        description:
          'For accessing the API a valid JWT token must be passed in all the queries in the Authorization header.' +
          'The following syntax must be used in the Authorization header :' +
          'Bearer xxxxxx.yyyyyyy.zzzzzz'
      }
    }
  },
  apis: ['src/routes/*.ts']
});
const app = express();
// middleware
app.set('trust proxy', true);
app.use(express.json());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  '/api/v1/public',
  express.static(path.join(__dirname, '/public'))
);

// swagger
app.get('/swagger.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerDocs);
});

app.use(
  '/swagger',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs)
);

app.use('/api/v1', mainRoute);

app.use(errorHandler);

app.all('*', (req: Request, res: Response) => {
  throw new NotFoundError();
});

export { app };
