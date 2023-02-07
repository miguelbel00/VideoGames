import axios from "axios"
import type {VideoGame as videogame}  from "../../types"
const {VideoGame} = require("../../src/db")

export const getAllVideogames = async (_req: any, res: any) => {

        try {     
                const videoGames:Array<videogame> = []
                const page_size:string = '40'
                const numberOfPages:number = 5

                for (let i = 1; i <= numberOfPages; i++) {
                    const response = await axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${i}&page_size=${page_size}`)
                    response.data.results.forEach((game: any) => videoGames.push({
                        id: game.id,
                        name: game.name,
                        description: "",
                        released: game.released,
                        rating: game.rating,
                        platforms: game.platforms.map((element:any) => (element.platform.name)),
                        image: game.background_image,
                    }) )
                }
                const allVideogames = await VideoGame.findAll()

                return res.json(videoGames.concat(allVideogames)) 
        } catch (error) {
            console.log(error)
        }
    }
    


