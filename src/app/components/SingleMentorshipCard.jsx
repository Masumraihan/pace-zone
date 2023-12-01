import Image from "next/image";
import { useState } from "react";


const SingleMentorshipCard = ({ singleProgram }) => {

    const [isFold, setIsFold] = useState(true);

    return (
        <li className='flex gap-x-4'>
            <div className='p-5 h-fit rounded-full flex justify-center items-center bg-gray-200'>
                <Image src={singleProgram.icon} width={24} height={24} alt='PeopleIcon' />
            </div>
            <div className='w-full flex flex-col gap-y-1 justify-center'>
                <h1 className='text-lg font-bold text-gray-900'>
                    {singleProgram.title}
                </h1>
                <p title={singleProgram.description} className='text-md text-gray-700'>
                    {isFold ? <>{singleProgram.description.slice(0, 200)}... <span title="click for see more" className="text-sm text-blue-700 cursor-pointer" onClick={() => setIsFold(pre => !pre)}>{isFold ? "see more" : "see less"}</span> </> : <>{singleProgram.description}<span title="click for see more" className="text-sm text-blue-700 cursor-pointer" onClick={() => setIsFold(pre => !pre)}>{isFold ? "see more" : "see less"}</span></>}
                </p>
            </div>
        </li>
    );
};

export default SingleMentorshipCard;