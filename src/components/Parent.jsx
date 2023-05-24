import Child from "./Child";
import { useState } from "react";

export default function Parent() {

    const [parentCount, setParentCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    const incParent =()=>{
        setParentCount(parentCount+1);
    };

    const incChild =()=>{
        setChildCount(childCount+1);
    };

    return (
        <div>
            <h1>Parent component</h1>
            <h4>Parent count is {parentCount} </h4>
            <button onClick={incParent}>Increment Parent</button>
            <br/>
            <br/>
            <Child count={childCount}/>
            <button onClick={incChild}>Increment Child</button>
        </div>
    );
}