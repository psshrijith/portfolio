import { type ReactElement } from "react";

const Skills = (): ReactElement => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Redux-Saga"],
        },
        {
            title: "Backend",
            skills: ["Java", "Python", "GraphQL"],
        },
        {
            title: "Testing",
            skills: ["Selenium", "Cypress", "Playwright"],
        },
        {
            title: "Version Control",
            skills: ["Git", "GitHub"],
        },
    ];

    return (
        <section id="Skills" className="p-10 mb-10">
            <h3 className="text-3xl font-semibold mb-10 text-center text-gray-900">Skills</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {skillCategories.map(({ title, skills }) => (
                    <div
                        key={title}
                        className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-white/20 transition-transform hover:scale-[1.02]"
                    >
                        <h4 className="text-xl font-semibold mb-4 border-b pb-1 text-gray-800">
                            {title}
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-white/80 text-gray-900 rounded-lg shadow-sm hover:bg-green-100 hover:scale-105 transition-transform"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
