import { FreshContext, Handlers } from "$fresh/server.ts";
import DeleteUser from "../islands/DeleteUser.tsx";
import { Usuario } from "../types.ts";


export const handler: Handlers = {
  POST: async (req: Request, _ctx: FreshContext) => {
    const formulario = await req.formData();
    const name = formulario.get("name");
    const password = formulario.get("password");
    if (!name || !password) {
      return new Response("Faltan datos", { status: 400 });
    }

    const response = await fetch(`https://lovers.deno.dev/${name}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, password: password }),
    });
    if (!response) {
      return new Response("Error al eliminar el usuario", { status: 500 });
    }
    
    
    return new Response("", { status: 303, headers: { Location: `/` } });
  },
};

const Page=()=>{
    return(
        <DeleteUser></DeleteUser>
    )
}
export default Page;