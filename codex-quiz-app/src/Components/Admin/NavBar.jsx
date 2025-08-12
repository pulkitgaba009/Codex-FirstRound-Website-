import { useState } from "react";

function Navbar(){
    const [activeIndex, setActiveIndex] = useState(null);

    const menuItems = ["Quiz Dashboard", "Add Question", "Edit Question", "Leadboard"];

    return (
        <div className="bg-[rgba(0,0,0,0.5)] w-screen absolute top-0 flex justify-between items-center">
            <img src="/Codex-logo.png" alt="Codex Logo" className="p-[0.5rem] ml-[4rem] h-[4rem]"/>

            <div className="flex gap-6 mr-6">
                {menuItems.map((item, index) => (
                    <p
                        key={index}
                        className={`adminNavbar ${activeIndex === index ? "text-[#34d8e4] [text-shadow:_0_0_10px_#34d8e4]" : "text-white"}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
