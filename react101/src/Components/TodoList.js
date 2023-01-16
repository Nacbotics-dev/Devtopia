import {useState} from "react";

function TodoList(props){
    const [todoList,setTodoList] = useState([]);

    // const [inputValue,setInputValue] = useState(null);

    const handleSubmit =()=>{
        const value = document.getElementById("input").value

        if (value !== ""){
            setTodoList([...todoList,value]);
        }
    }

    const onClick =(ID)=>{
        var newData = todoList.filter((item,id)=>{
            if (id !== ID) {
               return(item) 
            }
        })

        setTodoList(newData);
    }

    return(
       <div className="container">
            <div className="todolist">
                {
                    todoList.map((item,id)=>{
                        return(<p key={id} onClick={()=>{onClick(id)}}>{item}</p>)
                    })
                }
            </div>
            <input id="input" type={"text"}/>
            <button onClick={handleSubmit}>Add todolist</button>
       </div>
    )
}

export default TodoList;