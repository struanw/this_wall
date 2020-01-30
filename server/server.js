
const express = require('express')

const server = express()

server.use(express.json())


erver.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

module.exports = server


