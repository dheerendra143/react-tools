import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const UseRefTool = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.value = "singh";
    }, []);

    const handleSubmit = () => {
        console.log("value bu using useRef:", inputRef.current.value);
    }
    return (
        <>
            <div>Hello</div>
            <input ref={inputRef} type="text" />
            <button onClick={() => handleSubmit()}>Save</button>
        </>
    );
}

export default UseRefTool;