const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')
const createError = require('http-errors')
const { expressjwt: jwt } = require('express-jwt')

// get config vars
require('dotenv').config()
const routeHandle = require('./routes/index.js')

const app = express()

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '../public')))

// swagger
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')
const options = require('../config/swagger.config')
const swaggerSpec = swaggerJSDoc(options)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }))

app.use(
  '/',
  jwt({
    secret: process.env.TOKEN_SECRET,
    algorithms: ['HS256'],
    credentialsRequired: true,
  }).unless({ path: ['/api-docs/*'] }),
  routeHandle
)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // send the error response
  res.status(err.status || 500)
  res.send(err.message)
})

module.exports = app
