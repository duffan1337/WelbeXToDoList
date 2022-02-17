const ADD_NEW_TASKS="ADD_NEW_TASKS"
const CHANGE_TASK_TEXT="CHANGE_TASK_TEXT"
const DELETE_TASK="DELETE_TASK"
const COMPLETED_TASK="COMPLETED_TASK"
const SET_ALL_TASKS="SET_ALL_TASKS"

export const setAllTasksAC = (payload)=>{    
    return {
         type:SET_ALL_TASKS,
         payload   
        }
}

export const addNewTaskAC = (payload)=>{    
    return {
         type:ADD_NEW_TASKS,
         payload   
        }
}
export const changeTaskTextAC = (payload)=>{    
    return {
         type:CHANGE_TASK_TEXT,
         payload  
        }
}
export const deleteTaskTextAC = (payload)=>{    
    return {
         type:DELETE_TASK,
         payload  
        }
}
export const completeTaskTextAC = (payload)=>{    
    return {
         type:COMPLETED_TASK,
         payload  
        }
}