import {type ReactElement } from "react";
import profilePic from "../assets/shrijith.jpg";

const AboutMe = (): ReactElement =>{
    return (
        <>
        <section className="flex flex-col items-center justify-center text-center py-20">
            <img
                src={profilePic}
                alt="Shrijith"
                className="w-40 h-40 rounded-full border-4 border-white mb-6 object-cover"
            />
            <h2 className="text-4xl font-bold mb-2">Hi, I'm Shrijith 👋</h2>
            <p className="text-xl max-w-xl">
                Frontend developer | Ex-QA Engineer | Still learning and building cool projects.
            </p>
        </section>

        <section id="about" className="p-10 max-w-3xl mx-auto bg-white/20 rounded-lg backdrop-blur-md mb-10">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">About Me</h3>
            <p className="mb-4 text-gray-900">
                My journey as an engineer hasn’t been conventional. In my first year of engineering,
                I had very little interest in coding and even disliked programming. Over time,
                curiosity pushed me to learn more.
            </p>
            <p className="mb-4 text-gray-900">
                After struggling in the early years, I found my footing in QA and automation testing,
                learning tools like Selenium, Cypress, and Playwright. This role sharpened my problem-solving skills
                and attention to detail.
            </p>
            <p className="mb-4 text-gray-900">
                Today, I’m exploring frontend development with React and Tailwind CSS. I’m still learning and
                far from a master, but every project helps me improve and understand the craft better.
            </p>
            <p className="text-gray-900">
                My experience from struggling in the early years to learning QA and now frontend development has taught me resilience, patience, and the value of continuous learning.
            </p>
        </section>
        </>
    )
}

export default AboutMe;