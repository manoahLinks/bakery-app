const Inviteform = () => {
    return ( 
        <form className="self-center">
            <label className="mt-2">Date</label><br></br>
            <input className="w-9/12 rounded-lg shadow" type="date" name="" id="" /><br></br>
            <label >Email</label><br></br>
            <input type="email" className="w-9/12 rounded-lg shadow" /><br></br>
            <label>Message</label><br></br>
            <input type="text" className="w-9/12 rounded-lg shadow"/><br></br>
            <label>Portfolio</label><br></br>
            <select className="w-9/12 rounded-lg shadow mb-2">
                <option>Please select</option>
                <option value="">Cashier</option>
                <option value="">Store-keeper</option>
                <option value="">Marketer</option>
            </select><br></br>
            <input type="button" className="bg-green-800 px-3 py-2 mt-2 rounded cursor-pointer hover:bg-green-600 text-gray-200 font-semibold" value="send Invite" />
        </form>
     );
}
 
export default Inviteform;