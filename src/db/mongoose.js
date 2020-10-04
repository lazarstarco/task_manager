const mongoose = require('mongoose')
const User = require('../models/user')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// const me = new User({
//     name: "Sarah",
//     email: "email@mail.com",
//     password: "asfa21e12ds",
//     age: 23
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error: ', error)
// })

// const myTask = new Task({
//     description: 'My first mongoose task',
//     completed: false
// })

// myTask.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })