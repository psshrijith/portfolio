import { type ReactElement } from "react";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaFileDownload,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {contacts.map(
                        (
                            {
                                icon,
                                labelId,
                                value,
                                valueId,
                                link,
                                download,
                            },
                            index
                        ) => (
                            <motion.a
                                key={labelId}
                                href={link}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-transparent
                                    surface-card
                                    p-6
                                    transition-all
                                    duration-300
                                    hover:border-[color:var(--accent)]
                                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                                "
                                {...(download
                                    ? { download: "Shrijith_Resume.pdf" }
                                    : {})}
                                target={
                                    link.startsWith("http")
                                        ? "_blank"
                                        : "_self"
                                }
                                rel={
                                    link.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                            >
                                {/* Animated top line */}
                                <div className="absolute left-0 top-0 h-1 w-0 bg-[color:var(--accent)] transition-all duration-300 group-hover:w-full" />

                                {/* Background glow */}
                                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />
                                </div>

                                <div className="relative flex flex-col gap-5">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 5,
                                        }}
                                        className="
                                            relative
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-[color:var(--accent-soft)]
                                            text-[color:var(--accent)]
                                        "
                                    >
                                        <div className="absolute inset-0 rounded-2xl bg-[color:var(--accent)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-25" />

                                        <div className="relative">
                                            {icon}
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className="transition-transform duration-300 group-hover:-translate-y-1">
                                        <h3 className="text-lg font-semibold text-[color:var(--text)]">
                                            <FormattedMessage id={labelId} />
                                        </h3>

                                        <p className="mt-2 break-all text-sm leading-6 muted-copy">
                                            {valueId ? (
                                                <FormattedMessage id={valueId} />
                                            ) : (
                                                value
                                            )}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex justify-end">
                                        <FaArrowUpRightFromSquare
                                            className="
                                                text-[color:var(--accent)]
                                                opacity-0
                                                -translate-x-2
                                                transition-all
                                                duration-300
                                                group-hover:translate-x-0
                                                group-hover:opacity-100
                                            "
                                        />
                                    </div>
                                </div>
                            </motion.a>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;