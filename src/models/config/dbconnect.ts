import { init, MongoClient } from 'MongoClient'
// @ts-ignore
// Initialize the plugin
await init()
// Create client
const client = new MongoClient()
// Connect to mongodb
client.connectWithUri('mongodb://localhost:27017')

// Specifying the database name
const dbname : string = "Friend_list_deno"
const db = client.database(dbname)

// Declare the collectios here. Hete we are using only one collection (friends)
const friend = db.collection("friends")

export {db, friend}