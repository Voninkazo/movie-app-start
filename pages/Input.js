import React, { useState } from 'react';

export default function Input() {

    const [inputValue, setInputValue] = useState("");

    return(
        <div>
            {inputValue && <h3>{inputValue}</h3>}
            <input value={inputValue} 
            onChange={(event) => {
            if(!event.target.value.includes("t")) {
                setInputValue(event.target.value)
            }
        }
        }/>
        </div>
    )
}