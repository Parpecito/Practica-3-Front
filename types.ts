export type Usuario={
    _id?: string,
    user: string,
    name: string,
    password: string,
    age:number, 
    sex: string,
    description: string,
    hobbies: string[],
    photo: string,
    comments: comment[],
    
}
export type comment={
    user: string,
    message: string

}

export type UsuarioResponse={
    usuarios: Usuario[]
}