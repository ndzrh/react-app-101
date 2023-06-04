// import Fragment from "./components/Fragment";
// import Table from "./components/Table";
// import Modal from "./components/Modal";
// import Book from "./components/Book";
// import Parent from "./components/Parent";
// import Classroom from "./components/Classroom";
import FormInput from "./components/FormInput";
import "./app.css";
// import { useRef } from "react";
import { useState } from "react";

function App() {

  // const bookInfo = {
  //   author: "Hafizul Hadi",
  //   title: "Adakah Kita Sudah Dewasa?"
  // };

  // const [username, setUsername] = useState("");
  // OR 
  // const usernameRef = useRef();

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage: "Username must 3-16 characters",
      label:"Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true, //OR HTML IN CSS FILE
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage: "Email is invalid",
      label:"Email",
      required: true, //OR HTML IN CSS FILE
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday",
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage: "Password should be 8-20 characters",
      label:"Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[?=.*[^#@$!%*&])[A-Za-z0-9@#$!%*&^]{8,20}$",
      required: true, //OR HTML IN CSS FILE
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage: "Password did not match",
      label:"Confirm Password",
      pattern: values.password,
      required: true, //OR HTML IN CSS FILE
    }
  ]
  

  // console.log("re-rendered");

  const handleSubmit = (e) => {
    e.preventDefault(); //refresh page after 'submit'
    // console.log(usernameRef);
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values);

  return (
    <div className="app">
      {/* <Fragment /> */}
      {/* <Table></Table> */}
      {/* <Parent /> */}
      {/* <Modal /> */}
      {/* <Book author="Juliana Evans" title="Kelopak Jantung" /> */}
      {/* <Book bookInfo={bookInfo}/> */}
      {/* <Classroom /> */}
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {/* <FormInput placeholder="Username" setUsername={setUsername}/> */}
        {/* <FormInput refer={usernameRef} placeholder="Username"/> */}
        {/* <FormInput name="username" placeholder="Username" /> */}
        {/* <FormInput name="email" placeholder="Email"/> */}
        {/* <FormInput name="password" placeholder="Password"/> */}
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
