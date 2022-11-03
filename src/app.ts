import express, { Response, Request } from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';
import { NotFoundError } from './errors';
import { errorHandler } from './middlewares';
import mainRoute from './routes/_main.route';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDocs = swaggerJsDoc({
  swaggerDefinition: {
    info: {
      title: 'Prueba Soy Yo',
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
    basePath: '/api/v1'
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
