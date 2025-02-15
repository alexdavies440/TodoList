import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import AddNewTask from "./AddNewTask";
import Priority from "./Priority";
import ListItem from "./ListItem";

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

    function taskToUpperCase(task) {
        return task.charAt(0).toUpperCase() + task.slice(1);
    }

    // Possibly create three arrays using filter and map each one to group by priority. 
    // Maybe make a component for this. This might impact abiliy to re-order by dragging though 

    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <AddNewTask fetchData={fetchData} />
            <ul>
                {taskData && taskData.map((item) => {
                    return (
                        <ListItem
                            item={item}
                            fetchData={fetchData}
                            taskToUpperCase={taskToUpperCase} />
                    );
                })}
            </ul>

            {isLoading && <div>Loading...</div>}
        </div>
    );
}