import { FunctionComponent } from "preact";


type UsuarioProps={
    name: string,
    age: number
    sex: string,
    description: string,
    hobbies: string[],
    photo: string,
    comments: commentProps[],
}
type commentProps={
    user: string,
    message: string
}

const MostrarDatosUsuarios: FunctionComponent<UsuarioProps> =(props)=>{
    const {name, age,sex,description,hobbies,photo,comments}=props;
    return(
        <div class="Lover">
            <h1>{name}</h1>
            <span>Tiene {age} años</span>
            <span>Sexo: {sex}</span>
            <span>Su descripcion es {description}</span>
            <span>Mis hobbies son {hobbies}</span>
            <image src={photo} alt={photo} class="imagen"></image>
            <span>Comentarios: {comments.map((comment)=>{
                return(
                    <div>
                        <p class="coment">{comment.user} va a decir {comment.message}</p>
                        <br/>
                    </div>
                )
            })}</span>
            <a href="/AnadirComentarios" >Añadir Comentario </a>
            <a href="/DeleteCommentsRuta"> Eliminar Comentarios</a>
            
            <a href="/" >Volver todos los personajes</a>
            <br/>
            <br></br>
        </div>
    )
}
export default MostrarDatosUsuarios;