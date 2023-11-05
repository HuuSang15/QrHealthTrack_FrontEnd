import React from "react";
import TitlePart from "../../components/titlePart/TitlePart";
import SlideShow from "../../components/slideShow/SlideShow";
import Categories from "../../components/categories/Categories";
import HealthNews from "../../components/healthNews/HealthNews";

function Home() {
  return (
    <div className="">
      <div className="w-full  mx-auto  text-center mb-20">
        <img
          className="w-full h-[400px] object-cover"
          src="https://img.freepik.com/free-photo/medicine-blue-background-flat-lay_23-2149341573.jpg?w=1060&t=st=1697278428~exp=1697279028~hmac=08f9009b77ecc5c5c7faa5d675129c6f43d474bd657cb4de014bbb83d7a614ed"
          alt="introduce"
        />
      </div>
   
      <TitlePart title="Danh Mục" subTitle="Lựa Chọn Tốt Cho Sức Khỏe"
                       subDesc="Cung cấp những chế độ ăn uống và bài tập cải thiện Sức Khỏe"/>
      <Categories />

      <SlideShow typeSlide="healthNews" titlePart="Tin Tức"  subTitle="Thông Tin Lĩnh Vực Sức Khỏe"
        subDesc="Chia sẽ những thông tin hữu ích liên quan đến Sức Khỏe"/>
        <HealthNews />

      {/*OustandStudents*/}
      <SlideShow
        typeSlide="outstandStudents"
        titlePart="Sinh Viên Nổi Bật"
        subDesc="Những gương mặt tiêu biểu đạt những thành tích hoạt động và học tập tốt "
        background={true}
      />
      
    </div>
  );
}

export default Home;
