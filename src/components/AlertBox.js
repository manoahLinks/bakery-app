import { useState } from "react";

const AlertBox = () => {

    return (
        <div className="m-1 p-2 border border-green-500 rounded-md bg-opacity-50 bg-green-200 flex justify-between">
            <div className="inline-block text-sm text-zinc-700">
                <p>This is an alert box,  all success & error messages will be prompted here !</p>
            </div>
            <span className="text-zinc-700 inline-block cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>
        </div>
      );
}
 
export default AlertBox;