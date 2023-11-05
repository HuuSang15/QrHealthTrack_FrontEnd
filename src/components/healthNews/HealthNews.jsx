import React from "react"
import { Link } from "react-router-dom"

const HealthNews = () => {
    
    return (
            <div
                className=" max-w-[1200px] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-6 my-9 px-10">
                <Link to="https://benhvienquan11.vn/giao-duc-suc-khoe/dau-mat-do-dau-hieu-trieu-chung-nguyen-nhan-chan-doan-dieu-tri-va-du-phong-n3010.html" target="_blank">
                    <div className="h-[200px] shadow-md">
                        <img
                            className="h-full w-full object-cover  "
                            src="https://tudienbenhhoc.com/wp-content/uploads/2022/10/Benh-hoc_17-10-2022_800x600.jpg"
                            alt="Bệnh Đau Mắt Đỏ"/>
                    </div>
                    <div className="mt-2">
                        <p>Bệnh Đau Mắt Đỏ: "Nguyên Nhân Và Cách Điều Trị" </p>
                    </div>
                </Link>
                <Link to="https://vinmec.com/vi/tin-tuc/thong-tin-suc-khoe/sot-xuat-huyet-o-nguoi-lon-trieu-chung-va-cach-dieu-tri/" target="_blank">
                    <div className="h-[200px] shadow-md">
                        <img
                            className="h-full w-full object-cover  "
                            src="https://cdn.tuoitre.vn/471584752817336320/2023/9/21/hien-mau-16952688231361694008055.jpg"
                            alt="Hiến Máu Nhân Đạo"/>
                    </div>
                    <div className="mt-2">
                        <p>Hiến Máu: "Trao Giọt Máu Hồng, Chia Sẽ Sự Sống" tại Đại Học Duy Tân</p>
                    </div>
                </Link>
                <Link to="https://benhvienquan11.vn/giao-duc-suc-khoe/dau-mat-do-dau-hieu-trieu-chung-nguyen-nhan-chan-doan-dieu-tri-va-du-phong-n3010.html" target="_blank">
                    <div className="h-[200px] shadow-md">
                        <img
                            className="h-full w-full object-cover "
                            src="https://familyhospital.vn/wp-content/uploads/2021/07/sot_xuat_huyet-696x522.png"
                            alt="Bệnh Sốt Xuất Huyết"/>
                    </div>
                    <div className="mt-2">
                        <p>Bệnh Sốt Xuất Huyết: "Triệu Chứng và Cách Chữa Trị"</p>
                    </div>
                </Link>
                <Link to="https://benhvienquan11.vn/giao-duc-suc-khoe/dau-mat-do-dau-hieu-trieu-chung-nguyen-nhan-chan-doan-dieu-tri-va-du-phong-n3010.html">
                    <div className="h-[200px] shadow-md">
                        <img
                            className="h-full w-full object-cover "
                            src="https://cafefcdn.com/thumb_w/640/203337114487263232/2023/9/22/avatar1695396973614-16953969802892125512511.jpg"
                            alt="Tập Thể Dục"/>
                    </div>
                    <div className="mt-2">
                        <p>Sức Khỏe: "Tập Thể Dục Bao Lâu Mỗi Ngày Để Sống Thọ Hơn"</p>
                    </div>
                </Link>
            </div>
    )
}

export default HealthNews