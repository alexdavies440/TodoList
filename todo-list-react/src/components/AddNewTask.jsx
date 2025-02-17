import { useState } from "react";

export default function AddNewTask(props) {

    const add = 'http://localhost:8080/add';

    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if (newTask.trim !== "") {
            fetch(add, {
                method: "POST",
                body: newTask,
                headers: {
                    "Content-type": "application/json;"
                }
            }).then(() => props.fetchData());
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        addTask();
        setNewTask("");
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="newTaskField"></label>
                <input 
                type="text" name="newTaskField" 
                placeholder="Enter a task..." 
                onChange={handleInputChange} 
                value={newTask} 
                />
                <button className="add-button">➕</button>
            </form>
        </div>
    );
}