import { type ReactElement } from "react";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaFileDownload,
} from "react-icons/fa";

const ContactDetails = (): ReactElement => {
    const contacts = [
        {
            icon: <FaEnvelope className="text-3xl" />,
            label: "Email",
            value: "shrijithps89@gmail.com",
            link: "mailto:shrijithps89@gmail.com",
            color: "blue",
        },
        {
            icon: <FaGithub className="text-3xl" />,
            label: "GitHub",
            value: "psshrijith",
            link: "https://github.com/psshrijith",
            color: "gray",
        },
        {
            icon: <FaLinkedin className="text-3xl" />,
            label: "LinkedIn",
            value: "psshrijith",
            link: "https://www.linkedin.com/in/psshrijith",
            color: "blue",
        },
        {
            icon: <FaFileDownload className="text-3xl" />,
            label: "Resume",
            value: "Download PDF",
            link: "/resume.pdf",
            download: true,
            color: "green",
        },
    ];

    const colorMap: Record<string, string> = {
        blue: "hover:border-blue-500 hover:bg-blue-50",
        gray: "hover:border-gray-700 hover:bg-gray-50",
        green: "hover:border-green-500 hover:bg-green-50",
    };

    return (
        <section id="contact" className="p-10 mb-10 max-w-5xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4 text-center text-gray-900">
                Get In Touch
            </h3>

            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contacts.map(({ icon, label, value, link, download, color }) => (
                    <a
                        key={label}
                        href={link}
                        className={`p-6 border-2 border-gray-200 ${
                            colorMap[color]
                        } transition-all text-center group flex flex-col items-center`}
                        {...(download ? { download: "Shrijith_Resume.pdf" } : {})}
                        target={link.startsWith("http") ? "_blank" : "_self"}
                        rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                        <div className="mb-4 text-gray-700 group-hover:scale-110 transition-transform">
                            {icon}
                        </div>

                        <h4 className="font-bold text-lg mb-2 text-gray-900">
                            {label}
                        </h4>

                        <p className="text-sm text-gray-600 break-all">
                            {value}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ContactDetails;
