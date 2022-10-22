const Tasksummary = ({users}) => {
    return ( 
        <div className="flex-1 flex flex-col text-sm">
            <h2 className='mb-2 text-semi-bold text-gray-800'>Select Task participants</h2>
            {users.map((user)=>(
                <div key={user.id} className="basis-1/3 flex items-center justify-between mb-1 p-2 shadow hover:bg-gray-200">

                    <img className="h-12 w-12 object-cover rounded-full" src={require('../assets/IMG_20220218_180539.jpg')} alt="" />
                    <a className='flex flex-col items-center' href="">
                        <span className='text-semibold text-xs text-gray-600'>{user.email}</span>
                        <span className='text-red-500 text-xs block'>{user.department}</span>
                    </a>
                    <input className='' type="checkbox" name="" id="" />
                </div>
            ))}
        </div>
     );
}
 
export default Tasksummary;