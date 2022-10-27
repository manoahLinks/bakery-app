
const Tablegrid = ({tasks}) => {

    return ( 
        <div className="grid grid-cols-1 gap-3 md:hidden w-full">
            <div className="bg-white space-y-3 rounded-lg shadow p-4">
                {tasks.map((task)=>(
                    <div>
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" className="text-blue-500 font-bold hover:underline">{task.id}</a>
                            </div>
                            <div className="text-gray-500">{task.dueDate}</div>
                            <div>
                                <span className="p-1.5 text-sm font-medium tracking-wider text-yellow-800 bg-yellow-200 rounded bg-opacity-50">{task.status}</span> 
                            </div>
                        </div>
                        <div className="text-sm text-gray-700">{task.taskName}</div>
                        <div className="text-sm text-gray-700">{task.priority}</div>
                        <div className="text-sm text-yellow-700">{task.participants}</div>
                    </div>    
                ))}
                
            </div>
        </div>
     );
}
 
export default Tablegrid;