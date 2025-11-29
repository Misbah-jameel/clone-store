// const imgShopHero3ProductSlide2 = "https://www.figma.com/api/mcp/asset/05928d4d-7c54-4e31-b5c9-69ea07cc36a1";
// const imgChevronRight = "https://www.figma.com/api/mcp/asset/2d4e312d-7832-41a1-a51e-f786492c0ce5";
// const imgChevronLeft = "https://www.figma.com/api/mcp/asset/a58cd72f-22f4-46e9-9d8d-fd12bdc3dea4";

// export default function Carousel() {
//   return (
//     <div className="bg-white border border-[#dedede] border-solid relative rounded-[5px] size-full" data-name="carousel 2" data-node-id="0:481">
//       <div className="absolute h-[640px] left-[-1px] overflow-clip right-[-1px] top-[-1px]" data-name="carousel-inner" data-node-id="0:482">
//         <div className="absolute h-[640px] left-0 overflow-clip top-0 w-[1440px]" data-name="carousel-item" data-node-id="0:483">
//           <div className="absolute h-[640px] left-1/2 top-0 translate-x-[-50%] w-[1440px]" data-name="shop-hero-3-product-slide-2" data-node-id="0:484">
//             <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
//               <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgShopHero3ProductSlide2} />
//               <div className="absolute bg-[rgba(0,0,0,0.35)] inset-0" />
//             </div>
//           </div>
//           <div className="absolute box-border content-stretch flex flex-col gap-[80px] items-center left-[calc(50%+-0.5px)] overflow-clip px-0 py-[112px] top-[76px] translate-x-[-50%]" data-name="container" data-node-id="0:485">
//             <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[701px]" data-name="row" data-node-id="0:486">
//               <div className="box-border content-stretch flex flex-col gap-[24px] items-center overflow-clip px-0 py-[40px] relative shrink-0 w-[699px]" data-name="main-content" data-node-id="0:487">
//                 <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[80px] relative shrink-0 text-[58px] text-center text-white tracking-[0.2px]" data-node-id="0:488">
//                   GROCERIES DELIVERY
//                 </p>
//                 <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-center text-white tracking-[0.2px] whitespace-nowrap" data-name="0:489">
//                   <p className="mb-0">{`We know how large objects will act, but things on a `}</p>
//                   <p>small scale just do not act that way.</p>
//                 </div>
//                 <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="cta" data-node-id="0:490">
//                   <div className="bg-[#23a6f0] box-border content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[40px] py-[15px] relative rounded-[5px] shrink-0" data-name="btn-lg-1" data-node-id="0:491">
//                     <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-center text-white tracking-[0.1px]" data-node-id="0:492">
//                       Start Now
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-[24px] h-[6px] left-[calc(50%+2.5px)] overflow-clip translate-x-[-50%] w-[1027px]" data-name="carousel-indicators" data-node-id="0:493">
//         <div className="absolute bg-white h-[10px] left-[440px] top-[-3px] w-[62px]" data-name="carouselCaptions" data-node-id="0:494" />
//         <div className="absolute bg-white h-[10px] left-[503px] opacity-50 top-[-3px] w-[63px]" data-name="carouselCaptions" data-node-id="0:495" />
//       </div>
//       <div className="absolute h-[44.471px] left-[1380px] overflow-clip top-[400px] w-[24px]" data-name="carousel-control-next" data-node-id="0:496">
//         <div className="absolute h-[44.471px] right-0 top-1/2 translate-y-[-50%] w-[24px]" data-name="ChevronRight" data-node-id="0:497">
//           <img alt="" className="block max-w-none size-full" src={imgChevronRight} />
//         </div>
//       </div>
//       <div className="absolute h-[44.471px] left-[39px] overflow-clip top-[400px] w-[24px]" data-name="carousel-control-prev" data-node-id="0:499">
//         <div className="absolute flex h-[44.471px] items-center justify-center left-0 top-1/2 translate-y-[-50%] w-[24px]">
//           <div className="flex-none rotate-[180deg]">
//             <div className="h-[44.471px] relative w-[24px]" data-name="ChevronLeft" data-node-id="0:500">
//               <img alt="" className="block max-w-none size-full" src={imgChevronLeft} />
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// }

// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// type HeroSectionProps = {};

// const HeroSection: React.FC<HeroSectionProps> = () => {
//   return (
//     <div className="relative bg-gray-800">
//       <div className="absolute inset-0">
//         <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" style={{ zIndex: 10 }}>
//           <defs>
//             <pattern id="pattern" patternUnits="userSpaceOnUse" width="40" height="40">
//               <path d="M 10 0 L 10 40 M 0 10 L 40 10" stroke="#374151" strokeWidth="1" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#pattern)" />
//         </svg>
//         <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
//       </div>
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
//           <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
//             GROCERIES DELIVERY
//           </h1>
//           <p className="mt-3 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
//             We know how large objects will act, but things on a small scale just do not act that way.
//           </p>
//           <div className="mt-10">
//             <a
//               href="#"
//               className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
//             >
//               Start Now
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="absolute inset-y-0 left-0 flex items-center">
//         <button className="p-2 text-white bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none">
//           <ChevronLeftIcon className="w-8 h-8" />
//         </button>
//       </div>
//       <div className="absolute inset-y-0 right-0 flex items-center">
//         <button className="p-2 text-white bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none">
//           <ChevronRightIcon className="w-8 h-8" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React from "react";

const imgShopHero3ProductSlide2 = "https://www.figma.com/api/mcp/asset/05928d4d-7c54-4e31-b5c9-69ea07cc36a1";
const imgChevronRight = "https://www.figma.com/api/mcp/asset/2d4e312d-7832-41a1-a51e-f786492c0ce5";
const imgChevronLeft = "https://www.figma.com/api/mcp/asset/a58cd72f-22f4-46e9-9d8d-fd12bdc3dea4";

export default function Carousel() {
  return (
    <div className="relative w-full h-[640px] overflow-hidden rounded-[5px] border border-[#dedede] bg-white">
      
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgShopHero3ProductSlide2})` }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)]"></div>
      </div>

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white font-bold text-[58px] leading-[80px] tracking-[0.2px]">
          GROCERIES DELIVERY
        </h1>
        <p className="text-white text-[20px] leading-[30px] mt-4">
          We know how large objects will act, but things on a small scale just do not act that way.
        </p>
        <button className="mt-6 bg-[#23a6f0] text-white px-10 py-4 rounded-[5px] text-[24px] font-bold">
          Start Now
        </button>
      </div>

      {/* Carousel controls */}
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2">
        <img src={imgChevronRight} alt="Next" className="w-6 h-6 cursor-pointer" />
      </div>
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2">
        <img src={imgChevronLeft} alt="Prev" className="w-6 h-6 cursor-pointer" />
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        <div className="w-16 h-2 bg-white rounded-full"></div>
        <div className="w-16 h-2 bg-white opacity-50 rounded-full"></div>
      </div>
    </div>
  );
}
