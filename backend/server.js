const express = require('express')
const connectDB = require('./config/db_config')
const app = express()
const dotenv = require('dotenv').config()
const cors = require("cors");
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 8000


// DATABASE CONNECTON//
connectDB()

app.use(cors({origin : "http://localhost:5173", methods: ["get", "post"], credentials: true,}))

// Body Parser//
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// Pokemon Routes//
app.use('/api/pokemon', require('./routes/pokemonRoutes'))

app.use(errorHandler)

app.get('/', (req, res) => {
    res.json({msg : "Welcome to Pokemon World!!"})
})

app.listen(PORT, () => {
    console.log(`Server is running at : ${PORT}`)
})

module.exports = app;



