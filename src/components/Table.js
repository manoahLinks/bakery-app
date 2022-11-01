const Table = ({tasks}) => {
    return (
        <table className="w-full hidden md:block ">
            <thead className="bg-gray-200">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-center">Sn</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-center">Task Name</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-center">Due Date</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-center">Due Time</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-center">Priority</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-center">Task Participants</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-center">status</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-center">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-center">
                {tasks.map((task)=>(
                    <tr key={task.id} className="hover:bg-gray-100">
                        <td className="p-2 text-sm text-gray-700 whitespace-nowrap">{task.id}</td>
                        <td className="p-2 text-sm text-gray-700 whitespace-nowrap">{task.taskName}</td>
                        <td className="p-2 text-sm text-gray-700 whitespace-nowrap">{task.dueDate}</td>
                        <td className="p-2 text-sm text-gray-700 whitespace-nowrap">{task.dueTime}</td>
                        <td className="p-2 text-sm text-gray-700 whitespace-nowrap">{task.priority}</td>
                        <td className="p-2 text-sm text-gray-700 whitespace-nowrap">{task.participants}</td>
                        <td className="p-2 text-sm text-gray-700 whitespace-nowrap"> 
                            <span className="p-1.5 text-sm font-medium tracking-wider text-green-800 bg-green-200 rounded bg-opacity-50">{task.status}</span> 
                        </td>
                        <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                            <span className="cursor-pointer">
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6  ${!open && "rotate-180"}`}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                                </svg>
                            </span>
                        </td>
                    </tr>    
                ))}
                
            </tbody>
        </table>
     );
}
 
export default Table;