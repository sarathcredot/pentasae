









// "use client";

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { MdArrowOutward } from "react-icons/md";

// function Services() {
//     const [service] = useState([
//         { name: "Global Trading & Wholesale", img: "/service1.jpg", dis: "We specialize in the wholesale of food, beverages, and a wide range of products, ensuring quality supply for businesses worldwide." },
//         { name: "Retail & E-Commerce", img: "/service2.jpeg", dis: "From local markets to global online platforms, we make retail simple, efficient, and accessible to every customer." },
//         { name: "Human Resource Solutions", img: "/service3.jpeg", dis: "Providing skilled manpower and HR resources tailored to meet the unique needs of organizations across industries." },
//         { name: "Travel & Tourism Services", img: "/service4.jpeg", dis: "Your trusted partner for travel planning, tours, and corporate travel solutions, ensuring seamless journeys every time." },

//     ]);

//     return (
//         <div className="w-full h-[900px] px-6 md:px-[190px] pt-[70px]">

//             <h1 className="text-black text-[20px]"> Our Services </h1>

//             <h1 className="text-[30px] md:text-[50px] text-black  mb-10">
//                 {/* Lorem ipsum set amet <br />
//                 que  <span className="text-orange-600" >  Pentas  </span>
//                 <span className="text-[#2DC210]">.</span> */}

//                 Global connections through <br /> trade and travel
//                 <span className="text-[#2DC210] ml-3">.</span>


//             </h1>

//             <Swiper
//                 modules={[Autoplay]}
//                 spaceBetween={30}
//                 loop={true}
//                 autoplay={{
//                     delay: 2000, // delay between slides
//                     disableOnInteraction: false, // keep autoplay after interaction
//                 }}
//                 speed={1000} // smooth transition speed
//                 breakpoints={{
//                     320: { slidesPerView: 1 }, // mobile
//                     640: { slidesPerView: 2 }, // tablet
//                     1024: { slidesPerView: 3 }, // desktop
//                     1440: { slidesPerView: 3 }, // large screens
//                 }}
//                 className="w-full h-[500px]"
//             >
//                 {service.map((item, index) => (
//                     <SwiperSlide key={index}>
//                         <div className="w-full h-[500px] border-1 border-black rounded-2xl shadow-lg flex flex-col items-center">
//                             <img
//                                 src={item.img}
//                                 alt={item.name}
//                                 className="w-full h-[300px] object-cover rounded-t-2xl"
//                             />

//                             <h1 className="text-xl text-black font-semibold mt-4 mb-2"> {item.name} <span className="text-[#2DC210]">.</span>
//                             </h1>
//                             <div className="w-full pl-2" >
//                                 <p className="text-black ">
//                                     {item.dis}
//                                 </p>

//                                 {/* <button className="w-[100px] h-[30px] bg-orange-600 rounded-2xl flex justify-center items-center mt-3" > Connect <MdArrowOutward />  </button> */}
//                                 <a href="mailto:hr@pentas.com">
//                                     <button className="group w-[150px] h-[30px] text-[18px] bg-orange-600 rounded-lg cursor-pointer flex justify-center items-center mt-3 gap-1 overflow-hidden">
//                                         Connect
//                                         <span className="transform transition-transform duration-300 group-hover:translate-x-3">
//                                             <MdArrowOutward />
//                                         </span>
//                                     </button>
//                                 </a>

//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// }

// export default Services;




"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { MdArrowOutward } from "react-icons/md";

function Services() {
    const [service] = useState([
        {
            name: "Global Trading & Wholesale",
            img: "/service1.jpg",
            dis: "We specialize in the wholesale of food, beverages, and a wide range of products, ensuring quality supply for businesses worldwide.",
        },
        {
            name: "Retail & E-Commerce",
            img: "/service2.jpeg",
            dis: "From local markets to global online platforms, we make retail simple, efficient, and accessible to every customer.",
        },
        {
            name: "Human Resource Solutions",
            img: "/service3.jpeg",
            dis: "Providing skilled manpower and HR resources tailored to meet the unique needs of organizations across industries.",
        },
        {
            name: "Travel & Tourism Services",
            img: "/service4.jpeg",
            dis: "Your trusted partner for travel planning, tours, and corporate travel solutions, ensuring seamless journeys every time.",
        },
    ]);

    return (
        <div className="w-full min-h-[700px] md:min-h-[900px] px-4 sm:px-8 md:px-[190px] pt-[50px] md:pt-[70px]">
            {/* Headings */}
            <h1 className="text-black text-[18px] sm:text-[20px]">Our Services</h1>

            <h1 className="text-[26px] sm:text-[32px] md:text-[50px] text-black mb-8 sm:mb-10 leading-snug">
                Global connections through <br className="hidden sm:block" /> trade and travel
                <span className="text-[#2DC210] ml-2 sm:ml-3">.</span>
            </h1>

            {/* Swiper */}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1000}
                breakpoints={{
                    320: { slidesPerView: 1 }, // mobile
                    640: { slidesPerView: 2 }, // tablet
                    1024: { slidesPerView: 3 }, // desktop
                    1440: { slidesPerView: 3 }, // large screens
                }}
                className="w-full h-auto pb-10"
            >
                {service.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-auto min-h-[450px] sm:min-h-[500px] border border-black rounded-2xl shadow-lg flex flex-col items-center">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover rounded-t-2xl"
                            />

                            <h1 className="text-lg sm:text-xl md:text-2xl text-black font-semibold mt-4 mb-2 px-2 text-center">
                                {item.name} <span className="text-[#2DC210]">.</span>
                            </h1>

                            <div className="w-full px-3 sm:px-4 flex flex-col items-center text-center">
                                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-black leading-relaxed">
                                    {item.dis}
                                </p>

                                <a href="mailto:hr@pentas.com">
                                    <button className="group w-[120px] sm:w-[150px] h-[35px] sm:h-[40px] text-[16px] sm:text-[18px] bg-orange-600 rounded-lg cursor-pointer flex justify-center items-center mt-3 gap-1 overflow-hidden">
                                        Connect
                                        <span className="transform transition-transform duration-300 group-hover:translate-x-3">
                                            <MdArrowOutward />
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Services;
