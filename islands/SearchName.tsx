import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const SearchName: FunctionComponent=()=>{
    const [name,setName]=useState<string>("")
    return(
        <div>
            <form action="/searchNombre" method="GET" class="searchName">
                <h1>Buscar por nombre</h1>
                <input type="text" name="name" placeholder="name" value={name} onInput={(e)=>setName(e.currentTarget.value)}></input>
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}
export default SearchName;