import { useState } from 'react'

const ToDoList = () => {
  // States are used to save information and are used to update the view automatically
  const [inputValue, setInputValue] = useState('')
  const handledAdd = () => {
    console.log('Add', inputValue)
  }
  return (
    <>
      <h1>Lista de tareas</h1>
      {/* Una forma de trabajar con inputs es onChange, la informaci[on estarpa en event.target] */}
      <input
        type='text'
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button onClick={handledAdd}>Agregar</button>
      <ul>
        <li>
          Item 1<button>Eliminar</button>
        </li>
        <li>
          Item 2<button>Eliminar</button>
        </li>
        <li>
          Item 3<button>Eliminar</button>
        </li>
      </ul>
    </>
  )
}

export default ToDoList
