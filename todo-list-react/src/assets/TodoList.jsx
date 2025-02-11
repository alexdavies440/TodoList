import { useState, useEffect } from "react";

export default function Test() {

    const url = 'http://localhost:8080/tasks';

    const del = 'http://localhost:8080/delete';

    const add = 'http://localhost:8080/add';

    const [serverData, setServerData] = useState([]);

    const [task, setTask] = useState("");

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setServerData(data));
    }, []);
    

    function deleteItem(int) {
        fetch(del, {
            method: "POST",
            body: int,
            headers: {
                "Content-type": "application/json;"
            }
        })
        .then(res => res.json())
        .then(data => setServerData(data));
    }

    function handleItemChange(event) {
        setTask(event.target.value);
    }

    function addItem(desc) {
        fetch(add, {
            method: "POST",
            body: desc,
            headers: {
                "Content-type": "application/json;"
            }
        })
        .then(res => res.json())
        .then(data => setServerData(data));
    }

    return(
        <div>
            <h1>To-Do List</h1>
            <hr />

            <input onChange={handleItemChange} type="text" value={task}/>
            <button onClick={() => addItem(task)}>add</button>
            <div>{serverData.map((item, index) => 

                    <div key={index}>
                    <h3>{item.description}</h3>
                    <button onClick={() => deleteItem(item.id)}>delete</button>      
            </div>
                
            )}</div>
        </div>
    );
}