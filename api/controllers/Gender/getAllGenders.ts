import axios from "axios"
import type {Gender}  from "../../types"

export const getAllGenders = async (_req: any, res: any) => {

        const genders:Array<Gender> = []
        try {     
                const response = await axios.get(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`)
                response.data.results.forEach((gender: any) => genders.push({id:gender.id,name:gender.name}) )


                return res.json(genders) 
        } catch (error) {
            console.log(error)
        }
    }
    


