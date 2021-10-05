import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import './database';

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`🔥 Servidor iniciado em http://localhost:${port}`);
});
