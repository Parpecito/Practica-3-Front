import { FunctionComponent } from "preact";
import { Usuario } from "../types.ts";

type Hobbies={
    hobbies:string[]

}

const MostrarHobbies: FunctionComponent<Hobbies>=({hobbies})=>{
    return(
        <div class="hobbies">
            <h1>Los hobbies</h1>
            <ul>
                {hobbies.map((hobbie)=>{
                    return(
                        <div class="mapeoh">
                        <li key={hobbie}>
                            <span>{hobbie}</span>
                        </li>
                        </div>
                    )
                }
                )}
            </ul>
        </div>
    )
}
export default MostrarHobbies;