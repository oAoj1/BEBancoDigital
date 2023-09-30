const depositos = require('../model/DepositoModel.js')
const saldos = require('../model/SaldoModel.js')

async function lerDepositos(req,res){
    try{
        const exibirDepositos = await depositos.find()
        let buscarDepositos = await depositos.find({}, 'valor')
        let depositosSomados = buscarDepositos.reduce((acc, curr) => acc + curr.valor, 0)
        
        res.status(200).json(exibirDepositos)

    }catch(error){
        console.log(error.message)
    }
}

async function lerDepositosID(req,res){
    try{
        const id = req.params.id
        const exibirDepositos = await depositos.findById(id)

        res.status(200).json(exibirDepositos)

    }catch(error){
        console.log(error.message)
    }
}

async function criarDeposito(req,res){
    try{
        const {
            valor,
            data
        } = req.body

        const novoDeposito = new depositos(req.body)
        const salvandoNovoDeposito = await novoDeposito.save()

        let valorDepositado = 0

        const buscarSaldo = await saldos.find({}, 'saldos')
        const buscarDepositos = await depositos.find({}, 'valor')

        let valorFinal = 0

        let depositosAtuais = buscarDepositos.map(valores => (
            valorFinal = valores.valor
        ))

        await saldos.updateMany({}, {$inc: {saldo: + valorFinal}})

        res.status(201).json({
            novoDeposito
        })

    }catch(error){
        console.log(error.message)
    }
}

async function editarDeposito(req,res){
    try{
        const id = req.params.id
        const value = {$set: req.body}
        const atualizandoDeposito = await depositos.findByIdAndUpdate(id, value)

        if(atualizandoDeposito){
            res.status(201).send('Deposito atualizado com sucesso')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function deletarDeposito(req,res){
    try{
        const id = req.params.id
        const excluirDeposito = await depositos.findByIdAndDelete(id)

        res.status(200).json({
            msg:'deposito excluido com sucesso',
            excluirDeposito
        })

    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    lerDepositos,
    criarDeposito,
    lerDepositosID,
    editarDeposito,
    deletarDeposito
}