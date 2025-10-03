import { FaGithub, FaInstagram, FaLaptopCode } from "react-icons/fa";

export const Bottom = () => {
    return (
        <div className="flex flex-row justify-between p-8 border border-black border-l-0 border-r-0">
            <h3>© {new Date().getFullYear()} Stitchline. All rights reserved.</h3>
            <div className="flex flex-row gap-4">
                <FaGithub />
                <FaInstagram />
                <FaLaptopCode />
            </div>
        </div>
    );
};
