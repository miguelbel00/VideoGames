const {VideoGame} = require("../../src/db")

export const getOneVideoGame = async (req: any, res: any) => {

        try {     
            const { gameId } = req.params;

                if (!gameId ) {

                    return res.status(400).json({error: "Missing parameters"})
                } 
                const videoGame = await VideoGame.findOne({where: {id:req.params.gameId}})
                if (!videoGame) {
                    return res.status(404).json({error: "video game not found"})
                } 

                return res.json(videoGame) 
        } catch (error:any) {
           console.log(error.message)
        }
    }