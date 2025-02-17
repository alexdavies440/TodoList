import { useState } from "react";


export default function TimeRequired(props) {

    const [timeRequiredMinutes, setTimeRequiredMinutes] = useState(props.timeRequiredMinutes)

    const timeRequiredUrl = 'http://localhost:8080/timeRequired/'

    function handleChange(event) {
        setTimeRequiredMinutes(event.target.value);
        
        fetch(timeRequiredUrl + props.id, {
            method: "POST",
            body: JSON.stringify(event.target.value),
            headers: {
                "Content-type": "application/json;"
            }
        })
    }

    return (
        <div>
            <label htmlFor="timeRequiredMinutes">Minutes:
                <input 
                type="number" 
                name="timeRequiredMinutes" 
                id="timeRequiredMinutes" 
                value={timeRequiredMinutes}
                onChange={handleChange}
                />
            </label>
        </div>
    );
}