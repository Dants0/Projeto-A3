const moment = require('moment');
const connection = require('../controllers/Infrastructure/connection')

class CarRentalPerson{
    add(aluguel, res){
        
        const entregue = moment().format('YYYY-MM-DD HH:mm:ss')
        const alugado = moment(aluguel.alugado, 'YYYY-MM-DD').format('YYYY-MM-DD HH:mm:ss')

        const dataEhValida = moment(alugado).isSameOrAfter(entregue)
        const nomeEhValido = aluguel.nome.length >= 5


        const validacoes = [
            {
                nome:'alugado',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome:'nome',
                valido: nomeEhValido,
                mensagem:'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo=>!campo.valido)
        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros);
        }else{
            const aluguelDatado = {...aluguel, entregue, alugado}
            
            const sql = 'INSERT INTO Aluguel SET ?'
        
            connection.query(sql, aluguelDatado, (erro, results)=>{
                if(erro){
                    res.status(400).json(erro)
                }else{
                    res.status(201).json(results)
                }
            })
        
        }


    }
}

module.exports = new CarRentalPerson