"use client"

import { useEffect, useState } from "react";
import { Experience } from "./Data/Experince";
import Link from "next/link";
import { Skills } from "./Data/Skills";
import { projects } from "./Data/Projects";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";
import Loader from "./Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import Image from "next/image";




export default function Home() {

  const [resumeCategory, setResumeCategory] = useState('Education');
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [imageLoaded, setImageLoaded] = useState(false);


  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setPhoneNumber(value.slice(0, 10)); // Limit to 10 digits
  };

  function SendingEmail(e) {
    if (fullName && subject && email && phoneNumber && message) {
      // console.log("if working ")
      e.preventDefault();
      setLoading(true)
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
      // console.log("first", publicKey)
      // console.log("seonc", serviceId)
      // console.log("this", templateId)

      const templateParams = {
        to_name: "Mamta Sangwan",
        from_name: fullName,
        Subject: subject,
        Contact: phoneNumber,
        message: message
      }

      // Send the email using EmailJS
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          // console.log('Email sent successfully!', response);
          setFullName('');
          setEmail('');
          setMessage('');
          setPhoneNumber('');
          setSubject('');
          setLoading(false)
          toast.success("email sent successfully!");

        })
        .catch((error) => {
          console.error('Error sending email:', error);
          setLoading(false)
          // toast.error("something went wrong in Send Email!");
        });
    } else {
      // console.log("else working ")
      toast.error("Please Fill all the Fields");
    }




  }



  // useEffect(() => {
  //   // Ensure this runs only on the client side
  //   if (typeof window !== "undefined") {
  //     if (document.readyState === "complete") {
  //       setLoading(false);
  //     } else {
  //       const handleLoad = () => setLoading(false);
  //       window.addEventListener("load", handleLoad);

  //       return () => window.removeEventListener("load", handleLoad);
  //     }
  //   }
  // }, []);


  return (

    <div className="bg-animated">

      {loading && <Loader />}

      {/* ******************************
        Header Section Start 
       ****************************** */}
      <header className=" px-5  md:px-9 lg:px-14 relative  overflow-hidden">
        <div className="sparkle-container">
          <div className="sparkle" style={{ top: "80%", left: "20%", animationDelay: "0s" }} />
          <div className="sparkle" style={{ top: "90%", left: "60%", animationDelay: "2s" }} />
          <div className="sparkle" style={{ top: "70%", left: "40%", animationDelay: "4s" }} />
          <div className="sparkle" style={{ top: "85%", left: "75%", animationDelay: "1s" }} />
          <div className="sparkle" style={{ top: "95%", left: "10%", animationDelay: "3s" }} />

         
          <div className="sparkle" style={{ top: "20%", left: "30%", animationDelay: "0.5s" }} />
          <div className="sparkle" style={{ top: "35%", left: "70%", animationDelay: "2.5s" }} />
          <div className="sparkle" style={{ top: "15%", left: "50%", animationDelay: "1.5s" }} />
          <div className="sparkle" style={{ top: "45%", left: "15%", animationDelay: "3.5s" }} />
          <div className="sparkle" style={{ top: "60%", left: "85%", animationDelay: "4.5s" }} />

          <div className="sparkle" style={{ top: "10%", left: "80%", animationDelay: "1s" }} />
          <div className="sparkle" style={{ top: "55%", left: "25%", animationDelay: "2s" }} />
          <div className="sparkle" style={{ top: "75%", left: "55%", animationDelay: "3s" }} />
          <div className="sparkle" style={{ top: "30%", left: "5%", animationDelay: "4s" }} />
          <div className="sparkle" style={{ top: "40%", left: "90%", animationDelay: "5s" }} />
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-20  gap-4">
          <div className="w-full md:w-7/12">
            <p className="text-color font-normal text-lg md:text-3xl"> <Typewriter
              words={["Front-End Developer"]}
              loop={true} // Keep the animation looping
              cursor
              cursorStyle=" "
              typeSpeed={60} // Speed of typing
              deleteSpeed={50} // Speed of deleting
              delaySpeed={3000}
            /></p>
            <h2 className="text-[#ca4a74] font-semibold text-[30px]  md:text-[40px] lg:text-[60px] xl:text-[80px] mt-1">
              Hello I'm
            </h2>
            <h1 className="text-color font-semibold text-[36px]  md:text-[45px] lg:text-[60px] xl:text-[80px]" >
              <Typewriter
                words={["Mamta Sangwan"]}
                loop={true} // Keep the animation looping
                cursor
                cursorStyle="_"
                typeSpeed={80} // Speed of typing
                deleteSpeed={100} // Speed of deleting
                delaySpeed={1000}
              />
            </h1>

            <p className="text-[#2d2b2f] font-normal text-[16px] lg:text-lg">
              I'm a <span className="text-[20px] font-extrabold text-color">Front-End Developer</span> specializing in React.js, HTML, CSS, JavaScript, and modern UI libraries.
              Passionate about crafting responsive, accessible, and visually appealing web interfaces, I focus on delivering pixel-perfect designs with clean, maintainable code.
              Continuously learning and staying up-to-date with the latest front-end trends, I aim to build seamless digital experiences that engage and inspire users.
            </p>

            {/* Social Links (Visible only below md) */}
            <div className="flex items-center gap-3 mt-3 md:hidden">
              <Link href="https://www.linkedin.com/in/amansingh-fullstack/" target="_blank">
                <Image width={24} height={24} src="/Images/Svg/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:fill-black" />
              </Link>
              <Link href="https://t.me/AmanSingh7011" target="_blank">
                <Image width={24} height={24} src="/Images/Svg/telegram.svg" alt="Telegram" className="w-6 h-6" />
              </Link>
              <Link href="https://github.com/Aman-Singh123" target="_blank">
                <Image width={24} height={24} src="/Images/Svg/github.svg" alt="GitHub" className="w-6 h-6" />
              </Link>
            </div>

            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/MamtaResume.pdf"; // Path inside public folder
                link.download = "Mamta_Resume.pdf"; // File name when downloaded
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="relative flex items-center justify-center py-1 px-3 shadow bg-[#F44C8B] border rounded-2xl mt-4 overflow-hidden group hover:shadow-[0_0_15px_rgba(244,76,139,0.9)] hover:scale-105 transition-all duration-300">
              <span className="text-white transition-transform duration-300 group-hover:scale-110">RESUME</span>
              <img className="ms-2 transition-transform duration-300 group-hover:scale-110" src="/Images/Svg/download_icon.svg" alt="DownloadIcon" />
            </button>
          </div>
          <div className="w-full md:w-5/12 lg:w-4/12  custom-width anima te-advancedFloating">
            <img src="/Images/Png/mamta.png" alt="HeroImage" className="w-full max-h-[450px]  object-contain " />
          </div>
        </div>

        <div className="grid text-color grid-cols-1 header_card  md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mt-9">
          {/* Card 1 */}
          <div className="">
            <p className=" text-3xl md:text-2xl  xl:text-5xl  lg:text-4xl font-semibold ff_Road">1+</p>
            <p className="text-lg text-[#4f304f]">Years of Experience</p>
          </div>
          {/* Card 2 */}
          <div>
            <p className="text-3xl md:text-2xl  xl:text-5xl  lg:text-4xl font-semibold ff_Road">5+</p>
            <p className="text-lg text-[#4f304f]">Projects Completed</p>
          </div>
          {/* Card 3 */}
          <div>
            <p className="text-3xl md:text-2xl  xl:text-5xl  lg:text-4xl font-semibold ff_Road">03</p>
            <p className="text-lg text-[#4f304f]">Technologies Mastered</p>
          </div>
          {/* Card 4 */}
          <div>
            <p className="text-3xl md:text-2xl  xl:text-5xl  lg:text-4xl font-semibold ff_Road">120</p>
            <p className="text-lg text-[#4f304f]">Code Commits</p>
          </div>
        </div>
      </header>


      {/* ******************************
        Header Section End 
       ****************************** */}



      {/* ******************************
        Service Section Start 
       ****************************** */}

      <section id="service" className="relative mt-28 px-5 md:px-9 lg:px-14 mb-6 ">
        <img className="absolute -right-[0px] -top-[5%]   md:-right-[0px] md:-top-[15%]  w-[30%] md:w-[16%]" src="/Images/Png/flotingGirl.png" alt="flotingGirl" />

        <h2 className="text-[#ca4a74] font-normal text-[28px]   md:text-[36px] lg:text-[55px] xl:text-[70px] mt-1 ">Service...</h2>

        <div className="grid px-2 md:px-3 lg:px-14 mt-24 relative grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

          {/* Card 1 */}
          <div className="p-6 bg-gradient-to-b from-[#f1d7e2] to-[#efc5e4] rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_15px_rgba(255,114,165,0.6)]">
            <h3 className="text-3xl md:text-2xl xl:text-5xl text-[#e6498f]  lg:text-4xl font-semibold ff_Road">01</h3>
            <h4 className="text-xl font-semibold text-[#ca4a74] mt-4">
              Portfolio Website Design & Personal Branding
            </h4>
            <ul className="text-[#6d5e76] text-[15px] md:text-lg fw-semibold mt-4 list-disc pl-5">
              <li>Customize layouts with brand color palettes and typography.</li>
              <li>Design aesthetic personal websites and landing pages.</li>
              <li>Build lightweight, fast-loading one-pagers with animations..</li>
              <li>Optimize for social sharing and SEO.</li>
            </ul>

            {/* <div className="h-[2px] w-full bg-gradient-to-r from-[rgba(21,255,234,1)] via-[rgba(0,150,255,0.7)] to-[rgba(21,255,234,1)] mt-4 rounded shadow-[0_0_15px_rgba(21,255,234,0.5)] hover:shadow-[0_0_25px_rgba(21,255,234,0.8)] blur-[1px] transition-all duration-300 hover:blur-[5px]"></div> */}


            {/* Hover underline effect */}
            <div className="h-1 w-0 bg-[rgba(21,255,234,1)] mt-3 transition-all duration-300 group-hover:w-full"></div>
          </div>



          {/* Card 2 */}

          <div className="p-6 bg-gradient-to-b from-[#f1d7e2] to-[#efc5e4] rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_15px_rgba(255,114,165,0.6)]">
            <h3 className="text-3xl md:text-2xl xl:text-5xl text-[#e6498f]  lg:text-4xl font-semibold ff_Road">02</h3>
            <h4 className="text-xl font-semibold text-[#ca4a74]   mt-4">Custom Animations & Interactive UI</h4>
            <ul className="text-[#6d5e76] text-[15px] md:text-lg fw-semibold mt-4 list-disc pl-5">
              <li>Animate buttons, modals, sections using Framer Motion / GSAP.</li>
              <li>Build scroll-triggered effects, parallax sections.</li>
              <li>Use CSS animations and Lottie for lightweight motion.</li>
              <li>Create interactive loaders, cards, and navbars.</li>
            </ul>

            {/* <div className="h-[2px] w-full bg-gradient-to-r from-[rgba(21,255,234,1)] via-[rgba(0,150,255,0.7)] to-[rgba(21,255,234,1)] mt-4 rounded shadow-[0_0_15px_rgba(21,255,234,0.5)] hover:shadow-[0_0_25px_rgba(21,255,234,0.8)] blur-[1px] transition-all duration-300 hover:blur-[5px]"></div> */}


            {/* Hover underline effect */}
            <div className="h-1 w-0 bg-[rgba(21,255,234,1)] mt-3 transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Card 3 */}

          <div className="p-6 bg-gradient-to-b from-[#f1d7e2] to-[#efc5e4] rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_15px_rgba(255,114,165,0.6)]">
            <h3 className="text-3xl md:text-2xl xl:text-5xl text-[#e6498f]  lg:text-4xl font-semibold ff_Road">03</h3>
            <h4 className="text-xl font-semibold text-[#ca4a74]   mt-4">Interactive Component & E-Commerce UI Development</h4>
            <ul className="text-[#6d5e76] text-[15px] md:text-lg fw-semibold mt-4 list-disc pl-5">
              <li>Build custom UI for shopping carts and checkout processes.</li>
              <li>Implement product listings with filtering and animations.</li>
              <li>Use React Hooks to create interactive, reusable components.</li>
              <li>Design attention-grabbing CTAs and engaging transitions.</li>
            </ul>

            {/* <div className="h-[2px]  w-full bg-gradient-to-r from-[rgba(21,255,234,1)] via-[rgba(0,150,255,0.7)] to-[rgba(21,255,234,1)] mt-4 rounded shadow-[0_0_15px_rgba(21,255,234,0.5)] hover:shadow-[0_0_25px_rgba(21,255,234,0.8)] blur-[1px] transition-all duration-300 hover:blur-[5px]"></div> */}

            {/* Hover underline effect */}
            <div className="h-1 w-0 bg-[rgba(21,255,234,1)] mt-3 transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Card 4 */}


          <div className="p-6 bg-gradient-to-b from-[#f1d7e2] to-[#efc5e4] rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_15px_rgba(255,114,165,0.6)]">
            <h3 className="text-3xl md:text-2xl xl:text-5xl text-[#e6498f]  lg:text-4xl font-semibold ff_Road">04</h3>
            <h4 className="text-xl font-semibold text-[#ca4a74]  mt-4">API Integration & Dynamic Data</h4>
            <ul className="text-[#6d5e76] text-[15px] md:text-lg fw-semibold mt-4 list-disc pl-5">
              <li>Integrate public APIs like weather, news, or GitHub stats.</li>
              <li>Fetch dynamic content using Axios or Fetch API.</li>
              <li>Implement secure form submissions and contact systems.</li>
              <li>Showcase data visualization with charts or dashboards.</li>
            </ul>

            {/* <div className="h-[2px]  w-full bg-gradient-to-r from-[rgba(21,255,234,1)] via-[rgba(0,150,255,0.7)] to-[rgba(21,255,234,1)] mt-4 rounded shadow-[0_0_15px_rgba(21,255,234,0.5)] hover:shadow-[0_0_25px_rgba(21,255,234,0.8)] blur-[1px] transition-all duration-300 hover:blur-[5px]"></div> */}

            {/* Hover underline effect */}
            <div className="h-1 w-0 bg-[rgba(21,255,234,1)] mt-3 transition-all duration-300 group-hover:w-full"></div>
          </div>


        </div>
      </section>

      {/* ******************************
        Service Section End 
       ****************************** */}

      {/* ******************************
        Resume Section Start 
       ****************************** */}

      <section id="resume" className="relative mt-28 px-5 md:px-9 lg:px-14 mb-6 ">
        <h2 className="text-[#ca4a74] font-normal text-[28px]   md:text-[36px] lg:text-[55px] xl:text-[70px] mt-1 ">Resume</h2>
        <div className="flex flex-col md:flex-row justify-between  mt-3">
          <div className="w-full md:w-5/12 lg:w-4/12 xl:w-3/12  px-3">
            <p className="fw-normal text-[#e6498f] text-[26px]  md:text-[30px] lg:text-[36px] ">Why hire me?</p>
            <p className="text-[#2d2b2f]  ff_Road fw-semibold text-[16px] mt-2">I provide modern, efficient, and user-focused solutions tailored to your needs. With a commitment to quality and timely delivery, I ensure every project exceeds expectations</p>
            <div className="flex flex-col gap-4 w-64  p-4 rounded-lg">
              <button onClick={() => setResumeCategory('experience')} className={` font-semibold py-2 px-4 rounded-md transition-all duration-300 hover:bg-[#F44C8B] ${resumeCategory.toLowerCase() === 'experience' ? 'bg-[#F44C8B] text-white ' : 'bg-[#f583dc]  text-white'}`}>
                Experience
              </button>
              <button onClick={() => setResumeCategory('education')} className={` font-semibold py-2 px-4 rounded-md transition-all duration-300 hover:bg-[#F44C8B] hover:text-white ${resumeCategory.toLowerCase() === 'education' ? 'bg-[#F44C8B] text-white ' : 'bg-[#f583dc]  text-white'} `}>
                Education
              </button>
              <button onClick={() => setResumeCategory('skills')} className={`font-semibold py-2 px-4 rounded-md transition-all duration-300 hover:bg-[#F44C8B] hover:text-white ${resumeCategory.toLowerCase() === 'skills' ? 'bg-[#F44C8B] text-white ' : 'bg-[#f583dc]  text-white'}`}>
                Skills
              </button>
              <button onClick={() => setResumeCategory('aboutme')} className={` font-semibold py-2 px-4 rounded-md transition-all duration-300 hover:bg-[#F44C8B] hover:text-white ${resumeCategory.toLowerCase() === 'aboutme' ? 'bg-[#F44C8B] text-white ' : 'bg-[#f583dc]  text-white'}`}>
                About me
              </button>
            </div>

          </div>

          {resumeCategory.toLowerCase() === "education" && <div className="w-full md:w-6/12 lg:w-7/12 ">
            <p className="fw-normal text-[#e6498f] text-[26px]  md:text-[30px] lg:text-[36px] mb-3  ">My Education</p>
            <div className="timeline">
              <div className="relative ps-5">
                <p className="text-[#6d5e76] ps-5">2020</p>
                <div className="bg-gradient-to-b from-[#f0c8d9] to-[#f4aee1] p-4 mt-1  ms-5 border   rounded-lg shadow-lg inline-block xl:w-[80%]">
                  <h3 className="text-xl text-[#e6498f] font-bold">10th</h3>
                  <ul className="text-[#6d5e76] list-disc ps-5" >
                    <li>I completed my 10th grade from the Board of Education, Haryana, in the 2020-2021 academic year.</li>
                    <li>Achieved a score of 100%.</li>
                  </ul>
                </div>
                <div className="w-6 h-6 dotPosition  bg-[#e6498f] rounded-full border-2 border-[#f583dc]"></div>

              </div>

              <div className="relative ps-5 mt-5">
                <p className="text-[#6d5e76] ps-5">2022</p>
                <div className="bg-gray-800 xl:w-[80%] p-4 mt-1  ms-5 border  bg-gradient-to-b from-[#f0c8d9] to-[#f4aee1] rounded-lg shadow-lg inline-block">
                  <h3 className="text-xl text-[#e6498f] font-bold">12th</h3>
                  <ul className="text-[#6d5e76] list-disc ps-5" >
                    <li>I completed my 12th grade from the  Board of Education, Haryana, with a focus on Non-Medical, in the 2022-2023 academic year.</li>
                    <li>Achieved a score of 64.4% in the final exams.</li>
                  </ul>
                </div>
                <div className="w-6 h-6 dotPosition  bg-[#e6498f] rounded-full border-2 border-[#f583dc]"></div>
              </div>

              <div className="relative ps-5 mt-5">
                <p className="text-[#6d5e76] ps-5">2024</p>
                <div className="bg-gray-800 xl:w-[80%] p-4 mt-1  ms-5 border  bg-gradient-to-b from-[#f0c8d9] to-[#f4aee1] rounded-lg shadow-lg inline-block">
                  <h3 className="text-xl font-bold text-[#e6498f]">B.C.A</h3>
                  <ul className="text-[#6d5e76] list-disc ps-5" >
                    <li>I Pursuing  my BCA (Bachelor of Computer Applications) from Kurukshetra University
                    </li>

                  </ul>
                </div>
                <div className="w-6 h-6 dotPosition  bg-[#e6498f] rounded-full border-2 border-[#f583dc]"></div>

              </div>



            </div>

          </div>}


          {resumeCategory.toLowerCase() === 'experience' && <div className="w-full md:w-6/12 lg:w-7/12 " >
            <p className="fw-normal text-[#e6498f] text-[26px]  md:text-[30px] lg:text-[36px] ">My Experience</p>
            <p className="text-[#2d2b2f]  ff_Road fw-semibold text-[16px] mt-2">I have hands-on experience in building robust and efficient front-end web applications. I specialize in creating responsive designs, interactive user interfaces, and integrating seamlessly with APIs to deliver smooth, user-friendly digital experiences tailored to client needs.</p>
            <div className="flex flex-wrap gap-4 mt-5">
              {Experience && Experience.map((exp, index) => {
                return (
                  <div key={index} className="w-full custom-width lg:w-[calc(50%-0.5rem)] bg-gradient-to-b from-[#f0c8d9] to-[#f4aee1] p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(244,76,139,0.9)]">
                    <p className="text-[15px] text-[#e6498f] font-medium">{exp.from} - {exp.to}</p>
                    <h3 className="text-xl text-[#e6498f] font-semibold mt-2">{exp.role}</h3>
                    <p className="text-[15px] text-[#6d5e76] flex items-center mt-1">
                      <span className="h-2 w-2 bg-[#6d5e76] rounded-full mr-2"></span>
                      {exp.company}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>}

          {resumeCategory.toLowerCase() === "skills" && <div className="w-full md:w-6/12 lg:w-7/12 ">
            <p className="fw-normal text-[#e6498f] text-[26px]  md:text-[30px] lg:text-[36px] mb-3  ">My Skills</p>
            <p className="text-[#2d2b2f]  ff_Road fw-semibold text-[16px] mt-2">
              As a passionate front-end developer, I work with React, Next.js, JavaScript, HTML, CSS, and Tailwind CSS to create elegant, responsive, and accessible web interfaces. I love turning ideas into beautiful digital experiences that feel smooth, fast, and fun to use.
            </p>


            <div className="grid  mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Skills && Skills.map((skill, index) => {
                return (
                  <div key={index} className="flex flex-col items-center justify-center bg-gradient-to-b from-[#f0c8d9] to-[#f4aee1] p-4 rounded-lg shadow-lg hover:shadow-[0_4px_15px_rgba(255,114,165,0.6)] transition-shadow duration-300">
                    <img src={skill.image} alt={skill.title} about={skill.title} className="h-10 w-10" />
                    <p className="text-white mt-2">{skill.title}</p>
                  </div>
                )
              })
              }
            </div>

          </div>
          }

          {resumeCategory.toLowerCase() === "aboutme" && <div className="w-full md:w-6/12 lg:w-7/12 ">
            <p className="fw-normal text-[#e6498f] text-[26px]  md:text-[30px] lg:text-[36px] mb-3  ">About Me</p>
            <div className="grid gap-4 text-[#2d2b2f] md:p-4 sm:grid-cols-1 xl:grid-cols-2">
              {/* Row 1 */}
              <div className="flex justify-between ">
                <p className="font-semibold text-lg">Name</p>
                <p className="text-[20px] font-semibold text-[#e6498f] ">Mamta Sangwan</p>
              </div>
              <div className="xl:ms-6 flex justify-between">
                <p className="font-semibold text-lg">Phone</p>
                <p className="text-[20px] font-semibold text-[#e6498f] ">+91 8295380580</p>
              </div>

              {/* Row 2 */}
              <div className="flex justify-between">
                <p className="font-semibold text-lg">Experience</p>
                <p className="text-[20px] font-semibold text-[#e6498f] ">1+</p>
              </div>
              <div className="xl:ms-6 flex justify-between">
                <p className="font-semibold text-lg">Email</p>
                <p className="text-[20px] font-semibold text-[#e6498f] ">mamtasangwan851@gmail.com</p>
              </div>

              {/* Row 3 */}
              <div className="flex justify-between">
                <p className="font-semibold text-lg">Nationality</p>
                <p className="text-[20px] font-semibold text-[#e6498f] ">Indian</p>
              </div>
              <div className=" xl:ms-6 flex justify-between">
                <p className="font-semibold text-lg">LinkedIn</p>
                <a href="https://www.linkedin.com/in/mamta-sangwan-96b838355/" target="_blank" className="text-[20px] font-semibold text-[#e6498f] ">linkedin.com/in/mamta-sangwan</a>
              </div>

              {/* Row 4 */}
              <div className="flex justify-between">
                <p className="font-semibold text-lg">Freelance</p>
                <p className="text-[20px] font-semibold text-[#e6498f] ">Available</p>
              </div>
              <div className=" xl:ms-6 flex justify-between">
                <p className="font-semibold text-lg">Language</p>
                <p className="text-[20px] font-semibold text-[#e6498f] ">English, Hindi</p>
              </div>
            </div>

          </div>
          }
        </div>
      </section>



      {/* ******************************
        Resume Section End 
       ****************************** */}


      {/* ******************************
        My Work  Section Start 
       ****************************** */}

      <section id="workbook" className="mt-28 px-5 md:px-9 lg:px-14 mb-6 " >
        <h2 className="text-[#e6498f]  font-normal text-[28px] text-center  md:text-[36px] lg:text-[55px] xl:text-[70px] mt-1 mb-11 md:mb-0 ">My Work</h2>
        <div className="grid grid-cols-1  cursor-pointer justify-items-center    md:grid-cols-2 xl:grid-cols-4  gap-24 py-10 ">
          {projects.map(({ id, title, description, image }) => (
            <div
              key={id}
              className="group relative img_width bg-[#0f0f0f] rounded-xl overflow-hidden shadow-lg border border-[#f6a1ec] w-[300px]"
            >
              {/*  hoga naie le rhi h control adde type kar k dekh 
               */}

              <div className="absolute top-0 left-0 w-full px-6 pt-6 pb-4 bg-[#0f0f0f] bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-t-xl">
                <h2 className="text-xl font-bold text-color mb-2">{title}</h2>
                <p className="text-sm text-gray-300">
                  {description.split(" ").slice(0, 30).join(" ")}
                  {description.split(" ").length > 30 ? "..." : ""}
                </p>
              </div>


              <div className="w-full overflow-hidden rounded-t-xl z-10">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:translate-y-1/2"
                />
              </div>
            </div>

          ))}
        </div>
      </section>


      {/* ******************************
        My work  Section End 
       ****************************** */}

      {/* ******************************
        Contact us   Section Start 
       ****************************** */}
      <section id="contact" className="mt-8  px-5 relative md:px-9 lg:px-14 " >
        <div className="sparkle-container">
          <div className="sparkle" style={{ top: "80%", left: "20%", animationDelay: "0s" }} />
          <div className="sparkle" style={{ top: "90%", left: "60%", animationDelay: "2s" }} />
          <div className="sparkle" style={{ top: "70%", left: "40%", animationDelay: "4s" }} />
          <div className="sparkle" style={{ top: "85%", left: "75%", animationDelay: "1s" }} />
          <div className="sparkle" style={{ top: "95%", left: "10%", animationDelay: "3s" }} />
        </div>
        <h2 className="text-[#e6498f] font-normal text-[28px]   md:text-[36px] lg:text-[55px] xl:text-[70px] mt-1 ">Let's Connect</h2>
        <p className="mt-2 text-lg font-normal  md:max-w-[600px] text-[#2d2b2f]">Feel free to reach out for collaborations, projects, or just to say hi. I'm always open to new opportunities and interesting conversations. Drop me a message, and I'll get back to you as soon as possible!</p>
        <div className="flex flex-col  md:flex-row md:justify-between gap-6 mt-3">
          <div className="w-full relative md:w-4/12 lg:w-5/12 xl:w-4/12">
            <img src="/Images/Png/contactimg.png" alt="Contact" />
            <p className="text-[#e6498f] font-normal text-[28px]   md:text-[36px] lg:text-[40px]  mt-1">Contact Me !</p>

          </div>
          <div className="w-full md:w-8/12 lg:w-7/12 xl:w-8/12">
            <div
              className="max-w-4xl mx-auto p-6 grid grid-cols-1  sm:grid-cols-2 gap-4 text-[rgb(230,73,143)]"
            >
              {/* Full Name */}
              <div className="relative col-span-2  sm:col-span-1">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}

                  className="w-full  px-4 py-2 bg-transparent border border-[#2d2b2f] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(230,73,143)] focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div className="relative col-span-2 sm:col-span-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                  className="w-full px-4 py-2 bg-transparent border border-[#2d2b2f] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(230,73,143)] focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Phone Number */}
              <div className="relative col-span-2 sm:col-span-1">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={handleChange}
                  maxLength={10}

                  className="w-full px-4 py-2 bg-transparent border border-[#2d2b2f] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(230,73,143)] focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Subject */}
              <div className="relative col-span-2 sm:col-span-1">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}

                  className="w-full px-4 py-2 bg-transparent border border-[#2d2b2f]  rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(230,73,143)]  focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div className="col-span-2 relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}

                  className="w-full h-32 px-4 py-2 bg-transparent border border-[#2d2b2f] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(230,73,143)] focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-2">
                <button onClick={SendingEmail} className="relative shadow bg-[#F44C8B] text-white px-10 py-2 rounded-xl  overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative z-10 group-hover:text-black">Send Message</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </section>




      {/* ******************************
        Contact us   Section End 
       ****************************** */}






    </div>
  );
}
