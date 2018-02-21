import * as http from 'http';
import app from '../app';
import db from '../models/index';

const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);
const server = http.createServer(app);

db.sequelize.sync().then(() => {
  server.listen(port);
  console.log(`We are live on ${port}`);
}).catch(console.log);
