import React from "react";
import { NavLink } from "react-router-dom";

const nav = [
  { name: "Trang Chủ", path: "/" },
  { name: "Danh Mục", path: "/spaces" },
  { name: "Liên Hệ", path: "/contact" },
  { name: "Giới Thiệu", path: "/aboutpage" },
];

const notActive =
  "hover:bg-[#fd7e14] px-8 h-full flex items-center bg-primaryColor";
const active = "hover:bg-[#fd7e14] px-8 h-full flex items-center  bg-[#fd7e14]";
const HeaderUsers = () => {
  return (
    <div className="w-full flex">
      <div className="flex justify-center items-center font-bold bg-primaryColor text-white w-[256px] flex-none">
        HealthPro
      </div>
      <div className="flex-auto">
        <div className="w-screen flex h-[60px] bg-primaryColor text-white">
          <div className="w-1100 flex h-full text-sm font-medium">
            {nav?.length > 0 &&
              nav.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="h-full flex justify-center items-center"
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? active : notActive
                      }
                    >
                      {item.name}
                    </NavLink>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUsers;
