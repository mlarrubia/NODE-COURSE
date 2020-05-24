require('../src/db/mongoose')
const User = require('../src/models/user')


User.findByIdAndUpdate('5eca830faba2fd24fc4344d7', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
