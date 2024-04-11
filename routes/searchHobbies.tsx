import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import {Usuario} from "../types.ts"
import MostrarHobbies from "../components/MostrarHobbies.tsx"

export const handler: Handlers={
    GET: async(_req:Request,ctx:FreshContext<unknown,Usuario>)=>{
        try {
            const response= await axios.get<Usuario>(`https://lovers.deno.dev/hobbies`)
            if(!response){
                return new Response("Error al buscar en la URL",{status:500})
            }
            const data=response.data;
            
            return ctx.render(data)
        } catch (error) {
            throw new Error("No se ha encontrado ningun Hobbie")
        }
        
    }
}
export default function Page(props:PageProps){ 
    return(
        <MostrarHobbies hobbies={props.data}></MostrarHobbies>
    )
}