import { usuarioModelo } from "../modelos/usuarioModelo.js";

 function verUsuarios(req,res){
    usuarioModelo.getTodosLosUsuarios((err,usuarios)=>{
        if(err){
            return res.status(500).send('Error al Obtener Usuarios')
        }else{
            res.json(usuarios);
        }
    })
}

function buscarUsuarioXId(req,res){
    const id = req.body.id;
    usuarioModelo.getUsuarioXId(id,(err,usuario)=>{
            if(err || usuario == null){
            return res.status(500).send('Error al Obtener Usuario ID: '+id)
        }else{
            res.json(usuario);
        }
    })
};


export function buscarUsuariosXNombre(req, res) {
  const nombre = req.body.nombre;

  if (!nombre) {
    return res.status(400).send('Debe enviar un nombre para buscar');
  }
  usuarioModelo.getUsuariosXNombre(nombre, (err, usuarios) => {
    if (err) {
      return res.status(500).send('Error al buscar usuarios');
    }
    if (usuarios==null || usuarios.length == 0) {
      return res.status(404).send('No se encontraron usuarios');
    }
    res.json(usuarios);
  });
}

export const usuarioControlador={
    verUsuarios,
    buscarUsuarioXId,
    buscarUsuariosXNombre
};