import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const Login: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div>
      <form action="/loginRuta" method="POST" class="login">
        <h1>Login</h1>
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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
export default Login;
