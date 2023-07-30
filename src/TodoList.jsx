import TodoItem from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo, additional, onSave, remove }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            cryptoid={todo.id}
            priority={todo.selectedOption}
            onSave={onSave}
            remove={remove}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            // editTodo={editTodo}
            placeholder={todo.newItem}
            additional={additional}
          />
        )
      })}
    </ul>
  )
}