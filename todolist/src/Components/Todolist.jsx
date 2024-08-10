import React from 'react'
import Todocard from './Todocard'

export default function Todolist({tasks, handleTaskDelete, value, setValue, handleTaskEdit}) {
  
  return (
    <ul>
      {tasks.map((todo, todoIndex) => {
        return (
          <Todocard handleTaskDelete={handleTaskDelete} key={todoIndex} index={todoIndex} handleTaskEdit={handleTaskEdit} >
            {todo}
          </Todocard>
        )
      })}
    </ul>
  )
}
