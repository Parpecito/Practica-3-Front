import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { comment, Usuario } from "../types.ts";

const PostComments: FunctionComponent = () => {
  const [user, setUser] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div>
      
      <form action="/AnadirComentarios" method="POST" class="addComments">
      <h1>Añadir Comentario</h1>
        <input
          type="text"
          placeholder="Name"
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
        <input
          type="text"
          placeholder="user"
          name="user"
          value={user}
          onInput={(e) => setUser(e.currentTarget.value)}
        >
        </input>
        <input
          type="text"
          placeholder="Message"
          name="message"
          value={message}
          onInput={(e) => setMessage(e.currentTarget.value)}
        >
        </input>
        <button type="submit">Publish Comment</button>
      </form>
    </div>
  );
};
export default PostComments;
