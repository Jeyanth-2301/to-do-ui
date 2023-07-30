import Popup from './Popup'
import { useState } from 'react';


function TodoItem({ todo, selectedOption, completed, id, newItem, toggleTodo, deleteTodo, placeholder, additional, onSave, remove }) {

  const [buttonPopup, setButtonPopup] = useState(false);
  // function editing(another) {
  //   console.log(another);
  // }

  // function onSave(newItem, another) {
  //   alert(todo.id);
  // }
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {newItem}
      </label>
      <div className='bg-priortiy'>[{selectedOption}]</div>
      <button onClick={() => setButtonPopup(true)} className="btn btn-danger">
        Edit
      </button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} newItem={newItem} id={id} onSave={onSave} remove={remove}>
      </Popup>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}

export default TodoItem