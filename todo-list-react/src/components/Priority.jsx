import { useState } from "react";

export default function Priority(props) {

    const [newPriority, setNewPriority] = useState(props.priority);

    const priorityUrl = 'http://localhost:8080/priority/';

    function handleChange(event) {

        setNewPriority(event.target.value);

        fetch(priorityUrl + props.id, {
            method: "POST",
            body: JSON.stringify(event.target.value),
            headers: {
                "Content-type": "application/json;"
            }
        })
    }

    return (
        <div>
            <label htmlFor="priority">Priority: </label>
            <select name="priority" id="priority" value={newPriority} onChange={handleChange}>
                <option value="EHH">Ehh</option>
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
            </select>
        </div>
    );
}