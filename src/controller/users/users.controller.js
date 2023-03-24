const {sequelize} = require("../../connection");
const {UserModel}= require("../../model/user.model")
const UserService= require("../../service/user.service")
const listar = async function(req, res) {
    console.log("listar usuarios");
    try {
        const users = await UserService.listar(req.query.filtro || '');
        // EN USERS[0] SE ENCUENTRA NUESTRO LISTADO DE SQL
        if(users && users[0]){
            res.json({
                success:true,
                usuarios: users[0]
            });
        }else{
            res.json({
                success:true,
                usuarios: []
            });
        }
    } catch (error) {
        res.json({
            success:false,
            error: error.message
        });
    }
    
      
    //res.json(users);
};
const consultarPorCodigo = async function(req, res) {
    console.log("consultar Usuarios por codigo");
    try {
        const users = await UserService.consultarPorCodigo(req.params.id);
        
        // EN USERS[0] SE ENCUENTRA NUESTRO LISTADO DE SQL
        if(users){
            res.json({
                success:true,
                usuario: users
            });
        }else{
            res.json({
                success:true,
                usuario: []
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            error: error.message
        });
    }
    
      
    //res.json(users);
};
const actualizar = async function(req, res) {
    console.log("actualizar usuarios");
    let usuarioRetorno=null; //GUARDARA EL USARIO QUE SE VA A INCLUIR O EDITAR
    const data =req.body; // SE OBTIENE LOS DATOS DEL CUERPO DE LA PETICION


   try {
        usuarioRetorno= await UserService.actualizar(data);
        res.json({
            success: true,
            user: usuarioRetorno
        });
    } catch (error) {
        res.json({
            success:false,
            usuarios: error.message
        });
    }

    
};

const eliminar = async function( req, res) {
    console. log( "eliminar usuarios ") ;
    try {
        await UserService.eliminar(req.params.id);
       
        res.json({
            success: true
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        });
    }
    
};

module.exports = {
    listar, actualizar, eliminar,consultarPorCodigo
};