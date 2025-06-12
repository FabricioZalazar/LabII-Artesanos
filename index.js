import express from 'express';
import path from 'path';
import usuarioRoutes from './routes/usuarioRoutes.js';
import { fileURLToPath } from 'url';
import session from 'express-session';
const app = express();

app.use(session({
  secret: 'clave-secreta',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'vistas')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'vistas', 'login.html'));
});

app.use('/', usuarioRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});