import React, { useState, useEffect } from 'react'
import './App.css'
import TodoInput from './Components/Todoinput'
import Todocard from './Components/Todocard'
import Todolist from './Components/Todolist'

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');

  function persistData(newTasks) {
    localStorage.setItem('tasks', JSON.stringify({tasks: newTasks}));
  }

  const handleAddTask = (newTask) => {
    const newTaskList = [... tasks, newTask];
    persistData(newTaskList);
    setTasks(newTaskList);
  };
  const handleTaskDelete = (index) => {
    const newTaskList = tasks.filter((task, taskIndex) => {
      return taskIndex !== index;
    });
    persistData(newTaskList);
    setTasks(newTaskList);
  };
  const handleTaskEdit = (index) => {
    const editValue = tasks[index];
    setValue(editValue);
    handleTaskDelete(index);
  };
  useEffect(() => {
    if(!localStorage){
      return 
    }
    let localTasks = localStorage.getItem('tasks');
    if (!localTasks) {
      return
    }
    localTasks = JSON.parse(localTasks).tasks;
    setTasks(localTasks);

  }, [])

  return (
    <main>
      <TodoInput value={value} setValue={setValue} handleAddTask={handleAddTask} />
      <Todolist tasks={tasks} handleTaskDelete={handleTaskDelete} handleTaskEdit={handleTaskEdit}/>
    </main>
  )
}

export default App
