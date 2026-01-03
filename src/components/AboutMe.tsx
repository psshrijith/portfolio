import { type ReactElement } from "react";
import { aboutMe } from "../data/about";
import profilePic from "../assets/shrijith.jpg";

const AboutMe = (): ReactElement => (
        <>
            <section className="flex flex-col items-center justify-center text-center py-20">
                <img
                    src={profilePic}
                    alt="Shrijith"
                    className="w-40 h-40 rounded-full border-4 border-white mb-6 object-cover shadow-lg"
                />
                <h2 className="text-4xl font-bold mb-2">Hi, I'm Shrijith 👋</h2>
                <p className="text-lg max-w-xl text-gray-700">
                    Frontend Developer | QA Engineer | Always learning and building meaningful projects.
                </p>
            </section>

            <section id="about" className="p-10 max-w-4xl mx-auto mb-10">
                <h3 className="text-3xl font-semibold mb-10 text-center text-gray-900">My Story</h3>

                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2"></div>

                    {aboutMe.map((item, index) => (
                        <div key={item.title} className={`relative flex items-center mb-12 ${
                            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                        }`}>
                            <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                                <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                                <p className="text-gray-700 leading-relaxed">{item.description}</p>
                            </div>

                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full items-center justify-center text-2xl shadow-lg z-10">
                                {item.icon}
                            </div>

                            <div className="md:w-5/12"></div>
                        </div>
                    ))}
                </div>
            </section>
        </>
);

export default AboutMe;