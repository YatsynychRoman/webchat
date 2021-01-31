const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger.json')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({origin: '*'}))

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const routes = require('./router')

app.use(routes)

const port = process.env.PORT
const dbUri = process.env.MONGODB_URI

async function start() {
    try {
        await mongoose.connect(dbUri)
        await app.listen(port, () => {
            console.log(port)
        })
    } catch (e) {
        console.log(e)
    }
}

start()

