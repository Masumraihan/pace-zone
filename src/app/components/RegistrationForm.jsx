"use client";

import { useFormik } from "formik";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RegistrationForm = ({ courseId }) => {

  // const router = useRouter();

  const [studentIdDisabled, setStudentIdDisabled] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);
  const [studentIdRequired, setStudentIdRequired] = useState(false);
  const [formRequired, setFormRequired] = useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      experience: "",
      student_id: ""
    },
    onSubmit
  });

  useEffect(() => {
    if (formik.values.first_name != "" || formik.values.last_name != "" || formik.values.phone != "" || formik.values.email != "" || formik.values.experience != "") {
      setStudentIdDisabled(true);
      setStudentIdRequired(false);
      setFormRequired(true);
      formik.values.student_id = "";
    }

    if (formik.values.first_name == "" && formik.values.last_name == "" && formik.values.phone == "" && formik.values.email == "" && formik.values.experience == "") {
      setStudentIdDisabled(false);
      setStudentIdRequired(true);
      setFormRequired(true);
    }
    if (formik.values.student_id !== "") {
      setFormDisabled(true);
      // setStudentIdRequired(true);
      setFormRequired(false);
    }
    if (formik.values.student_id === "") {
      setFormDisabled(false);
      setFormRequired(true);
    }
  }, [formik]);

  async function onSubmit(values) {
    if(values.student_id != ""){
      console.log({studentId: values.student_id});
    }
    else{
      console.log(values);
    }
  }


  return (
    <>
      <div className="lg:w-10/12 md:w-11/12 sm:w-11/12 w-full flex justify-center">
        <form method="POST" className="w-full" onSubmit={formik.handleSubmit}>
          <div className="grid gap-6 mb-6 lg:md:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="font-normal w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83] disabled:cursor-not-allowed"
                placeholder="John"
                required={formRequired}
                disabled={formDisabled}
                name="first_name"
                {...formik.getFieldProps("first_name")}
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="font-normal w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83] disabled:cursor-not-allowed"
                placeholder="Doe"
                required={formRequired}
                disabled={formDisabled}
                name="last_name"
                {...formik.getFieldProps("last_name")}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="font-normal w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83] disabled:cursor-not-allowed"
                placeholder="123-45-678"
                pattern="[6789][0-9]{9}"
                maxLength={10}
                minLength={10}
                required={formRequired}
                disabled={formDisabled}
                name="phone"
                {...formik.getFieldProps("phone")}
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Experience
              </label>
              <input
                type="text"
                id="company"
                className="font-normal w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83] disabled:cursor-not-allowed"
                placeholder="Tell us something"
                required={formRequired}
                disabled={formDisabled}
                name="experience"
                {...formik.getFieldProps("experience")}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="font-normal w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83] disabled:cursor-not-allowed"
              placeholder="john.doe@company.com"
              required={formRequired}
              disabled={formDisabled}
              name="email"
              {...formik.getFieldProps("email")}
            />
          </div>


          <hr className="mt-12 mb-5 h-0.5 border-t-0 bg-black opacity-50 dark:opacity-50" />

          <h3 className="text-center lg:text-lg md:text-lg sm:text-md text-md text-gray-700 underline">Already have an account?</h3>
          <div className="mb-6 mt-3">
            <label
              htmlFor="studentemail"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Student Id
            </label>
            <input
              type="email"
              id="studentemail"
              className="font-normal w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83] disabled:cursor-not-allowed"
              placeholder="Student Id"
              required={studentIdRequired}
              disabled={studentIdDisabled}
              name="student_id"
              {...formik.getFieldProps("student_id")}
            />
          </div>


          <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col items-center gap-3 justify-end">
            <button
              type="reset"
              onClick={formik.handleReset}
              className="px-6 py-2 hover:bg-[rgba(51,14,131,0.2)] text-center text-[#330E83] focus:outline-2 outline-[#330E83] font-semibold capitalize rounded-full active:scale-95 transition-all lg:w-fit md:w-fit sm:w-full w-full"
            >
              Clear
            </button>

            {/* convert this Link tag into button tag when connecting to backend */}
            <Link href={`registration/payment`}
              type="submit"
              className="px-6 py-2 bg-[#330E83] outline-none justify-center text-center text-white font-semibold shadow-lg capitalize rounded-full active:scale-95 transition-all flex lg:w-fit md:w-fit sm:w-full w-full"
            >
              Next
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegistrationForm