const connection = require('../controllers/Infrastructure/connection')

class CarRentalPerson{
    add(aluguel){
        const sql = 'INSERT INTO Aluguel SET ?'

        connection.query(sql, aluguel, (erro, results)=>{
            if(erro){
                console.log(erro)
            }else{
                console.log(results)
            }
        })
    }
}

module.exports = new CarRentalPerson