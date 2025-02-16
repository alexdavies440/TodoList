import { useState, useRef } from "react";
import DeleteButton from "./DeleteButton";
import Priority from "./Priority";

export default function ListItem(props) {

    // const draggedTask = useRef(0);
    // const draggedOverTask = useRef(0);

    // function handleSwap() {
    //     const updatedTasks = [...props.taskData];
    //     [updatedTasks[draggedTask.current], updatedTasks[draggedOverTask.current]] =
    //         [updatedTasks[draggedOverTask.current], updatedTasks[draggedTask.current]];
    //     props.setTaskData(updatedTasks);
    //     console.log(updatedTasks);
    // }

    function taskToUpperCase(task) {
        return task.charAt(0).toUpperCase() + task.slice(1);
    }

    return (
        <>
            <span className="drag">≣&nbsp;&nbsp;</span>
            <span className="text">{taskToUpperCase(props.item.description)}</span>
            <Priority
                id={props.id}
                priority={props.item.priority}
            />
            <DeleteButton
                id={props.id}
                fetchData={props.fetchData}
            />
        </>


    );
}