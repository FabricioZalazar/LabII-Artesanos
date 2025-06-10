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

function buscarUsuarioXId(id,(req,res)){
    usuarioModelo.getUsuarioXId(id,(err,usuario)=>{
            if(err){
            return res.status(500).send('Error al Obtener Usuario ID: '+id)
        }else{
            res.json(usuario);
        }
    })
}