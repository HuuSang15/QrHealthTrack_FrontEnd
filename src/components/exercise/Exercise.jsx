import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {

    faHeart,
    faLayerGroup,   
    faStar,

} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Exercise = ({ typeExrcise = "none", exrciseValue = {} }) => {
    return (
        <div className="py-4">
            <Link to={`/exrcise/${exrciseValue?.id}`}>
                <div
                    className="w-auto mx-3 rounded-xl hover:shadow-xl mt-[40px] transform transition-all translate-y-0 hover:-translate-y-2 ">
                    <div className="h-[250px] w-full relative">
                        <img className="w-full h-full object-cover rounded-t-xl"
                             src={exrciseValue?.imagesUrl || "https://i.ibb.co/p4D2qft/hitdat.jpg" }
                            alt="anh bai tap" />
                         {typeExrcise.toLowerCase() === 'top rate' &&
                            <p className="absolute top-3 left-3 uppercase bg-primaryColor rounded text-white text-xs font-semibold px-2 py-[1px] tracking-[.30em]">Top
                                rate</p>}
                        {typeExrcise.toLowerCase() === 'sharing' &&
                            <p className="absolute top-3 right-3 uppercase bg-primaryColor rounded text-white text-xs font-semibold px-2 py-[1px] tracking-[.30em]">Sharing</p>}

                        <div className=" absolute bottom-3 left-3 right-3 flex justify-between text-white">
                            <div className="font-bold">
                                <FontAwesomeIcon className="pr-3" icon={faLayerGroup} />
                                <span>04 Photos</span>
                            </div>
                            <div className="font-bold">
                                <span className="pr-3">Saved</span>
                                <FontAwesomeIcon icon={faHeart} style={{ color: "#ff0000", }} />
                            </div>
                        </div>
                    </div>
                    <div className="rounded-b-xl bg-white border-[1px]">
                        <div className="px-3 py-3 ">
                            <p className="text-sm font-semibold text-primaryColor ">{exrciseValue?.categoryData?.categoryValue}</p>
                            <h4 className="text-sm font-bold text-deep-purple-900  ">Tên Bài Tập</h4>
                            <div className="flex justify-between items-center mb-2">
                                <p
                                    className="text-[#b2afaf] font-thin">Đặt bàn tay trên sàn, cách vai rộng hơn vai và đẩy cơ thể lên và xuống.</p>

                            </div>

                            <div className="mb-2">
                                <FontAwesomeIcon icon={faStar} style={{ color: "#f5ed00", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#f5ed00", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#f5ed00", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#f5ed00", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#d4d4d4", }} />
                                <span className="ml-3 text-[#d4d4d4] ">12 review owners</span>

                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Exercise