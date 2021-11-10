const express = require('express')

const app = express()
const port = process.env.PORT || 3000


// Custom endpoints 

const healthRoute = require('./routes/health')


app.get('/',(req,res) => {
    console.log("Root endpoint has been hit")
    res.send("Its Alive")
})



app.use('/health',healthRoute)

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})