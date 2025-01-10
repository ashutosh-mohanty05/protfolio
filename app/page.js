"use client"
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import React from "react";
import { useState , useEffect } from "react";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)
    const handleResumeClick =()=>{
      window.open("ASHUTOSH MOHANTY.pdf","")
    }
    const handleproj2Click =()=>{
      window.location.href="https://on-demand-doctor.netlify.app/"
    }
    const handlegithubClick =()=>{
      window.location.href="https://github.com/ashutosh-mohanty05"
    }
    const handlelinkedinClick =()=>{
      window.location.href="https://www.linkedin.com/in/ashutosh-mohanty-674392217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
    const handletwitterClick =()=>{
      window.location.href="https://twitter.com/iashu05?t=2YpXVDN2XigbulhFlabn2A&s=08"
    }
    const handleproj1Click =()=>{
      window.location.href="https://jobzeein.netlify.app/"
    }
    const handleproj3Click =()=>{
      window.location.href="https://restaurant-reserve-mern-git-main-ashutoshs-projects-dfbbbd9c.vercel.app/"
    }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(()=>{
    const toggleVisibility=()=>{
      setIsVisible(window.pageYOffset > 300); 
    }
    window.addEventListener('scroll',toggleVisibility)

  return ()=>{
    window.removeEventListener('scroll',toggleVisibility)
  }
    },[])
  return (
   <div className={darkMode ? 'dark':""}>
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons dark:text-white">ASHUTOSH</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill onClick={()=>{
                setDarkMode(!darkMode)
              }} className="cursor-pointer dark:text-white" />
            </li>
            <li onClick={handleResumeClick} className="hover:scale-90"><a className="bg-gadient-to-r from-cyan-500 to-teal-500 text-white bg-cyan-500 px-4 py-2 rounded-md ml-8 hover:bg-cyan-400" href="#">Resume</a></li>
          </ul>
        </nav>
        <div className="text-center p-10 dark:text-white">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Ashutosh Mohanty</h2>
          <h3 className="text py-2 md:text-xl"> <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Engineer-Cloud and Infra',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Web Developer',
              1000,
              'Amazon Web Service',
              1000,

            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          /></h3>
          <p className="text-md py-3 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">Freelancer providing services for programming and design needs. Join me down below and let&apos;s get cracking!</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600 dark:text-white">
          <AiFillTwitterCircle onClick={handletwitterClick} className="cursor-pointer" />
          <AiFillLinkedin onClick={handlelinkedinClick} className="cursor-pointer"/>
          <AiFillGithub onClick={handlegithubClick} className="cursor-pointer"/>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 ">
          <Image src={"/profile.png"} alt="" layout="fill" objectFit="cover" />
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-2xl py-1 dark:text-white">What Can I Add ?</h3>
          <p className="text-sm py-2 leading-8 text-gray-800 dark:text-white ">
            I can bring a strong foundation in building interactive and visually appealing user interfaces. My Experties extends to utilizing <span className="text-teal-500">React.js</span> for frontend development and integrating it seamlessly with <span className="text-teal-500">MongoDB</span>,<span className="text-teal-500">Express.JS</span> and <span className="text-teal-500">Node.js</span> on the backend.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl hover:translate-y-2 dark:bg-white">
            <Image src={"/react.png"} alt="" width={100} height={100} className="rounded-2xl m-auto relative overflow-hidden" />
            <h6 className="text-lg font-medium pt-8 pb-2">Beautiful UI with React</h6>
            <p className="text-sm text-gray-600">Proficient in building dynamic, responsive UIs with clean, optimized code. Focused on delivering exceptional user experiences.</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl hover:translate-y-2 dark:bg-white">
            <Image src={"/next.svg"} alt="" width={100} height={100} className="rounded-2xl m-auto relative overflow-hidden " />
            <h6 className="text-lg font-medium pt-8 pb-2">Next.js 13 Utilization</h6>
            <p className="text-sm text-gray-600">Route and component with next.js combined with efficient code design for seamless deployment and intuitive user experience.</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl hover:translate-y-2 dark:bg-white">
            <Image src={"/hash.svg"} alt="" width={100} height={100} className="rounded-2xl m-auto relative overflow-hidden" />
            <h6 className="text-lg font-medium pt-8 pb-2">Custom Code and Deploy</h6>
            <p className="text-sm text-gray-600">Streamlined, scalable code architecture designed for ease of deployment and efficient management.</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-2xl py-5 dark:text-white">Projects</h3>
          <div className="flex justify-center gap-10">
            <div onClick={handleproj1Click} className="text-center shadow-lg p-5 rounded-xl hover:translate-y-2 relative dark:bg-white cursor-pointer ">
              <Image src={"/chattugram.PNG"} alt="" width={100} height={100} className="rounded-2xl m-auto relative overflow-hidden hover:scale-110 opacity-100 hover:opacity-75 transition-opacity duration-300 w-full h-auto  " />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-teal-100 bg-opacity-50 text-center">
                <p className="text-sm font-bold">JobZee</p>
              </div>
            </div>

            <div onClick={handleproj2Click} className="text-center shadow-lg p-5 rounded-xl hover:translate-y-2 relative dark:bg-white cursor-pointer">
            
              <Image src={"/brandpage.png"} alt="" width={100} height={100} className="rounded-2xl m-auto relative overflow-hidden hover:scale-110 opacity-100 hover:opacity-75 transition-opacity duration-300 w-full h-auto " />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-teal-100 bg-opacity-50 text-center">
                <h3 className="font-bold text-sm">Doctor</h3>
               
              </div>
            </div>
            <div onClick={handleproj3Click} className="text-center shadow-lg p-5 rounded-xl hover:translate-y-2 relative dark:bg-white cursor-pointer">
              <Image src={"/Todo.PNG"} alt="" width={100} height={100} className="rounded-2xl m-auto relative overflow-hidden hover:scale-110 opacity-100 hover:opacity-75 transition-opacity duration-300 w-full h-auto" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-teal-100 bg-opacity-50 text-center">
                <p className="text-sm font-bold">Restro</p>
              </div>
            </div>
          </div>

        </div>
      </section>





      <div className="max-w-md mx-auto p-10 ">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-4">Connect with me</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Share Your Queries
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Leave a message..."
                  required
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
     
      <button
      className={`${
        isVisible ? 'block':'hidden'
      }fixed bottom-10 right-1/2 -translate-x-1/2 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none`}
      onClick={scrollToTop}
      >
        ^
      </button>

    </main>
    </div>
  );
};
