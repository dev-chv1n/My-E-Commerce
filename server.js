// step 1 import ...
const express = require('express')
const app = express()
const morgan = require('morgan')
const { readdirSync } = require('fs')
const cors = require('cors')

// const authRouter = require('./routes/auth')
// const categoryRouter = require('./routes/category')



//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
// app.use('/api',authRouter)
// app.use('/api',categoryRouter)
readdirSync('./routes')
    .map((item)=> app.use('/api',require('./routes/'+item)))

//step3 router
// app.post('/api', (req, res)=>{
//     //code
//     const{ username,password } = req.body
//     console.log(username,password)
//     res.send('Jukkru')
// })

// step 2 start server
app.listen(5001, ()=>console.log('Server is Running on port 5001'))

