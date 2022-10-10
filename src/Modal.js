const Modal = ({setModalOn, setChoice}) => {

    const handleOkClick = ()=>{
        setModalOn(true)
    }
    const handleCancelClick = ()=>{
        setModalOn(false)
    }

    return ( 
        <div className="bg-zinc-200 opacity-80 fixed inset-0 z-50">
                <span className="text-red-800" onClick={handleCancelClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
            <div className="flex h-screen justify-center items-center">
            
                <div className="md:flex basis-3/4 h-1/2 bg-white">
                    <div className="bg-green-200 flex-1">

                    </div>
                    <div className="bg-gray-400 flex-1">

                    </div>

                </div>

            </div>

        </div>
     );
}
 
export default Modal;