import '../App.css';
import { useEffect, useState } from 'react';
import { getApi } from '../Api/api';
import { useDispatch } from 'react-redux';
import { addNewTaskAC } from '../Redux/tasksActions';


const TaskInput =()=> {
  
  const dispatch = useDispatch()
  const [titleInput, setTitleInput] = useState("");

  const titleHandleChange = (e)=>{
      setTitleInput(e.currentTarget.value)
  }

  const handleSubmit = (e)=>{
      e.preventDefault()
      dispatch(addNewTaskAC(titleInput))
      setTitleInput("");
  }

  const onKeyDown = (e)=>{
      if (e.key === "Enter") {
          handleSubmit(e)
      }
  }

  return (
       <div className="App">
          <form onSubmit={handleSubmit}>
            <input
                className="title-input"
                type="text"
                value={titleInput}
                onChange={titleHandleChange}
                onKeyDown={onKeyDown}
                placeholder="Task name"
            />
           <button>Add</button>
         </form>
       </div>
  );
}

export default TaskInput;
