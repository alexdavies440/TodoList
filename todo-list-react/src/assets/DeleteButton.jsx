

export default function DeleteButton(props) {

    const del = 'http://localhost:8080/delete';

    function deleteTask(int) {
        fetch(del, {
            method: "POST",
            body: int,
            headers: {
                "Content-type": "application/json;"
            }
        })
    }

    return (
        <div>
            <form onSubmit={() => deleteTask(props.id)}>
                <button>delete</button>
            </form>
        </div>
    );
}