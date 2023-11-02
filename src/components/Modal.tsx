import {cloneElement, createContext, useContext, useState, ReactNode, ReactElement} from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick.ts';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

interface ModalProps {
    children: ReactNode;
}

interface OpenProps {
    children: ReactNode;
    opens: string;
}

interface WindowProps {
    children: ReactNode;
    name: string;
}

const ModalContext = createContext<any>(null);

export function Modal({ children }: ModalProps) {
    const [openName, setOpenName] = useState('');

    const close = () => setOpenName('');
    const open = setOpenName;

    return (
        <ModalContext.Provider value={{ openName, close, open }}>
            {children}
        </ModalContext.Provider>
    );
}

function Open({ children, opens: opensWindowName }: OpenProps) {
    const { open } = useContext(ModalContext);
    return cloneElement(children as ReactElement, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }: WindowProps) {
    const { openName, close } = useContext(ModalContext);
    const ref = useOutsideClick(close);

    if (name !== openName) return null;

    return createPortal(
        <div className='fixed top-0 transition-all duration-500 left-0 w-full h-full backdrop-blur-sm  bg-[rgba(255, 255, 255, 0.1)] z-1000 '>
            <div  className='fixed top-2/4 left-1/2 -translate-x-1/2 -translate-y-2/4 tra bg-gray-900 rounded-sm shadow-md px-3 py-4 transition-all duration-300'>
                <button ref={ref} onClick={close} className='absolute top-2 right-2 cursor-pointer bg-stone-100 rounded-full hover:bg-stone-50 transition-all duration-200'>
                    <HiXMark className="w-4 h-4 text-stone-900"/>
                </button>
                <div>
                    {cloneElement(children as ReactElement, { onCloseModal: close })}
                </div>
            </div>
        </div>,
        document.body
    );
}

Modal.Open = Open;
Modal.Window = Window;
