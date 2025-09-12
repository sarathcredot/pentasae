

// import React from 'react'

// function About() {
//     return (
//         <div>

//             <div className=' w-full h-[700px] bg-black px-6 md:px-[190px] pt-[70px] flex text-white' >



//                 <div className='w-[50%]' >

//                     <h1 className=" text-[20px]"> WHO WE ARE </h1>

//                     <h1 className="text-[30px] md:text-[50px] mb-5">
//                         Welcome to <br />
//                         <span className="text-orange-600">  Pentas </span>
//                         <span className="text-[#2DC210]">.</span>
//                         {/* <span className="text-orange-600 ml-2">.</span> */}

//                     </h1>

//                     <p className='mb-3'>
//                         At Pentas International General Trading Contracting LLC, we are committed to
//                         delivering excellence across diverse industries. Established in Sharjah Media City, UAE, our company
//                         operates with a vision to connect businesses and individuals through high-quality products and services.
//                     </p>

//                     <p className='mb-3'>

//                         We specialize in wholesale trade of food and beverages, non-specialized wholesale
//                         trade, and retail solutions via online platforms. In addition, we extend our expertise to human resource provision
//                         and travel agency services, offering comprehensive solutions to meet the evolving needs of our clients.

//                     </p>

//                     <p className='mb-3'>

//                         Our mission is to foster trust, quality, and long-term relationships by ensuring
//                         transparency and efficiency in every business interaction. With a dedicated management
//                         team and a customer-first approach, Penta S International
//                         continues to grow as a reliable partner in both local and international markets.

//                     </p>

//                     <p>
//                         At Pentas International, we don’t just trade goods and services — we build partnerships that last.
//                     </p>

//                 </div>

//                 <div className='w-[50%] flex justify-center ' >

//                     <div className='w-[400px] h-[500px] ' >

//                         <img
//                             src="./about1.jpeg"
//                             alt=""
//                             className="w-full h-[100%] object-cover rounded-t-2xl"
//                         />


//                     </div>

//                 </div>

//             </div>


//         </div>
//     )
// }

// export default About



import React from "react";

function About() {
    return (
        <div>
            <div className="w-full min-h-[700px] bg-black px-6 md:px-[190px] pt-[50px] md:pt-[70px] flex flex-col pb-20 md:flex-row text-white gap-8">

                {/* Left Section - Text */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-[18px] md:text-[20px] mb-2">WHO WE ARE</h1>

                    <h1 className="text-[28px] sm:text-[36px] md:text-[50px] mb-5 leading-snug">
                        Welcome to <br />
                        <span className="text-orange-600">Pentas</span>
                        <span className="text-[#2DC210]">.</span>
                    </h1>

                    <p className="mb-3 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                        At Pentas International General Trading Contracting LLC, we are committed to
                        delivering excellence across diverse industries. Established in Sharjah Media City, UAE,
                        our company operates with a vision to connect businesses and individuals through
                        high-quality products and services.
                    </p>

                    <p className="mb-3 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                        We specialize in wholesale trade of food and beverages, non-specialized wholesale trade,
                        and retail solutions via online platforms. In addition, we extend our expertise to human
                        resource provision and travel agency services, offering comprehensive solutions to meet
                        the evolving needs of our clients.
                    </p>

                    <p className="mb-3 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                        Our mission is to foster trust, quality, and long-term relationships by ensuring
                        transparency and efficiency in every business interaction. With a dedicated management
                        team and a customer-first approach, Pentas International continues to grow as a reliable
                        partner in both local and international markets.
                    </p>

                    <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                        At Pentas International, we don’t just trade goods and services — we build partnerships
                        that last.
                    </p>
                </div>

                {/* Right Section - Image */}
                <div className="w-full md:w-1/2 flex justify-center items-start">
                    <div className="w-full sm:w-[350px] md:w-[400px] h-[300px] sm:h-[400px] md:h-[500px]">
                        <img
                            src="./about1.jpeg"
                            alt="About Pentas"
                            className="w-full h-full object-cover rounded-t-2xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;






