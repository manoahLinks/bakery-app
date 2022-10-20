const Table = ({tasks}) => {
    return (
        <table className="w-full hidden md:block">
            <thead className="bg-gray-200 border-2 border-gray-100">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Sn</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Task Name</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Due Date</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Due Time</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Priority</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Task Participants</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">status</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-center">
                {tasks.map((task)=>(
                    <tr key={task.id}>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{task.id}</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{task.taskName}</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{task.dueDate}</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{task.dueTime}</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{task.priority}</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{task.participants}</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap"> 
                            <span className="p-1.5 text-sm font-medium tracking-wider text-green-800 bg-green-200 rounded bg-opacity-50">{task.status}</span> 
                        </td>
                    </tr>    
                ))}
                
            </tbody>
        </table>
     );
}
 
export default Table;