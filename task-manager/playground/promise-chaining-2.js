require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ec9f524887d187078554ecb').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5ec9ea8d33e6fa84f0b90c6c').then((result) => {
    console.log("Result", result)
}).catch((error) => {
    console.log(error)
})