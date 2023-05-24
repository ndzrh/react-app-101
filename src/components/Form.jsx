import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

export default function Form() {

    // const [name, setName] = useState("");
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault(); 
        // alert(`Your name is ${name}`);
        alert(inputs);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.number;
        setInputs(values => (
            { ...values, [name]: value}
        ));
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                {/* <label>Enter your name : </label>
                <input type="text" 
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} /> */}
                <label>Enter your name : </label>
                <input type="text" 
                        placeholder="Name"
                        value={inputs.username || ""}
                        onChange={handleChange} />
                <br/>
                <label>Enter your phone number : </label>
                <input type="number"
                        placeholder="Phone number" 
                        value={inputs.number || ""}
                        onChange={handleChange}/>
                <br/>
                <button type="submit" >Enter</button>
            </form>
        </div>
    );
}

