import { useState } from "react";

const Taskform = () => {

    const   [taskName, setTaskName]               = useState(null),
            [taskDescription, setTaskDescription] = useState(null),
            [dueDate, setDueDate]                 = useState(null),
            [dueTime, setDueTime]                 = useState(null),
            [error, setError]                     = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const task = {taskName, taskDescription, dueDate, dueTime }

        console.log(task)

        const response = await fetch('http://localhost:8002/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(error.message)
        }
        if(response.ok){
            setTaskName(null)
            setTaskDescription(null)
            setDueDate(null)
            setDueTime(null)
            setError(null)
            console.log('new Workout added', json )
        }

    }

    return ( 
        <form className="text-gray-700 font-nunito p-3" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-12">Create A New Task</h1>
            <div>{error && <div>{error.message}</div>}</div>
            <div className="flex justify-evenly mb-3 items-center">
                <label className="w-3/12">Task Name:</label>
                <input type="text" className="w-9/12 border-none bg-gray-100 rounded" 
                    onChange={(e)=>(setTaskName(e.target.value))}
                    value = {taskName}
                />
            </div>

            <div className="flex justify-evenly mb-3 items-center p-2">
                <label className="w-3/12">Task Description:</label>
                <input type="text" className="w-9/12 border-none bg-gray-100 rounded" 
                        onChange={(e)=>( setTaskDescription(e.target.value))}
                        value = {taskDescription}
                />
            </div>

            <div className="flex justify-evenly mb-3 items-center">
                <label className="w-3/12" >Due Date:</label>
                <input type="date" className="w-9/12 border-none bg-gray-100 rounded"
                    onChange={(e)=>( setDueDate(e.target.value))}
                    value = {dueDate}
                />
            </div>

            <div className="flex justify-evenly mb-3 items-center">
                <label className="w-3/12">Due Time:</label>
                <input type="time" className="w-9/12 border-none bg-gray-100 rounded"
                    onChange={(e)=>( setDueTime(e.target.value))}
                    value = {dueTime}
                />
            </div>
            
            <div className="bg-white px-5 py-2.5 flex justify-between rounded items-center ">
                <span>Priority</span>
                <div className="space-x-2 flex">
                    <span className="border text-green-500 border-green-500 p-1 rounded-md space-x-2">
                        <label>Low</label>
                        <input type="radio" className="border-green-500" />
                    </span>

                    <span className="border text-yellow-500 border-yellow-500 p-1 rounded-md space-x-2">
                        <label>Medium</label>
                        <input type="radio" className="border-yellow-500" />
                    </span>

                    <span className="border text-red-500 border-red-500 p-1 rounded-md space-x-2">
                        <label>High</label>
                        <input type="radio" className="border-red-500" />
                    </span>
                    
                </div>
            </div>
            <div className="mt-5">
                <button className="border border-zinc-500 rounded-full text-zinc-500 hover:bg-zinc-500 hover:text-white shadow px-3 py-2">Create Task</button>
            </div>
        </form>
     );
}
 
export default Taskform;