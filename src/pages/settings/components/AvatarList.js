import React from "react";

export default function AvatarList({ users }) {
    const firstFiveItems = users.filter((item, i) => i < 5)
    const numberOfHiddenUsers = users.length - firstFiveItems.length

    return (
        <td className="text-14 text-gray_500 font-normal py-[16px]">
            <div className="relative flex items-center">
                {firstFiveItems.map((user, i) =>
                    <img
                        key={user.id}
                        src={user.profile}
                        width={24}
                        height={24}
                        alt="profile"
                        className={`border border-white rounded-full shrink-0 object-cover w-[24px] h-[24px] ${i !== 0 ? 'ml-[-8px]' : ''}`}
                    />
                )}
                {users.length > 5 &&
                    <div className="flex justify-center items-center border border-white rounded-full shrink-0 object-cover w-[24px] h-[24px] ml-[-8px] bg-gray_50">
                        <p className="text-12 text-gray_600 font-medium">+{numberOfHiddenUsers}</p>
                    </div>
                }
            </div>
        </td>
    )
}