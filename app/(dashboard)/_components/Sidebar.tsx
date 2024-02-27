import React from "react";
import Logo from "./logo";
import SidebarRoutes from "./SidebarRoutes";

function Sidebar() {
  return (
    <div
      className="h-full flex flex-col overflow-y-auto 
    bg-white shadow-sm"
    >
      <Logo />

      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
}

export default Sidebar;
