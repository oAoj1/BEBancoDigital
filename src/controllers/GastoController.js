const saldoDivididos = require('../model/SaldoDivididoModel.js')
const gastos = require('../model/GastoModel.js')
const saldos = require('../model/SaldoModel.js')

async function lerGastos(req,res){
    try{
        const exibirGastos = await gastos.find()
        let buscarGastos = await gastos.find({}, 'valor')
        let gastosSomados = buscarGastos.reduce((acc, curr) => acc + curr.valor, 0)

        res.status(200).json(exibirGastos)

    }catch(error){
        console.log(error.message)
    }
}

async function lerGastosID(req,res){
    try{
        const id = req.params.id
        const exibirGastosID = await gastos.findById(id)

        res.status(200).json(exibirGastosID)

    }catch(error){
        console.log(error.message)
    }
}

async function criarGastos(req,res){
    try{

        /* Ao colocar um valor no campo DATA, insira o data no formato -> YYYY-MM-DD */

        let { 
            nome,
            valor,
            classificacao,
            data,
            tipo
        } = req.body

        const novoGasto = new gastos({
            nome:req.body.nome,
            valor:req.body.valor,
            classificacao:req.body.classificacao,
            data:req.body.data,
            tipo:req.body.tipo
        })

        const salvarNovoGasto = await novoGasto.save()
        
        let buscarGastos = await gastos.find({}, 'valor')
        let buscarSaldo = await saldos.findOne({}, 'saldo')
    
        let valorFinal = 0

        let gastosAtuais = buscarGastos.map(valores => (
            valorFinal = valores.valor
        ))

        let ultimoGasto = buscarGastos[buscarGastos.length - 1]

        await saldos.updateMany({}, {$inc: {saldo: - valorFinal}})

    }catch(error){
        console.log(error.message)
    }
}

async function editarGastos(req,res){
    try{
        const id = req.params.id
        const value = {$set: req.body}
        const atualizandoGastos = await gastos.findByIdAndUpdate(id, value)

        res.status(200).send('Gasto atualizado!')

    }catch(error){
        console.log(error.message)
    }
}

async function excluirGastos(req,res){
    try{
        const id = req.params.id
        const deletandoGastos = await gastos.findByIdAndDelete(id)

        res.status(200).send({
            msg:"gasto deletado com sucesso",
            deletandoGastos
        })

    }catch(error){
        console.log(error.message)
    }
}

async function filtrarGastos(req,res){
    try{
        const classificacao = req.query.classificacao
        gastos.find({'classificacao':classificacao})
            .then(gas => (
                res.json(gas)
            ))
            .catch(err => {
                console.log(err)
            })

        if(classificacao == ''){
            const todosGastos = await gastos.find()
            res.send(todosGastos)
        }
        
    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    lerGastos,
    criarGastos,
    lerGastosID,
    editarGastos,
    filtrarGastos,
    excluirGastos
}