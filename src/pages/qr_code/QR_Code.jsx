import React, { useState } from 'react';
import QRCode from 'qrcode.react';


function QR_Code() {
    
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [qrData, setQrData] = useState(''); // State để lưu dữ liệu QR code

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Tạo dữ liệu từ các trường nhập và định dạng thành một chuỗi
    const data = `${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}`;
    
    // Cập nhật state qrData với dữ liệu mới
    setQrData(data);
  };

  return (
    <div className="max-w-[1200px] mx-auto bg-white border-gray-200 px-4 lg:px-10 py-5">
        <div className="flex ">
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">QR Code Generator</h2>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex flex-col ">
                  <label
                    className="font-medium text-left text-lg mb-1 "
                    htmlFor=""
                  >
                    Họ
                  </label>
                  <input
                    className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                    type="text"
                    placeholder="Họ của bạn"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required
                  />
                </div>
                <div className="flex flex-col ">
                  <label
                    className="font-medium text-left text-lg mb-1 "
                    htmlFor=""
                  >
                    Tên
                  </label>
                  <input
                    className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                    type="text"
                    placeholder="Tên của bạn"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <label
                  className="font-medium text-left text-lg mb-1 "
                  htmlFor="phone"
                >
                  Số điện thoại
                </label>
                <input
                  className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                  required
                  type="tel"
                  placeholder="Nhập số điện thoại của bạn"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex flex-col mb-2">
                <label
                  className="font-medium text-left text-lg mb-1"
                  htmlFor=""
                >
                  Địa Chỉ Email
                </label>
                <input
                  className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                  type="email"
                  placeholder="youraccount@gmail.com"
                  onChange={(e) => setEmail((e.target.value))}
                  value={email}
                  required
                />
              </div>
              <button className="py-2 bg-primaryColor w-full mb-3 rounded-lg text-xl font-bold text-white opacity-100 active:opacity-80">
             
                  <span>Tạo Mã QR Code</span>
             
              </button>
            </form>
      </div>
      <div className="w-1/2 p-32">
        <QRCode value={qrData} />
      </div>
    </div>
    </div>
    
  );
   
}

export default QR_Code;