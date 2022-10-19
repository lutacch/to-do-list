import React, {useState} from "react";

const ToDoList = (props) => {

    const borrarTarea = () => {
        props.borrar(props.id);
    }

	
    return (
        <div>
            <span>{props.tarea}</span>
            <span onClick={borrarTarea}>Borrar</span>  
        </div>

    );
}

export default ToDoList;