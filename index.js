
const express = require('express')

const server = express()


server.use(express.json())

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`API RUNNING ON PORT ${PORT}`));