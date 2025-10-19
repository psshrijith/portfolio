import {type ReactElement} from "react";

const Footer: () => ReactElement = () => {
    return (
        <footer className="text-center py-6 bg-white/50 text-gray-900 backdrop-blur-md">
            © {new Date().getFullYear()} Made by Shrijith.
        </footer>
    );
};

export default Footer;