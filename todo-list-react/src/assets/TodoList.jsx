import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import AddButton from "./AddNewTask";

export default function TodoList() {

    const url = 'http://localhost:8080/tasks';

    const [taskData, setTaskData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => setTaskData(data))
            .then(setIsLoading(false));
    }
    // Need to set state outside useEffect to prevent infinite loop
    

    function taskToUpperCase(task) {
        return task.charAt(0).toUpperCase() + task.slice(1);
    }

    return (
        <div>
            <h1>To-Do List</h1>
            <hr />
            <AddButton setTaskData={setTaskData} taskData={taskData}/>
            {taskData && taskData.map((item) =>

                <div key={item.id}>
                    <h3>{taskToUpperCase(item.description)}</h3>
                    <DeleteButton id={item.id} taskData={taskData} setTaskData={setTaskData}/>
                </div>
            )}
            {isLoading &&<div>Loading...</div>}
            {taskData.length === 0 && <h2>Add a task...</h2>}
        </div>
    );
}