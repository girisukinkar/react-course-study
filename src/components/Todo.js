import React from 'react'

export default function Todo({ todo, toggleTodo }) {

    function handleToggleTodo(){
        toggleTodo(todo.id);
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onClick={handleToggleTodo} />
            { todo.name }
            </label>
        </div>
    )
}
