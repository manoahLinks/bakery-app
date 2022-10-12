import Inviteform from "./Inviteform"

const Modal = ({setModalOn, setChoice}) => {

    const handleOkClick = ()=>{
        setModalOn(true)
    }
    const handleCancelClick = ()=>{
        setModalOn(false)
    }

    return ( 
        <div className="bg-zinc-200 opacity-90 fixed inset-0 z-50 flex flex-col justify-center items-center">
                
            <div className="flex flex-col w-9/12">
                <div className="flex self-end">
                    <span className="text-gray-800" onClick={handleCancelClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                </div>
                
                <div className="flex">
                    
                    <div className="bg-gray-300 px-6 py-6 flex-1 flex-col justify-center items-center rounded-lg">
                        <Inviteform></Inviteform>
                    </div>
                    <div className="bg-gray-400 flex-1 rounded-lg px-6 py-6">
                        <h4>Invite Summary</h4>
                    </div>

                </div>

            </div>

        </div>
     );
}
 
export default Modal;