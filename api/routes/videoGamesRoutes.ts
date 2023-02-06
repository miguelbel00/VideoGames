import  express  from "express"
const router = express.Router()


router.get('/', ()=>{
    return "hola"
})



module.exports = router