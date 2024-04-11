import { Handlers } from "$fresh/src/server/types.ts";
import { FreshContext } from "$fresh/server.ts";

import axios from "npm:axios";
import Login from "../islands/Login.tsx";


export const handler: Handlers = {
  POST: async (req: Request, _ctx: FreshContext) => {
    try {
      const formulario = await req.formData();
      const name = formulario.get("name");
      const password = formulario.get("password");
      if (!name || !password) {
        return new Response("Faltan datos", { status: 400 });
      }
      const response = await axios.post(`https://lovers.deno.dev/login`, {
        name: name,
        password: password,
      }, { headers: { "Content-Type": "application/json" } });
      if (!response) {
        return new Response("Error al hacer login con el response", {
          status: 500,
        });
      }
      

      return new Response("", {
        status: 303,
        headers: { Location: `login/${name}` },
        });
  
        
      ;
    } catch (error) {
      return new Response("Error al hacer login", { status: 500 });
    }
  },
};

const Page = () => {
  return(
    <Login></Login>
  )
};
export default Page;
