const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user.routes')
const path = require('path');

require('dotenv').config();

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))

app.use((req, res) => {
    const title = 'Error Page';
    res
      .status(404)
      .render(createPath('error'), { title });
  });