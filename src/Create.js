import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const completed = false;
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = {title, description, completed};

        setIsPending(true);

        fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo)
        }) .then(() => {
            console.log('New ToDo Added!');
            setIsPending(true);
            navigate('/')
        })

    }

    return (  
        <div className='text-center bg-background p-8 rounded-2xl'>
            <h2 className="text-3xl font-light mb-4">Create New ToDo</h2>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="h-72">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-lg font-semibold text-red-400 mr-5">ToDo:</label>
                                <input
                                    type="text"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="border-2 p-1 rounded-lg text-gray-500"
                                />
                            </div>

                            <div className="flex justify-between items-center">
                                <label className="text-lg font-semibold text-red-400 mr-5">Description:</label>
                                <input
                                    type="text"
                                    required
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="border-2 p-1 rounded-lg text-gray-500"
                                />
                            </div>
                        </div>

                            <button
                                className="bg-red-400 text-background mt-36 px-4 py-3 rounded-2xl transition duration-100 hover:bg-red-300"
                                disabled={isPending}
                            >
                                {isPending ? "Adding ToDo..." : "Add ToDo"}
                            </button>

                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Create;