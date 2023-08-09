import Input from "components/inputs/Input"
import { ReactComponent as Logo } from "assets/svg/logo.svg"
import { ReactComponent as Home } from "assets/icons/home.svg"
import { ReactComponent as Dashboard } from "assets/icons/dashboard.svg"
import { ReactComponent as Projects } from "assets/icons/projects.svg"
import { ReactComponent as Tasks } from "assets/icons/tasks.svg"
import { ReactComponent as Reporting } from "assets/icons/reporting.svg"
import { ReactComponent as Users } from "assets/icons/users.svg"
import { ReactComponent as Support } from "assets/icons/support.svg"
import { ReactComponent as Settings } from "assets/icons/settings.svg"
import { ReactComponent as Logout } from "assets/icons/logout.svg"
import { ReactComponent as Lady } from "assets/svg/lady.svg"
import profile from "assets/svg/profile.svg"

export default function Sidebar() {
    return (
        <aside className="hidden md:block px-[16px] bg-white w-[340px]">
            <div className="h-screen py-[32px] overflow-y-scroll no-scrollbar">
                <nav className="mb-[24px]">
                    <div className="px-[8px]">
                        <Logo className="mb-[24px]" />
                        <div className="mb-[24px]">
                            <Input type="search" />
                        </div>
                    </div>
                    <ul>
                        <li className="flex items-center px-[12px] py-[8px] cursor-pointer hover:bg-gray_50 rounded-[6px] mb-[4px]">
                            <Home className="mr-[12px]" />
                            <span className="text-16 text-gray_700 font-inter font-medium">Home</span>
                        </li>
                        <li className="flex justify-between items-center px-[12px] py-[8px] cursor-pointer hover:bg-gray_50 rounded-[6px] mb-[4px]">
                            <div className="flex">
                                <Dashboard className="mr-[12px]" />
                                <span className="text-16 text-gray_700 font-inter font-medium">Dashboard</span>
                            </div>
                            <p className="text-14 font-inter font-medium px-[10px] py-[2px] h-[24px] rounded-[16px] bg-gray_100">10</p>
                        </li>
                        <li className="flex items-center px-[12px] py-[8px] cursor-pointer hover:bg-gray_50 rounded-[6px] mb-[4px]">
                            <Projects className="mr-[12px]" />
                            <span className="text-16 text-gray_700 font-inter font-medium">Projects</span>
                        </li>
                        <li className="flex items-center px-[12px] py-[8px] cursor-pointer hover:bg-gray_50 rounded-[6px] mb-[4px]">
                            <Tasks className="mr-[12px]" />
                            <span className="text-16 text-gray_700 font-inter font-medium">Tasks</span>
                        </li>
                        <li className="flex items-center px-[12px] py-[8px] cursor-pointer hover:bg-gray_50 rounded-[6px] mb-[4px]">
                            <Reporting className="mr-[12px]" />
                            <span className="text-16 text-gray_700 font-inter font-medium">Reporting</span>
                        </li>
                        <li className="flex items-center px-[12px] py-[8px] cursor-pointer hover:bg-gray_50 rounded-[6px] mb-[23px]">
                            <Users className="mr-[12px]" />
                            <span className="text-16 text-gray_700 font-inter font-medium">Users</span>
                        </li>
                        <li className="flex items-center px-[12px] py-[8px] cursor-pointer hover:bg-gray_50 rounded-[6px] mb-[4px]">
                            <Support className="mr-[12px]" />
                            <span className="text-16 text-gray_700 font-inter font-medium">Support</span>
                        </li>
                        <li className="flex items-center px-[12px] py-[8px] cursor-pointer bg-gray_50 rounded-[6px]">
                            <Settings className="mr-[12px]" />
                            <span className="text-16 text-gray_700 font-inter font-medium">Settings</span>
                        </li>
                    </ul>
                </nav>
                <div className="bg-gray_50 rounded-[6px] px-[16px] py-[20px] font-inter">
                    <p className="text-14 text-gray_900 font-medium mb-[4px]">New features available!</p>
                    <p className="text-14 text-gray_500 font-normal mb-[16px] leading-[20px]">Check out the new dashboard view. Pages now load faster.</p>
                    <Lady className="rounded-[8px]" />
                    <p className="text-14 text-gray_500 text-inter font-medium mt-[16px]">Dismiss<span className="ml-[12px] text-primary_700 cursor-pointer">What's New?</span></p>
                </div>
                <hr className="border-t-0 border-b border-b-gray_200 py-[10px]" />
                <div className="pt-[24px] flex w-full">
                    <div>

                    </div>
                    <div className="flex justify-between w-full">
                        <div className="text-14 font-intyer flex">
                            <img src={profile} alt="a" className="w-[40px] h-[40px] rounded-full" />
                            <div className="ml-[12px]">
                                <p className="text-gray_900 font-medium">Olivia Rhye</p>
                                <p className="text-gray_500">olivia@untitledui.com</p>
                            </div>
                        </div>
                        <Logout className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </aside>
    )
}