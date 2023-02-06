import express from 'express'
const indexRoutes = require('./../routes/indexRouter.ts')
const { conn } = require('./db.ts');
const app = express()

app.use(express.json())


app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});  

app.use('/',indexRoutes)
app.use(express.static('public')) 
app.use('/', (_req,res) => {
  return res.status(404).send({error: "Please, Check your route"})
}); 





// Syncing all the models at once.
//{ force: true }
conn.sync({ force: true }).then(() => {
    
    app.listen(process.env.PORT || 3001, ()=> {
        console.log(`app running on port ${process.env.PORT || 3001}`)
    })
});




