import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaFileDownload,
} from "react-icons/fa";


export const Contact = [
    {
        icon: <FaEnvelope className="text-2xl" />,
        labelId: "contact.email.label",
        value: "shrijithps89@gmail.com",
        link: "mailto:shrijithps89@gmail.com",
    },
    {
        icon: <FaGithub className="text-2xl" />,
        labelId: "contact.github.label",
        value: "psshrijith",
        link: "https://github.com/psshrijith",
    },
    {
        icon: <FaLinkedin className="text-2xl" />,
        labelId: "contact.linkedin.label",
        value: "psshrijith",
        link: "https://www.linkedin.com/in/psshrijith",
    },
    {
        icon: <FaFileDownload className="text-2xl" />,
        labelId: "contact.resume.label",
        valueId: "contact.resume.value",
        link: "/resume.pdf",
        download: true,
    },
]