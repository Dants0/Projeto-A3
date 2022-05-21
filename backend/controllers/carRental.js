const CarRentalPerson = require('../models/carRentalPerson')

module.exports = app => {
    app.get('/alugar', (req, res) => res.send("Você está acessando alugar"))

    app.post('/alugar', (req, res) =>{
        const carRental = req.body

        CarRentalPerson.add(carRental, res)
        //res.send('Aluguel cadastrado')
    })
}