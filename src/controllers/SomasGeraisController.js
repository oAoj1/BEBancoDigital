const somasGerais = require('../model/SomasGeraisModel.js')
const depositos = require('../model/DepositoModel.js')
const gastos = require('../model/GastoModel.js')

async function lerSomasGerais(req,res){
    try{
        const exibirSomasGerais = await somasGerais.findOne()
        const exibirDepositos = await depositos.find()
        const exibirGastos = await gastos.find()

        let somaFundamental = 0
        const exibirFundamental = await gastos.find({classificacao:'fundamental'})
        .then(fund => (
            fund.map(valores => (
                somaFundamental += valores.valor
            ))
        ))
        .catch(err => (
            res.send(err)
        ))

        let somaPessoal = 0
        const exibirPessoal = await gastos.find({classificacao:'pessoal'})
        .then(pess => (
            pess.map(valores => (
                somaPessoal += valores.valor
            ))
        ))
        .catch(err => (
            res.send(err)
        ))

        let somaReservaInvestimento = 0
        const exibirReservaInvestimento = await gastos.find({classificacao:'reservaInvestimento'})
        .then(resInv => (
            resInv.map(valores => (
                somaReservaInvestimento += valores.valor
            ))
        ))

        let somaDepositos = 0
        exibirDepositos.forEach((depositados) => (
            somaDepositos += depositados.valor
        ))

        let somaGastos = 0
        exibirGastos.forEach((gastados) => (
            somaGastos += gastados.valor
        ))

        exibirSomasGerais.gastosSomados = somaGastos
        exibirSomasGerais.depositosSomados = somaDepositos
        exibirSomasGerais.fundamentalSomado = somaFundamental
        exibirSomasGerais.pessoalSomado = somaPessoal
        exibirSomasGerais.reservaInvestimentoSomado = somaReservaInvestimento

        await exibirSomasGerais.save()
        
        res.status(200).json([exibirSomasGerais])

    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    lerSomasGerais
}