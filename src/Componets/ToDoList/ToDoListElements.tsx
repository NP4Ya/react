import React from "react"

type Props = {
    name: string;
    desc: string;
    onDeleteClick:() => void;

}

const ToDoListElements = ({name, desc, onDeleteClick }:Props) => {


    return (<div style={{display: 'flex', gap:'1em'}}>
        <div>{name}</div>
        <div>{desc} </div>


        <div>
            <button onClick = {() => onDeleteClick()}>
                Удалить
            </button>
        </div>
    </div>)
}

export default ToDoListElements;