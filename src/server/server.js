const express = require("express")
const path = require("path")
const dotenv = require("dotenv").config()

const pool = require("./db")

const PORT = process.env.PORT || 3040

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, "..", "public/")))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views/index.html"))
})


app.listen(PORT, () => {
  console.log(`Server Running! http://localhost:${PORT}`)
})