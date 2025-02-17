import { useState } from "react";
import PropTypes from 'prop-types';


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
                <option value="URGENT">Urgent</option>
            </select>
        </div>
    );
}

Priority.propTypes = {
    id: PropTypes.number,
    priority: PropTypes.string
}