import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import AddNewTask from "./AddNewTask";
import Priority from "./Priority";

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
        <div className="todo-list">
            <h1>To-Do List</h1>
            <AddNewTask taskData={taskData} setTaskData={setTaskData} fetchData={fetchData}/>
            <ul>
                {taskData && taskData.map((item) => {
                    return (
                        <li key={item.id}>
                            <span className="text">{taskToUpperCase(item.description)}</span>
                            <Priority id={item.id} priority={item.priority} fetchData={fetchData}/>
                            <DeleteButton id={item.id} taskData={taskData} setTaskData={setTaskData} fetchData={fetchData}/>
                        </li>
                    );
                })}
            </ul>
            
            {isLoading &&<div>Loading...</div>}
        </div>
    );
}