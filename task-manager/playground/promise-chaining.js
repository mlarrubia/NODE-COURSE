require('../src/db/mongoose')
const User = require('../src/models/user')


// User.findByIdAndUpdate('5ec9f30b18505e287c3e2ea6', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findById(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5ec9f30b18505e287c3e2ea6', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
