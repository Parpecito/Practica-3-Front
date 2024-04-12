import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import Filter from "../islands/Filter.tsx"
import { UsuarioResponse } from "../types.ts";
import { Usuario } from "../types.ts";
import MostrarDatosUsuarios from "../components/MostrarDatosUsuarios.tsx";
import MostrarDatosFiltrados from "../components/MostrarDatosFiltrados.tsx";

export const handler: Handlers={
    GET: async(req:Request,ctx: FreshContext<unknown,Usuario[]>)=>{
        const url=new URL(req.url);

        const name=url.searchParams.get("name") || "";
        const age=parseInt(url.searchParams.get("age") || "0");
        const sex=url.searchParams.get("sex") || "";
        const hobbies=url.searchParams.get("hobbies") || "";
        

        const response=await axios.get<Usuario[]>(`https://lovers.deno.dev/`);

        const usuarios:Usuario[]=response.data;

        const UsuariosFiltrados=usuarios.filter((usuario)=>{
            return(
                (name === "" || usuario.name.toLowerCase().includes(name.toLowerCase())) &&
                    (age === 0 || usuario.age === age) &&
                    (sex === "" || usuario.sex.toLowerCase() === sex) &&
                    (hobbies === "" || usuario.hobbies.includes(hobbies.toLowerCase()))
            )
        })
        console.log(UsuariosFiltrados)
        return ctx.render({usuarios:UsuariosFiltrados});

        


    }
}

export default function Page(props:PageProps<Usuario[]>){
    return(
        <MostrarDatosFiltrados usuarios={props.data}></MostrarDatosFiltrados>
    )
}
