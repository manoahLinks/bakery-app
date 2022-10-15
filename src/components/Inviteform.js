const Inviteform = () => {
    return ( 
        <form className="self-center text-gray-700 w-full md:w-9/12">
            <label className="font-semibold">Date</label><br></br>
            <input className="w-full shadow-lg mb-3 bg-white border-none" type="date" name="" id="" /><br></br>
            <label className="font-semibold">Email</label><br></br>
            <input type="email" className="w-full shadow-lg mb-3 bg-white border-none" /><br></br>
            <label className="font-semibold">Message</label><br></br>
            <input type="text" className="w-full shadow-lg mb-3 bg-white border-none"/><br></br>
            <label className="font-semibold">Portfolio</label><br></br>
            <select className="w-full shadow-lg mb-3 bg-white border-none">
                <option>Please select</option>
                <option value="">Cashier</option>
                <option value="">Store-keeper</option>
                <option value="">Marketer</option>
            </select><br></br>
            <label className="font-semibold">Salary</label><br></br>
            <input type="number" className="w-full shadow-lg mb-3 bg-white border-none" /><br></br>
            <input type="button" className="bg-green-800 px-3 w-full py-2 mt-3 cursor-pointer hover:bg-green-600 text-gray-200 font-semibold" value="Send Invite" />
        </form>
     );
}
 
export default Inviteform;