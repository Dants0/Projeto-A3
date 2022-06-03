const moment = require('moment');

class Tables {
  seeds = Array.from({ length: 10 }, (_, i) => {
    const oldDateObj = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const newDateObj = moment(oldDateObj).add(60, 'hours').toDate();
    const randomValue = (Math.random() * 100000).toFixed()
    return [
      'nome ' + randomValue,
      'sobrenome ' + randomValue,
      randomValue,
      randomValue,
      oldDateObj,
      newDateObj,
      'alugado ',
      'observacao ' + randomValue,
    ]
  })

  init(connection) {
    this.connection = connection

    this.createRental()
    this.populateRental()
  }

  createRental() {
    const sql = `CREATE TABLE IF NOT EXISTS Aluguel 
        (
            id int NOT NULL AUTO_INCREMENT, 
            nome varchar(50) NOT NULL, 
            sobrenome varchar(20), 
            cpf varchar(20) NOT NULL, 
            rg varchar(20) NOT NULL, 
            alugado datetime not null, 
            entregue datetime not null, 
            status varchar(20) NOT NULL, 
            observacoes text, 
            PRIMARY KEY(id)
        )`

    this.connection.query(sql, (error) => {
      if (error) {
        console.error(error)
        throw error
      } else {
        console.log('Tabela Aluguel Criada Com Sucesso')
      }
    })
  }

  populateRental() {
    const values = this.seeds

    const sql = `INSERT INTO Aluguel (nome, sobrenome, cpf, rg, alugado, entregue, status, observacoes) VALUES ?`

    this.connection.query(sql, [values], (error) => {
      if (error) {
        console.error(error)
        throw error
      } else {
        console.log('Dados inseridos com sucesso')
      }
    })
  }
}

module.exports = new Tables()
