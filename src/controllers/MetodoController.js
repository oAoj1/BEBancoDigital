const metodos = require('../model/MetodoModel.js')


async function lerMetodo(req,res){
    try{
        const exibirMetodo = await metodos.find()
        res.status(200).json(exibirMetodo)
        
    }catch(error){
        console.log(error.message)
    }
}

async function criarMetodo(req,res){
    try{
        const novoMetodo = new metodos(req.body)
        const salvarNovoMetodo = await novoMetodo.save()

        res.status(201).json(novoMetodo)
        
    }catch(error){
        console.log(error.message)
    }
}

async function lerMetodoID(req,res){
    try{
        const id = req.params.id
        const exibirMetodoID = await metodos.findById(id)
        
        res.status(200).json(exibirMetodoID)
        
    }catch(error){
        console.log(error.message)
    }
}

async function editarMetodo(req,res){
    try{
        const id = req.params.id
        const value = {$set: req.body}
        const atualizandoMetodo = await metodos.findByIdAndUpdate(id, value)

        if(atualizandoMetodo){
            res.status(200).json({
                "message":"Metodo atualizado!",
                "metodo":atualizandoMetodo
            })
        }

    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    lerMetodo,
    criarMetodo,
    lerMetodoID,
    editarMetodo
}