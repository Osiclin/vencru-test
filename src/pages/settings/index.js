import React, { useState } from "react"
import { ReactComponent as Download } from "assets/icons/download.svg"
import { ReactComponent as ArrowDown } from "assets/icons/arrow-down.svg"
import { ReactComponent as Visa } from "assets/icons/visa-card.svg"
import { ReactComponent as Master } from "assets/icons/master-card.svg"
import { ReactComponent as EmptySquareCheckbox } from "assets/icons/empty-square-checkbox.svg"
import { billing_history } from "mocks/settings"
import Status from "components/status/Status"
import AvatarList from "./components/AvatarList"
import CardDetails from "./components/CardDetails"
import DotCheckbox from "components/checkbox/DotCheckbox"
import Input from "components/inputs/Input"

export default function Settings() {
    const [email, setEmail] = useState('')
    const tabs = ['My details', 'Profile', 'Password', 'Team', 'Plan', 'Billing', 'Notifications', 'Integrations', 'API']

    return (
        <section className="font-inter">
            <div className="mb-[24px]">
                <h1 className="text-24 sm:text-30 text-gray_900 font-medium mb-[4px]">Settings</h1>
                <p className="text-16 text-gray_500 font-normal">Manage your team and preferences here.</p>
            </div>
            <div className="overflow-x-auto no-scrollbar -mx-[22px] sm:-mx-0">
                <ul className="flex mb-[32px] text-14 text-gray_700 font-medium bg-white border border-gray_300 w-fit rounded-[8px] shadow-sm tabs">
                    {tabs.map((tab, i) =>
                        <li
                            key={i}
                            className={`
                            px-[16px] py-[10px] hover:bg-gray_50 whitespace-nowrap cursor-pointer
                            ${tabs.length !== (i + 1) ? 'border-r border-r-gray_300' : ''}
                            `}
                        >
                            {tab}
                        </li>
                    )}
                </ul>
            </div>
            <div className="border-b border-b-gray_200 pb-[20px]">
                <h2 className="text-18 text-gray_900 font-medium mb-[4px]">Payment method</h2>
                <p className="text-14 text-gray_500 font-normal">Update your billing details and address.</p>
            </div>
            <div className="lg:flex pt-[24px] pb-[20px] border-b border-b-gray_200">
                <div className="w-[230px] shrink-0 mr-[32px] mb-[20px] lg:mb-0">
                    <h2 className="text-14 text-gray_700 font-medium mb-[4px]">Contact email</h2>
                    <p className="text-14 text-gray_500 font-normal">Where should invoices be sent?</p>
                </div>
                <div className="w-full">
                    <div className="flex text-14 mb-[16px]">
                        <DotCheckbox
                            onClick={() => setEmail('account')}
                            selected={email === 'account'}
                        />
                        <div className="ml-[8px] mt-[-3px]">
                            <p className="text-gray_700 font-medium">Send to my account email</p>
                            <p className="text-gray_500 font-normal">olivia@untitledui.com</p>
                        </div>
                    </div>
                    <div className="flex text-14">
                        <DotCheckbox
                            onClick={() => setEmail('alternative')}
                            selected={email === 'alternative'}
                        />
                        <div className="ml-[8px] mt-[-3px] w-full">
                            <p className="text-gray_700 font-medium mb-[12px]">Send to an alternative email</p>
                            <div className="max-w-[488px]">
                                <Input type="email" defaultValue="billing@untitledui.com" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex pt-[24px] mb-[32px]">
                <div className="w-[230px] shrink-0 mr-[32px] mb-[20px] lg:mb-0">
                    <h2 className="text-14 text-gray_700 font-medium mb-[4px]">Card details</h2>
                    <p className="text-14 text-gray_500 font-normal">Select default payment method.</p>
                </div>
                <div className="w-full">
                    <CardDetails
                        icon={<Visa />}
                        title="Visa ending in 1234"
                        expiry="06/2024"
                        className="mb-[12px]"
                    />
                    <CardDetails
                        icon={<Master />}
                        title="Master ending in 1234"
                        expiry="06/2024"
                        className="mb-[16px]"
                    />
                    <p className="text-14 text-gray_500 font-medium cursor-pointer">+ Add new payment method</p>
                </div>
            </div>
            <div>
                <div className="sm:flex justify-between items-center mb-[24px]">
                    <h2 className="text-18 text-gray_900 font-medium mb-[16px] sm:mb-0">Billing history</h2>
                    <button className="text-14 text-gray_700 font-medium border border-gray_300 rounded-[8px] outline-0 px-[16px] py-[10px]">
                        <Download className="inline mr-[8px]" />
                        <span>Download all</span>
                    </button>
                </div>
                <div className="border border-gray_200 rounded-[8px] shadow-sm overflow-x-auto -mx-[22px] sm:-mx-0">
                    <table className="w-full min-w-[700px]">
                        <thead>
                            <tr className="bg-gray_50">
                                <th className="text-left text-12 text-gray_500 font-medium pl-[24px] py-[12px] w-[20px] pr-[12px]"><EmptySquareCheckbox className="cursor-pointer" /></th>
                                <th className="text-left text-12 text-gray_500 font-medium py-[12px]">Invoice <ArrowDown className="inline cursor-pointer" /></th>
                                <th className="text-left text-12 text-gray_500 font-medium py-[12px]">Amount</th>
                                <th className="text-left text-12 text-gray_500 font-medium py-[12px]">Date</th>
                                <th className="text-left text-12 text-gray_500 font-medium py-[12px]">Status</th>
                                <th className="text-left text-12 text-gray_500 font-medium py-[12px]">Users on plan</th>
                                <th className="text-left text-12 text-gray_500 font-medium pr-[24px] py-[12px]"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {billing_history.map((item, i) =>
                                <tr key={item.id} className={`bg-white ${billing_history.length !== (i + 1) ? 'border-b border-b-gray_200' : ''}`}>
                                    <td className="pl-[24px] pr-[12px]"><EmptySquareCheckbox className="cursor-pointer" /></td>
                                    <td className="text-14 text-gray_900 py-[16px]">{item.invoice}</td>
                                    <td className="text-14 text-gray_500 font-normal py-[16px]">USD ${item.amount}</td>
                                    <td className="text-14 text-gray_500 font-normal py-[16px]">{item.date}</td>
                                    <td className="text-14 text-gray_500 font-medium py-[16px]"><Status status={item.status} /></td>
                                    <AvatarList users={item.usersOnPlan} />
                                    <td className="pr-[24px] w-[20px]"><Download className="cursor-pointer" /></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}