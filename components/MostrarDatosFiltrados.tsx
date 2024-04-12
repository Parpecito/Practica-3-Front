import { FunctionComponent } from "preact";
import { UsuarioResponse } from "../types.ts";

const MostrarDatosFiltrados: FunctionComponent<UsuarioResponse> = (props) => {
    const { usuarios } = props;
  
    return (
      <div class="principal">
        <ul>
          <div class="flex-row flex-around">
            {usuarios.map((user) => {
              return (
                <div class="cuadro">
                  <li key={user._id}>
                      <h1>{user.name}</h1>
                      <span>Edad: {user.age}</span>
                      <br></br>
                      <span>Sexo: {user.sex}</span>
                        <br></br>
                        <span>Hobbies: {user.hobbies}</span>

                  </li>
                </div>
              );
            })}
          </div>
        </ul>
      </div>
    );
  };
  
  export default MostrarDatosFiltrados;
  