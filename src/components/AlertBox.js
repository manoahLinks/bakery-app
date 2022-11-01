const AlertBox = () => {

    return (
        <div className="m-2 p-3 bg-green-100 border rounded border-green-500 flex justify-between">
            <div className="inline-block text-xl text-green-700">
                <p>This is an alert box, you can recieve all alert messages here</p>
            </div>
            <span className="text-green-700 inline-block cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>
        </div>
      );
}
 
export default AlertBox;