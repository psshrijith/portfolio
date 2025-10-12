import { type ReactElement } from "react";

const ContactDetails = (): ReactElement => {
    return (
        <section id="contact" className="p-10 text-center mb-10">
            <h3 className="text-3xl font-semibold mb-4 text-white">Contact Me</h3>
            <p className="mb-2">
                Email:{" "}
                <a href="mailto:shrijith89@gmail.com" className="text-blue-200 hover:underline">
                    shrijithps89@gmail.com
                </a>
            </p>
            <p className="mb-2">
                GitHub:{" "}
                <a href="https://github.com/psshrijith" className="text-blue-200 hover:underline">
                    psshrijith
                </a>
            </p>
            <p>
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/psshrijith" className="text-blue-200 hover:underline">
                    psshrijith
                </a>
            </p>
            <p className="pt-2">
                Resume:
                <a href="../../resume.pdf"
                   download="Shrijith_Resume.pdf"
                   className="text-blue-200 hover:underline"
                > Download Resume
                </a>
            </p>
        </section>
    )
}

export default ContactDetails