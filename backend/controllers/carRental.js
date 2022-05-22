const CarRentalPerson = require('../models/carRentalPerson')

module.exports = (app) => {
  app.head('/alugar', (_, res) => res.send('Você está acessando alugar'))

  app.get('/aluguel/carros', async (_, res) => {
    try {
      const carrosAlugados = await CarRentalPerson.getAll()
      res.status(200).json({
        code: 200,
        message: 'Todos alugueis de carro retornados com sucesso',
        data: carrosAlugados,
      })
    } catch (error) {
      const { code = 500, message = 'Internal Error', reasons = [] } = error
      res.status(code).json({ code, message, reasons })
    }
  })

  app.get('/aluguel/carros/:id', async (req, res) => {
    try {
      const { id } = req.params
      const carroAlugado = await CarRentalPerson.getById(id)
      res.status(200).json({
        code: 200,
        message: `Aluguel com id:${id} retornado com sucesso`,
        data: carroAlugado,
      })
    } catch (error) {
      const { code = 500, message = 'Internal Error', reasons = [] } = error
      res.status(code).json({ code, message, reasons })
    }
  })

  app.post('/aluguel/carros', async (req, res) => {
    try {
      const carRental = req.body

      const carroAdicionado = CarRentalPerson.add(carRental)
      res.status(201).json({
        code: 201,
        message: 'Aluguel adicionado com sucesso',
        data: carroAdicionado,
      })
    } catch (error) {
      const { code = 500, message = 'Internal Error', reasons = [] } = error
      res.status(code).json({ code, message, reasons })
    }
  })

  app.delete('/aluguel/carros/:id', async (req, res) => {
    try {
      const { id } = req.params
      await CarRentalPerson.delete(id)
      res.status(204).json({
        code: 204,
        message: 'Aluguel deletado com sucesso',
        data: {},
      })
    } catch (error) {
      const { code = 500, message = 'Internal Error', reasons = [] } = error
      res.status(code).json({ code, message, reasons })
    }
  })
}
