const {VideoGame} = require("../../src/db")

export const deleteVideoGame = async (req: any, res: any) => {

        try {     
            const { gameId } = req.params;

                if (!gameId ) {

                    return res.status(400).json({error: "Missing parameters"})
                } 
                await VideoGame.destroy({where:{id:gameId}})

                return res.json(`game Deleted `) 
        } catch (error:any) {
           console.log(error.message)
        }
    }