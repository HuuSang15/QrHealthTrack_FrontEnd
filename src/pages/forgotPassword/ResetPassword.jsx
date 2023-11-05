import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image4 from "../../assets/images/Image3.png"
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "@material-tailwind/react";

function ResetPassword() {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hiddenPass, setHiddenPass] = useState(true);
  const [hiddenRePass, setHiddenRePass] = useState(true);

  const notify = (message, type) => {
    const toastType = type === "success" ? toast.success : toast.error;
    return toastType(message, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation input
    if (otp.length !== 6) {
      notify("Mã OTP phải có đúng 6 chữ số");
      setSubmit(false);
    } else if (password.length < 6) {
      notify("Mật khẩu phải có tối thiểu 6 ký tự");
      setSubmit(false);
    } else if (rePassword !== password) {
      notify("Mật khẩu nhập lại không khớp");
      setSubmit(false);
    } else {
      setLoading(true);
      setSubmit(true);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="h-screen flex items-center bg-gradient-to-b from-blue-500 via-transparent to-transparent ">
        <div className="bg-white w-full sm:w-[90%] md:w-[80%] lg:w-[70%] lg:grid lg:grid-cols-10 shadow-xl m-auto my-auto rounded pb-4 lg:pb-0">
        <div className="hidden lg:block h-full w-full col-span-6">
            <img
              className="h-[600px] w-[600px] object-cover "
              src={Image4}
              alt="Images"
            />
          </div>
          <div className="text-center lg:col-span-4">
            <div className="w-[80%] m-auto">
              <h1 className="text-primaryColor text-3xl font-bold py-10">
                Đặt Lại Mật Khẩu
              </h1>
              <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="flex flex-col mb-6">
                  <label
                    className="font-medium text-left text-lg mb-2 "
                    htmlFor=""
                  >
                    OTP
                  </label>
                  <input
                    className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                    required
                    type="text"
                    placeholder="Mã OTP của bạn"
                    onChange={(event) => setOtp(event.target.value)}
                    value={otp}
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    className="font-medium text-left text-lg mb-2 "
                    htmlFor=""
                  >
                    Mật Khẩu Mới
                  </label>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                      type={hiddenPass ? "password" : "text"}
                      required
                      placeholder="Mật khẩu mới của bạn"
                      onChange={(event) => setPassword(event.target.value)}
                      value={password}
                    />
                    {hiddenPass ? (
                      <FontAwesomeIcon
                        onClick={() => setHiddenPass(false)}
                        className="absolute top-5 right-6"
                        icon={faEyeSlash}
                      />
                    ) : (
                      <FontAwesomeIcon
                        onClick={() => setHiddenPass(true)}
                        className="absolute top-5 right-6"
                        icon={faEye}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col ">
                  <label
                    className="font-medium text-left text-lg mb-2 "
                    htmlFor=""
                  >
                    Xác Nhận Mật Khẩu
                  </label>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                      type={hiddenRePass ? "password" : "text"}
                      required
                      placeholder="Nhập lại mật khẩu của bạn"
                      onChange={(e) => setRePassword(e.target.value)}
                      value={rePassword}
                    />
                    {hiddenRePass ? (
                      <FontAwesomeIcon
                        onClick={() => setHiddenRePass(false)}
                        className="absolute top-5 right-6"
                        icon={faEyeSlash}
                      />
                    ) : (
                      <FontAwesomeIcon
                        onClick={() => setHiddenRePass(true)}
                        className="absolute top-5 right-6"
                        icon={faEye}
                      />
                    )}
                  </div>
                </div>
                <button className="py-3 bg-primaryColor w-full mt-8 mb-12 rounded-lg text-xl font-bold text-white  opacity-100 active:opacity-80">
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <Spinner className="h-6 w-6 mr-4" />{" "}
                      <span>Đang tải....</span>
                    </div>
                  ) : (
                    <span>Đặt lại</span>
                  )}
                </button>
              </form>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
