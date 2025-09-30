import { React, useState } from 'react'

const CRUD = () => {

    const [task, setTask] = useState('')
    const [todos, setTodos] = useState([])
    const [editingIndex, setEditingIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

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
        <div className='min-h-screen bg-gray-50'>
            <h1 className='pt-6 text-2xl font-bold text-center'>CRUD APP</h1>
            <div className='flex  items-center flex-col mx-auto 0 max-w-6xl my-12 '>
                {/* Input field to add tasks */}
                <div className='flex gap-2 '>
                    <input value={task} onChange={(e) => setTask(e.target.value)} className='min-w-xl px-4 py-2 outline-none border border-gray-300 rounded-lg shadow-sm' type="text" placeholder='Add something...' />
                    <button onClick={handleTasks} className='px-4 py-2 bg-blue-500 hover:bg-blue-700 hover:cursor-pointer duration-300 ease-in border-none text-white border rounded-lg' type='button'><span className='text-shadow-lg'>Add</span></button>
                </div>

                {/* Here we rendered the list conditionally */}
                {todos.length > 0 && (
                    <div className='mt-12'>
                        <ul>
                            {filteredTodos.map((item, index) => (
                                <li key={index} className='flex justify-between  bg-gray-100 my-2 rounded-lg min-w-lg '>

                                    {editingIndex === index ? (
                                        // Input field and buttons for update the tasks
                                        <div className='flex justify-between min-w-lg'>
                                            <input value={editValue} onChange={(e) => setEditValue(e.target.value)} className='pl-4 outline-gray-300 border border-gray-300 min-w-md mr-2 rounded-lg' type="text" />
                                            <div className='flex gap-2'>                                               
                                                {/* save button */}
                                                <button onClick={() => {
                                                    if (editValue.trim() === '') return;
                                                    const updatedTodos = [...todos]
                                                    updatedTodos[editingIndex] = editValue;
                                                    setTodos(updatedTodos)
                                                    setEditingIndex(null);
                                                    setEditValue('')
                                                }} className='text-white bg-green-500 hover:cursor-pointer hover:bg-green-600 px-4 py-2 border-none rounded-lg font-semibold'>Save</button>
                                                
                                                {/* cancel button */}
                                                <button onClick={() => {
                                                    setEditingIndex(null);
                                                    setEditValue('');
                                                }} className='px-4 py-2 bg-red-500 hover:bg-red-700 hover:border-none hover:cursor-pointer duration-200 ease-in border-none rounded-lg text-white font-semibold'>Cancel</button>
                                            </div>
                                        </div>
                                    ) : (
                                        // Task list
                                        <div className='flex justify-between  min-w-lg'>                                           
                                                <span className='text-md pt-2 pl-4 min-w-md mr-2 border border-gray-300 outline-none rounded-lg '>{item}</span>
                                                <div className='flex gap-2'>
                                                    <button onClick={() => {
                                                        setEditingIndex(index)
                                                        setEditValue(item)
                                                    }} className='text-white bg-green-500 hover:cursor-pointer hover:bg-green-600 px-4 py-2 border-none rounded-lg font-semibold'>Edit</button>
                                                    <button onClick={() => handleDelete(index)} className='px-4 py-2 bg-red-500 hover:bg-red-700 hover:border-none hover:cursor-pointer duration-200 ease-in border-none rounded-lg text-white font-semibold' type='button'>Delete</button>
                                                </div>                                          
                                        </div>
                                    )}
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