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
        <form className="w-9/12 text-gray-700 font-nunito" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-12">Create A New Task</h1>
            <div>{error && <div>{error.message}</div>}</div>
            <div className="flex justify-evenly mb-3 items-center">
                <label className="w-3/12">Task Name:</label>
                <input type="text" className="w-9/12 border-none bg-gray-100 rounded" 
                    onChange={(e)=>(setTaskName(e.target.value))}
                    value = {taskName}
                />
            </div>

            <div className="flex justify-evenly mb-3 items-center">
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
            
            <div className="bg-white p-5 flex justify-between rounded items-center ">
                <span>Priority</span>
                <div className="space-x-2 flex">
                    <span className="bg-green-200 p-3 rounded space-x-2">
                        <label>Low</label>
                        <input type="radio" />
                    </span>

                    <span className="bg-yellow-200 p-3 rounded space-x-2">
                        <label>Medium</label>
                        <input type="radio" />
                    </span>

                    <span className="bg-red-200 p-3 rounded space-x-2">
                        <label>High</label>
                        <input type="radio" />
                    </span>
                    
                </div>
            </div>
            <div className="mt-5">
                <button className="border border-green-500 px-6 py-2 text-green-500 font-semibold shadow bg-white">Create Task</button>
            </div>
        </form>
     );
}
 
export default Taskform;