import React, {useState} from 'react';
import ToDoListElements from "./ToDoListElements";

type ListElement = {
    name:string,
    desc:string

}
const ToDoList = () => {

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')


    const  [list, setList] = useState<ListElement[]>([])
    const AddElementInList = () => {
        setList([...list, {
            name:name,
            desc:desc,
        }])
        setName('')
        setDesc('')
    }

    const onDeleteClick = (index:number) => {
      const filtered = list.filter((el, i)=> i !== index);


      setList(filtered);
    }



    return (
        <div>
            <input
                type = "text"
                value = {name}
                onChange={(e)=>setName(e.target.value)}
            />

            <input
                type = "text"
                value = {desc}
                onChange={(e)=>setDesc(e.target.value)}
            />

            <div>
                <button
                    onClick={()=>AddElementInList()}
                >
                    Добавить в список
                </button>
            </div>

            <div>
                {list.map((el,i) =>
                    <ToDoListElements
                        onDeleteClick={() => onDeleteClick(i)}
                        name = {el.name}
                        desc = {el.desc}
                        key={i}/>
                        )}
            </div>
        </div>
    );
};

export default ToDoList;