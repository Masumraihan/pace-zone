import arm from "../course-images/amr-speed.jpg";
import back from "../course-images/back.jpg";
import front from "../course-images/front.jpeg";
import runup from "../course-images/runup.jpg";
import mentorship from "../course-images/mentorships.jpg";
const coursesData = [
  {
    courseId: 1,
    timestamp: "2023-11-27T17:48:54Z",
    courseName: "Elite Fast Bowling Mentorship",
    instructor: "Sachin Rawat",
    subtitle: "Mentorship",
    lesson: 14,
    student: 63,
    description:
      "Crafted for ambitious fast bowlers dedicated to advancing their performance, this specialized program focuses on refining bowling speed, augmenting overall fitness levels, and honing technical proficiency. Tailored sessions are geared towards instilling precision in bowling techniques while optimizing physical conditioning essential for enduring top-tier cricketing challenges. Participants can expect a comprehensive curriculum designed to elevate both speed and agility, fostering a holistic approach towards achieving excellence in the art of fast bowling",
    price: 12000,
    youWillLearn: [
      "Advanced techniques and strategies to significantly increase your bowling speed, elevating your performance on the pitch.",
      "Tailored strength and conditioning routines specifically designed to enhance arm speed and endurance for sustained effectiveness in bowling.",
      "In-depth technical and tactical insights for refining your bowling action, ensuring precision and consistency in your deliveries.",
      "Comprehensive injury prevention methods and exercises tailored to fast bowlers, minimizing the risk of common bowling-related injuries.",
      "Specialized speed work drills crafted to amplify arm speed, giving you the edge as a fast bowler in competitive scenarios.",
    ],
    duration: "2-12 months",
    thumbnail: mentorship,
    language: ["English"],
  },
  {
    courseId: 2,
    timestamp: "2023-11-27T18:08:54Z",
    courseName: "Optimizing Runup for Fast Bowling",
    instructor: "Sachin",
    subtitle: "Runup",
    lesson: 7,
    student: 53,
    description:
      "Acquire foundational insights into the run-up, a critical element in augmenting bowling speed and precision. This course focuses on mastering the fundamental aspects of the run-up, delving deep into techniques aimed at optimizing velocity and accuracy in bowling. Participants will gain comprehensive knowledge and practical skills essential for refining their approach, ensuring a well-structured and efficient run-up that significantly impacts their bowling performance.",
    price: 2500,
    youWillLearn: [
      "Techniques to accurately measure the correct length of your runup, a fundamental step toward mastering fast bowling.",
      "Methods to maintain balance throughout your runup, ensuring stability and precision during delivery.",
      "Strategies to increase explosiveness in your runup without compromising on balance, maximizing your bowling speed.",
    ],
    duration: "1-3 months",
    thumbnail: runup,
    language: ["English", "Hindi"],
  },
  {
    courseId: 3,
    timestamp: "2023-11-27T18:14:13Z",
    courseName: "Improved Arm Speed Training",
    instructor: "Sachin",
    subtitle: "Arm speed",
    lesson: 5,
    student: 33,
    description:
      "Elevate your bowling prowess by enhancing arm speed through specialized techniques and targeted workout regimens designed for accelerated bowling. This course is meticulously curated to elevate arm speed, focusing on advanced methods and tailored exercises aimed at maximizing velocity and effectiveness in bowling. Participants will delve into a comprehensive program that combines technical precision with tailored workouts, ensuring a significant boost in arm speed for a more formidable bowling performance.",
    price: 2500,
    youWillLearn: [
      "Advanced strategies and specialized techniques to significantly amplify your arm speed, setting you apart as a formidable fast bowler.",
      "Tailored strength and conditioning regimens specifically designed to boost arm speed and endurance, crucial for sustained bowling effectiveness.",
      "In-depth insights into bowling methodologies dedicated to increasing arm speed, refining your technique for optimal performance.",
    ],
    duration: "1-3 months",
    thumbnail: arm,
    language: ["English", "Hindi"],
  },
  {
    courseId: 4,
    timestamp: "2023-11-27T18:21:57Z",
    courseName: "Optimized Back Foot Contact Technique",
    instructor: "Sachin",
    subtitle: "BACKFOOT",
    lesson: 7,
    student: 43,
    description:
      "Refine the art of maintaining a solid backfoot contact, pivotal for seamless energy transition and enhanced bowling speed. This course concentrates on mastering the technique of a firm backfoot contact, enabling a fluid transfer of energy crucial for achieving higher bowling speeds. Participants will delve into specialized drills and technical insights, fostering a consistent and powerful backfoot stance that significantly influences bowling velocity.",
    price: 3500,
    youWillLearn: [
      "Specialized drills meticulously designed to develop and maintain a strong and stiff backfoot contact, enhancing your bowling action.",
      "Tailored strength-building exercises focusing on specific muscle groups vital for a powerful backfoot contact, improving your overall bowling prowess.",
      "Technical insights and training sessions dedicated to perfecting the backfoot contact technique, ensuring a seamless transfer of energy to the frontfoot.",
    ],
    duration: "2-3 months",
    thumbnail: back,
    language: ["English", "Hindi"],
  },
  {
    courseId: 5,
    timestamp: "2023-11-27T18:28:55Z",
    courseName: "Optimized Front Foot Contact Technique",
    instructor: "Sachin",
    subtitle: "Frontfoot",
    lesson: 6,
    student: 23,
    description: "Enhance bowling pace by achieving a braced front leg and technical efficiency.",
    price: 3500,
    youWillLearn: [
      "Techniques and methods to attain and sustain a braced front leg, a key element for enhancing bowling pace and control.",
      "Strategies for bowling at high speeds while maintaining a braced front leg, optimizing your performance on the field.",
      "Specific strength-building exercises tailored to fortify your frontfoot contact, improving your overall bowling prowess.",
      "Progressive level drills targeting various aspects of front foot contact, allowing systematic improvement of your technique at different skill levels.",
    ],
    duration: "2-3 months",
    thumbnail: front,
    language: ["English", "Hindi"],
  },
];

export default coursesData;
