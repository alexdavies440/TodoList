import { useState, useEffect, useRef } from "react";
import DeleteButton from "./DeleteButton";
import AddNewTask from "./AddNewTask";
import Priority from "./Priority";
import TimeRequired from "./TimeRequired";

export default function TodoList() {

    const [taskData, setTaskData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const draggedTaskIndex = useRef(0);
    const draggedOverTaskIndex = useRef(0);

    useEffect(() => {
        fetchData();
    }, []);

    const url = 'http://localhost:8080/tasks';
    const update = 'http://localhost:8080/update';


    function handleSwap(index1, index2) {

        const updatedTasks = [...taskData];

        [updatedTasks[index1].listIndex, updatedTasks[index2].listIndex] =
            [updatedTasks[index2].listIndex, updatedTasks[index1].listIndex];
            
        setTaskData(updatedTasks);

        fetch(update, {
            method: "POST",
            body: JSON.stringify(taskData),
            headers: {
                "Content-type": "application/json;"
            }
        })
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

    taskData.sort((a, b) => a.listIndex - b.listIndex);


    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <AddNewTask fetchData={fetchData} />
            <ul>
                {taskData && taskData.map((item, index) => {
                    return (
                        <li
                            key={item.id}
                            draggable
                            onDragStart={() => (draggedTaskIndex.current = index)}
                            onDragEnter={() => (draggedOverTaskIndex.current = index)}
                            onDragEnd={() => handleSwap(draggedTaskIndex.current, draggedOverTaskIndex.current)}
                            onDragOver={(event) => event.preventDefault()}
                        >
                            <span className="drag">≣&nbsp;&nbsp;</span>
                            <span className="text">{taskToUpperCase(item.description)}</span>

                            <TimeRequired
                                id={item.id}
                                timeRequiredMinutes={item.timeRequiredMinutes}
                            />
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