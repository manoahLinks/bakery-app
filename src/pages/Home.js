import React, {useState, useEffect} from "react";
import Table from "../components/Table";
import Tablegrid from "../components/Tablegrid"
import useFetch from "../useFetch";
import UserDashboard from "../components/UserDashboard";
import ProgressBar from "../components/ProgressBar";
import AlertBox from "../components/AlertBox";
import Services from "../components/Services";



const HomePage = () => {

    const {result, isPending, error} = useFetch('http://localhost:8002/tasks')

    return (  
        <main className="flex md:flex-row flex-col flex-1 h-screen overflow-scroll text-gray-700 bg-zinc-300 relative">
            <div className="grid grid-cols-1 grow h-screen md:w-9/12">
                <AlertBox />
                <div className="flex-1 grid md:grid-cols-2 grid-cols-1 md:justify-evenly">
                    <div className="bg-white basis-3/12 rounded-md shadow-lg m-2 shadow-zinc-400 flex p-2">
                        <div className="basis-3/4">
                            {<img className="w-11/12" src={require(`../assets/salesman-indicating-sales-growth.png`)} alt="" />}
                        </div>
                        <div className="flex flex-col justify-evenly basis-1/3">
                            <p className="text-xl text-blue-900">Check out today's sales achivements</p>
                            <button className=" text-white font-semibold p-2 rounded-full bg-blue-900 shadow hover:shadow-lg">Click Here</button>
                        </div>
                    </div>
                    <div className="basis-3/12 md:m-2 m-2 rounded bg-white shadow-lg shadow-zinc-400 p-2 text-center">
                        <h3>Chart showing sales profits</h3>
                    </div>
                    <Services></Services>
                    <div className="flex justify-evenly bg-white basis-3/12 md:m-2 m-2 rounded shadow-md text-xs text-center p-2 shadow-zinc-400">
                        <div className="m-2 p-2 items-center flex-col">
                            <div className="flex justify-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                                </svg>
                            </div>
                            <div className="border-b-2 border-yellow-500 py-2 text-sm">Staff Present</div>
                            <div className="py-2 text-xl font-semibold">500 +</div>
                        </div>
                        <div className="m-2 p-2 text-center flex-col">
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10">
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
            <div className="grid grid-cols-1 align-evenly md:w-3/12 md:block hidden">
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
