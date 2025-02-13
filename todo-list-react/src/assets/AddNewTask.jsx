import { useState } from "react";

export default function AddNewTask(props) {

    const add = 'http://localhost:8080/add';

    const url = 'http://localhost:8080/tasks';

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
        }).then(() => console.log("Task added"));
    }

    function handleSubmit(event) {
        event.preventDefault();
        addTask();
        setTimeout(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => props.setTaskData(data))
        }, 50);
        
        // props.setTaskData(currentTasks => {
        //     return [...currentTasks, {"description": newTask}];
        // })
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