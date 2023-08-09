import React from "react"
import Sidebar from "./components/sidebar/Sidebar"
import Settings from "pages/settings"
import { ReactComponent as Logo } from "assets/svg/logo.svg"
import { ReactComponent as Hamburger } from "assets/icons/hamburger.svg"

export default function App() {
  return (
    <div className="sm:flex">
      <Sidebar />
      <div className="bg-[#F9FAFB] w-full h-screen overflow-auto p-[16px] md:p-[32px] pt-[90px]">
        <div className="flex md:hidden justify-between items-center bg-white py-[12px] px-[16px] shadow-sm absolute top-0 left-0 w-full">
          <Logo />
          <Hamburger />
        </div>
        <Settings />
      </div>
    </div>
  )
}