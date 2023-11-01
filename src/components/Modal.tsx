import {
    cloneElement,
    createContext,
    PropsWithChildren,
    ReactElement, ReactNode,
    useContext,
    useState
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

type ModalProps = PropsWithChildren<{
    close: () => void;
    open: (name: string) => void;
    openName: string;
}>;

const ModalContext = createContext({} as ModalProps);


export function Modal({ children }: PropsWithChildren<{children: ReactNode}>) {
    const [openName, setOpenName] = useState("");

    const close = () => setOpenName("");
    // const open =  openName;


    return (
        <ModalContext.Provider value={{ openName, open, close }}>
            {children}
        </ModalContext.Provider>
    );
}

function Open({ opens: opensWindowName, children }: PropsWithChildren<{ opens: string}>) {
    const { open } = useContext(ModalContext);

    return cloneElement(children as ReactElement, {
        onClick: () => open(opensWindowName),
    });
}

function Window({ children, name }: PropsWithChildren<{ name: string }>) {
    const { openName, close } = useContext(ModalContext);

    if (name !== openName) return null;

    return createPortal(
        <div className="fixed top-0 transition-all duration-500 left-0 w-full h-full backdrop-blur-sm bg-[rgba(255, 255, 255, 0.1)] z-1000">
            <div className="fixed top-2/4 left-1/2 -translate-x-1/2 -translate-y-2/4 tra bg-gray-50 rounded-sm shadow-md px-3 py-4 transition-all duration-300">
                <button

                    onClick={close}
                    className="absolute top-2 right-2 cursor-pointer bg-yellow-500 rounded-full hover:bg-yellow-300 transition-all duration-200"
                >
                    <HiXMark className="w-4 h-4 text-stone-100" />
                </button>
                <div>{cloneElement(children as ReactElement, { onCloseModal: close })}</div>
            </div>
        </div>,
        document.body
    );
}

Modal.Open = Open;
Modal.Window = Window;