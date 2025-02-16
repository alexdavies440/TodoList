import { useState, useEffect, useRef } from "react";
import AddNewTask from "./AddNewTask";
import ListItem from "./ListItem";

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
                            <ListItem
                                item={item}
                                id={item.id}
                                taskData={taskData}
                                setTaskData={setTaskData}
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