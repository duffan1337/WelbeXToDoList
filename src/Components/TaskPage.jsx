import '../App.css';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';

const TaskPage = (props)=>{

  return (
    <div className="App">	
        <h1>Just do it.</h1>
		<TaskInput />

		{props.todos.map((todo) => {
			return (
				<TaskItem
					todo={todo}
					key={todo.id}
				/>
			);
		})}
        
    </div>
  );
}

export default TaskPage;
