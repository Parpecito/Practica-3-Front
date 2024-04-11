import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const DeleteComments: FunctionComponent=()=>{
    const [user,setUser]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const [name,setName]=useState<string>("")
    return(
        <div>
            <form action="/DeleteCommentsRuta" method="POST" class="deletecomments">
                <h1>Delete Comments</h1>
                <input type="text" name="name" placeholder="Name" value={name}onInput={(e)=>setName(e.currentTarget.value)}></input>
                <input type="text" name="user" placeholder="User" value ={user}onInput={(e)=>setUser(e.currentTarget.value)}></input>
                <input type="password" name="password" placeholder="Password" value={password}onInput={(e)=>setPassword(e.currentTarget.value)}></input>
                <button type="submit">Delete</button>

            </form>
        </div>
    )
}
export default DeleteComments;