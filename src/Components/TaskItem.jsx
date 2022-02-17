import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css"
import { changeTaskTextAC, completeTaskTextAC, deleteTaskTextAC } from "../Redux/tasksActions";

function TaskItem({todo, handleToggle}) {

    const dispatch  = useDispatch()

    const [titleInput, setTitleInput] = useState("");       // введенное значение в режиме редактирования

    const [isChanged, setIsChanged] = useState(false)       //режим редактирования
    
        function titleHandleChange(e) {
            setTitleInput(e.currentTarget.value)
        }
    
        function handleSubmit(e) {
            e.preventDefault()
            dispatch(changeTaskTextAC({id:todo.id, title:titleInput }))
             setTitleInput("");
             setIsChanged(false)
        }

        return (
        <div>
            <div key={todo.id} className="todo__item">

                <div className={todo.completed ? "todo__item__text strike" : "todo__item__text"}  onClick={()=>dispatch(completeTaskTextAC(todo.id))}>
                    <h3 className="todo__item__text__header">{todo.id}. {isChanged ? titleInput :todo.title}</h3>
                </div>

                <div className="todo__item__buttons">
                    <button className="todo__item__text__parag" onClick={()=>setIsChanged(true)}>Change</button>
                    <button className='bx bx-trash' onClick={() => dispatch(deleteTaskTextAC(todo.id))}>Delete</button>
                </div>
                
            </div>
            {isChanged ? 
                        (<div className="App">
                        <form onSubmit={handleSubmit}>
                
                         <input
                          className="title-input"
                          type="text"
                          placeholder="Enter change"
                          onChange={titleHandleChange}
                      />
                      
                      <button onClick={()=>handleSubmit()}>Ok</button>
                      <button onClick={()=>setIsChanged(false)}>Cancel</button>
                
                      </form>
                    </div>
                  )
            : null}
            </div>
            


        
        );
}
   
  export default TaskItem