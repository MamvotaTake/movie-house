import {useSearchParams} from "react-router-dom";
import {Select} from "./Select.tsx";

interface SortByProps {
    options: {
        label: string;
        value: string;
    }[];
}

export function SortBy({ options }: SortByProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get('sortBy') || '';

    function handleChange(selectedValue: string) {
        searchParams.set('sortBy', selectedValue);
        setSearchParams(searchParams);
    }

    return (
        <Select value={sortBy} options={options} onChange={handleChange} />
    );
}
