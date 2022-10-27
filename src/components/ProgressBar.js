const ProgressBar = () => {
    return ( 
        <div className=" flex-1 flex flex-col justify-around p-5 bg-gray-200 rounded shadow">
            <div className="text-sm font-semibold">Monthly Progress</div>
            <div className="flex flex-col mb-2">
                <div className="flex justify-between">
                    <h4 className="text-xs">Sales target</h4>
                    <p className="text-sm text-semibold">90%</p>
                </div>
                <input min={0} max={100} step={10} value={90} className="appearance-none bg-sky-500" type="range" name="" />
            </div>

            <div className="flex flex-col mb-2">
                <div className="flex justify-between">
                    <h4 className="text-xs">Production target</h4>
                    <p className="text-sm text-semibold">72%</p>
                </div>
                <input min={0} max={100} step={10} value={72} className="appearance-none bg-gray-100" type="range" name="" id="" />
            </div>

            <div className="flex flex-col mb-2">
                <div className="flex justify-between">
                    <h4 className="text-xs">personal task completed</h4>
                    <p className="text-sm text-semibold">78%</p>
                </div>
                <input min={0} max={100} step={10} value={78} className="appearance-none bg-sky-500" type="range" name="" id="" />
            </div>
            
        </div>
     );
}
 
export default ProgressBar;