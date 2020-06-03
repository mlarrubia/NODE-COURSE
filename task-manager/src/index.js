const express = require('express')
// Calling require insures that the file runs and mongoose connects to the DB
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET request are disabled')
//     } else {
//         next()
//     }
// })

app.use((req, res, next) => {
    res.status(503).send('Server is under maintanince')
})


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server is up on port " + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '5 seconds' })
    console.log(token)
    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()