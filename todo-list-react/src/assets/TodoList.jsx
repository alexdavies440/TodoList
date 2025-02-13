import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import AddButton from "./AddNewTask";

export default function TodoList() {

    const url = 'http://localhost:8080/tasks';

    const [taskData, setTaskData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const testArray = [{"description": "dog"}, {"description": "cat"}, {"description": "horse"}];

    // Need to set state outside useEffect to prevent infinite loop
    useEffect(() => {

        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => setTaskData(data))
            .then(setIsLoading(false));

    }, []);

    function taskToUpperCase(task) {
        return task.charAt(0).toUpperCase() + task.slice(1);
    }

    return (
        <div>
            <h1>To-Do List</h1>
            <hr />
            <AddButton setTaskData={setTaskData} />
            {taskData && taskData.map((item, index) =>

                <div key={index}>
                    <h3>{taskToUpperCase(item.description)}</h3>
                    <DeleteButton id={item.id} />
                </div>
            )}
            {isLoading &&<div>Loading...</div>}
        </div>
    );
}