import  React from 'react';
const TitlePart = ({title , subTitle, subDesc}) => {

    return (
        <div className="text-center mx-auto mt-5 mb-2">
            <p className="text-black text-2xl font-bold">{title}</p>
            <p className="text-gray-400 text-[16px] mb-2">{subTitle}</p>
            <p className="font-medium" >{subDesc}</p>
        </div>
    )
}

export default TitlePart