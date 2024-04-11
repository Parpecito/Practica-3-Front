import { FreshContext, Handlers } from "$fresh/server.ts";
import axios from "npm:axios";
import SignUp from "../islands/SignUp.tsx";

export const handler: Handlers={
    POST: async(req:Request,ctx:FreshContext)=>{
        try {
            const formulario= await req.formData();
            //console.log(formulario)
            
            const data={
                //user: formulario.get("user"),
                name: formulario.get("name"),
                password: formulario.get("password"),
                age: parseInt(formulario.get("age")),
                sex: formulario.get("sex"),
                description: formulario.get("description"),
                hobbies: formulario.get("hobbies").split(",").map((h:string)=>h.trim()),
                photo: formulario.get("photo"),
                comments: []
    
            }
            if(!data.name || !data.password || !data.age || !data.sex || !data.description || !data.hobbies || !data.photo ){
                return new Response("Faltan datos",{
                    status:400
                })
            }
            //console.log(data)

           await axios.post("https://lovers.deno.dev/",data)
            .catch((error) => {
                console.error('Hay un error', error);
            });    
            
            //console.log(response)
            const name= formulario.get("name");
            
            return new Response("", { status: 303, headers: { Location: `paginaUnica/${name}` } }); 
        } catch (error) {
            return new Response("Error al añadir el usuario",{status:500})
        }     
                
    }
}
const Page=()=>{
    return(
       <SignUp></SignUp>
    )
}
export default Page;