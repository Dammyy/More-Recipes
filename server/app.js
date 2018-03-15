import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import path from 'path';
import swaggerUiExpress from 'swagger-ui-express';

import routes from './routes/index';
import apiDocs from './api-docs.json';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(apiDocs));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Origin, X-Requested-With, Authorization, x-access-token'
  );

  next();
});

routes(app);
app.use(express.static(`${__dirname}/../client/dist`));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

export default app;
