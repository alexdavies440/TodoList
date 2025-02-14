

export default function DeleteButton(props) {

    const deleteUrl = 'http://localhost:8080/tasks/';

    function deleteTask() {
        fetch(deleteUrl + props.id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json;"
            }
        }).then(() => props.fetchData());
    }

    function handleSubmit(event) {
        event.preventDefault();
        deleteTask();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button className="delete-button">delete</button>
            </form>
        </div>
    );
}