const morgan = require('morgan')
const helmet = require('helmet')
const express = require('express')
const app = express()
const logger = require('./middlewares/logger')
const authentication = require('./middlewares/authentication')

const port = process.env.PORT || 3000


app.use(express.json())
app.use(helmet())
app.use(morgan('tiny'))
app.use(logger)
app.use(authentication)
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/courses', (req, res) => res.json({}))


app.get('/api/courses/:id', (req, res) => {
    res.send(req.params)
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))