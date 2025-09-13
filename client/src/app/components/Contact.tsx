
// "use client"

// import Link from 'next/link';
// import React from 'react'
// import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";

// function Contact() {
//     return (
//         <div>

//             <div className='w-full h-[400px] bg-black px-6 md:px-[190px] pt-[70px] ' >

//                 <div className='w-full flex ' >

//                     <div className='w-[50%]' >


//                         <div className='w-[70px] h-[70px]' >

//                             <img
//                                 src="./logo3.gif"
//                                 alt=""
//                                 className="w-full h-[100%] object-cover rounded-t-2xl"
//                             />



//                         </div>

//                         <h1 className='text-white text-[30px]' > PENTAS </h1>
//                         <span className='text-[15px]' > Internation general trading contraction LLC </span> <br />
//                         <span className='text-[15px]'> For better future </span>




//                     </div>

//                     <div className='w-[50%] flex justify-end gap-20' >

//                         <div className='text-white'>

//                             <h1 className='text-orange-600 text-[20px] mb-3' >  Connect us :  </h1>

//                             <a href="mailto:shoukath@pentas.com" className=" hover:underline">
//                                 shoukath@pentas.com
//                             </a> <br />
//                             <a href="mailto:shajitha@pentas.com" className="  hover:underline">
//                                 shajitha@pentas.com
//                             </a><br />
//                             <a href="mailto:hr@pentas.com" className=" hover:underline">
//                                 hr@pentas.com
//                             </a><br />
//                             <a href="mailto:finance@pentas.com" className=" hover:underline">
//                                 finance@pentas.com
//                             </a><br />
//                             <a href="mailto:info@pentas.com" className=" hover:underline">
//                                 info@pentas.com
//                             </a> <br />

//                             <a href="tel:+97167159788" className="flex items-center mt-3">
//                                 <FaPhoneAlt className='mr-2' /> +97167159788
//                             </a>




//                         </div>

//                         <div>

//                             <h1 className='text-orange-600 text-[20px]' >  Follow us :  </h1>

//                             <div className='flex gap-5 mt-3 text-[20px]' >

//                                 <a href={"/"} target="_blank"
//                                     rel="noopener noreferrer" >
//                                     <FaWhatsapp />
//                                 </a>

//                                 <a href={"/"} target="_blank"
//                                     rel="noopener noreferrer">

//                                     <FaFacebookF />
//                                 </a>

//                                 <a href={"/"} target="_blank"
//                                     rel="noopener noreferrer" >
//                                     <FaInstagram />
//                                 </a>



//                             </div>
//                         </div>

//                     </div>

//                 </div>

//                 <div className='w-full h-[100px] pt-10  ' >

//                     <div className="border-1 border-gray-400 mb-5"></div>
//                     <p className=" text-center text-[13px] md:text-[15px] lg:text-[16px] font-[350]  ">
//                         <Link href={"/"} className="">
//                             Pentas
//                         </Link>{" "}
//                         © {new Date().getFullYear()}. All Rights Reserved.
//                     </p>

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Contact





"use client";

import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";

function Contact() {
    return (
        <div>
            <div className="w-full min-h-[400px] bg-black px-6 md:px-[190px] pt-[50px] md:pt-[70px]">
                {/* Top Content */}
                <div className="w-full flex flex-col md:flex-row md:justify-between gap-8">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2">
                        <div className="w-[120px] h-[120px]">
                            <img
                                src="./logo5.png"
                                alt="Pentas Logo"
                                className="w-full h-full object-cover rounded-t-2xl"
                            />
                        </div>

                        <h1 className="text-orange-600 text-[24px] md:text-[30px]">Penta s</h1>
                        <span className="text-[14px] sm:text-[15px]">
                            International General Trading Contracting LLC
                        </span>
                        <br />
                        <span className="text-[14px] sm:text-[15px]">For better future</span>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 flex flex-col sm:flex-row justify-between gap-8 md:gap-20 text-white">
                        {/* Contact Emails */}
                        <div>
                            <h1 className="text-orange-600 text-[18px] md:text-[20px] mb-3">
                                Connect us:
                            </h1>

                            <a href="mailto:hr@pentas.com" className="hover:underline block">
                                hr@pentas.com
                            </a>
                            <a href="mailto:finance@pentas.com" className="hover:underline block">
                                finance@pentas.com
                            </a>
                            <a href="mailto:info@pentas.com" className="hover:underline block">
                                info@pentas.com
                            </a>

                            <a href="tel:+97167159788" className="flex items-center mt-3">
                                <FaPhoneAlt className="mr-2" /> +971 67 159 788
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div>
                            <h1 className="text-orange-600 text-[18px] md:text-[20px]">Follow us:</h1>
                            <div className="flex gap-5 mt-3 text-[20px]">
                                <a href="https://wa.me/971503816500"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaWhatsapp />
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF />
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="w-full pt-8 md:pt-10">
                    <div className="border-t border-gray-400 mb-5"></div>
                    <p className="text-center text-[13px] md:text-[15px] lg:text-[16px] font-[350] text-white">
                        <Link href="/" className="hover:underline">
                            Penta s
                        </Link>{" "}
                        © {new Date().getFullYear()}. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;







