const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user.routes')
const diseaseRouter = require('./routes/disease.routes')

require('dotenv').config();

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', diseaseRouter)

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))