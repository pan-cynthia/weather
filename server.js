const PORT = 8000

import express from 'express'
import cors from 'cors'
import axios from 'axios'
import 'dotenv/config'

const app = express()

app.get('/', (req, res) => {
  res.json("Hello World!")
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))
