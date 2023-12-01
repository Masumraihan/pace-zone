import Image from "next/image";
import bg from "../../../public/terms-and-conditions-bg.jpg";
import Link from "next/link";

const TermsAndConditions = () => {
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
          Enrollment Eligibility
        </h3>
        <div className='space-y-2.5 mt-3'>
          <p>
            Our cricket courses are designed to accommodate varying skill levels, from beginners
            looking to grasp the sport&apos;s basics to seasoned players aiming to fine-tune
            advanced techniques. Each course description delineates the necessary skill level or
            prior experience required for enrollment. It is crucial to evaluate your proficiency
            against the prerequisites outlined for a specific course to ensure it aligns with your
            current skill level and aspirations in the sport.
          </p>
          <p>
            Beginner courses typically cater to individuals with little to no prior cricket
            experience. These programs focus on fundamental skills, including batting, bowling,
            fielding, and understanding the rules of the game. Intermediate-level courses are
            tailored for participants with a basic understanding of cricket fundamentals, aiming to
            refine their techniques and strategic understanding. Advanced courses are curated for
            experienced players seeking specialized training in specific facets of the game, such as
            spin bowling, fast bowling techniques, advanced batting strategies, or game analysis.
          </p>
          <p>
            Understanding the prerequisites and skill levels specified for each course ensures that
            participants select programs conducive to their skill development and learning
            objectives. Participants are encouraged to review the course descriptions thoroughly to
            make informed decisions regarding enrollment based on their current proficiency levels
          </p>
        </div>
      </div>
      <div className='container w-11/12 mx-auto'>
        <h3 className='text-lg text-danger font-semibold relative before-line left-12'>
          Modification of Terms
        </h3>
        <p className='mt-3'>
          Enrolling in our cricket courses signifies your commitment to enhancing your skills and
          knowledge in the sport. Participants should carefully review the course prerequisites and
          skill levels outlined in each program to ensure alignment with their proficiency. Adequate
          cricket gear and attire may be required for certain courses. Active engagement and regular
          participation are encouraged for an immersive learning experience. Please note, terms and
          conditions are subject to periodic updates, and by continuing to use our services post any
          modifications, participants agree to the revised terms. Refunds, if applicable, are
          subject to specific cancellation deadlines. Respectful conduct is expected throughout the
          program, and participants acknowledge the inherent risks involved in cricket training. We
          prioritize the privacy of personal information provided during enrollment. For inquiries
          or assistance regarding enrollment conditions or any aspect of our cricket courses, our
          support team is readily available
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

export default TermsAndConditions;
