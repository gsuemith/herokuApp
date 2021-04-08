const dotenv = require('dotenv').config();

const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 9000
const path = require('path')

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "client/build")))

app.use("/api/", (_, res) => {
  res.json({ data: "API is accounted for" })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// console.log("it's alive")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)
// console.log(process.env.PORT)