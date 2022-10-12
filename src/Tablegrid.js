const Tablegrid = () => {
    return ( 
        <div className="grid grid-cols-1 gap-3 md:hidden w-full">
            <div className="bg-white space-y-3 rounded-lg shadow p-4">
                <div className="flex items-center space-x-2 text-sm">
                    <div>
                        <a href="#" className="text-blue-500 font-bold hover:underline">JJC12345678</a>
                    </div>
                    <div className="text-gray-500">12/12/2021</div>
                    <div>
                        <span className="p-1.5 text-sm font-medium tracking-wider text-yellow-800 bg-yellow-200 rounded bg-opacity-50">credit</span> 
                    </div>
                </div>
                <div className="text-sm text-gray-700">Mr Johnson Ogunlade</div>
                <div className="text-sm text-gray-700">Chocolate rings</div>
                <div className="text-sm text-yellow-700">67</div>
                <div className="text-sm font-bold text-black">67,000</div>
            </div>

            <div className="bg-white space-y-3 rounded-lg shadow p-4">
                <div className="flex items-center space-x-2 text-sm">
                    <div>
                        <a href="#" className="text-blue-500 font-bold hover:underline">JJC12345678</a>
                    </div>
                    <div className="text-gray-500">10/12/2021</div>
                    <div>
                        <span className="p-1.5 text-sm font-medium tracking-wider text-green-800 bg-green-200 rounded bg-opacity-50">paid</span> 
                    </div>
                </div>
                <div className="text-sm text-gray-700">Mr Marcus Jones</div>
                <div className="text-sm text-gray-700">Milky rings</div>
                <div className="text-sm text-yellow-700">67</div>
                <div className="text-sm font-bold text-black">167,000</div>
            </div>
        </div>
     );
}
 
export default Tablegrid;