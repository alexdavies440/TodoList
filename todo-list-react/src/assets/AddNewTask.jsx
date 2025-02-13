import { useState } from "react";

export default function AddNewTask(props) {

    const add = 'http://localhost:8080/add';

    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        fetch(add, {
            method: "POST",
            body: newTask,
            headers: {
                "Content-type": "application/json;"
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        addTask();
        props.setTaskData(currentTasks => {
            return [...currentTasks, {"description": newTask}];
        })
        setNewTask("");
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputChange} value={newTask} />
                <button>add</button>
            </form>
        </div>
    );
}