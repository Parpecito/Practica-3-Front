import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";


type FiltrarPerfil={
    name:string,
    edad:number,
    sex:string,
    hobbies:string
}
const Filter: FunctionComponent=()=>{
    const [name,setName]=useState<string>("");
    const [edad,setEdad]=useState<number>(0);
    const [sex,setSex]=useState<string>("");
    const [hobbies,setHobbies]=useState<string>("");
    const [perfil,setPerfil]=useState<FiltrarPerfil[]>([]);

    

   
   
    return(
        <div>
            <form method="GET" action="/FilterRoute" class="filter">
            <h1>Filter</h1>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                >
                </input>
                <input
                    type="number"
                    placeholder="Edad"
                    name="edad"
                    value={edad}
                    onChange={(e) => setEdad(parseInt(e.currentTarget.value))}
                >
                </input>
                <input
                    type="text"
                    placeholder="Sex"
                    name="sex"
                    value={sex}
                    onChange={(e) => setSex(e.currentTarget.value)}
                >
                </input>
                <input
                    type="text"
                    placeholder="Hobbies"
                    name="hobbies"
                    value={hobbies}
                    onChange={(e) => setHobbies(e.currentTarget.value)}

                >
                </input>
                <button type="submit">Filter</button>
            </form>
        </div>
    )

}
export default Filter;