const express = require('express')
const app = express()

const swaggerJSON = require('./openapi.json')
const swaggerUI = require('swagger-ui-express')

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerJSON))

app.listen('3000', () => {
  console.log('App is running')
})