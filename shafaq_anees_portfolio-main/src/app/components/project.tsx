"use client";

import React from "react";
import Image from "next/image";
import max from "../../../public/assests/project/maxresdefault.jpg";
import sc from "../../../public/assests/project/stopwatch.png";
import max2 from "../../../public/assests/project/calculator.png";
import max3 from "../../../public/assests/project/builder.png";
import max4 from "../../../public/assests/project/pakola.png";
import max5 from "../../../public/assests/project/fitness.png"
import jg7 from "../../../public/assests/project/simple webpage.png";
import pd1 from "../../../public/assests/project/resume.png";

const Project = () => {
  return (
    <div id="projects">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-8">
            {/* Project Card */}
            {[max].map((image, index) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                key={index}
                className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer group"
              >
                <div className="flex relative group-hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-500 ease-in-out group-hover:scale-105"
                    src={image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      Creating Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Todo List
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                      Creating todo list by using JS. It's editable and
                      deletable.
                    </p>
                    <a
                      target="_blank"
                      href="https://basic-react-tvw7.vercel.app/"
                    >
                      <p className="leading-relaxed text-blue-500 hover:underline">
                        View Project..
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}

{[max3].map((image, index) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                key={index}
                className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer group"
              >
                <div className="flex relative group-hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-500 ease-in-out group-hover:scale-105"
                    src={image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      Creating Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Todo List
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                      Creating todo list by using JS. It's editable and
                      deletable.
                    </p>
                    <a
                      target="_blank"
                      href="https://website-builder-orcin.vercel.app/"
                    >
                      <p className="leading-relaxed text-blue-500 hover:underline">
                        View Project..
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}

{[max4].map((image, index) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                key={index}
                className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer group"
              >
                <div className="flex relative group-hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-500 ease-in-out group-hover:scale-105"
                    src={image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      Creating Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Todo List
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                      Creating todo list by using JS. It's editable and
                      deletable.
                    </p>
                    <a
                      target="_blank"
                      href="https://website-builder-xooh.vercel.app/"
                    >
                      <p className="leading-relaxed text-blue-500 hover:underline">
                        View Project..
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}

{[max5].map((image, index) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                key={index}
                className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer group"
              >
                <div className="flex relative group-hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-500 ease-in-out group-hover:scale-105"
                    src={image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      Creating Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Todo List
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                      Creating todo list by using JS. It's editable and
                      deletable.
                    </p>
                    <a
                      target="_blank"
                      href="https://website-builder-in18.vercel.app/"
                    >
                      <p className="leading-relaxed text-blue-500 hover:underline">
                        View Project..
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}



             {/* Project Card */}
             {[sc].map((image, index) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                key={index}
                className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer group"
              >
                <div className="flex relative group-hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-500 ease-in-out group-hover:scale-105"
                    src={image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      Creating Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Todo List
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                      Creating todo list by using JS. It's editable and
                      deletable.
                    </p>
                    <a
                      target="_blank"
                      href="https://stopwatch-lp63.vercel.app/"
                    >
                      <p className="leading-relaxed text-blue-500 hover:underline">
                        View Project..
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}

             {/* Project Card */}
             {[max2].map((image, index) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                key={index}
                className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer group"
              >
                <div className="flex relative group-hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-500 ease-in-out group-hover:scale-105"
                    src={image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      Creating Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Todo List
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                      Creating todo list by using JS. It's editable and
                      deletable.
                    </p>
                    <a
                      target="_blank"
                      href="https://calculator-ten-psi-47.vercel.app/"
                    >
                      <p className="leading-relaxed text-blue-500 hover:underline">
                        View Project..
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}

             {/* Project Card */}
             {[jg7].map((image, index) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                key={index}
                className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer group"
              >
                <div className="flex relative group-hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-500 ease-in-out group-hover:scale-105"
                    src={image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      Creating Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Todo List
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                      Creating todo list by using JS. It's editable and
                      deletable.
                    </p>
                    <a
                      target="_blank"
                      href="https://home-work-q2-wy88.vercel.app/"
                    >
                      <p className="leading-relaxed text-blue-500 hover:underline">
                        View Project..
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}

             {/* Project Card */}
             {[pd1].map((image, index) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                key={index}
                className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer group"
              >
                <div className="flex relative group-hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-500 ease-in-out group-hover:scale-105"
                    src={image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      Creating Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Todo List
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                      Creating todo list by using JS. It's editable and
                      deletable.
                    </p>
                    <a
                      target="_blank"
                      href="https://resume-shafaq-h2tr.vercel.app/"
                    >
                      <p className="leading-relaxed text-blue-500 hover:underline">
                        View Project..
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

                    
        </div>


        
      </section>
    </div>
  );
};

export default Project;
