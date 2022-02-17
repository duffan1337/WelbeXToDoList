import './App.css';
import { useEffect, useState } from 'react';
import { getApi } from './Api/api';
import TaskInput from './Components/TaskInput';
import { setAllTasksAC } from './Redux/tasksActions';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './Components/TaskItem';
import StartPage from './Components/StartPage';
import { BrowserRouter as Router, NavLink, Route, Routes, Link} from 'react-router-dom'
import TaskPage from './Components/TaskPage';

const getTasks = ()=>(dispatch)=>{
  debugger
  getApi.getTasks().then(
    data=>{dispatch(setAllTasksAC(data))})
  }


const App = ()=>{

	const dispatch = useDispatch()
 	useEffect(() => {dispatch(getTasks())},[]);

	const {todos}=useSelector((state)=>{
		return{
			todos:state.tasks.tasks,
		}
	})


  return (
    <div className="App">
		<Router>
			<div className='navbar'>
				<NavLink to="/"><button> Main </button></NavLink>
				<NavLink to="/todo"><button> ToDo </button></NavLink>
			</div>
			<Routes>
				<Route exact path="/" element={<StartPage/>}/>
				<Route  path="/todo" element={<TaskPage todos={todos}/>}/>
				<Route path="*" element={<div><h1>NOT FOUND</h1></div>}/>
			</Routes>
		</Router>
    </div>
  );
}

export default App;
