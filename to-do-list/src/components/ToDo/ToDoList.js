import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'; 
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
import './toDo.css'



function ToDoList({handleCheck}){

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Go to the store",
            completed: true
        },
        {
            id: 2,
            title: "Hit the gym",
            completed: true
        },
        {
            id: 3,
            title: "Watch tv",
            completed: false
        }
        
    ]);

    const [completedTasks, setCompletedTasks] = useState([]);
    
    const addTask = title => {
        const newTasks = [...tasks, { id: tasks.length + 1, title, completed: false }];
        setTasks(newTasks);
        console.log(tasks)
    }


    const handleRemove = index => {
        setTasks(oldValues => {
          return oldValues.filter((_, i) => i !== index)
        })
    }
    
    const handleTaskCompletion = (index) => {
        const updatedTasks = [...tasks];
        const completedTask = updatedTasks[index];
        completedTask.completed = !completedTask.completed;
      
        if (completedTask.completed) {
          setCompletedTasks([...completedTasks, completedTask]);
        } else {
          const updatedCompletedTasks = completedTasks.filter(
            (task) => task.id !== completedTask.id
          );
          setCompletedTasks(updatedCompletedTasks);
        }
      
        setTasks(updatedTasks);
      };

    const handleCompleteAll = () => {
        const updatedTasks = tasks.map((task) => ({ ...task, completed: true }));
        setTasks(updatedTasks);
        setCompletedTasks(updatedTasks);
      };
    
      const handleLogout = () => {
        // Implement your logout functionality here
        // For example, clear user session, navigate to login page, etc.
        console.log('Logged out');
      };


    return (
        <div className="todo-contain<er">
            <div className="header"><font color="red" font size="9">TODO - ITEMS</font></div>
            <button className="logout-button" onClick={handleLogout }>
            <font color="red" style={{ fontSize: '28px' }}>
              Logout</font>
        </button>
        <button className="complete-all-button" onClick={handleCompleteAll} >
        <font color="red" style={{ fontSize: '28px' }}>
          Complete All</font>
        </button>
            <div className="tasks"style={{ fontSize: '35px' }}>
                {tasks.map((task, index) => (
                    <ToDo
                    tasks={tasks}
                    task={task}
                    index={index}
                    key={index}
                    setTasks={setTasks}
                    handleRemove={() => handleRemove(index)}
                    handleTaskCompletion={() => handleTaskCompletion(index)}
                  />
                ))}
            </div>
            <div className="create-task" style={{ fontSize: '35px' }}>
                <ToDoForm addTask={addTask} />
            </div>
            <div className="completed-tasks" style={{ fontSize: '35px' }}><br></br>
  <h2 style={{ fontSize: '40px' }}>Completed Tasks</h2>
  {completedTasks.map((task) => (
    <div key={task.id}>{task.title}</div>
  ))}
</div>
        </div>
    );
}

export default ToDoList