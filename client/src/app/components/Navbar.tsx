







// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     const links = [
//         { name: "Home", href: "#home" },
//         { name: "About", href: "#about" },
//         { name: "Services", href: "#services" },
//         { name: "Contact", href: "#contact" },
//     ];

//     return (
//         <nav className="fixed top-0 left-0 w-full bg-black h-[100px] flex items-center justify-between px-6 md:px-12 shadow-lg z-50">
//             {/* Logo (Left) */}
//             <div className="flex items-center">
//                 <div className="w-[100px] h-[100px]">
//                     <img src="./logo3.gif" className="w-full h-full" alt="Logo" />
//                 </div>
//             </div>

//             {/* Desktop Menu (Center) */}
//             <div className="hidden md:flex items-center gap-20 absolute left-1/2 transform -translate-x-1/2">
//                 {links.map((link, index) => (
//                     <Link
//                         key={index}
//                         href={link.href}
//                         className="text-white text-lg hover:text-orange-600 transition"
//                     >
//                         {link.name}
//                     </Link>
//                 ))}
//             </div>

//             {/* Email (Right) */}
//             <div className="hidden md:flex">
//                 <div>
//                     <a href="mailto:hr@pentas.com">
//                         <h1 className="text-white text-lg flex gap-2 items-center mb-2">
//                             <MdEmail /> hr@pentas.com
//                         </h1>
//                     </a>
//                     <a href="tel:+97167159788">
//                         <h1 className="flex gap-2 items-center text-white text-lg">
//                             <FaPhoneAlt /> +97167159788
//                         </h1>
//                     </a>
//                 </div>
//             </div>

//             {/* Mobile Hamburger (Right) */}
//             <div className="md:hidden">
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="text-white focus:outline-none"
//                 >
//                     {isOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </div>

//             {/* Mobile Sidebar (Right Side) */}
//             <div
//                 className={`fixed top-0 right-0 w-3/4 h-full bg-black shadow-lg transform transition-transform duration-300 md:hidden z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
//                     }`}
//             >
//                 <div className="flex flex-col items-start p-6 space-y-6 h-full">
//                     <button
//                         onClick={() => setIsOpen(false)}
//                         className="self-end text-white mb-6"
//                     >
//                         <X size={28} />
//                     </button>
//                     {links.map((link, index) => (
//                         <Link
//                             key={index}
//                             href={link.href}
//                             onClick={() => setIsOpen(false)}
//                             className="text-white text-lg hover:text-blue-400 transition"
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                     <h1 className="text-white text-lg">hr@pentas.com</h1>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;



"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-black h-[100px] flex items-center justify-between pr-6 md:px-12 shadow-lg z-50">
            {/* Logo (Left) */}
            <div className="flex items-center">
                <div className="w-[100px] md:w-[120px] h-[120px]">
                    <img src="./logo5.png" className="w-full h-full" alt="Logo" />
                </div>
                <h1 className="text-orange-600 text-[30px]" > Penta s </h1>
            </div>

            {/* Desktop Menu (Center) */}
            <div className="hidden md:flex items-center gap-20 absolute left-1/2 transform -translate-x-1/2">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className="text-white text-lg hover:text-orange-600 transition"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Email (Right) */}
            <div className="hidden md:flex">
                <div>
                    <a href="mailto:hr@pentas.com">
                        <h1 className="text-white text-lg flex gap-2 items-center mb-2">
                            <MdEmail /> hr@pentas.com
                        </h1>
                    </a>
                    <a href="tel:+97167159788">
                        <h1 className="flex gap-2 items-center text-white text-lg">
                            <FaPhoneAlt /> +97167159788
                        </h1>
                    </a>
                </div>
            </div>

            {/* Mobile Hamburger (Right) */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Overlay (Blurred background when menu is open) */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                ></div>
            )}

            {/* Mobile Sidebar (Right Side) */}
            <div
                className={`fixed top-0 right-0 w-3/4 h-full bg-black shadow-lg transform transition-transform duration-300 md:hidden z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-start p-6 space-y-6 h-full">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="self-end text-white mb-6"
                    >
                        <X size={28} />
                    </button>
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-white text-lg hover:text-orange-600 transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="mailto:hr@pentas.com">
                        <h1 className="text-white text-lg flex gap-2 items-center">
                            <MdEmail /> hr@pentas.com
                        </h1>
                    </a>
                    <a href="tel:+97167159788">
                        <h1 className="flex gap-2 items-center text-white text-lg">
                            <FaPhoneAlt /> +97167159788
                        </h1>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


