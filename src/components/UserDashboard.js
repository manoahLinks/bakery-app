const UserDashboard = () => {
    return ( 
        <div className="flex flex-col bg-white text-sm rounded shadow-md">
            <img className="w-3/12 object-cover self-center" src={require('../assets/IMG_20220218_180539.jpg')} alt="" />
            <div className="mt-2 self-center mb-2">
                <span>@karenJohnson</span>
            </div>
            <div className='flex justify-evenly text-black'>
                <span>Department</span>
                <span>Sales</span>
            </div>
            <div className='flex flex-col text-center'>
                <div className='flex justify-evenly'>
                    <p className='text-gray-500'>Ongoing Tasks</p>
                    <span>5</span>
                </div>

                <div className='flex justify-evenly'>
                    <span className='text-gray-500'>Days Present</span>
                    <span>20</span>
                </div>
                
                <div className='flex justify-evenly'>
                    <span className='text-gray-500'>Wallet Balance</span>
                    <span className='text-green-500'>N 7,800</span>
                </div>
            </div>
        </div>
     );
}
 
export default UserDashboard;