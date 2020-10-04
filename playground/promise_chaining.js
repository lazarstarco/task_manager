require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5f6effb57148083e8c8d1b1b', { age: 26 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 26 })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return {user, count}
}

updateAgeAndCount('5f6effb57148083e8c8d1b1b', 24).then((result) => {
    console.log(result.user)
    console.log(result.count)
}).catch((error) => {
    console.log(error)
})