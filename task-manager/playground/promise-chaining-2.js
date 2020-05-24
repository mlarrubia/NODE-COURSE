require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5ec9f524887d187078554ecb').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

