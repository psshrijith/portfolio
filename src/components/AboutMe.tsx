import { type ReactElement } from "react";
import profilePic from "../assets/shrijith.jpg";

const AboutMe = (): ReactElement => {

    const aboutMe = [
        {
            title: "My Journey",
            description: "I didn’t start as a coding enthusiast. In my first year of engineering, programming felt intimidating and uninteresting. But curiosity and a desire to solve real problems pushed me to keep learning."
        },
        {
            title: "Finding My Path",
            description: "I discovered my footing in QA and automation testing. Learning tools like Selenium, Cypress, and Playwright not only strengthened my problem-solving skills but also taught me the importance of precision and patience."
        },
        {
            title: "Exploring New Horizons",
            description: "Currently, I’m diving into frontend development, experimenting with React and Tailwind CSS. Each project, no matter how small, teaches me something new and keeps me moving forward."
        },
        {
            title: "The Takeaway",
            description: "From early struggles to mastering QA and venturing into frontend development, my journey has been one of resilience, curiosity, and continuous growth. I believe learning never stops, and every challenge is an opportunity to get better."
        }
    ];

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
                    Frontend Developer | QA Engineer | Always learning and building meaningful projects.
                </p>
            </section>

            <section id="about" className="p-10 max-w-3xl mx-auto bg-white/20 rounded-lg backdrop-blur-md mb-10">
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">About Me</h3>
                {aboutMe.map(({ title, description }) => (
                    <p key={title} className="mb-4 text-gray-900">
                        {description}
                    </p>
                ))}
            </section>
        </>
    );
};

export default AboutMe;
