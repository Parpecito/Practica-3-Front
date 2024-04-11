import { useState } from "preact/hooks";
import { FunctionComponent, JSX } from "preact";


const SignUp: FunctionComponent = () => {

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [sex, setSex] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [photo, setPhoto] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);


  return(
    <div>
      
  
      <form method="POST" action="/add" class="formulario">
      <h1>Create your account</h1>
        <input
          type="text"
          placeholder="Usuario"
          name="name"
          value={name}
          onInput={(e) => {
            setName(e.currentTarget.value);
          }}
        >
        </input>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onInput={(e) => {
            setPassword(e.currentTarget.value);
          }}
        >
        </input>
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={age}
          onInput={(e) => {
            setAge(e.currentTarget.valueAsNumber);
          }}
        >
        </input>
        <input
          type="text"
          placeholder="Sex"
          name="sex"
          value={sex}
          onInput={(e) => {
            setSex(e.currentTarget.value);
          }}
        >
        </input>
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onInput={(e) => {
            setDescription(e.currentTarget.value);
          }}
        >
        </input>
        <input
          type="text"
          placeholder="Hobbies"
          name="hobbies"
          value={hobbies}
          onInput={(e) => {
            setHobbies(e.currentTarget.value.split(","));
          }}
        >
        </input>
        <input
          type="text"
          placeholder="Photo"
          name="photo"
          value={photo}
          onInput={(e) => {
            setPhoto(e.currentTarget.value);
          }}
        >
        </input>
        <input
          type="text"
          placeholder="Comments"
          name="comments"
          value={comments}
          onInput={(e) => {
            setComments(e.currentTarget.value.split(","));
          }}
        >
        </input>
        <button type="submit">Sign Up</button>
      </form>
      </div>
  )

/*
  const addUsuario = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    const usuario: Usuario = {
      user,
      name,
      password,
      age,
      sex,
      description,
      hobbies,
      photo,
      comments,
    };
    axios.post(`https://lovers.deno.dev/`, user), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    console.log("Usuario añadido");
    //setUsuarios([...usuarios, user]);
  };
  return (
    <div>
      <h1>Create your account</h1>
      <form method="POST" action="/add" /*onSubmit={addUsuario}>
        <input
          type="text"
          placeholder="Usuario"
          name="name"
          value={name}
          onInput={(e) => {
            setName(e.currentTarget.value);
          }}
        >
        </input>
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onInput={(e) => {
            setPassword(e.currentTarget.value);
          }}
        >
        </input>
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={age}
          onInput={(e) => {
            setAge(e.currentTarget.valueAsNumber);
          }}
        >
        </input>
        <input
          type="text"
          placeholder="Sex"
          name="sex"
          value={sex}
          onInput={(e) => {
            setSex(e.currentTarget.value);
          }}
        >
        </input>
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onInput={(e) => {
            setDescription(e.currentTarget.value);
          }}
        >
        </input>
        <input
          type="text"
          placeholder="Hobbies"
          name="hobbies"
          value={hobbies}
          onInput={(e) => {
            setHobbies(e.currentTarget.value.split(","));
          }}
        >
        </input>
        <input
          type="text"
          placeholder="Photo"
          name="photo"
          value={photo}
          onInput={(e) => {
            setPhoto(e.currentTarget.value);
          }}
        >
        </input>
        <input
          type="text"
          placeholder="Comments"
          name="comments"
          value={comments}
          onInput={(e) => {
            setComments(e.currentTarget.value.split(","));
          }}
        >
        </input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
  */
};

export default SignUp;
