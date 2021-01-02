const linus = require('./linus.json')
const express = require('express')
const PORT = process.env.PORT || 5000

let rI = (n) => Math.floor(Math.random() * n);

express()
  .get('/linus', (req, res) => {
    return res.status(200).json(linus[rI(linus.length - 1)])
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))