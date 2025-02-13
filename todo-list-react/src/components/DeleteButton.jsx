

export default function DeleteButton(props) {

    const deleteUrl = 'http://localhost:8080/tasks/';

    const url = 'http://localhost:8080/tasks';


    function deleteTask() {
        fetch(deleteUrl + props.id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json;"
            }
        }).then(() => console.log("Task deleted"));
    }

    function handleSubmit(event) {
        event.preventDefault();
        deleteTask();
        setTimeout(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => props.setTaskData(data))
        }, 50);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button className="delete-button">delete</button>
            </form>
        </div>
    );
}