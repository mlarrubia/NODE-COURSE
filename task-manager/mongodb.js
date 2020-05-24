// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongo.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database!")
    }
    const db = client.db(databaseName)

    // collection
    // db.collection('tasks').insertMany([{
    //     description: "Have leads",
    //     completed: true
    // }, {
    //     description: "Get project details",
    //     completed: true
    // }, {
    //     description: "Finished Project",
    //     completed: false
    // }], (error, result) => {
    //     if (error) return console.log("Unable to insert task")

    //     console.log(result.ops);
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5ec9c0b19e718692088a6988") }, (error, description) => {
    //     if (error) return console.log("Unable to fetch")

    //     console.log(description);
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({ age: 27 }).count((error, users) => {
    //     console.log(users);
    // })

    // Update
    // db.collection('users').updateOne({
    //     _id: new ObjectID('5ec9a5c883077b2e78ddabfd')
    // }, {
    //     $inc: {
    //         age: 5
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // Delete
    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('tasks').deleteOne({
    //     description: "Have leads"
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})