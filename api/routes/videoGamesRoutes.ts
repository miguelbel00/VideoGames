import  express  from "express"
import { getAllVideogames } from "../controllers/VideoGame/getAllVideoGames"
import { createVideoGame } from "../controllers/VideoGame/createVideoGame"
const router = express.Router()


router.get('/', getAllVideogames)
router.post('/', createVideoGame)



module.exports = router