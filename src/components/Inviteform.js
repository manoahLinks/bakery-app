const Inviteform = () => {
    return (
        <div className="self-center text-gray-700 p-2 w-full md:w-9/12 flex flex-col">
            <h2 className="text-xl mb-5 font-semibold text-blue-900">Send an invite</h2>
            <form className="p-2">
                <input type="email" className="w-full mb-2"  placeholder="enter email"/><br></br>
                <input type="text" className="w-full mb-2" placeholder="type Message"/><br></br>
                <select className="mb-2" placeholder="Department">
                    <option>Please select</option>
                    <option value="">Cashier</option>
                    <option value="">Store-keeper</option>
                    <option value="">Marketer</option>
                </select><br></br>
                <input type="number" className="w-full" placeholder="Salary" /><br></br>
                <input type="button" className="p-2 mt-3 cursor-pointer bg-blue-900 font-semibold text-white rounded-md" value="Send Invite" />
            </form>
        </div> 
        
     );
}
 
export default Inviteform;