import  express  from "express"
import { getAllVideogames } from "../controllers/VideoGame/getAllVideoGames"
import { getOneVideoGame} from "../controllers/VideoGame/getOneVideoGame"
import { createVideoGame } from "../controllers/VideoGame/createVideoGame"
import { deleteVideoGame } from './../controllers/VideoGame/deleteVideoGame';
import { editVideoGame } from './../controllers/VideoGame/editVideoGame';
const router = express.Router()


router.get('/', getAllVideogames)
router.get('/:gameId', getOneVideoGame)
router.delete('/:gameId', deleteVideoGame)
router.post('/', createVideoGame)
router.put('/:gameId', editVideoGame)



module.exports = router