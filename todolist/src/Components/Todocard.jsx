import React from 'react'

export default function Todocard({children, index, handleTaskDelete, handleTaskEdit}) {
  return (
    <>
      <li className='task__item'>
        <span>{children}</span>
        <div className='item__options'>
          <button onClick={() => handleTaskEdit(index)} >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button onClick={() => handleTaskDelete(index)}>
            <i className="fa-regular fa-trash-can"></i>

          </button>
        </div>        
      </li>
    </>
  )
}
