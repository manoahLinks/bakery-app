import Taskform from "./Taskform"
import Tasksummary from "./Tasksummary"
import useFetch from "../useFetch"

const Modal = ({setModalOn, setChoice}) => {

    const {result, isPending, error} = useFetch('http://localhost:8002/users')

    const handleOkClick = ()=>{
        setModalOn(true)
    }
    const handleCancelClick = ()=>{
        setModalOn(false)
    }

    return ( 
        <div className="bg-zinc-200 opacity-full fixed inset-0 z-50 flex flex-col justify-center items-center">
                
            <div className="flex flex-col md:w-9/12">
                <div className="flex self-end">
                    <span className="text-gray-800" onClick={handleCancelClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                </div>
                
                <div className="flex flex-col md:flex-row w-full">
                    
                    <div className="bg-gray-300 flex-1 basis-3/4 flex items-center justify-center p-6">
                        <Taskform></Taskform>
                    </div>
                    <div className="bg-white flex-1 basis-1/4 px-6 py-6">
                        {isPending && <div>Loading...</div>}
                        {result && <Tasksummary users = {result} />}
                    </div>

                </div>

            </div>

        </div>
     );
}
 
export default Modal;