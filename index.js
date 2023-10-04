require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const main = require('./routes/mainRouter')

const port = process.env.PORT || 8080
app.use(cors())
app.use(express.json())

app.use('/main', main)

app.get('/', (req, res) => {
    res.send('Working!')
})

app.listen(port, () => {
    console.log(`Server\`s working on port -> ${port}`)    
})
