import { careerConnectImage, moviesHomePage, moviesGrid } from '../assets';

export const projectDetails = [
    {
        title: "YouTube Clone",
        description: "A mini YouTube clone built with React, featuring trending videos, a functional search bar, sidebar navigation, and responsive video cards.",
        images: [],
        link: "https://github.com/psshrijith/youtubeCloneApp"
    },
    {
        title: "Bankist App",
        description: "A minimalistic banking application built using vanilla JavaScript to demonstrate key web development concepts like DOM manipulation, event handling, and working with arrays and timers.",
        images: [],
        link: "https://github.com/psshrijith/bankist_app"
    },
    {
        title: "CineSearch",
        description: "A sleek React app that uses the OMDb API to fetch and display detailed movie information. Users can search for any movie title and instantly view its poster, year, and type all in a clean, responsive layout.",
        images: [moviesHomePage, moviesGrid],
        link: "https://github.com/psshrijith/omdbapp"
    },
    {
        title: "Portfolio",
        description: "My web development journey - projects, experiments, and coding adventures.",
        images: [],
        link: "https://github.com/psshrijith/omdbapp"
    },
    {
        title: "CareerConnect",
        description: "CareerConnect is a full-stack job portal built using React, Express, GraphQL, and PostgreSQL. It supports job creation and job applications, demonstrating real-world frontend–backend communication, GraphQL schema design, and relational database usage. The project is partially completed and was built primarily as a learning exercise in full-stack application architecture.",
        images: [careerConnectImage],
        link: "https://github.com/psshrijith/careerConnect"
    }
]