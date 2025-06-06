import mysql from 'mysql2';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const PORT = process.env.PORT || 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var connection = mysql.createConnection({
    host: 'mysql-fabriciozalazar.alwaysdata.net',
    user: '415904',
    password: '123456789Aeio',
    database: 'fabriciozalazar_bd_artesanos_labii',
    port: 3306
});

app.get('/', (req, res) => {
    console.log(process.env)
    connection.connect(function (error) {
        if (error) {
            throw error;
        } else {
            console.log('Conexion correcta');
        };
    });
    connection.end();
}
)

app.listen(PORT, 'fd00::6:6070', () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}
)