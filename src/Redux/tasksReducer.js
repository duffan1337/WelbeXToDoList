const ADD_NEW_TASKS="ADD_NEW_TASKS"
const CHANGE_TASK_TEXT="CHANGE_TASK_TEXT"
const DELETE_TASK="DELETE_TASK"
const COMPLETED_TASK="COMPLETED_TASK"
const SET_ALL_TASKS="SET_ALL_TASKS"

const initialState={
    tasks:[],
    count:0, 
}

const tasksReducer=(state=initialState, action)=>{

    if(action.type===SET_ALL_TASKS)             //устанавливаю полученный с сервера список
    {
        return {...state,
             tasks:action.payload,
             count: action.payload.length
            }
            
    }

    else if(action.type===ADD_NEW_TASKS)       //добавление элемента списка
    {
        
        return {...state,
             tasks:[...state.tasks, { userId:1, id:state.count+1, title:action.payload, completed:false,}],
             count: state.count+1
            }
    }

    else if(action.type===CHANGE_TASK_TEXT)     //изменение элемента списка
    {
        debugger
        return {...state,
            tasks: state.tasks.map(item=>{
                if(item.id===action.payload.id){
                    return{
                        ...item,
                        title: action.payload.title,
                    }
                }
                return item;
            })
    
    }}

    else if(action.type===DELETE_TASK)      //удаление э.с
    { 
        return { ...state, tasks: state.tasks.filter((item) => item.id !== action.payload), count: state.count-1}
    }

    else if(action.type===COMPLETED_TASK)   //выполнение э.с
    {
        return {...state,
            tasks: state.tasks.map(item=>{
                if(item.id===action.payload){
                    return{
                        ...item,
                        completed: !item.completed,
                    }
                }
                return item;
            })
    
    }}

    return state
}

export default tasksReducer
