import React, { useState, useEffect } from 'react';
import SlideShow from "../../components/slideShow/SlideShow";
import SlideVideos from "../../components/slideVideos/SlideVideos";



const ExerciseDetail = () => {
    const [countdown, setCountdown] = useState(30);
    const [countdownCount, setCountdownCount] = useState(3);
    const [isRunning, setIsRunning] = useState(false);
    const [completionText, setCompletionText] = useState("Time");
    const [completionColor, setCompletionColor] = useState("white"); // Màu mặc định là vàng
    const [showResetButton, setShowResetButton] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setCountdown(prevCountdown => {
                    if (prevCountdown > 0) {
                        return prevCountdown - 1;
                    } else {
                        clearInterval(intervalId);
                        setIsRunning(false);
                        setCompletionText("Hoàn Thành");
                        setCompletionColor("green"); // Cập nhật màu thành xanh lá
                        setCountdownCount(prevCountdownCount => prevCountdownCount - 1);
                        setShowResetButton(true);
                    }
                });
            }, 1000);
        }

        // Cleanup function để ngăn chặn setIntervals chạy khi component unmount
        return () => clearInterval(intervalId);
    }, [isRunning]);
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };



    const handleStart = () => {
        if (countdownCount > 0) {
            setCountdown(30);
            setIsRunning(true);
            setCompletionText("Time");
            setCompletionColor("white"); // Màu mặc định khi bắt đầu lại
            setShowResetButton(false);
        }
    };


    const handleReset = () => {
        setCountdownCount(3);
        setShowResetButton(false);

    };
    const customStyle = {
        background: 'linear-gradient(180deg, rgba(107, 162, 193, 0.99) 0%, rgba(249, 249, 249, 0.00) 100%)',
    };
    return (
        <>
            <div className=" sm:max-w-full sm:h-auto" >
                <div class="  w-auto mt-8  ">


                    <h1 className="  text-blue-600 text-4xl font-bold font-serif leading-[40px] break-words text-center">Mẹo Luyện Tập</h1>



                    <h1 className=" px-72 text-blue-600 text-2xl font-bold font-serif leading-[40px] break-words text-center">
                        Lên kế hoạch thể dục hợp lý để biết bạn sẽ làm gì, khi nào và trong bao lâu. Điều này giúp bạn duy trì tập luyện đều đặn.
                    </h1>

                </div>

                <div className="max-w-[1200px] mx-auto px-10 my-10  grid grid-cols-12 gap-5">

                    <div style={customStyle} class="md:col-span-12 md:col-start-1 rounded-[10px]">
                        {/* images of space*/}
                        <SlideVideos />
                        {/* Countdown timer */}

                        <div className="mb-40 ">
                            <table>
                                <tr >
                                    <td className="absolute w-[166px] left-[35%] h-[98px] mt-7 bg-black bg-opacity-10 rounded-xl">
                                        <h1 className="text-4xl font-bold text-textBoldColor pt-2 text-center text-yellow-400">
                                            {isNaN(countdown) ? "" : formatTime(countdown)}
                                        </h1>
                                        <h1 style={{ color: completionColor }} className="text-4xl font-bold text-textBoldColor text-center ">
                                            {completionText}
                                        </h1>

                                    </td>
                                    <td className="absolute w-[166px] left-[52%] h-[98px] mt-7 bg-black bg-opacity-10 rounded-xl">
                                        <h1 className="text-4xl font-bold text-textBoldColor pt-2 text-center text-red-900">
                                            {countdownCount}
                                        </h1>
                                        <h1 className="text-4xl font-bold text-textBoldColor text-center text-white">
                                            Rep
                                        </h1>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        {/* hướng dẫn tập luyện */}
                        <h2 className="text-xl font-normal   text-gray-600  text-center mb-2">Đặt bàn tay trên sàn, cách vai rộng hơn vai và đẩy cơ thể lên và xuống.</h2>
                        {/* Nút bắt đầu */}
                        <div>
                            <button onClick={handleStart} className=" text-red-600 font-bold text-2xl ml-[43%] px-5 py-3 bg-black bg-opacity-10 mr-2 rounded-xl">
                                Bắt Đầu
                            </button>
                        </div>

                        {/* Nút reset */}
                        {showResetButton && (
                            <button onClick={handleReset} className="text-red-600 font-bold text-2xl ml-[43%] mt-5  px-5 ml-10 py-3 bg-black bg-opacity-10 mr-2 rounded-xl">
                                Reset
                            </button>
                        )}

                    </div>


                </div>

                {/* <SlideShow typeSlide="space" titlePart="Không Gian Liên Quan" background={true} /> */}
            </div>
        </>
    )
}


export default ExerciseDetail