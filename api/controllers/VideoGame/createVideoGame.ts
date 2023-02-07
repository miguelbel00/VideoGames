const {VideoGame} = require("../../src/db")

export const createVideoGame = async (req: any, res: any) => {

        try {     
                 const {name,description,released,rating,platforms,image,created} = req.body

                if ( !name ||!description || !released || !rating || !platforms || !image || created==undefined) {

                    res.status(400).json({error: "Missing parameters of a videoGames"})
                } 
                const foundProduct = await VideoGame.findAll({where:{name:name}})
                if (foundProduct.length) {
                    return res.status(400).json({error:"Product found with the same name, please change it"}) 
                    
                }
                const newVideoGame = await VideoGame.create({
                    name,description,released,rating,platforms,image,created
                })


                return res.json(newVideoGame) 
        } catch (error:any) {
           console.log(error.message)
        }
    }
    


