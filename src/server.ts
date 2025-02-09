import express from 'express';
import { cancelamentoRouter } from './infra/routes/cancelamento-router';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/cancelamento', cancelamentoRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});