import express from 'express';
import { usuarioControlador } from "../controladores/usuarioControlador.js";
const router = express.Router();

router.get('/usuarios',usuarioControlador.verUsuarios);
router.post('/usuarios/buscarXId',usuarioControlador.buscarUsuarioXId);
router.post('/usuarios/buscarXNombre',usuarioControlador.buscarUsuariosXNombre);

export default router;
