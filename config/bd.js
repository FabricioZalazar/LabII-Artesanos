import mysql from 'mysql2';

/* var connection = mysql.createConnection({
    host: 'mysql-fabriciozalazar.alwaysdata.net',
    user: '415904',
    password: '123456789Aeio',
    database: 'fabriciozalazar_bd_artesanos_labii',
    port: 3306
});
 */

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fabriciozalazar_bd_artesanos_labii'
});

connection.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexion correcta');
    };
});

export default connection;