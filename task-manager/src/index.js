const express = require('express')
// Calling require insures that the file runs and mongoose connects to the DB
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server is up on port " + port)
})

const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPW = await bcrypt.hash(password, 8)

    const isMatch = await bcrypt.compare('Red12345!', hashedPW)
}

myFunction()