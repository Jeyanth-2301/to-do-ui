import { useState } from "react"


export function NewTodoForm({ onSubmission }) {
  const [newItem, setNewItem] = useState("")
  const [selectedOption, setSelectedOption] = useState('option1');

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmission({ newItem, selectedOption })
    console.log(newItem, selectedOption)
    setNewItem("")
    setSelectedOption("<No Priority Choosen>")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
          required
        />
        <br />
        <label htmlFor="options"></label>
        <select
          id="options"
          value={selectedOption}
          onChange={e => setSelectedOption(e.target.value)}
          required
        >
          <option value="Not Selected">No Priority Choosen</option>
          <option value="Less Priority">Less Priority</option>
          <option value="Optional task">Optional task</option>
          <option value="High Priority">High Priority</option>
        </select>
      </div>
      {/* <input type="submit" /> */}
      <button className="btn">Add</button>
    </form>
  )
}