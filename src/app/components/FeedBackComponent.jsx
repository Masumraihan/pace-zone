import { useState } from "react";
import feedbackData from "../../../feedback";

const FeedbackComponent = ({ feedbacks }) => {



    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6 mt-4'>
            {feedbacks.map((feedback, index) => (
                <div key={index} className='shadow rounded-2xl p-5'>
                    <div className='flex gap-4'>
                        <span className={`w-12 h-12 rounded-full border flex justify-center items-center ${feedback.badgeColor} text-white font-bold uppercase`}>
                            {feedback.badgeText}
                        </span>
                        <div className='flex flex-col justify-center'>
                            <h1 className='text-md font-medium'>{feedback.name}</h1>
                            <p className='text-sm text-gray-600'>{feedback.rating} Rating</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-3 mt-3'>
                        <p className='text-sm text-gray-700'>{feedback.review}</p>
                        <span className='text-sm text-gray-600'>{feedback.time}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default FeedbackComponent