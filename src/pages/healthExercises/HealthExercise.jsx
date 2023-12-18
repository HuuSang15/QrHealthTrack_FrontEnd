
import React, { useEffect, useState } from "react";
import LayoutListExercise from "../../layouts/LayoutListExercise";

function HealthExercises() {
    const customStyle = {
        background: 'linear-gradient(180deg, rgba(107, 162, 193, 0.99) 0%, rgba(249, 249, 249, 0.00) 100%)',
    };

    const [spaces, setSpaces] = useState([])



    return (
        <div className=" sm:max-w-full sm:h-auto" >
            <div class="  w-auto mt-8  ">


                <h1 className="  text-blue-600 text-4xl font-bold font-serif leading-[40px] break-words text-center">Mẹo Luyện Tập</h1>



                <h1 className=" mx-72 text-blue-600 text-2xl font-bold font-serif leading-[40px] break-words text-center">
                    Lên kế hoạch thể dục hợp lý để biết bạn sẽ làm gì, khi nào và trong bao lâu. Điều này giúp bạn duy trì tập luyện đều đặn.
                </h1>

            </div>

            
                <select name="" id="" class=" mt-8 ml-44 px-4 py-2 top-[1%] border-[1px] border-[#B2B2B2] rounded-xl outline-none">
                    <option>Loại Bài Tập:</option>
                    <option>Bài Tập Tay</option>
                    <option>Bài Tập Chân</option>
                    <option>Bài Tập Ngực</option>
                    <option>Bài Tập Bụng</option>

                </select>   
                <div className="max-w-[1200px] mx-auto px-10 my-10  grid grid-cols-12 gap-5">
                    <div style={customStyle} class="md:col-span-12 md:col-start-1 rounded-[10px]">

                        <LayoutListExercise type="healthExercises" spacesList={spaces} />
                    </div>
                </div>
            </div>
       

    );
}

export default HealthExercises;