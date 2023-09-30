const saldoDivididos = require('../model/SaldoDivididoModel.js')
const metodos = require('../model/MetodoModel.js')
const saldos = require('../model/SaldoModel.js')
const somasGerais = require('../model/SomasGeraisModel.js')

async function lerSaldoDividido(req,res){
    try{
        /* Gastos */
        /* let buscarGastosFundamental = await gastos.find({classificacao:"fundamental"})
        let ultimoGastoFundamental = buscarGastosFundamental[buscarGastosFundamental.length - 1]
        let valorUltimoGastoFundamental = ultimoGastoFundamental.valor
        
        let buscarGastosPessoal = await gastos.find({classificacao:"pessoal"})
        let ultimoGastoPessoal = buscarGastosPessoal[buscarGastosPessoal.length - 1]
        let valorUltimoGastoPessoal = ultimoGastoPessoal.valor
        
        let buscarGastosReservaInvestmento = await gastos.find({classificacao:"reservaInvestimento"})
        let ultimoGastoReservaInvestmento = buscarGastosReservaInvestmento[buscarGastosReservaInvestmento.length - 1]
        let valorUltimoGastoReservaInvestmento = ultimoGastoReservaInvestmento.valor */

        /* Saldo dividido */
        const buscarSaldoDividido = await saldoDivididos.findOne()

        /* Somas Gerais */
        const buscarSomasGerais = await somasGerais.findOne()

        /* Saldo */
        const buscarSaldo = await saldos.findOne()
        const saldoAtual = buscarSaldo.saldo

        /* Metodos */
        const buscarMetodos = await metodos.findOne()
        const metodoFundamental = buscarMetodos.gastoFundamental
        const metodoPessoal = buscarMetodos.gastoPessoal
        const metodoReservaInvestimento = buscarMetodos.reservaInvestimento

        /* Calculando pocentagem */
        const fundamentalDividido = ((saldoAtual * metodoFundamental) / 100)
        const pessoalDividido = ((saldoAtual * metodoPessoal) / 100)
        const reservaInvestimentoDividido = ((saldoAtual * metodoReservaInvestimento) / 100)

        /* Atualizando saldo dividido */
        buscarSaldoDividido.saldoFundamental = fundamentalDividido
        buscarSaldoDividido.saldoPessoal = pessoalDividido
        buscarSaldoDividido.saldoReservaInvestimento = reservaInvestimentoDividido

        /* Salvando saldo dividido */
        await buscarSaldoDividido.save()

        res.status(200).json([buscarSaldoDividido])

    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    lerSaldoDividido
}