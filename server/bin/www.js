import * as http from 'http';
import proxy from 'http-proxy-middleware';
import app from '../app';
import db from '../models/index';

app.use('/api/v1', proxy({ target: 'http://www.example.org', changeOrigin: true }));
const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);
const server = http.createServer(app);

db.sequelize.sync().then(() => {
  server.listen(port);
  console.log(`We are live on ${port}`);
}).catch(console.log);
