import { type ReactElement } from "react";
import skillCategories from "../data/skills";

const Skills = (): ReactElement => {
    return (
        <section id="skills" className="p-10 mb-10">
            <h3 className="text-3xl font-semibold mb-10 text-center text-gray-900">Skills & Technologies</h3>

            <div className="max-w-3xl mx-auto">
                {skillCategories.map(({ title, skills }, index) => (
                    <div key={title} className={`py-6 ${index !== skillCategories.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        <h4 className="text-lg font-semibold mb-4 text-gray-900">
                            {title}
                        </h4>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {skills.map((skill) => (
                                <div key={skill} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-gray-700">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;