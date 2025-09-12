

// import React from 'react'


// function Banner() {
//     return (
//         <div>

//             <div className="w-full h-[800px] bg-[url('/banner1.jpeg')] bg-cover bg-center px-[190px] pt-[200px]">

//                 <h1 className='text-white text-[60px] mb-10' >
//                     Global Trade    <span className="text-[#2DC210] mr-2">.</span>

//                     Local Trust     <span className="text-[#2DC210]">.</span> <br />

//                     Endless Possibilities    <span className="text-[#2DC210]">.</span>

//                 </h1>


//                 <span className='text-[23px]' > At <span className='text-orange-600' > Pentas International </span> General Trading Contracting LLC,<br />
//                     we connect markets worldwide through wholesale, retail, <br /> HR solutions, and travel services.
//                     Based in Sharjah, UAE, <br /> we bring quality, reliability, and innovation to every partnership.</span><br />


//             </div>


//         </div >
//     )
// }

// export default Banner



import React from "react";

function Banner() {
    return (
        <div>
            <div className="w-full h-[600px] sm:h-[700px] md:h-[800px] bg-[url('/banner1.jpeg')] bg-cover bg-center px-4 sm:px-10 md:px-[80px] lg:px-[120px] xl:px-[190px] pt-[120px] sm:pt-[150px] md:pt-[200px]">

                <h1 className="text-white text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] mb-6 sm:mb-8">
                    Global Trade <span className="text-[#2DC210] mr-1 sm:mr-2">.</span>
                    <br className="sm:hidden" />
                    Local Trust <span className="text-[#2DC210]">.</span> <br />
                    Endless Possibilities <span className="text-[#2DC210]">.</span>
                </h1>

                <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] leading-relaxed text-white">
                    At{" "}
                    <span className="text-orange-600">Pentas International</span> General
                    Trading Contracting LLC,
                    <br className="hidden sm:block" />
                    we connect markets worldwide through wholesale, retail,
                    <br className="hidden sm:block" /> HR solutions, and travel services.
                    Based in Sharjah, UAE,
                    <br className="hidden sm:block" /> we bring quality, reliability, and
                    innovation to every partnership.
                </span>
            </div>
        </div>
    );
}

export default Banner;
