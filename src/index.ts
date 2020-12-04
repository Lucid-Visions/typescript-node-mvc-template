import express from 'express'
import http from 'http'

import ApplyMiddleware from './middleware'

const app = ApplyMiddleware(express())
const server = http.createServer(app)

const port = parseInt(process.env.PORT) || 8080
server.listen(port)
console.log(`API listening on port ${port}`)

export default app