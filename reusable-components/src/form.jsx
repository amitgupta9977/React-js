import React from "react";
import { useState } from "react";

const MyForm = () =>{
    const [inputValue, setInputvalue]= useState('');
    const [passwordValue, setpasswordValue]= useState('');

    return(
        <div>
            <input type="email" value ={inputValue} onChange={e=>setInputvalue(e.target.value)}/>
            <input type="password" value={passwordValue} onChage ={e=>setpasswordValue(e.target.value)}/>
            <button onClick={()=> alert (`Hello ${inputValue}`)}> Submit </button>
        </div>
    )
}
export default MyForm
