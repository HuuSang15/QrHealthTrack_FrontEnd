import React from "react";
import { Menusidebar } from "../../Utils/Menusidebar";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

const activeStyle =
  "hover:bg-gray-400 flex rounded-md items-center gap-4 py-3 font-bold bg-gray-200 mb-2 ";
const notActiveStyle =
  "hover:bg-gray-200 flex rounded-md items-center gap-4 py-3 mb-2";

const SidebarUsers = () => {
  return (
    <div className=" w-[400px] flex-none bg-[#F6F9F9] shadow-md">
      <div className="flex items-center gap-4 ">
        <div>
          <img
            src="https://img.thuthuattinhoc.vn/uploads/2020/05/30/hhinh-anh-luffy-chibi-thu-the-rat-ngau_055520104.jpg"
            alt="avatar"
            className="w-20 h-20 object-cover rounded-full border-2 border-grey"
          />
        </div>
        <div className="flex flex-col justify-center ">
          <span className="font-bold">Phạm Hữu Sáng</span>
          <small>phamhuusang24@gmail.com</small>
        </div>
      </div>
      <div className="py-12 px-[14px]">
        {Menusidebar.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle
            }
          >
            {item.icons}
            <span>{item.text}</span>
          </NavLink>
        ))}

        <Link to="/">
          <span className={notActiveStyle}>
            <HiOutlineLogout size={23} />
            Thoát
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SidebarUsers;
