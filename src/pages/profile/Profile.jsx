import React from "react";
import SidebarUsers from"../../components/sidebarUsers/SidebarUsers";
import Editprofile from "./Editprofile";


const Profile = () => {
    return (
        <div className=' pt-12 px-36 w-full h-screen flex flex-col'>
           <div className='flex w-full flex-auto'>
                <SidebarUsers />
                <div className='flex-auto p-4'>
                   <Editprofile />
                 
                </div>
           </div>
          
        </div>
    )
}
export  default Profile;