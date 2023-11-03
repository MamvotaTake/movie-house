import {RxMagnifyingGlass} from "react-icons/rx";


export function Search() {

    // const inputEl = useRef(null);
    //
    // useKey("Enter", function () {
    // if(document.activeElement === inputEl.current) return;
    //
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    //     inputEl.current.focus();
    // setQuery("");
    // })
    return <div className="relative">
        <input  type="text" placeholder="Search for a movie" className="text-stone-300 input"/>
        <RxMagnifyingGlass className="absolute top-1/2 right-2 -translate-y-1/2 text-2xl text-gray-400"/>
    </div>;
}