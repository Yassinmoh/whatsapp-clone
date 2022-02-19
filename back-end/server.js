const express = require('express')
const app = express()
const port = process.env.PORT || 9000
const messageRouter = require('./routes/message')
const Pusher = require('pusher')
require('./db')
const cors = require('cors')

app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use('/message', messageRouter)



// app.use((req, res, next) =>{
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Headers", "*")
//     next()
// })

let pusher = new Pusher({
    appId: "1349766",
    key: "f42a10312aabfbace532",
    secret: "358fb8965ca9b787dc5c",
    cluster: "eu",
    useTLS: true
});




app.listen(port, () => {
    console.log(`listening on port ${port}`)
})