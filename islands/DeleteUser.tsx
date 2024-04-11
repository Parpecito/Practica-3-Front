import { FunctionComponent, JSX } from "preact";
import { useState } from "preact/hooks";

const DeleteUser: FunctionComponent = () => {
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  

  //const UserDelete

  return (
    <div>
      
      <form action="/deleteUsuarioRuta" method="POST" class="delete">
      <h1>Delete User</h1>
        <input
          type="text"
          placeholder="User"
          name="name"
          value={name}
          onInput={(e) => setName(e.currentTarget.value)}
        >
        </input>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onInput={(e) => setPassword(e.currentTarget.value)}
        >
        </input>

        <button type="submit">Delete</button>
      </form>
    </div>
  );
};
export default DeleteUser;
/*
  const deleteUser=async(e: JSX.TargetedEvent<HTMLFormElement,Event>)=>{
    e.preventDefault();
    try {
    const response=await fetch(`https://lovers.deno.dev/${name}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({password})
    })
    if(!response){
        return new Response("Error al eliminar el personaje basandonos en la URL",{status:500})
    }
      console.log("Deleted User")
    } catch (error) {
      throw new Error("Error")
    }
  }

  return (
    <div>
      <h1>Delete User</h1>
      <form onSubmit={deleteUser} action="/add">
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onInput={(e) => {
            setPassword(e.currentTarget.value);
          }}
        >
        </input>
        <input
          type="text"
          placeholder="User"
          name="user"
          value={name}
          onInput={(e) => {
            setName(e.currentTarget.value);
          }}
        >
        </input>
      </form>
    </div>
  );
};
export default deleteUser;
*/
