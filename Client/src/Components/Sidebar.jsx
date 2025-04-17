import React, { useState } from "react";
import { AiOutlineGift } from "react-icons/ai";
import { BiBorderAll, BiConversation, BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsCashStack, BsListCheck } from "react-icons/bs";
import { FaRegClipboard } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { GiPowerButton } from "react-icons/gi";
import { GoPeople, GoPerson } from "react-icons/go";
import { HiCalendarDateRange } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { PiSquareSplitVerticalBold } from "react-icons/pi";
import { RiDashboard3Line } from "react-icons/ri";
import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
    setIsOpen(!isOpen);
    };

    return (
    <div style = {{marginTop: '80px'}}>
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="menu-item">
            <li className="active">
            <RiDashboard3Line />
            <span>Dashboard</span>
            </li>
            <li>
            <BiBorderAll />
            <span>Products</span>
            </li>
            <li>
            <MdFavoriteBorder />
            <span>Favorites</span>
            </li>
            <li>
            <BiConversation />
            <span>Inbox</span>
            </li>
            <li>
            <BsListCheck />
            <span>Order Lists</span>
            </li>
            <li>
            <PiSquareSplitVerticalBold />
            <span>Product Stock</span>
            </li>
        </ul>
        <div className="other-departments">
            <small>PAGES</small>
            <ul className="list2">
            <li>
            <AiOutlineGift />
            <span>Pricing</span>
            </li>
            <li>
            <HiCalendarDateRange />
            <span>Calender</span>
            </li>
            <li>
            <FaRegClipboard />
            <span>To-Do</span>
            </li>
            <li>
            <GoPeople />
            <span>Contact</span>
            </li>
            <li>
            <BsCashStack />
            <span>Invoice</span>
            </li>
            <li>
            <BiSolidBarChartAlt2 />
            <span>UI Elements</span>
            </li>
            <li>
            <GoPerson />
            <span>Team</span>
            </li>
            <li>
            <FaTableCells />
            <span>Table</span>
            </li>
            </ul>
        </div>
        <div className="list3">
            <ul>
            <li>
            <IoSettingsOutline />
            <span>Settings</span>
            </li>
            <li>
            <GiPowerButton />
            <span>Logout</span>
            </li>
            </ul>
        </div>
    </div>
    </div>
);
};

export default Sidebar;