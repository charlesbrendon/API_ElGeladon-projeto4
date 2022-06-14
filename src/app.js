// importando paletas de rotas
import paletasRouter from './routes/paletas.routers.js';
// importando usuarios de rotas
import usuariosRouter from './routes/usuarios.router.js';
// importando login de rotas
import loginRouter from './routes/login.router.js'
// importando modulos
import express from 'express';
import cors from 'cors';

//usando modulos importados
const app = express();

app.use(express.json());
app.use(cors());

// rotas
app.get('/', (req, res) => {
  return res.send('Hello World');
});
// rotas de paletas
app.use('/paletas', paletasRouter);
// rotas de usuarios
app.use('/usuarios', usuariosRouter);
// rotas de login
app.use('/login', loginRouter);

// exportando app
export default app;
