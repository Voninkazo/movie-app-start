import React, { useState } from 'react';

export default function Accordion() {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <div>
            {isToggled && 
            <h3>Show me</h3>
            }
            <button onClick={() => setIsToggled(!isToggled)}>Toggled</button>
        </div>
    )
}