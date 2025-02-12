import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import AddButton from "./AddNewTask";

export default function TodoList() {

    const url = 'http://localhost:8080/tasks';

    const [taskData, setTaskData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    // Need to set state outside useEffect to prevent infinite loop
    useEffect(() => {

        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => setTaskData(data))
            .then(setIsLoading(false));
            
    }, []);

    return (
        <div>
            <h1>To-Do List</h1>
            <hr />
            <AddButton />
            {taskData && taskData.map((item, index) =>

                <div key={index}>
                    <h3>{item.description}</h3>
                    <DeleteButton id={item.id} />
                </div>
            )}
            {isLoading &&<div>Loading...</div>}
        </div>
    );
}