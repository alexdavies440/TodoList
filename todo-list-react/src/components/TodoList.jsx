import { useState, useEffect, useRef } from "react";
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

    const draggedTask = useRef(0);
    const draggedOverTask = useRef(0);

    function handleSwap() {
        const updatedTasks = [...taskData];
        [updatedTasks[draggedTask.current], updatedTasks[draggedOverTask.current]] =
            [updatedTasks[draggedOverTask.current], updatedTasks[draggedTask.current]];
        setTaskData(updatedTasks);
        console.log(updatedTasks);
    }

    function fetchData() {
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => setTaskData(data))
            .then(setIsLoading(false));
    }

    function taskToUpperCase(task) {
        return task.charAt(0).toUpperCase() + task.slice(1);
    }

    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <AddNewTask fetchData={fetchData} />
            <ul>
                {taskData && taskData.map((item) => {
                    return (
                        <li
                            key={item.id}
                            draggable
                            onDragStart={() => draggedTask.current = item.id}
                            onDragEnter={() => draggedOverTask.current = item.id}
                            onDragEnd={handleSwap}
                            onDragOver={(event) => event.preventDefault()}
                        >
                            <span className="text">{taskToUpperCase(item.description)}</span>
                            <Priority
                                id={item.id}
                                priority={item.priority}
                            />
                            <DeleteButton
                                id={item.id}
                                fetchData={fetchData}
                            />
                        </li>
                    );
                })}
            </ul>

            {isLoading && <div>Loading...</div>}
        </div>
    );
}