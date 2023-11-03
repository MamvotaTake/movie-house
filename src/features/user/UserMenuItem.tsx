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
                     className="mt-7 flex items-center justify-between rounded-lg px-4 py-2 transition-all duration-700 hover:bg-gray-500">
                    <span className="flex items-center gap-3 text-lg"><span className="fill-gray-100 text-2xl">{icon}</span> {name}</span>
                    <span className={`${backgroundColorClass}  text-300 text-lg font-semibold px-2 text-gray-900 rounded`}>{count}</span>
                </div>
            </Modal.Open>
            <Modal.Window name={name}>
                <div>{name}</div>
            </Modal.Window>
        </Modal>

    );
}
