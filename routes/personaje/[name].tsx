import { FreshContext, Handlers,PageProps } from "$fresh/server.ts";
import { Usuario} from "../../types.ts"
import axios from "npm:axios";
import MostrarDatosComentarios from "../../components/MostrarDatosComentarios.tsx";

export const handler:Handlers={
    GET: async(req:Request,ctx: FreshContext<unknown,Usuario>)=>{
        const url= new URL(req.url);
        const path=url.pathname;
        const name=path.split('/').pop();
        const response=await axios.get<Usuario>(`https://lovers.deno.dev/${name}`);
        const data= response.data
        return ctx.render(data)
    }
}

export default function Page(props:PageProps<Usuario>){
    const {name,age,sex,description,hobbies,photo,comments}=props.data;
    return(
      <MostrarDatosComentarios name={name} age={age} sex={sex} description={description} hobbies={hobbies} photo={photo} comments={comments} ></MostrarDatosComentarios>
    )
  
  }
  
