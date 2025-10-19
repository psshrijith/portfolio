import { type ReactElement } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const ContactDetails = (): ReactElement => {
    const contacts = [
        {
            icon: <FaEnvelope className="inline mr-2" />,
            label: "Email",
            value: "shrijithps89@gmail.com",
            link: "mailto:shrijithps89@gmail.com",
        },
        {
            icon: <FaGithub className="inline mr-2" />,
            label: "GitHub",
            value: "psshrijith",
            link: "https://github.com/psshrijith",
        },
        {
            icon: <FaLinkedin className="inline mr-2" />,
            label: "LinkedIn",
            value: "psshrijith",
            link: "https://www.linkedin.com/in/psshrijith",
        },
        {
            icon: <FaFileDownload className="inline mr-2" />,
            label: "Resume",
            value: "Download",
            link: "../../resume.pdf",
            download: true,
        },
    ];

    return (
        <section id="contact" className="p-10 text-center mb-10 bg-white/20 rounded-lg backdrop-blur-md w-md mx-auto">
            <h3 className="text-3xl font-semibold mb-6 text-gray-900">Contact Me</h3>
            <div className="flex flex-col gap-4 items-center">
                {contacts.map(({ icon, label, value, link, download }) => (
                    <a
                        key={label}
                        href={link}
                        className="flex items-center text-blue-200 hover:text-white hover:underline transition-colors duration-300"
                        {...(download ? { download: "Shrijith_Resume.pdf" } : {})}
                        target={link.startsWith("http") ? "_blank" : "_self"}
                    >
                        {icon} <span className="font-medium">{label}:</span>&nbsp;{value}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ContactDetails;
