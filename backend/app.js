const express = require('express')
const consign = require('consign')
const cors = require('cors')

module.exports = () => {
  const app = express()

  app.use(
    cors({
      url: 'http://localhost:3001/alugar/carros',
    })
  )

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(express.static('public'))

  consign().include('controllers').into(app)

  return app
}
