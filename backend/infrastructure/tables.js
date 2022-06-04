const moment = require('moment')
const { faker } = require('@faker-js/faker')

class Tables {
  seeds = Array.from({ length: 10 }, (_, i) => {
    const defaultImage = 'carro1.png'
    const dataAluguel = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    const dataEntrega = moment(dataAluguel)
      .add(10, 'days')
      .format('YYYY-MM-DD HH:mm:ss')
    return [
      faker.name.firstName(), // nome
      faker.name.lastName(), // sobrenome
      faker.random.numeric(11), // cpf
      faker.random.numeric(9), // rg
      dataAluguel, // alugado
      dataEntrega, // entregue
      'entregue ', // status
      faker.lorem.lines(), // observacoes
      defaultImage,
    ]
  })

  init(connection) {
    this.connection = connection

    this.createRental()
    this.truncateTable()
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
            imagem varchar(50) NOT NULL, 
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

  truncateTable() {
    const sql = `TRUNCATE TABLE Aluguel`

    this.connection.query(sql, (error) => {
      if (error) {
        console.error(error)
        throw error
      } else {
        console.log('Dados da Tabela limpos com sucesso')
      }
    })
  }

  populateRental() {
    const values = this.seeds

    const sql = `INSERT INTO Aluguel (nome, sobrenome, cpf, rg, alugado, entregue, status, observacoes, imagem) VALUES ?`

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
