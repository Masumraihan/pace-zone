"use client";

import UnderLineStroke from '@/app/components/UnderLineStroke'
import { useFormik } from 'formik'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import SelectComponent from '../components/SelectComponent';

const PhyTransformationRegistration = () => {

  const [loading, setLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("Andhra Pradesh")

  const postRegistrationAPI = "http://localhost:8000/api/registration"
  const getStatesAPI = "http://localhost:8000/api/get-states";

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      student_id: "",
      already_registered: false,
      mobile: "",
      experience: "beginner",
      professional: false,
      improvement_req: "",
      address: "",
      state: selectedState,
      pin_code: ""
    },
    onSubmit
  });

  const getStates = async () => {
    const res = await fetch(getStatesAPI);
    const allstates = await res.json();
    setStates(allstates.data);
  }

  useEffect(() => {
    getStates();
  }, []);

  const handleProfessionl = (event) => {
    let pro = event.target.value;
    formik.values.professional = pro === "true";
  }

  const handleState = (selectedOption) => {
    setSelectedState(selectedOption);
    formik.values.state = selectedOption;
  }

  async function onSubmit(values) {
    // setLoading(true);
    // const res = await fetch(postRegistrationAPI, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(values)
    // });
    // const result = await res.json();
    // setLoading(false);

    // console.log(result);
    console.log(values);
  }


  return (
    <>
      <div className="2xl:container mx-auto border border-red-500 py-16">
        <div className="container w-11/12 mx-auto border">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8">
            <div className="flex flex-col items-center gap-y-6 border">
              <div className="flex justify-center border">
                <h1 className='lg:text-3xl md:text-3xl flex flex-col gap-y-1 sm:text-2xl text-xl text-center font-semibold w-fit'>Registration Form <UnderLineStroke fill="#6a48bf" /></h1>
              </div>
              <div className="border w-full flex justify-center border-green-600 px-4 py-3">
                <form method="POST" onSubmit={formik.handleSubmit} className='border w-11/12 border-blue-600'>
                  <div className="flex flex-col border w-full mb-6">
                    <label htmlFor="student_id" className='block mb-2 text-sm font-medium text-gray-900'>Student Id*</label>
                    <input type="text" name='student_id' className='font-normal w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83]' id='student_id' placeholder='student id' {...formik.getFieldProps("student_id")} />
                  </div>

                  <div className="grid gap-4 mb-6 lg:md:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                    <div className="flex flex-col border w-full">
                      <label htmlFor="first_name" className='block mb-2 text-sm font-medium text-gray-900 '>First Name*</label>
                      <input type="text" name='first_name' className='font-normal w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83]' id='first_name' placeholder='first name' {...formik.getFieldProps("first_name")} />
                    </div>
                    <div className="flex flex-col border w-full">
                      <label htmlFor="last_name" className='block mb-2 text-sm font-medium text-gray-900 '>Last Name</label>
                      <input type="text" name='last_name' className='font-normal w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83]' id='last_name' placeholder='last name' {...formik.getFieldProps("last_name")} />
                    </div>
                  </div>

                  <div className="grid gap-4 mb-6 lg:md:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                    <div className="flex flex-col border w-full">
                      <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900'>Email*</label>
                      <input type="text" name='email' className='font-normal w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83]' id='email' placeholder='email' {...formik.getFieldProps("email")} />
                    </div>
                    <div className="flex flex-col border w-full">
                      <label htmlFor="mobile" className='block mb-2 text-sm font-medium text-gray-900'>Mobile*</label>
                      <input type="tel" name='mobile' maxLength={10} minLength={10} className='font-normal w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83]' id='mobile' placeholder='mobile number' {...formik.getFieldProps("mobile")} />
                    </div>
                  </div>

                  <div className="grid gap-6 mb-6 lg:md:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">

                    <div className="flex flex-col border w-full">
                      <p className='block text-sm font-medium text-gray-900'>Are your professional ?</p>
                      <div className="flex gap-x-8 mt-2 px-4 py-3 items-center bg-[#F9F9FB] shadow text-md rounded-lg">
                        <div className="flex items-center p-0 m-0 gap-x-2">
                          <input type='radio' aria-labelledby="professional-true" name="professional" onChange={handleProfessionl} value={true} id="yes" className='cursor-pointer focus:ring-2 ring-offset-2 transition-all rounded-full ring-[#330E83]'></input>
                          <label htmlFor="yes" className='cursor-pointer'>Yes</label>
                        </div>
                        <div className="flex items-center p-0 m-0 gap-x-2">
                          <input type='radio' aria-labelledby="professional-false" name="professional" onChange={handleProfessionl} value={false} id="no" className='cursor-pointer focus:ring-2 ring-offset-2 transition-all rounded-full ring-[#330E83]'></input>
                          <label htmlFor="no" className='cursor-pointer'>No</label>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col border w-full">
                      <label htmlFor="experience" className='block mb-2 text-sm font-medium text-gray-900'>Experience</label>
                      <select {...formik.getFieldProps("experience")} name="experience" id="experience" className='font-normal w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83]'>
                        <option disabled>Select</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  </div>


                  <div className="flex flex-col mb-6 border w-full">
                    <label htmlFor="address">Address</label>
                    <textarea name="address" placeholder='enter your full address' {...formik.getFieldProps("address")} id="address" rows="2" className='font-normal w-full mt-2 py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83]'></textarea>
                  </div>


                  <div className="grid gap-6 mb-6 lg:md:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">


                    {/* <div className="flex flex-col border w-full">

                      <select name="state" id="state" {...formik.getFieldProps("state")} className='font-normal w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83]'>

                        {
                          states.length <= 0 ? <><option disabled>Select</option></> :
                            <>
                              <option disabled>Select</option>
                              {
                                states.map((state, index) => {
                                  return (
                                    <option value={state} key={index}>{state}</option>
                                  )
                                })
                              }
                            </>
                        }
                      </select>
                    </div> */}
                    <div className="flex flex-col border w-full">
                      <label htmlFor="state" className='block mb-2 text-sm font-medium text-gray-900'>State</label>
                      <SelectComponent options={states} onSelect={handleState} value={selectedState} {...formik.getFieldProps("state")} name="state" />
                    </div>

                    <div className="flex flex-col border w-full">
                      <label htmlFor="pin_code" className='block mb-2 text-sm font-medium text-gray-900'>Pincode</label>
                      <input type="tel" name='pin_code' {...formik.getFieldProps("pin_code")} maxLength={6} minLength={6} className='font-normal w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83]' id='pin_code' placeholder='pincode' />
                    </div>
                  </div>





                  <div className="flex flex-col mb-6 border w-full">
                    <label htmlFor="improvement_req">Improvement Requirement</label>
                    <textarea name="improvement_req" id="improvement_req" {...formik.getFieldProps("improvement_req")} rows="3" placeholder='write down all your requirements here' className='font-normal w-full mt-2 py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83]'></textarea>
                  </div>

                  <div className="flex items-center gap-3 justify-end">
                    <button
                      type="reset"
                      onClick={formik.handleReset}
                      className="px-6 py-2 hover:bg-[rgba(51,14,131,0.2)] text-center text-[#330E83] focus:outline-2 outline-[#330E83] font-semibold capitalize rounded-full active:scale-95 transition-all lg:w-fit md:w-fit sm:w-full w-full"
                    >
                      Clear
                    </button>

                    {/* convert this Link tag into button tag when connecting to backend */}
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#330E83] outline-none justify-center text-center text-white font-semibold shadow-lg capitalize rounded-full active:scale-95 transition-all flex lg:w-fit md:w-fit sm:w-full w-full"
                    >
                      {
                        loading ? <><span><Spinner /></span></> : "Next"
                      }
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:flex md:hidden sm:hidden hidden justify-center items-start">
              <Image src="/fitness-r.svg" width={500} height={500} priority alt='registration-bg' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhyTransformationRegistration