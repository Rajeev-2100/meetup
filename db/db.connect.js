const mongoose = require('mongoose')
require('dotenv').config()

const mongoUri = process.env.MONGO_URL

const initializeDatabase = async () => {
    await mongoose.connect(mongoUri).then(() => {
        console.log('Connect to Database')
    }).catch(error => (
        console.log('Failed to connect database')
    ))
}

module.exports = { initializeDatabase }