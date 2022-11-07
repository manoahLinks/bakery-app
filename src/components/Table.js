const Table = ({tasks}) => {
    return (
        <div className="hidden md:block flex flex-col border grow m-2 p-2">
            <div className="flex justify-between bg-zinc-100 p-2 text-left">
                <h4 className="">Sn</h4>
                <h4 className="">Task Name</h4>
                <h4>Priority</h4>
                <h4>status</h4>
                <h4>Action</h4>
            </div>
            {tasks.map((task)=>(
            <div className="flex p-2 justify-between hover:bg-zinc-100">
                    
                <h4>{task.id}</h4>
                <h4>{task.taskName}</h4>
                <h4>{task.priority}</h4>
                <h4> 
                    <span>{task.status}</span> 
                </h4>
                <h4>
                    <span>
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6`}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                    </span>
                </h4>
            </div>    
            ))}    
        </div>
     );
}
 
export default Table;