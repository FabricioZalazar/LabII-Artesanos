import express from 'express';
const router = express.Router();
import {usuarioController} from '../controladores/usuarioControlador.js';

function verificarLogin(req, res, next) {
  if (!req.session.usuario) return res.redirect('/login');
  next();
}

router.post('/registro', usuarioController.registrar);
router.post('/login', usuarioController.login);
router.get('/logout', usuarioController.logout);
router.get('/perfil', verificarLogin, usuarioController.mostrarPerfil);

export default router;