const UserDashboard = () => {
    return ( 
        <div className="grid  grid-cols-1 bg-white text-sm rounded border-zinc-200 border-2 shadow-md p-2">
            <img className="w-3/12 object-cover self-center rounded" src={require('../assets/IMG_20220218_180539.jpg')} alt="" />
            <div className="self-center ">
                <span>@karenJohnson</span>
            </div>
            
            <div className='grid grid-cols-2 justify-between text-center p-2 rounded'>
                <div className='text-left flex flex-col bg-zinc-200 p-2'>
                    <h4 className='p-1'>Email</h4>
                    <h4 className='p-1'>Task Completed</h4>
                    <h4 className='p-1'>Ongoing Tasks</h4>
                </div>
                <div className='flex flex-col bg-zinc-100 p-2'>
                    <h4 className='p-1'>manoahluka@gmail.com</h4>
                    <h4 className='p-1'></h4>
                </div>
            </div>
        </div>
     );
}
 
export default UserDashboard;