import {type ReactElement} from 'react';

const projectDetails = [
    {
        title: "YouTube Clone",
        description: "A mini YouTube clone built with React, featuring trending videos, a functional search bar, sidebar navigation, and responsive video cards.",
        image: "",
        link: "https://github.com/psshrijith/youtubeCloneApp"
    },
    {
        title: "Bankist App",
        description: "A minimalistic banking application built using vanilla JavaScript to demonstrate key web development concepts like DOM manipulation, event handling, and working with arrays and timers.",
        image: "",
        link: "https://github.com/psshrijith/bankist_app"
    },
    {
        title: "CineSearch",
        description: "A sleek React app that uses the OMDb API to fetch and display detailed movie information. Users can search for any movie title and instantly view its poster, year, and type all in a clean, responsive layout.",
        image: "",
        link: "https://github.com/psshrijith/omdbapp"
    },
    {
        title: "Portfolio",
        description: "My web development journey - projects, experiments, and coding adventures.",
        image: "",
        link: "https://github.com/psshrijith/omdbapp"
    },
    {
        title: "CareerConnect",
        description: "CareerConnect is a full-stack job portal built using React, Express, GraphQL, and PostgreSQL. It supports job creation and job applications, demonstrating real-world frontend–backend communication, GraphQL schema design, and relational database usage. The project is partially completed and was built primarily as a learning exercise in full-stack application architecture.",
        image: "",
        link: "https://github.com/psshrijith/careerConnect"
    }
]
const Projects=(): ReactElement => {
    return (
    <section id="projects" className="p-10 max-w-5xl mx-auto mb-10">
        <h3 className="text-3xl font-semibold mb-6 text-center text-gray-900">Projects</h3>
        <div className="flex flex-wrap justify-center gap-6">
            {projectDetails.map((project, index)=>{
                return(
                    <div key={index} className="w-80 p-6 bg-white/20 rounded-xl shadow-md hover:shadow-lg backdrop-blur-md transition-transform hover:scale-[1.02] sm:w-60">
                        <h4 className="font-bold text-lg mb-2 text-gray-900">{project.title}</h4>
                        <p className="text-sm mb-2 text-gray-900">
                            {project.description}
                        </p>
                        <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
                    </div>
                )
            })}
        </div>
    </section>
    )
}

export default Projects;