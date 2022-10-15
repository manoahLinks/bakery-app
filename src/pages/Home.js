import React, {useState, useEffect} from "react";
import Table from "../components/Table";
import Tablegrid from "../components/Tablegrid"

const NewTemplate = () => {
    return (  
        <main className="flex text-2xl flex-1 h-screen text-gray-700">
            <div className="basis-3/4 bg-gray-100 flex flex-col grow">
                <div className="flex-1 grid md:grid-cols-2 md:justify-evenly bg-gray-100">
                    <div className="bg-gray-200 basis-3/12 md:m-2 m-2 rounded shadow-md flex p-2">
                        <div>
                            {<img className="" src={require(`../assets/salesman-indicating-sales-growth.png`)} alt="" />}
                        </div>
                        <div className="flex flex-col justify-evenly">
                            <p className="text-sm text-semibold">Check out today's sales achivements</p>
                            <button className="text-sm bg-green-500 text-white rounded shadow p-1 hover:shadow-md hover:bg-green-400">Click Here</button>
                        </div>
                    </div>
                    <div className="bg-gray-200 basis-3/12 md:m-2 m-2 rounded shadow-md"></div>
                    <div className="flex bg-gray-200 basis-3/12 justify-evenly md:m-2 m-2 rounded shadow-md text-xs text-center p-2">
                        <div className="m-2 p-2 items-center">
                            <div className=" flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                </svg>
                            </div>
                            <div className="border-b border-zinc-500 py-2">Production Target</div>
                            <div className="py-2">Choco <span className="font-semibold">21</span> bags</div>
                        </div>
                        <div className="m-2 p-2 text-center flex-col">
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                                </svg>
                            </div>
                            <div className="border-b border-blue-500 py-2">Current Production</div>
                            <div className="py-2">Choco <span className="font-semibold">15</span> bags</div>
                        </div>
                            <span className="self-center justify-end">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                    </div>

                    <div className="flex justify-evenly bg-gray-200 basis-3/12 md:m-2 m-2 rounded shadow-md text-xs text-center p-2">
                        <div className="m-2 p-2 items-center flex-col">
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                                </svg>
                            </div>
                            <div className="border-b border-yellow-500 py-2">Loafs Recieved</div>
                            <div className="py-2">8,978 loafs</div>
                        </div>
                        <div className="m-2 p-2 text-center flex-col">
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                                </svg>
                            </div>
                            <div className="border-b border-green-500 py-2">Loafs dispatched</div>
                            <div className="py-2">7,000 loafs</div>
                        </div>
                            <span className="self-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                    </div>
                </div>
                <div className="flex-1 flex bg-gray-100 m-2 shadow-md justify-center w-full rounded">
                    <Table></Table>
                    <Tablegrid></Tablegrid>            
                </div>
            </div>
            <div className="basis-1/4 bg-gray-100 flex flex-col md:block hidden">
                <div className="flex-1 flex bg-gray-200">

                </div>
                <div className="flex-1 flex bg-gray-300">
                    

                </div>
                <div className="flex-1 flex bg-gray-900">

                </div>
            </div>
            
        </main>
     );
};
 
export default NewTemplate;
