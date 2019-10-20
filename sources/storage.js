const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ wordOfTheDay: { word: '', expiry: 0 } })
    .write()

module.exports = db;

