import React, { useState } from "react";
// import ReactDOM from 'react-dom/client';
import "./formInput.css";

export default function FormInput(props) {

    // const [name, setName] = useState("");
    // const [inputs, setInputs] = useState({});

    // const handleSubmit = (event) => {
    //     event.preventDefault(); 
    //     // alert(`Your name is ${name}`);
    //     alert(inputs);
    // };

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.number;
    //     setInputs(values => (
    //         { ...values, [name]: value}
    //     ));
    // };

    const {label, errorMessage, onChange, id, ...inputProps} = props;
    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true);
    }

    return (
        // <div>
        //     <form onSubmit={handleSubmit} >
        //         {/* <label>Enter your name : </label>
        //         <input type="text" 
        //                 placeholder="Name"
        //                 value={name}
        //                 onChange={(e) => setName(e.target.value)} /> */}
        //         <label>Enter your name : </label>
        //         <input type="text" 
        //                 placeholder="Name"
        //                 value={inputs.username || ""}
        //                 onChange={handleChange} />
        //         <br/>
        //         <label>Enter your phone number : </label>
        //         <input type="number"
        //                 placeholder="Phone number" 
        //                 value={inputs.number || ""}
        //                 onChange={handleChange}/>
        //         <br/>
        //         <button type="submit" >Enter</button>
        //     </form>
        // </div>

        <div className="formInput">
            {/* <input placeholder={props.placeholder} onChange={(e)=>props.setUsername(e.target.value)}/> */}
            {/* <input ref={props.refer} placeholder={props.placeholder} /> */}
            {/* <input name={props.name} placeholder={props.placeholder} /> */}
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true)} focused={focused.toString()}/>
            <span>{errorMessage}</span>
        </div>
    );
}

