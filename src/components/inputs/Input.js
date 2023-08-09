import React from "react"
import { ReactComponent as Search } from "assets/icons/search.svg"
import { ReactComponent as Message } from "assets/icons/message.svg"

export default function Input({ id, name, placeholder, value, onChange, type, defaultValue }) {
    return (
        <div className="relative">
            <input
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                type={type}
                className={`
                h-[44px] pl-[38px] pr-[16px] text-gray_900 cursor-text text-16 w-full outline-0 border
                border-gray_300 font-inter font-normal rounded-[8px]
                `}
            />
            <div className="absolute top-0 h-full w-[40px] flex justify-center items-center">
                {type === 'email' ? <Message /> : ''}
                {type === 'search' ? <Search /> : ''}
            </div>
        </div>
    )
}