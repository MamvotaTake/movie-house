import {BiMessageRoundedEdit} from "react-icons/bi";

export function EmptyMessages() {
    return <div>
        <BiMessageRoundedEdit/>
        <div className='text-2xl font-bold text-gray-800'>No messages</div>
    </div>
}