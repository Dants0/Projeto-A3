const express = require('express')
const consign = require('consign')
const cors = require('cors')

module.exports = () => {
    const app = express()

    app.use(cors({
        url: 'http://localhost:3000/alugar'
    }))

    app.use(express.urlencoded({extended: true}))
    app.use(express.json())

    consign()
        .include('controllers')
        .into(app)

    return app
}