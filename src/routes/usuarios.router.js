// importando biblioteca router do express
import { Router } from 'express';
// importando controladores de usuario
import UsuariosControllers from '../controllers/usuarios.controller.js';
// importando verificadores
import verificarDadosDeUsuarioMiddleware from '../middlewares/verificarDadosDeUsuario.middleware.js'
import verificarIdDeUsuarioMiddleware from '../middlewares/verificarIdDeUsuario.middleware.js'
import verificarTokenMiddleware from '../middlewares/verificarToken.middleware.js'
const usuariosRouter = Router();

const usuariosControllers = new UsuariosControllers();

usuariosRouter.get('', usuariosControllers.listarTodos);

usuariosRouter.get('/:id',
verificarIdDeUsuarioMiddleware,
usuariosControllers.listarUsuarioPorID);

usuariosRouter.post('/criar-usuario',
verificarDadosDeUsuarioMiddleware,
 usuariosControllers.CriarNovoUsuario);

usuariosRouter.put('/atualizar-usuario/:id',
verificarTokenMiddleware,
verificarIdDeUsuarioMiddleware,
verificarDadosDeUsuarioMiddleware,
usuariosControllers.atualizarUsuario);

usuariosRouter.delete('/excluir-usuario/:id',
verificarTokenMiddleware,
verificarIdDeUsuarioMiddleware, 
usuariosControllers.excluirUsuario);

export default usuariosRouter;
