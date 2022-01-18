import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const UseRefTool = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.value = "singh";
    }, []);

    const handleSubmit = () => {
        console.log("value by using useRef:", inputRef.current.value);
        alert("value by using useRef:"+ inputRef.current.value)
    }
    return (
        <>
            
            <h4>How to Use UseRef Hook in React</h4>
           
            <input ref={inputRef} type="text" />
            <button onClick={() => handleSubmit()}>Save</button>
        </>
    );
}

export default UseRefTool;