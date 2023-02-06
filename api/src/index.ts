import express from 'express'
const { conn } = require('./db.ts');
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping',(_req,res) => {
    console.log('some pinged here')
    res.send("pong")
})



// Syncing all the models at once.
//{ force: true }
conn.sync().then(() => {
    
    app.listen(process.env.PORT || 3001, ()=> {
        console.log(`Server running on port ${PORT}`)
    })
});




