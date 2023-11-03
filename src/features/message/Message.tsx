import {AiOutlineInbox, AiOutlineSetting} from "react-icons/ai";
import {MdArrowDropDown, MdArrowDropUp} from "react-icons/md";
import {MessageItem} from "./MessageItem.tsx";
import {EmptyMessages} from "./EmptyMessage.tsx";
import {useState} from "react";

const messages = [
    {
    "id": 2,
    "sender": "Emily",
    "content": "Hey, did you watch the latest episode?",
    "timestamp": "2022-01-02T15:30:00Z",
        "count": 5
    },
    {
        "id": 3,
        "sender": "Alex",
        "content": "I'm running late for the meeting. Can you start without me?",
        "timestamp": "2022-01-03T09:15:00Z",
        "count": 2
    },
    {
        "id": 1,
        "sender": "John",
        "content": "Hello, how are you?",
        "timestamp": "2022-01-01T10:00:00Z",
        "count": 1
    }
]



export function Message() {
    const [isOpen, setIsOpen] = useState(true)


    function handleClick() {
        setIsOpen(!isOpen)
    }

    if (!messages.length) return <EmptyMessages/>;
    return (
        <div className="flex-shrink-0 w-full h-full bg-[#eff6fc] " >
            <div className='relative scroll-me-36 h-full w-96 flex-shrink-0 bg-white p-6 rounded-[25px]'>
                <h1 className='flex items-center justify-between'>
                    <span className='flex items-center gap-2 text-sm font-semibold text-gray-800'>
                        <AiOutlineInbox/>
                            Inbox
                        <span onClick={handleClick}>
                            {isOpen ? <MdArrowDropUp className='flex items-center fill-gray-600 cursor-pointer text-xl'/> : <MdArrowDropDown className='flex items-center fill-gray-600 cursor-pointer text-xl'/>}
                        </span>
                    </span>
                    <span>
                        <AiOutlineSetting className='flex items-center fill-gray-600 cursor-pointer text-xl'/>
                    </span>
                </h1>
                {isOpen && messages.map((message) => (
                        <MessageItem key={message.id} message={message}/>
                ))}
            </div>
            <div className='absolute bottom-0 left-0 w-full h-7 bg-gray-950/70'/>
        </div>

    );
}
