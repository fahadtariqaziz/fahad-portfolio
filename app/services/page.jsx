"use client"

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const service = [
  {
    num: '01',
    title: "Web Developement",
    description: 'I am a proficient web developer skilled in the MERN stack, Next.js, and Tailwind CSS. I excel in crafting robust web applications, ensuring they are both responsive and user-friendly. With hands-on experience in front-end development and a strong command of modern web technologies, I consistently deliver projects that meet client requirements and industry standards.',
    href: "https://github.com/fahadtariqaziz"
  },
  {
    num: '02',
    title: "Software Debugging",
    description: 'I am a detail-oriented web developer specializing in the MERN stack, Next.js, and Tailwind CSS, with a strong focus on software debugging. I possess extensive experience in identifying and resolving complex issues within web applications, employing systematic troubleshooting techniques and leveraging debugging tools effectively. My proactive approach and meticulous attention to detail ensure that I deliver optimized, bug-free solutions that meet client specifications and enhance overall user experience.',
    href: "https://github.com/fahadtariqaziz"
  },
  
  
];


//import {motion} from "framer-motion";


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
          {service.map ((service, index) => {
            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
          { /* top */}
          <div className="w-full flex justify-between items-center">
            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
            <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white
              group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
              >
            <BsArrowDownRight className="@text-primary text-3x1" />
          </Link>
        </div>
        { /*title*/ }
          <h2 className="text-[42px] font-bold leading-none text-white
            group-hover:text-accent transition-all duration-500">
              {service.title}
            </h2>
        {/* description */}
        <p> { service.description} </p>
        {/* border */}
        <div className="border-b border-white/20 w-full"> </div>
    </div>;
          })}
    </motion.div>
  </div>
</ section>
  )
}

export default Services;