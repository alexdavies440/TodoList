import { useState, useEffect } from "react";

export default function Test() {

    const url = 'http://localhost:8080/tasks';

    const [serverData, setServerData] = useState([]);


    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setServerData(data));
    }, []);

    return(
        <div>
            <h1>To-Do List</h1>
            <hr />
            <div>{serverData.map((item) => 

                    <div key={item.id}>
                    <h3>{item.description}</h3>      
            </div>
                
            )}</div>
        </div>
    );
}