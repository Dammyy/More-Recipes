import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import expressJWT from 'express-jwt';
import routes from './server/routes/index';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressJWT({ secret: 'Damilare Andela' }).unless({ path: ['/api/v1/users/signin', '/api/v1/recipes'] }));
routes(app);

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to More Recipes!'
}));

export default app;
