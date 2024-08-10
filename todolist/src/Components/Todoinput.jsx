import React, { useState } from 'react'
import Todolist from './Todolist'
import Todocard from './Todocard'

export default function TodoInput({handleAddTask, value, setValue}) {
  return (
    <header className='container__input'>
      <input type="text" placeholder='Add a new task' value={value} onChange={(e) => {setValue(e.target.value);}}/>
      <button onClick={() => { handleAddTask(value); setValue('')}}>Add</button>
    </header>
  )
}