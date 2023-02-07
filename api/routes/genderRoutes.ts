import  express  from "express"
import  {getAllGenders} from './../controllers/Gender/getAllGenders'
const router = express.Router()


router.get('/', getAllGenders)



module.exports = router