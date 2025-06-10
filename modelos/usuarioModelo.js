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
   con.query('SELECT * FROM usuario Where usuarioId = ?',[id], (err, res) => {
        if (err) {
            return callback(err, null);
        } else {
            callback(null, res);
        }
    })
}

export const usuarioModelo={
getTodosLosUsuarios,
getUsuarioXId
};