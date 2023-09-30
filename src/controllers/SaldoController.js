const saldos = require('../model/SaldoModel.js')
const gastos = require('../model/GastoModel.js')
const depositos = require('../model/DepositoModel.js')

async function lerSaldo(req,res){
    try{
        const exibirSaldo = await saldos.find()
        res.status(200).json(exibirSaldo)

    }catch(error){
        console.log(error.message)
    }
}

async function lerSaldoID(req,res){
    try{
        const id = req.params.id
        const exibirSaldoID = await saldos.findById(id)

        res.status(200).json(exibirSaldoID)

    }catch(error){
        console.log(error.message)
    }
}

async function criarSaldo(req,res){
    try{
        const novoSaldo = new saldos(req.body)
        const salvarNovoSaldo = await novoSaldo.save()

        res.status(201).json(novoSaldo)

    }catch(error){
        console.log(error.message)
    }
}

async function editarSaldo(req,res){
    try{
        const id = req.params.id
        const atualizandoSaldo = await saldos.findByIdAndUpdate(id, {$set: req.body})

        if(atualizandoSaldo){
            res.status(200).send('Saldo atualizado')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function debitandoSaldo(req,res){
    try{
        const id = req.params.id
        const buscarSaldo = await saldos.findById(id)
        const buscarGastos = await gastos.find()

        let saldoAtual = buscarSaldo.saldo
        let gastosAtuais = buscarGastos.map(valores => (
            saldoAtual -= valores.valor
        ))

        await buscarSaldo.save()

        res.status(200).json(saldoAtual)

    }catch(error){
        console.log(error.message)
    }
}

async function depositandoSaldo(req,res){
    try{
        const buscarSaldo = await saldos.findOne()
        const buscarDeposito = await depositos.find()

        const saldoAtual = buscarSaldo.saldo
        res.status(200).json({
            saldoAtual
        })

    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    lerSaldo,
    criarSaldo,
    editarSaldo,
    lerSaldoID,
    debitandoSaldo,
    depositandoSaldo
}