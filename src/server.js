// importando app
import app from './app';
//importando banco de dados
import { conectarAoDatabase } from './database';

const port = process.env.PORT || 3003;

app.listen(port, () => {
  conectarAoDatabase();
    console.log(`A aplicação está rodando na porta http://localhost:${port}`);
  });
