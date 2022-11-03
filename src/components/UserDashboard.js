const UserDashboard = () => {
    return ( 
        <div className="flex flex-col bg-white text-sm rounded shadow-md m-5 p-2">
            <img className="w-3/12 object-cover self-center p-2 shadow-lg" src={require('../assets/IMG_20220218_180539.jpg')} alt="" />
            <div className="mt-2 self-center mb-2">
                <span>@karenJohnson</span>
            </div>
            
            <div className='flex flex-col text-center bg-zinc-200 p-5 rounded'>

                <div className='flex justify-between text-black'>
                    <span>Department:</span>
                    <span>Sales</span>
                </div>

                <div className='flex justify-between'>
                    <p className='text-gray-500'>Ongoing Tasks:</p>
                    <span>5</span>
                </div>

                <div className='flex justify-between'>
                    <span className='text-gray-500'>Days Present:</span>
                    <span>20</span>
                </div>
                
                <div className='flex justify-between'>
                    <span className='text-gray-500'>Wallet Balance:</span>
                    <span className='text-green-500'>N 7,800</span>
                </div>
            </div>
        </div>
     );
}
 
export default UserDashboard;