const NavBar = () => {
    return ( 
        <div className="w-full justify-between flex bg-zinc-300 p-3 shadow-md">
            <h1>LOGO</h1>
            <div className="flex">
                <a href="#" className="text-zinc-500 text-sm hover:text-zinc-700">Login</a>
                <a href="#" className="text-zinc-500 mx-5 text-sm hover:text-zinc-700">Sign Up</a>
            </div>
        </div>
     );
}
 
export default NavBar;