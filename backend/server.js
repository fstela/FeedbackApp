const express = require('express')
const cors = require('cors')

const app= express()

var corOptions = {
    origin: "https://localhost:8081"
}


app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const router = require('./routes/courseRouter.js')
app.use('/api/courses', router)


//testing
app.get('/', (req,res)=>{
    res.json({message : 'hello from api'})
})

//port
const PORT = 8080;

//server
app.listen(PORT, ()=>{
    console.log("server is running");
})