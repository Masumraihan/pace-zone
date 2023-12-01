import React from 'react';
import Image from 'next/image';

import ClockIcon from "../../../../../../public/icons/clock.svg"
import ShieldIcon from "../../../../../../public/icons/shield-icon.svg"
import TrashIcon from "../../../../../../public/icons/trash-icon.svg"

const PaymentPage = () => {

  const cart = [
    {
      courseName: "Mastering the Art of Fast Bowling: Speed, Precision, and Strategy",
      duration: "5 hrs 30 mins",
      language: "English"
    },
    {
      courseName: "Mastering the Art of Fast Bowling: Speed, Precision, and Strategy",
      duration: "5 hrs 30 mins",
      language: "English"
    },
  ];

  return (
    <>
      <div className="2xl:container mx-auto border border-red-700 py-12">
        <div className="container w-10/12 mx-auto p-6 shadow-xl rounded-3xl">
          {
            cart.length <= 0 ? <div>
              <h1 className="text-2xl font-semibold">My Cart</h1>

              <div className="bg-[#f8f8f8] mt-4 rounded-2xl">
                <div className="flex flex-col justify-center items-center p-6">
                  <Image src="/empty-cart.jpg" width={100} height={100} className="w-40 h-40" alt="empty-cart" />
                  <h1 className="text-xl font-semibold">Your cart is empty</h1>
                  <span className="text-md text-gray-700 text-center">Looks like you do not have any course added to buy. Go and explore courses</span>
                </div>
              </div>
            </div>
              :

              <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-6">
                <div className="lg:col-span-2 md:col-span-2">
                  <h1 className="text-2xl font-semibold">My Cart</h1>
                  <div className="flex flex-col gap-y-4 mt-6">
                    {
                      cart.map((course, index) => {
                        return (
                          <div key={index} className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-6 bg-[#f8f8f8] rounded-2xl p-4">
                            <Image width={200} height={200} src="https://themeholy.com/wordpress/edura/wp-content/uploads/2019/05/course_2_1-2-327x250.png" className="lg:w-32 lg:h-32 md:w-32 md:h-32 sm:w-24 sm:h-24 w-full h-full rounded-md" alt="course-img" />
                            <div className="">
                              <h1 className="text-lg text-gray-900 font-medium">{course.courseName}</h1>
                              <p className="text-gray-700">Language: {course.language}</p>
                              <p className="text-gray-700 flex items-center gap-x-1">Duration: <span className="flex items-center gap-x-1"><Image src={ClockIcon} width={14} height={14} alt='ClockIcon' />{course.duration}</span></p>
                              <p className="text-gray-900 text-xl font-bold mt-2"><span className="text-gray-500 text-sm line-through">₹ 1120</span> ₹ 860 <span className="text-green-700 font-medium text-sm">30% Off</span></p>
                              <button className="hover:text-red-500 text-gray-700 underline text-sm flex items-center gap-x-1"><Image src={TrashIcon} width={15} height={15} alt='TrashIcon' />Remove</button>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>

                </div>
                <div className="lg:col-span-1 md:col-span-1 rounded-2xl shadow-md overflow-hidden h-fit">
                  <div className="px-4 bg-[#f8f8f8]">
                    <h1 className="py-3 text-left text-gray-700 font-semibold">Summary</h1>
                  </div>
                  <hr />
                  <div className="p-4 flex flex-col gap-y-1">
                    <div className="flex flex-row justify-between">
                      <h1 className="text-md font-semibold">Price: </h1>
                      <h1 className="text-lg font-semibold">₹ 1,120</h1>
                    </div>
                    <div className="flex flex-row justify-between">
                      <h1 className="text-md font-semibold">Discount: </h1>
                      <h1 className="text-lg font-semibold text-green-600">30%</h1>
                    </div>
                    <hr className="border border-dashed" />
                    <div className="flex flex-row justify-between">
                      <h1 className="text-md font-semibold">Total Amount: </h1>
                      <h1 className="text-lg font-semibold">₹ 860</h1>
                    </div>
                    <hr className="border border-dashed" />
                  </div>
                  <div className="flex flex-col gap-y-1 p-4">
                    <button className="w-full py-2 bg-cyan-950 rounded-full active:scale-95 transition-all shadow-lg text-white">Pay now</button>
                    <span className="text-xs text-gray-500 flex gap-x-2 items-center"><Image src={ShieldIcon} width={12} height={12} alt='ShieldIcon' />Safe and Secure Payments.</span>
                  </div>
                </div>
              </div>
          }

        </div>
      </div>
    </>
  )
}

export default PaymentPage