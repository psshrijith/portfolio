import { type ReactElement } from "react";
import { FormattedMessage } from "react-intl";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaFileDownload,
} from "react-icons/fa";

const ContactDetails = (): ReactElement => {
    const contacts = [
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
    ];

    return (
        <section id="contact" className="section-shell py-2 sm:py-4">
            <div className="surface-panel p-6 sm:p-8 lg:p-10">
                <div className="mb-8 max-w-3xl space-y-3">
                    <p className="section-kicker">
                        <FormattedMessage id="contact.kicker" />
                    </p>
                    <h2 className="section-title">
                        <FormattedMessage id="contact.title" />
                    </h2>
                    <p className="muted-copy text-base leading-8">
                        <FormattedMessage id="contact.description" />
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {contacts.map(({ icon, labelId, value, valueId, link, download }) => (
                        <a
                            key={labelId}
                            href={link}
                            className="surface-card group flex flex-col items-start gap-4 p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
                            {...(download ? { download: "Shrijith_Resume.pdf" } : {})}
                            target={link.startsWith("http") ? "_blank" : "_self"}
                            rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent)] transition-transform group-hover:scale-105">
                                {icon}
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-[color:var(--text)]">
                                    <FormattedMessage id={labelId} />
                                </h3>
                                <p className="mt-1 break-all text-sm leading-6 muted-copy">
                                    {valueId ? <FormattedMessage id={valueId} /> : value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;
