const usuarios = require('../model/UsuarioModel.js')

async function lerUsuarios(req,res){
    try{
        const lendoUsuario = await usuarios.find()

        res.status(200).json(lendoUsuario)

    }catch(error){
        console.log(error.message)
    }
}

async function lerUsuariosID(req,res){
    try{
        const id = req.params.id
        const lendoUsuarioID = await usuarios.findById(id)

        res.status(200).json(lendoUsuarioID)

    }catch(error){
        console.log(error)
    }
}

async function deletarUsuarios(req,res){
    try{
        const id = req.params.id
        await usuarios.findByIdAndDelete(id)

        .then(() => {
            res.status(200).json({
                message:'Usuario deletado com sucesso!'
            })
        })
        .catch((err) => {
            res.status(500).json({
                message:'Erro ao deletar usuario, confira o console'
            })
            console.log(err)
        })

    }catch(error){  
        console.log(error.message)
    }
}

module.exports = {
    lerUsuarios,
    lerUsuariosID,
    deletarUsuarios
}