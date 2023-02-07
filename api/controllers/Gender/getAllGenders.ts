import axios from "axios"


export const getAllGenders = async (_req: any, res: any) => {

        try {
             
                 const response = await axios.get(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`)
                
                return res.json(response.data) 
        } catch (error) {
            console.log(error)
        }
    }
    


