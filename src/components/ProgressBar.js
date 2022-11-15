const ProgressBar = () => {
    return ( 
        <div className="flex flex-col justify-around m-5 bg-white rounded shadow-lg">
            <div className="text-sm bg-zinc-300 text-center p-2">Monthly Progress</div>
            <div className="flex flex-col p-2.5">
                <div className="flex justify-between">
                    <h4 className="text-xs">Sales target</h4>
                    <p className="text-sm text-semibold">90%</p>
                </div>
                <input min={0} max={100} step={10} value={90} className="appearance-none h-3 bg-sky-500" type="range" name="" />
            </div>

            <div className="flex flex-col p-2.5">
                <div className="flex justify-between">
                    <h4 className="text-xs">Production target</h4>
                    <p className="text-sm text-semibold">72%</p>
                </div>
                <input min={0} max={100} step={10} value={72} className="appearance-none h-3 bg-sky-500" type="range" name="" id="" />
            </div>

            <div className="flex flex-col p-2.5">
                <div className="flex justify-between">
                    <h4 className="text-xs">personal task completed</h4>
                    <p className="text-sm text-semibold">78%</p>
                </div>
                <input min={0} max={100} step={10} value={78} className="appearance-none h-3 bg-sky-500 rounded-full" type="range" name="" id="" />
            </div>
            
        </div>
     );
}
 
export default ProgressBar;