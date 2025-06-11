import con from '../config/bd.js';

function getTodosLosUsuarios(callback) {
    con.query('SELECT * FROM usuario', (err, res) => {
        if (err) {
        
            return callback(err, null);
        } else {
           
            callback(null, res);
        }
    })
};

function getUsuarioXId(id,callback){
   con.query('SELECT * FROM usuario Where idUsuario = ?',[id], (err, res) => {
        if (err || res.length==0) {
            return callback(err, null);
        } else {
            callback(null, res);
        }
    })
}

function getUsuariosXNombre(nombre,callback){
      const patron = `%${nombre}%`;
   con.query('SELECT * FROM usuario WHERE nombre LIKE ?',[patron], (err, res) => {
        if (err|| res.length==0) {
            return callback(err, null);
        } else {
            callback(null, res);
        }
    })
}


export const usuarioModelo={
getTodosLosUsuarios,
getUsuarioXId,
getUsuariosXNombre
};