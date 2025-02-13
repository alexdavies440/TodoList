

export default function DeleteButton(props) {

    const del = 'http://localhost:8080/delete';

    function deleteTask() {
        fetch(del, {
            method: "POST",
            body: props.id,
            headers: {
                "Content-type": "application/json;"
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        deleteTask();
        const updatedTasks = props.taskData.filter((object) => object.id !== props.id);
        props.setTaskData(updatedTasks);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>delete</button>
            </form>
        </div>
    );
}