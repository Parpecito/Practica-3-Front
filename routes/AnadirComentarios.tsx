import { FreshContext, Handlers } from "$fresh/server.ts";
import axios from "npm:axios";
import PostComments from "../islands/PostComments.tsx";


export const handler: Handlers = {
  POST: async (req: Request, _ctx: FreshContext) => {
    try {
      const formulario = await req.formData();
      const name = formulario.get("name");
      const user = formulario.get("user");
      const password = formulario.get("password");
      const message = formulario.get("message");

      //console.log(name)
      //console.log(user)
      
      if (!name || !user || !password || !message) {
        return new Response("Faltan datos", { status: 400 });
      }
      
        const response = await axios.post(`https://lovers.deno.dev/${name}/comment`,{
          user:user,
          password:password,
          message:message
        },
        { headers: { "Content-Type": "application/json" } },
      );
      if (!response) {
        return new Response("Error al añadir el comentario a traves de la url", {
          status: 500,
        });
      }
      
      return new Response("", {
        status: 303,
        headers: { Location: `personaje/${name}` },
      });
    } catch (error) {
      return new Response("Error al añadir el comentario", { status: 500 });
    }
  },
};
const Page = () => {
  return (
    <div>
      <PostComments></PostComments>
    </div>
  );
};
export default Page;
