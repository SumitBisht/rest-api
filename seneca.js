'use strict'

var seneca = require('seneca'),
    process = require('./process.js')

seneca.use(process)
    .listen()
    .ready(function(){
      this.act({role:'process', cmd:'sum',numbers:[1,2,3,4,5]}, console.log)
    })
