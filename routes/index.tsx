import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import {Usuario} from "../types.ts"
import PerfilTodosUsuarios from "../components/PerfilTodosUsuarios.tsx"



export const handler: Handlers={
  GET: async(_req:Request, ctx: FreshContext<unknown,Usuario[]>)=>{
    const response= await axios.get<Usuario[]>(`https://lovers.deno.dev/`);

    const data=response.data;
    return ctx.render(data);
  }
}

export default function Home(props:PageProps<Usuario[]>){
  return(
    <PerfilTodosUsuarios usuarios={props.data}/>
  )
}