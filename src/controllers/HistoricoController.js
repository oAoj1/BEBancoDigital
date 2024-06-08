const gastos = require('../model/GastoModel.js')
const depositos = require('../model/DepositoModel.js')

async function lerHistoricoGastos(req,res){
    try{
        const lendoGastos = await gastos.find()
        const dataAtual = new Date().getTime()

        const diferencaTempoGastos = lendoGastos.map(gasto => {
            const dataGasto = new Date(gasto.data).getTime()
            const diferencaMilissegundos = dataAtual - dataGasto

            const diferencaDias = Math.round(diferencaMilissegundos / (1000 * 60 * 60 * 24))
            const diferencaSemanas = Math.round(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 7))
            const diferencaMeses = Math.round(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 30))
            const diferencaAnos = Math.round(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 365))

            return {
                dias: diferencaDias,
                semanas: diferencaSemanas,
                meses: diferencaMeses,
                anos: diferencaAnos,
                objeto: gasto
            }
        })

        res.status(200).json(diferencaTempoGastos)

    }catch(error){
        console.log(error)
    }
}

async function lerHistoricoDepositos(req,res){
    try{
        const lendoDepositos = await depositos.find()
        const dataAtual = new Date().getTime()

        const diferencaTempoDepositos = lendoDepositos.map(gasto => {
            const dataGasto = new Date(gasto.data).getTime()
            const diferencaMilissegundos = dataAtual - dataGasto

            const diferencaDias = Math.round(diferencaMilissegundos / (1000 * 60 * 60 * 24))
            const diferencaSemanas = Math.round(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 7))
            const diferencaMeses = Math.round(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 30))
            const diferencaAnos = Math.round(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 365))

            return {
                dias: diferencaDias,
                semanas: diferencaSemanas,
                meses: diferencaMeses,
                anos: diferencaAnos,
                objeto: gasto
            }
        })

        res.status(200).json(diferencaTempoDepositos)

    }catch(error){
        console.log(error)
    }
}

module.exports = {
    lerHistoricoGastos,
    lerHistoricoDepositos
}
