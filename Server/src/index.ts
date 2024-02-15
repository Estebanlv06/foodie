// const express = require('express')
import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (_req, res) => {
    console.log('On Get')
    res.send('Get server')
})

app.listen(3000, () => {
    console.log(`Server running on port->: ${3000}`)
})
