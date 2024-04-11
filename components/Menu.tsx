import { FunctionComponent } from "preact";


const Menu: FunctionComponent=()=>{
    return(
        <div class="menu">
            <a href="/" >
                List Lovers
            </a>
            <a href="/FiltrarNombreRuta">
                SearchName
            </a>
            <a href="/searchHobbies">
                List Hobbies
            </a>
            <a href="/add">
                SignUp
            </a>
            <a href="/loginRuta">
                Login
            </a>
            <a href="/deleteUsuarioRuta">
                Delete User
            </a>
        
            <a href="/DeleteCommentsRuta">
                Delete Comments
            </a>
        </div>
    )
}
export default Menu;