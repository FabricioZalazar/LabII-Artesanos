import express from 'express';
import path from 'path';
import usuarioRoutes from './routes/usuarioRoutes.js'
import { fileURLToPath } from 'url';
const app = express();
const PORT = process.env.PORT || 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/",usuarioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}
)