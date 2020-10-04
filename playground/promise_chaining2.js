require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f6f5172aeb776abbab6afb0').then((task) => {
//     console.log(task)

//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    if (!task) throw new Error('Error in deletion')
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5f6f5178aeb776abbab6afb5').then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})