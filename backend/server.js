const express = require('express')

const app = express()

app.get('/', (req, res) => {
res.send('Hello, world!')
})

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:PORT`)
})