import { Handlers } from "$fresh/server.ts";
import DeleteComments from "../islands/DeleteComments.tsx";

export const handler: Handlers={
    POST: async(req: Request)=>{
        const formulario= await req.formData();
        const name=formulario.get("name");
        const password=formulario.get("password");
        const user=formulario.get("user");

        if(!name || !password || !user){
            return new Response("Faltan datos", {status:400});
        }

        const response= await fetch(`https://lovers.deno.dev/${name}/comment`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({user:user, password:password}),
        });
        if(!response){
            return new Response("Error al eliminar el comentario", {status:500});
        }
        return new Response("", {status:303, headers:{Location:`/paginaUnica/${name}`}});
    }
}

const Page=()=>{
    return(
        <DeleteComments></DeleteComments>
    )
}
export default Page;