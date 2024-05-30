const ToDoItem = ({ todo, handleDelete }) => {
  return (
    <li>
      {todo}
      <button className='delete-button' onClick={handleDelete}>
        Delete
      </button>
    </li>
  )
}

ToDoItem.propTypes = {}

export default ToDoItem
