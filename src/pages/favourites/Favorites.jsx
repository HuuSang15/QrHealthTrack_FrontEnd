import React from "react";
import SidebarUsers from "../../components/sidebarUsers/SidebarUsers";




const Favorites = () => {
    return (
      <div className=' pt-10 px-36 w-full h-screen flex flex-col'>
      <div className='flex w-full flex-auto'>
           <SidebarUsers />
           <div className="flex-auto p-4">
          <h1 className="text-3x1 text-primaryColor text-lg font-medium py-4 border-b border-gray-200">
            Bài Tập & Chế Độ Ăn Yêu Thích
          </h1>
          <div className="w-full gap-4 py-4 "> 
            
          </div>
          </div>
      </div>
   </div>
    );
  };
  

export default Favorites;