import React from "react";
import {Modal} from "../../components/Modal.tsx";

type UserMenuProps = {
    item: {
        icon: React.ReactNode,
        name: string,
        count?: number,
        onClick?: () => void,
        type?: string,
    }
}
export function UserMenuItem({item}: UserMenuProps) {
    const {icon, name, count, onClick, type} = item;
    const backgroundColorClass = `bg-${type}-300`;

    return (
        <Modal>
            <Modal.Open opens={name}>
                <div onClick={onClick}
                     className="flex items-center justify-between mt-7 px-4 py-2 rounded-lg  hover:bg-gray-500 transition-all duration-700">
                    <span className="flex items-center text-lg gap-3"><span className="text-2xl fill-gray-100">{icon}</span> {name}</span>
                    <span className={`${backgroundColorClass}  text-300 text-lg font-semibold px-2 text-gray-900 rounded`}>{count}</span>
                </div>
            </Modal.Open>
            <Modal.Window name={name}>
                <div>{name}</div>
            </Modal.Window>
        </Modal>

    );
}
