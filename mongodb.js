// CRUD

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task_manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Alucard',
    //     age: 100
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Insertion error')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ name: 'Alucard' }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch one')
    //     }

    //     console.log(user)
    // })


    // //find returns cursor, requires additional functions
    // db.collection('tasks').find({ completed: false }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5f6a480d51449a0ebc31cd5d")
    // }, {
    //     $set: {
    //         name: 'Sara'
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    
})