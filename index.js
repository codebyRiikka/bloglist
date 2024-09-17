
require('dotenv').config()
const http = require('http')
const app = require('./app')  
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.error('Error connecting to MongoDB:', error.message)
  })

const server = http.createServer(app)

const PORT = config.PORT || 3003
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
