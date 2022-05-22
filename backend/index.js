const app = require('./app')
const connection = require('./infrastructure/connection')
const Tables = require('./infrastructure/tables')

connection.connect((erro) => {
  if (erro) {
    console.log(erro)
  } else {
    console.log('BD Conectado')

    Tables.init(connection)

    app().listen(3000, () => console.log('servidor rodando na porta 3000'))
  }
})
