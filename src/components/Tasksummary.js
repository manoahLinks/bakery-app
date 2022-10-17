const Tasksummary = () => {
    return ( 
        <div className="flex-1 flex flex-col text-sm">
            <h2 className='mb-1 text-semi-bold text-gray-800'>Select Task participants</h2>
            <div className="basis-1/3 flex m-2 items-center justify-between p-2 shadow hover:bg-gray-200">
                <img className="w-3/12" src={require('../assets/IMG_20220218_180539.jpg')} alt="" />
                <a className='flex flex-col items-center' href="">
                    <span className='text-semibold text-gray-600'>kunanzang24</span>
                    <span className='text-red-500 text-xs block'>marketing</span>
                </a>
                <input className='' type="checkbox" name="" id="" />
            </div>

            <div className="basis-1/3 flex m-2 items-center justify-between p-2 shadow hover:bg-gray-200">
                <img className="w-3/12" src={require('../assets/IMG_20220218_180539.jpg')} alt="" />
                <a className='flex flex-col items-center' href="">
                    <span className='text-semibold text-gray-600'>kunanzang24</span>
                    <span className='text-yellow-500 text-xs block'>Store</span>
                </a>
                <input className='' type="checkbox" name="" id="" />
            </div>

            <div className="basis-1/3 flex m-2 items-center justify-between p-2 shadow hover:bg-gray-200">
                <img className="w-3/12" src={require('../assets/IMG_20220218_180539.jpg')} alt="" />
                <a className='flex flex-col items-center' href="">
                    <span className='text-semibold text-gray-600'>kunanzang24</span>
                    <span className='text-green-500 text-xs block'>Sales</span>
                </a>
                <input className='' type="checkbox" name="" id="" />
            </div>
    </div>
     );
}
 
export default Tasksummary;