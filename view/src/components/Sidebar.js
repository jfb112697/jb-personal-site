import SidebarLink from "./SidebarLink";
import MobileNav from "./MobileNav";
import { useState } from "react";
import React from "react";

function Sidebar() {
  const [visible, setVisible] = useState(false);

  function toggleSidebar() {
    setVisible(!visible);
  }

  return (
    <div className="absolute md:relative flex left-0 top-0 w-44 px-2 flex-col h-screen items-center justify-center">
      <MobileNav visible={visible} />
      <div className="flex md:hidden fixed cursor-pointer left-0 top-0 h-[90px] w-[90px] -z-0 items-center justify-center">
        <div
          onClick={toggleSidebar}
          className="flex items-center justify-center border-solid border-white border h-[65px] w-[65px] rounded-sm"
        >
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect fill="#FFFFFF" width="100" height="20"></rect>
            <rect fill="#FFFFFF" y="30" width="100" height="20"></rect>
            <rect fill="#FFFFFF" y="60" width="100" height="20"></rect>
          </svg>
        </div>
      </div>
      <SidebarList className="hidden md:flex z-10 h-[75%] w-full flex-col justify-center items-center border-r-2 border-white bg-bg border-solid px-4 gap-4" />
    </div>
  );
}

export default Sidebar;

function SidebarList(props) {
  return (
    <div className={props.className}>
      <SidebarLink title="About Me" url="" />
      <SidebarLink title="Work Experience" url="experience" />
      <SidebarLink title="Personal Project" url="project" />
      <SidebarLink title="About This Website" url="website" />
    </div>
  );
}

export { SidebarList };
