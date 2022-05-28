const moment = require('moment')
const connection = require('../infrastructure/connection')
const { APIError } = require('../utils/APIError')

class CarRentalPerson {
  async getAll() {
    const sql = 'SELECT * FROM Aluguel'

    const results = await connection.promise().query(sql)
    return results[0]
  }
  async getById(id) {
    const sql = 'SELECT * FROM `Aluguel` WHERE `id` = ?'

    const results = await connection.promise().query(sql, [id])
    return results[0]
  }
  async delete(id) {
    const sql = 'DELETE FROM `Aluguel` WHERE `id` = ?'

    const results = await connection.promise().query(sql, [id])
    return results[0]
  }

  async add(aluguel) {
    const entregue = moment().format('YYYY-MM-DD HH:mm:ss')
    const alugado = moment(aluguel.alugado, 'YYYY-MM-DD').format(
      'YYYY-MM-DD HH:mm:ss'
    )

    const dataEhValida = moment(alugado).isSameOrAfter(entregue)
    const nomeEhValido = aluguel.nome.length >= 5

    const validacoes = [
      {
        nome: 'alugado',
        valido: dataEhValida,
        mensagem: 'Data deve ser maior ou igual a data atual',
      },
      {
        nome: 'nome',
        valido: nomeEhValido,
        mensagem: 'Cliente deve ter pelo menos cinco caracteres',
      },
    ]

    const erros = validacoes.filter((campo) => !campo.valido)
    const existemErros = erros.length > 0

    if (existemErros) {
      throw APIError.WrongParams('Erro ao validar dados', erros)
    }
    const aluguelDatado = { ...aluguel, entregue, alugado }

    const sql = 'INSERT INTO Aluguel SET ?'

    const addedRental = await connection.promise().query(sql, aluguelDatado)[0]
    return addedRental
  }
}

module.exports = new CarRentalPerson()
