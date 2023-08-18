import React, {useState} from 'react'
import { LuTrash2, LuEdit } from "react-icons/lu";
import './toDo.css'

function ToDo({tasks, task, setTasks, index, handleRemove, handleTaskCompletion }) {
// const [checked, setChecked] = useState(false); 
  
// const handleCheck = (e) => {
 
//     setChecked(true);
// }  

const [editMode, setEditMode] = useState(false);
const [editedTitle, setEditedTitle] = useState(task.title);

const toggleEditMode = () => {
  setEditMode(!editMode);
  if (!editMode) {
    setEditedTitle(task.title); // Reset the edited title if switching to edit mode
  }
};

const handleTitleChange = (event) => {
  setEditedTitle(event.target.value);
};

const handleEditSubmit = () => {
  if (!editedTitle) return; // Don't save if title is empty
  const updatedTasks = [...tasks];
  updatedTasks[index].title = editedTitle;
  setTasks(updatedTasks);
  setEditMode(false);
};

return (
  <div className="todo-list">
 
    <input type="checkbox" checked={task.completed}
  onChange={() => handleTaskCompletion(index)} />

    {editMode ? (
      <input
        type="text"
        value={editedTitle}
        onChange={handleTitleChange}
        onBlur={handleEditSubmit}
        checked={task.completed}
      />
    ) : (
      <span className="task">{task.title}</span>
    )}

    {/* delete and edit button */}
    <LuTrash2 className="theme-icon theme-icon-active" onClick={() => handleRemove(index)} />
    <LuEdit className="theme-icon" onClick={toggleEditMode} />
  </div>
);
}



export default ToDo