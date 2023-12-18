import React, { useState } from "react";
import QRCode from "qrcode.react";
import domtoimage from "dom-to-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
function QR_Code() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = `${firstName}${lastName}`;
  const [studentID, setStudentID] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [blood, setBlood] = useState("");
  const [address, setAddress] = useState("");
  const [underlyDisease, setuUnderlyDisease] = useState("");

  const [qrData, setQrData] = useState(""); // State để lưu dữ liệu QR code

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tạo dữ liệu từ các trường nhập và định dạng thành một chuỗi
    const data = `\nHọ Và Tên: ${fullName}
                  \nMã Số Sinh Viên: ${studentID}
                  \nEmail: ${email}
                  \nNgày Sinh: ${date}
                  \nGiới Tính: ${gender}
                  \nChiều Cao: ${height}
                  \nCân Nặng: ${weight}
                  \nNhóm Máu: ${blood}
                  \nPhone: ${phone}
                  \nĐịa Chỉ: ${address}
                  \nTiền Sử Bệnh: ${underlyDisease}
                  `;

    // Cập nhật state qrData với dữ liệu mới
    setQrData(data);
  };

  const saveQRCodeAsImage = () => {
    const node = document.getElementById("your-qrcode"); // Thay 'your-qrcode' bằng id thực của phần tử chứa mã QR code
    domtoimage
      .toPng(node)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "qrcode.png";
        link.click();
      })
      .catch((error) => {
        console.error("Error saving QR code as image:", error);
      });
  };
  return (
    <div className="max-w-[1200px] mx-auto bg-white border-gray-200 mt-20 px-4 lg:px-10 py-5">
      <div className="flex ">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">
            QR Code Lưu Thông Tin Cá Nhân
          </h2>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="flex flex-col ">
                <label
                  className="font-medium text-left text-lg mb-1 "
                  htmlFor=""
                >
                  Họ và Tên
                </label>
                <input
                  className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                  type="text"
                  placeholder="Họ và tên của bạn"
                  onChange={(e) => setLastName(e.target.value)}
                  value={fullName}
                  required
                />
              </div>
              <div className="flex flex-col ">
                <label
                  className="font-medium text-left text-lg mb-1 "
                  htmlFor=""
                >
                  Mã Số Sinh Viên
                </label>
                <input
                  className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                  required
                  type=""
                  placeholder="Mã số sinh viên của bạn"
                  value={studentID}
                  onChange={(e) => setStudentID(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col h-full  mb-2">
              <label className="font-medium text-left text-lg mb-1" htmlFor="">
                Địa Chỉ Email
              </label>
              <input
                className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                type="email"
                placeholder="youraccount@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="flex flex-col">
                <label
                  className="font-medium text-left text-lg mb-1"
                  htmlFor="date"
                >
                  Ngày Sinh
                </label>
                <input
                  type="date"
                  className=" w-full h-full px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                  placeholder="Ngày sinh của bạn"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="font-medium text-left text-lg mb-1"
                  htmlFor=""
                >
                  Giới Tính
                </label>
                <select
                  required
                  className=" w-full h-full px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="flex flex-col ">
                <label
                  className="font-medium text-left text-lg mb-1 "
                  htmlFor=""
                >
                  Chiều Cao
                </label>
                <input
                  className="w-full h-full px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                  type="text"
                  placeholder="Chiều cao của bạn"
                  onChange={(e) => setHeight(e.target.value)}
                  value={height}
                  required
                />
              </div>
              <div className="flex flex-col ">
                <label
                  className="font-medium text-left text-lg mb-1 "
                  htmlFor=""
                >
                  Cân Nặng
                </label>
                <input
                  className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                  required
                  type=""
                  placeholder="Cân nặng của bạn"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="flex flex-col">
                <label
                  className="font-medium text-left text-lg mb-1"
                  htmlFor=""
                >
                  Nhóm Máu
                </label>
                <select
                  required
                  className="w-full h-full px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                  onChange={(e) => setBlood(e.target.value)}
                  value={blood}
                >
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="o">O</option>
                  <option value="ab">AB</option>
                </select>
              </div>
              <div className="flex flex-col ">
                <label
                  className="font-medium text-left text-lg mb-1 "
                  htmlFor=""
                >
                  Số Điện Thoại
                </label>
                <input
                  className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                  required
                  type=""
                  placeholder="Nhập số điện thoại của bạn"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col h-full  mb-2">
              <label className="font-medium text-left text-lg mb-1" htmlFor="">
                Địa Chỉ Thường Trú
              </label>
              <input
                className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                type="address"
                placeholder="Địa chỉ của bạn"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                required
              />
            </div>
            <div className="flex flex-col h-full  mb-2">
              <label className="font-medium text-left text-lg mb-1" htmlFor="">
                Tiền Sử Bệnh Nền
              </label>
              <textarea
                className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg h-[100px]"
                required
                placeholder="Tiền sử bệnh nền của bạn"
                value={underlyDisease}
                onChange={(e) => setuUnderlyDisease(e.target.value)}
              ></textarea>
            </div>
            <button className="py-2 bg-primaryColor w-full mb-3 rounded-lg text-xl font-bold text-white opacity-100 active:opacity-80">
              <span>Tạo Mã QR Code</span>
            </button>
          </form>
        </div>
        <div className="w-1/2 p-32">
          <div id="your-qrcode">
            <QRCode className="mt-24" size={300} value={qrData} />
          </div>
          <button onClick={saveQRCodeAsImage} className=" text-lg mt-10 px-12">
            <FontAwesomeIcon icon={faDownload} className="px-2"/>
            Download QR Code
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default QR_Code;
