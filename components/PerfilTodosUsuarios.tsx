import { FunctionComponent } from "preact";
import { UsuarioResponse } from "../types.ts";

const PerfilTodosUsuarios: FunctionComponent<UsuarioResponse> = (props) => {
  const { usuarios } = props;

  return (
    <div class="principal">
      <ul>
        <div class="flex-row flex-around">
          {usuarios.map((user) => {
            return (
              <div class="cuadro">
                <li key={user._id}>
                  <a class="link" href={`paginaUnica/${user.name}`}>
                    <h1>{user.name}</h1>
                    <span>Edad: {user.age}</span>
                    <br></br>
                    <image src={user.photo} alt={user.photo}></image>
                  </a>
                </li>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default PerfilTodosUsuarios;
