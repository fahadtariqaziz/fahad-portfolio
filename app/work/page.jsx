"use client";

import { easeIn, motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns"; // Ensure the path is correct

const projects = [
  {
    num: '01',
    category: 'Coin Bounce (Crypto+News+Blogs)',
    title: "project 1",
    description: "I've created a web application using the MERN stack that fetches real-time cryptocurrency data and the latest news from external APIs. It includes user authentication for logging in and enables users to publish blogs. The application features a responsive interface designed with modular css, ensuring a seamless experience for both readers and contributors.",
    stack: [{ name: "React.js" }, { name: "Express" }, { name: "MongoDB" }],
    image: '/assets/work/thumb1.png',
    live: '',
    github: 'https://github.com/fahadtariqaziz',
  },
  {
    num: '02',
    category: 'Fullstack Selling Platform - MERN ',
    title: "project 2",
    description: "I've developed an ecommerce web application using the MERN stack. The application allows users to browse and purchase products, add them to cart, and securely process payments via Stripe integration. With a focus on scalability and user experience, I've ensured a responsive design and efficient backend architecture, delivering a seamless shopping experience from product discovery to checkout.",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }],
    image: '/assets/work/thumb2.png',
    live: '',
    github: 'https://github.com/fahadtariqaziz',
  },
  {
    num: '03',
    category: 'Live Streaming',
    title: "project 3",
    description: "I have developed a dynamic web application that streams live sports channels and broadcasts international matches for various teams and leagues. The application provides users with real-time access to live sports content, enhancing their viewing experience. It features a responsive design to ensure seamless streaming across devices, delivering high-quality video and intuitive navigation for sports enthusiasts worldwide.",
    stack: [{ name: "Node.js" }, { name: "Express" }, { name: "React.js" }, { name: "MongoDB" }],
    image: '/assets/work/thumb3.png',
    live: '',
    github: 'https://github.com/fahadtariqaziz',
  },
];

const Work = () => {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-center items-center py-12 xl:px-0">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} layout="fill" className="object-cover" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex justify-between mt-4"
                btnStyles="bg-gray-800 p-2 rounded-full"
                iconsStyles="text-white"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;