import { React, useState } from 'react'

const CRUD = () => {

    const [task, setTask] = useState('')
    const [todos, setTodos] = useState([])

    // Adding a task
    const handleTasks = (e) => {
        e.preventDefault();
        if (task.trim() === '') return;
        setTodos([...todos, task]);
        setTask('');
    }

    // Delete functionality
    const handleDelete = (index) => {
        const newList = todos.filter((_, i) => i !== index)
        setTodos(newList)
    }

    // Here we are filtering the tasks by searching
    const filteredTodos = task.trim() === '' ? todos : todos.filter((todo) => todo.toLowerCase().includes(task.toLowerCase()))

    return (
        <div className='min-h-screen'>
            <h1 className='my-6 text-2xl text-center'>CRUD App</h1>
            <div className='flex  items-center flex-col mx-auto 0 max-w-6xl my-12 '>
                <div className='flex gap-2 '>
                    <input value={task} onChange={(e) => setTask(e.target.value)} className='min-w-xl px-4 py-2 outline-none border border-gray-300 rounded-lg' type="text" placeholder='Add something...' />
                    <button onClick={handleTasks} className='px-4 py-2 bg-blue-500 hover:bg-blue-700 hover:cursor-pointer duration-300 ease-in border-none text-white border rounded-lg' type='button'>Add</button>
                </div>

                {/* Here we rendered the list conditionally */}
                {todos && (
                    <div className='mt-12'>
                        <ul>
                            {filteredTodos.map((item, index) => (
                                <li key={index} className='flex justify-between pl-3  bg-gray-100 my-2 rounded-lg min-w-lg '>
                                    <span className='text-lg py-2 px-4 '>{item}</span>
                                    <button onClick={() => handleDelete(index)} className=' px-4 py-2   bg-transparent hover:bg-red-700 hover:text-white hover:border-none hover:cursor-pointer duration-200 ease-in border-gray-400  text-black border rounded-lg' type='button'>delete</button>
                                </li>

                            ))}
                        </ul>
                    </div>
                )}
            </div>

        </div>
    )
}

export default CRUD