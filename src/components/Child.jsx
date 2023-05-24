import React from "react";

function Child({count}) {

    console.log('Child component is being re-rendered');

    return (
        <div>
            <h1>Child component</h1>
            <h4>Child count is {count}</h4>
        </div>
    );
}

export default React.memo(Child); // 'memo' to prevent render Child when Parent is clicked