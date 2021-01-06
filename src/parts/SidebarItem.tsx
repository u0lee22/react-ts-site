import React from "react";

type SidBarProps = {
    menu: any,
}

function SidebarItem(props: SidBarProps) {
    return (
        <div className="sidebar-item">
            <p>{props.menu.name}</p>
        </div>
    );
}

export default SidebarItem;