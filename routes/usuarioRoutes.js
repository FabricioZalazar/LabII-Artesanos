import express from 'express';
import { verUsuarios } from "../controladores/usuarioControlador.js";
const router = express.Router();

router.get('/usuarios',verUsuarios);

export default router;
