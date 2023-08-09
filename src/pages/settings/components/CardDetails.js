import React, { useState } from "react";
import { ReactComponent as EmptyCircleCheckbox } from "assets/icons/empty-circle-checkbox.svg";
import { ReactComponent as CheckedCircleCheckbox } from "assets/icons/checked-circle-checkbox.svg";

export default function CardDetails({ icon, expiry, title, className }) {
    const [selected, setSelected] = useState(false)

    return (
        <div
            className={`
            flex w-full p-[16px] border rounded-[8px] cursor-pointer ${className}
            ${selected ? 'border-primary_300 bg-primary_50' : 'border-gray_200'}
            `}
            onClick={() => setSelected(!selected)}
        >
            {icon}
            <div className="ml-[12px] flex justify-between w-full">
                <div>
                    <p className={`text-14 font-medium ${selected ? 'text-primary_800' : 'text-gray_700'}`}>{title}</p>
                    <p className={`text-14 font-normal ${selected ? 'text-primary_600' : 'text-gray_500'}`}>Expiry {expiry}</p>
                    <div className="flex mt-[8px]">
                        <p className={`text-14 font-medium mr-[12px] cursor-pointer ${selected ? 'text-primary_500' : 'text-gray_500'}`}>Set as default</p>
                        <p className="text-14 text-primary_700 font-medium cursor-pointer mr-[12px]">Edit</p>
                    </div>
                </div>
                {selected ? <CheckedCircleCheckbox/> : <EmptyCircleCheckbox/>}
            </div>
        </div>
    )
}