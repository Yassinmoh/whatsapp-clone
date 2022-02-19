const Pusher = require('pusher')
let pusher = new Pusher({
    appId: "1349766",
    key: "f42a10312aabfbace532",
    secret: "358fb8965ca9b787dc5c",
    cluster: "eu",
    useTLS: true
});





const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yassin:yasso15979@cluster0.1lqtg.mongodb.net/whatsapp?retryWrites=true&w=majority')
    .then(() => {
        console.log("Successfuly Connect To Database")
    })


const db = mongoose.connection
db.once('open', () => {
    console.log("connection is done")

    const msgCollection = db.collection("messagecontents")
    const changeStream = msgCollection.watch()

    changeStream.on("change", (change) => {
        console.log("change", change)
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            }
            )
        } else {
            console.log('Erorr Triggering Pusher')
        }
    })
}) 