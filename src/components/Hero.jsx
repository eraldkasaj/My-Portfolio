import React from "react";
import profilePic from "../assets/kevinRushProfile.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"


const HeroSection = () => {
    return (

        <div className="border-t-4" style={{backgroundColor:'#f9f9f9'}}>
            <div className="flex flex-row justify-around mt-10 ">
                <div className="">
                <h1 className="text-black text-5xl font-bold leading-snug">Front-End <hr className="border-[#f9f9f9]"/>Developer</h1>
                <p className="text-[#555] font-[Mulish] text-[1.4rem] font-medium leading-[1.6] mt-5">Hi, I'm Eraldi Kasaj. A passionate Front-end React <hr/>Developer based in Tirana, Albania. 📍</p>
                <div className="flex flex-row space-x-4 mt-5">
                 <FaGithub className="text-4xl"/>
                 <FaLinkedin className="text-4xl"/>
                </div>
                </div>
                <div className="">
                 <img src={profilePic} alt="" className="w-72 h-72" />
                </div>
            </div>
        </div>

      /*  <div className="border-t-4" style={{backgroundColor:'#f9f9f9'}}>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                  <div className="flex flex-col items-center lg:items-start">
                    <h1>Erald Kasaj</h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-300">Front End Develoer</span>
                    <p className="my-2 max-w-xl py-6 font-light bg-red-500">{HERO_CONTENT}</p>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img src={profilePic} alt="" />
                </div>
                </div>
              </div>
            </div>
            */
    )
}
export default HeroSection