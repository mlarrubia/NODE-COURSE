const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age must be a positive Number")
            }
        }
    }
})

const me = new User({
    name: "   Mike    ",
    email: "miDSDSFDSke@gmail.com"
})

me.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const task1 = new Task({
//     description: "Clean house",
//     completed: false
// })

// task1.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })