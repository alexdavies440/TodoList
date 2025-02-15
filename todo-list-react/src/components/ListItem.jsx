import { useState, useRef } from "react";
import DeleteButton from "./DeleteButton";
import Priority from "./Priority";

export default function ListItem(props) {

    return (
        <li
            key={props.item.id}>
            <span className="text">{props.taskToUpperCase(props.item.description)}</span>
            <Priority
                id={props.item.id}
                priority={props.item.priority} />
            <DeleteButton
                id={props.item.id}
                fetchData={props.fetchData} />
        </li>
    );
}