import Image from "next/image";
import bg from "../../../public/privacy-and-policies-bg.jpg";
import Link from "next/link";

const PrivacyAndPolicies = () => {
  return (
    <section>
      <div className='2xl:container mx-auto flex flex-col justify-center items-center w-full relative'>
        <Image
          src={bg}
          height={700}
          width={1536}
          className='max-h-[450px]'
          alt='terms and conditions background'
        />
        <span className='bg-white/40 absolute w-full h-full z-10'></span>
        <div className='container w-11/12 mx-auto border lg:absolute top-0 absolute sm:absolute py-16 mb-8 z-10 flex flex-col justify-center items-center h-full border-yellow-400'>
          <div className='flex flex-col justify-center items-center relative lg:-top-10 md:-top-10 sm:-top-6 top-0'>
            <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-3xl text-gray-900 font-bold drop-shadow decoration-purple-95 text-center'>
              Terms and Conditions
            </h1>
            <h2 className='mt-3 text-center text-gray-900 uppercase lg:w-8/12 font-semibold'>
              Welcome to our team! By enrolling in our cricket courses, you agree to abide by the
              following terms and conditions
            </h2>
            <div className='flex lg:flex-row md:flex-row sm:flex-row mt-4 gap-8'>
              <button className='px-8 py-[7px] rounded-xl hover:ring-2 ring-offset-2 ring-[#330E83] shadow-[#6d49bb] text-white bg-[#330E83] shadow hover:shadow-lg active:scale-95 transition-all'>
                Explore
              </button>
              <button className='px-8 py-[7px] rounded-xl hover:ring-2 ring-offset-2 ring-[#330E83] shadow-[#6d49bb] text-white bg-[#330E83] shadow hover:shadow-lg active:scale-95 transition-all'>
                Programs
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='container w-11/12 mx-auto py-10'>
        <h3 className='text-lg text-danger font-semibold relative before-line left-12'>
          Data Privacy Policy
        </h3>
        <div className='space-y-2.5 mt-3'>
          <p>
            We prioritize the protection and confidentiality of your personal information. Our data
            privacy policy outlines the collection, use, and security measures concerning your data.
            When enrolling in our courses, we collect personal information such as your name, email
            address, contact details, and, in some cases, payment information. This information is
            necessary to process enrollments, manage course schedules, and communicate essential
            updates regarding your participation.
          </p>
          <p>
            We assure you that your personal data is securely stored using encryption and strict
            access controls to prevent unauthorized access, alteration, or disclosure. This
            information is utilized solely for course-related purposes and may be shared with
            trusted third-party service providers, strictly for facilitating course delivery,
            processing payments, or providing customer support. However, these entities are bound by
            confidentiality agreements and adhere to stringent privacy standards.
          </p>
          <p>
            As part of our commitment to transparency, you have the right to access, modify, or
            delete your personal information stored on our platform. Additionally, you can opt-out
            of receiving promotional materials or communications. Our website may use cookies or
            similar technologies to enhance user experience, track website usage patterns, and
            gather preference-related information. Users can manage cookie preferences through their
            browser settings.
          </p>
        </div>
      </div>
      <div className='container w-11/12 mx-auto'>
        <h3 className='text-lg text-danger font-semibold relative before-line left-12'>
          Communication and Consent Policy
        </h3>
        <p className='mt-3'>
          We also value your consent regarding data usage and may seek explicit consent for specific
          purposes beyond essential course communications. Your consent for such purposes will be
          requested separately and clearly outlined to ensure transparency and compliance with
          applicable regulations
        </p>
      </div>
      <div className='container w-11/12 mx-auto py-10'>
        <div className='bg-[#F5F3F9] w-full rounded-md mt-3 lg:py-16 py-10 p-4 md:p-0 '>
          <h2 className='text-3xl text-center font-bold'>Explore Courses and Mentor Profiles</h2>
          <p className='text-center mt-1'>
            Delve into our Course Offerings, Meet Expert Mentors, and Review Enrollment Terms
          </p>
          <div className='mt-6 flex flex-col md:flex-row items-center justify-center md:gap-7 gap-4'>
            <Link
              href={"mentorship"}
              className='w-fit hover:shadow-xl shadow active:scale-90 transition-all duration-300 lg:mx-0 md:mx-0 sm:mx-auto mx-auto px-4 py-3 rounded-2xl border border-primary bg-white'
            >
              Check Our Mentorship
            </Link>
            <Link
              href={"courses"}
              className='w-fit hover:shadow-xl shadow active:scale-90 transition-all duration-300 lg:mx-0 md:mx-0 sm:mx-auto mx-auto px-4 py-3 rounded-2xl text-white bg-primary'
            >
              Check Our Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyAndPolicies;
