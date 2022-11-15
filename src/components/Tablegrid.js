import { useState } from "react";

const Tablegrid = ({tasks}) => {

    return ( 
        <div className="grid grid-cols-1 md:hidden w-full">
            <div className=" space-y-2 p-4">
                {tasks.map((task)=>(
                    <div className="shadow-lg flex flex-col rounded-md">
                       <div className="bg-gray-100 text-gray-700 p-3 flex justify-between" >
                            <h4> {task.id}</h4>
                            <h2 className="">{task.taskName || "Nil"}</h2>
                            <h2 className="bg-green-500 rounded-lg px-2">{task.priority || "Nil"}</h2>
                       </div>
                       <div className="border hidden border-white p-2 flex rounded justify-between ">
                            <div className="text-gray-500">
                                <h4>Due Date</h4>
                                <h4>Due Time</h4>
                                <h4>Task Participants</h4>
                                <h4>Task Progress</h4>
                            </div>
                            <div>
                                <h4>{task.dueDate || 'Nil' }</h4>
                                <h4>{task.dueTime || "Nil"}</h4>
                                <h4>{task.participants || "Nil"}</h4>
                                <h4>87%</h4>
                            </div>
                       </div>
                    </div>    
                ))}
                
            </div>
        </div>
     );
}
 
export default Tablegrid;