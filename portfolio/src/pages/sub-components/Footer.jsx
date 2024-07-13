import React from "react";

const Footer = () => {
    return (
        <footer className="p-5 mt-6 w-full max-w-[1050px] mx-auto">
            <hr />
            <h1 className="text-tubeLight-effect text-3xl mt-5 flex text-center justify-center   tracking-[8px] ">
                Thanks For Scrolling
            </h1>
            <p className="text-center mt-4 text-sm">
                    © {new Date().getFullYear()} | Made with ❤️ Naman Pandey
                </p>
        </footer>
    );
};

export default Footer;
