import TodoList from "./TodoList";
import useFetch from "./useFetch";

const TodoMenu = () => {  
    const { data: todos, error } = useFetch('https://todo-json.vercel.app/api/todos')

    return (  
        <div className='flex-col text-center bg-background p-8 rounded-2xl w-full max-w-md'>
            <h2 className="text-3xl font-light mb-4">Todo List</h2>
            {todos && <TodoList todos={todos}/> }
        </div>
    );
}
 
export default TodoMenu;