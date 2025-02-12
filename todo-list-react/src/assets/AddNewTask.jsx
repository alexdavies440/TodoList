import { useState } from "react";

export default function AddNewTask() {

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

    return (
        <div>
            <form action="" onSubmit={() => addTask()}>
                <input type="text" onChange={handleInputChange} value={newTask} />
                <button>add</button>
            </form>
        </div>
    );
}