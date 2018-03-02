import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import path from 'path';
import routes from './routes/index';


const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// app.get('/', (req, res) => res.status(200).send({
//   message: 'Welcome to More Recipes!'
// }));

routes(app);
app.use(express.static(`${__dirname}/../client/dist`));

console.log('__dirname', __dirname);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

export default app;
