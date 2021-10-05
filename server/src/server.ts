import express from 'express';

const app = express();
const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🔥 Servidor iniciado em http://localhost:${port}`);
});
