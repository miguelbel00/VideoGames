import  express  from "express"
const router = express.Router()
const videoGamesRoutes = require ('./videoGamesRoutes')
const genderRoutes = require ('./genderRoutes')


router.use('/videogames', videoGamesRoutes)
router.use('/gender', genderRoutes)


module.exports = router