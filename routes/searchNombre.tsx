import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import { Usuario } from "../types.ts";
import MostrarDatosUsuarios from "../components/MostrarDatosUsuarios.tsx";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown,Usuario>) => {
    try {
      

      const url=new URL(req.url);

      const name=url.searchParams.get("name");
      if(!name){
        return new Response("No se ha encontrado el nombre",{status:400})
      }
      
      const response=await axios.get<Usuario>(`https://lovers.deno.dev/${name}`);

      if(!response){
        return new Response("Error al buscar en la URL",{status:500})
      }
      const data=response.data;
      

      return ctx.render(data)
    } catch (error) {
      throw new Error("No se ha encontrado el Usuario")
    }
    
  },
};
export default function Page(props:PageProps<Usuario>){
  const {name,age,sex,description,hobbies,photo,comments}=props.data;
  return(
    
    <MostrarDatosUsuarios name={name} age={age} sex={sex} description={description} hobbies={hobbies} photo={photo} comments={comments}></MostrarDatosUsuarios>
  )

}
