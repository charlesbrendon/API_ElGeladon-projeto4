// importando app
import app from './app';
//importando banco de dados
import { conectarAoDatabase } from './database/index.js';

const port = process.env.PORT || 3003;

app.listen(port, () => {
  conectarAoDatabase();
  if(!process.env.PORT)
    console.log(`A aplicação está rodando na porta http://localhost:${port}`);
  });
