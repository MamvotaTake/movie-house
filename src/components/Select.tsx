import React from "react";

interface SelectProps {
    value: string;
    options: {
        label: string;
        value: string;
    }[];
    onChange: (selectedValue: string) => void;
}

export function Select({ value, options, onChange, ...props }: SelectProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };

    return (
        <select
            value={value}
            {...props}
            onChange={handleChange}
            className="text-sm py-0 md:py-1.5 cursor-pointer outline-none text-gray-50 border rounded-full border-gray-400 font-sm shadow-sm"
        >
            {options?.map((option) => (
                <option className='text-sm focus:outline-red-500' key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}