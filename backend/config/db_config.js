const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {dbName : "PokemonData"})
        console.log(`Database Connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`DB Connection Failed ${error.message}`)
    }
}

module.exports = connectDB