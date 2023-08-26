 import { useState } from "react";

const TodoList = ({todos}) => {
    const [updatedTodos, setUpdatedTodos] = useState(todos)

    const handleClick = (todo) => {
        const updatedTodo = { ...todo, completed: !todo.completed };

        fetch('https://my-json-server.typicode.com/OhRai/ToDo-App/todos' + todo.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTodo)
        })
        .then(() => {
            const updatedList = updatedTodos.map(t => (t.id === updatedTodo.id ? updatedTodo : t));
            setUpdatedTodos(updatedList);
        });

    }

    const handleDelete = (todo) => {
        fetch('https://my-json-server.typicode.com/OhRai/ToDo-App/todos' + todo.id, {
            method: 'DELETE'
        })
        .then(() => {
            const updatedList = updatedTodos.filter(t => t.id !== todo.id);
            setUpdatedTodos(updatedList);
        });
    }

    return (
        <div className="max-h-72 h-72 overflow-y-auto text-left">
            {updatedTodos.length === 0 ? (
                <div className="flex items-center justify-center h-72">
                    <p className="text-gray-400">No todo's yet!</p>
                </div>
            ) : (updatedTodos.map((todo) => (
                    <div className={`flex justify-between border-2 p-3 rounded-lg mb-4 last:mb-0 ${todo.completed ? 'bg-green-200 transition duration-100 ease-out' : 'transition duration-100 ease-in'}`} key={todo.id}>
                        <div className="flex items-center gap-5">
                            <input 
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleClick(todo)}
                            className="w-4 h-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-red-400">{ todo.title }</h3>
                                { (todo.description !== '') && <p className="mt-1 text-gray-500 text-sm">{ todo.description }</p> }
                            </div>
                        </div>
                        <button className="text-red-500" onClick={() => handleDelete(todo)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </div>
                ))
            )}
        </div>     
    );
}
 
export default TodoList;