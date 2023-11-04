import {useSearchParams} from "react-router-dom";

interface FilterProps {
    filterField: string,
    options: {
        label: string;
        value: string;
    }[],

}
export function Filter({ filterField, options }: FilterProps) {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentFilter = searchParams.get(filterField) || options[0].value;

    function handleClick(value: string) {
        searchParams.set(filterField, value);
        setSearchParams(searchParams);
    }
    return (
        <div className='items-center bg-gray-950 text-white shadow-sm rounded-full  sm:px-3 flex gap-4'>
            {options.map((option) => (
                <button
                    className={`cursor-pointer bg-gray-950  font-medium ${option.value === currentFilter ? "text-red-600" : ""} text-sm py-0 md:py-2 px-1 transition-all duration-300 hover:text-gray-500`}
                    key={option.value}
                    onClick={() => handleClick(option.value)}
                    disabled={option.value === currentFilter}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}
