import React, {useState, useEffect} from "react";
import Table from "../components/Table";
import Tablegrid from "../components/Tablegrid"
import useFetch from "../useFetch";
import UserDashboard from "../components/UserDashboard";
import ProgressBar from "../components/ProgressBar";
import AlertBox from "../components/AlertBox";


const HomePage = () => {

    const {result, isPending, error} = useFetch('http://localhost:8002/tasks')

    return (  
        <main className="flex md:flex-row flex-col flex-1 h-screen text-gray-700 relative">
            <div className="grid grid-cols-1 grow h-screen overflow-scroll md:w-9/12">
                <AlertBox />
                <div className="flex-1 grid md:grid-cols-2 grid-cols-1 md:justify-evenly">
                    <div className="bg-white basis-3/12 m-2 rounded shadow-lg flex p-5">
                        <div className="basis-3/4">
                            {<img className="w-11/12" src={require(`../assets/salesman-indicating-sales-growth.png`)} alt="" />}
                        </div>
                        <div className="flex flex-col justify-evenly basis-1/3">
                            <p className="text-xl font-light">Check out today's sales achivements</p>
                            <button className=" text-green-500 rounded-full border-2 p-2 border-green-200 shadow hover:shadow-lg">Click Here</button>
                        </div>
                    </div>
                    <div className="bg-white basis-3/12 md:m-2 m-2 rounded shadow-lg"></div>
                    <div className="flex bg-white basis-3/12 justify-evenly md:m-2 m-2 rounded shadow-lg text-xs text-center p-2">
                        <div className="m-2 p-2 items-center">
                            <div className=" flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                </svg>
                            </div>
                            <div className="border-b-2 border-zinc-500 py-2 text-sm">Task Completed</div>
                            <div className="py-2 text-xl text-gray-500 font-semibold">1,000 +</div>
                        </div>
                        <div className="m-2 p-2 text-center flex-col">
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                                </svg>
                            </div>
                            <div className="border-b-2 border-blue-500 py-2 text-sm">On-going Tasks</div>
                            <div className="py-2 text-xl font-semibold">200 +</div>
                        </div>
                    </div>

                    <div className="flex justify-evenly bg-white basis-3/12 md:m-2 m-2 rounded shadow-md text-xs text-center p-2">
                        <div className="m-2 p-2 items-center flex-col">
                            <div className="flex justify-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                                </svg>
                            </div>
                            <div className="border-b-2 border-yellow-500 py-2 text-sm">Staff Present</div>
                            <div className="py-2 text-xl font-semibold">500 +</div>
                        </div>
                        <div className="m-2 p-2 text-center flex-col">
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                                </svg>
                            </div>
                            <div className="border-b-2 border-green-500 text-sm py-2">Estimated wages</div>
                            <div className="py-2 text-xl font-semibold">N 650,000</div>
                        </div>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1">
                        {!result && error && <div>Tasks information could not be fetched</div>}
                        {isPending && <div className="text-sm text-gray-800">Loading...</div>}
                        {result &&  <Table  tasks = {result} />}
                        {result && <Tablegrid tasks={result} />}            
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 align-evenly md:w-3/12 overflow-scroll">
                <UserDashboard />
                <div className="flex border-2 border-zinc-200  flex-col m-5 bg-white text-sm rounded shadow-lg text-center">
                   <h1 className="p-2 text-white">Top priority Tasks</h1>
                   <div className="p-5">
                        <img src="" alt="" />
                        <div>
                            <span>Manoah Luka</span>
                            <span>Active</span>
                        </div>
                   </div>
                </div>
                <ProgressBar />
            </div>
            
        </main>
     );
};
 
export default HomePage;
