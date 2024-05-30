import { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  // States are used to save information and are used to update the view automatically
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])
  const handledAdd = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue])
      setInputValue('')
    }
  }
  const handleDelete = index => {
    setTodos(todos.filter((todo, i) => i !== index))
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
        {/* Iterar el arreglo de todos y regresar un componente para cada uno - Usando una funcion anonima podemos pasar parametros al componente */}
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </ul>
    </>
  )
}

export default ToDoList
