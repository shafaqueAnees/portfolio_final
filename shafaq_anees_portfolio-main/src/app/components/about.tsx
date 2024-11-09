import React from 'react'
import Image from 'next/image'
import aboutImg from '../../../public/assests/picture/image.jpg'
// import myCv from '../../../public/assests/picture/cv.pdf'

const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font bg-black py-24">
        <div className="container mx-auto flex px-5 flex-col items-center">
          <div className="flex flex-wrap w-full">
            {/* Profile Image */}
            <div 
            data-aos = 'fade-right'
            data-aos-duration = '1000'
            data-aos-easing = 'ease-in-sine'
            className="lg:w-1/3 md:w-1/2 w-full mb-8 md:mb-0 flex justify-center">
              <Image 
                src= {aboutImg}
                className="object-cover object-center rounded-full border-4 border-golden-500 shadow-xl transition-transform transform hover:scale-110"
                width={250}
                height={250}
                alt="profile picture" 
              />
            </div>
            
            {/* About Content */}
            <div 
            data-aos = 'fade-left'
            data-aos-duration = '1000'
            data-aos-easing = 'ease-in-sine'
            className="lg:w-2/3 md:w-1/2 w-full flex flex-col justify-center items-start text-center md:text-left">
              
              {/* Section Title */}
              <h1 className="title-font sm:text-5xl text-3xl mb-6 font-semibold text-white">About Me</h1>

              {/* Description Text */}
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                I hold a Master's degree in Economics from the University of Karachi, and I am deeply passionate about web development. I specialize in frontend technologies such as HTML, CSS, JavaScript, and have expertise in modern frameworks like React and Next.js.
              </p>

              {/* Skills List */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white">Skills & Expertise:</h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>HTML5, CSS3, JavaScript</li>
                  <li>React.js, Next.js, TypeScript</li>
                  <li>Responsive Web Design</li>
                  <li>Version Control (Git, GitHub)</li>
                  <li>UI/UX Best Practices</li>
                </ul>
              </div>

              {/* Current Focus */}
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                I am currently enhancing my skills in building dynamic, scalable, and responsive web applications while providing seamless user experiences.
              </p>

              {/* CV Download Button */}
              <div className="flex justify-center mt-6">
                <a href='/assests/picture/cv.pdf' download>
                  <button className="inline-flex text-white bg-blue-600 border-0 py-3 px-8 focus:outline-none hover:bg-blue-700 rounded-lg shadow-md text-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                    Download My CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
