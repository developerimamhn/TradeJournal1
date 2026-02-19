'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import imagefore from '../assets/Frame 1321319033.png';
import imagethree from '../assets/Frame 2147226057.png';
import imageone from '../assets/Group 1597883234.png';
import imagetwo from '../assets/Group 1597883235.png';
import imagesix from '../assets/numbeingsss.png';
import imagefive from '../assets/numbeingsssssssss.png';

gsap.registerPlugin(ScrollTrigger);



const Pageone = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef(null);
    const cardsRefs = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {

    // 🔹 TEXT Scroll Follow
    gsap.fromTo(
      textRef.current,
      {
        y: 180,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );

    // 🔹 CARDS (Both groups combined)
    const allCards = [
      ...cardsRef.current.children,
      ...cardsRefs.current.children,
    ];

    gsap.fromTo(
      allCards,
      {
        y: 200,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1.2,
        },
      }
    );

  }, sectionRef);

  return () => ctx.revert();
}, []);



    return (
        <div ref={sectionRef} id='Features'  className='relative'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-1/2 absolute top-[-20%] right-0' viewBox="0 0 1679 2548" fill="none">
            <g filter="url(#filter0_f_1874_3481)">
              <path d="M1166.06 1512.32L1245.15 1337.57L1000 1498.08L1437.74 1000L1845.18 1310.22L1804 1336.06L1752.87 1399.73C1703.19 1423.11 1608.36 1476.38 1626.42 1502.4C1644.47 1528.42 1541.86 1543.15 1488.29 1547.25L1397.93 1460.28L1166.06 1512.32Z" fill="#5570D3"/>
            </g>
            <defs>
              <filter id="filter0_f_1874_3481" x="0" y="0" width="2845.18" height="2547.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_1874_3481"/>
              </filter>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-1/2 absolute bottom-[-20%] left-0' viewBox="0 0 1350 2548" fill="none">
        <g filter="url(#filter0_f_1874_3484)">
          <path d="M-329.938 1512.32L-250.847 1337.57L-496 1498.08L-58.2592 1000L349.175 1310.22L308 1336.06L256.866 1399.73C207.193 1423.11 112.363 1476.38 130.419 1502.4C148.474 1528.42 45.8572 1543.15 -7.70814 1547.25L-98.0714 1460.28L-329.938 1512.32Z" fill="#5570D3"/>
        </g>
        <defs>
          <filter id="filter0_f_1874_3484" x="-1496" y="0" width="2845.18" height="2547.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_1874_3484"/>
          </filter>
        </defs>
      </svg>
            <div className=''>
              <div className='container mx-auto px-[24px] sm:px-0'>
                <div className='bacxkgaAS mx-auto pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[96px] 2xl:pt-[120px] pb-[36px] sm:pb-[40px] md:pb-[48px] lg:pb-[64px] xl:pb-[96px] 2xl:pb-[120px] relative sm:gap-0 gap-12'>
                  <div ref={textRef} className='flex md:flex-row flex-col items-center justify-between'>
                  <div className="flex items-start justify-start flex-col">
                    <button  className=" transingpore relative overflow-hidden px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]
                        py-[5px] lg:py-[6px] xl:py-[7px] 2xl:py-[9.5px]
                        text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]
                      "
                    >
                      Features

                      <div
                        className="
                        absolute inset-0 h-full w-full animate-gradient
                        bg-[conic-gradient(from_-2deg_at_10.04%_60.48%,rgba(255,255,255,0)_15.49deg,#ffffff_360deg)]
                        bg-[length:var(--bg-size)_100%]   
                          [border-radius:inherit]
                          [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                          ![mask-composite:subtract] 
                          p-[1px]
                        " 
                      />
                    </button>
                    <h2  className='tradines text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[62px] !text-start mt-[10px] sm:mt-[11px] md:mt-[12px] '>
                     <span>Everything you need to trade </span><br className='sm:block hidden'/><span>with discipline.</span>  
                    </h2>
                  </div>
                    <p className='bitstartp text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px] !text-start'>Built for traders who want clarity, structure, and<br className='md:block hidden'/> real performance tracking not messy notes and <br className='md:block hidden'/>random screenshots.</p>
                  </div>
                  

                <div  className='flex items-start justify-start flex-col mt-[24px] sm:mt-[32px] md:mt-[36px] lg:mt-[40px] xl:mt-[48px] 2xl:mt-[64px]'>
                  
                </div>
                <div className='flex flex-col gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'> 
                <div ref={cardsRef} className='grid items-start md:grid-cols-3 gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'> 
                  <div className='bordingrtexara h-fit relative pt-[8px] md:pt-[9px] lg:pt-[10px] 2xl:pt-[12px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]  px-[8px] md:px-[9px] lg:px-[10px] 2xl:px-[12px] overflow-hidden'>
                    <img className='w-full pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]' src={imageone} alt='Loading...'/>
                    <h2 className='repetinmaksa text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]'>Trade Logging</h2>
                    <p className='throeconsper !text-[!908EAE] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] mt-[6px] xl:mt-[7px] 2xl:mt-[8px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]'>Capture entries, exits, position size, screenshots, and <br className='md:block hidden'/>notes in a clean structured format.</p> 
                  </div>
                  {/* section 2 */}
                  <div className='bordingrtexara h-fit  pt-[8px] md:pt-[9px] lg:pt-[10px] 2xl:pt-[12px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px] px-[8px] md:px-[9px] lg:px-[10px] 2xl:px-[12px] overflow-hidden'>
                    <img className='w-full pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]' src={imagetwo} alt='Loading...'/>
                    <h2 className='repetinmaksa text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]'>Strategy Tracking</h2>
                    <p className='throeconsper text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] mt-[6px] xl:mt-[7px] 2xl:mt-[8px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]'>Tag each trade by strategy and instantly see which <br className='md:block hidden'/>setups are consistently profitable.
                    </p>
                  </div>
                  {/* section 3 */}
                  <div className='bordingrtexara h-fit relative pt-[8px] md:pt-[9px] lg:pt-[10px] 2xl:pt-[12px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]  px-[8px] md:px-[9px] lg:px-[10px] 2xl:px-[12px] overflow-hidden'>
                    <img className='w-full pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]' src={imagethree} alt='Loading...'/>
                    <h2 className='repetinmaksa text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]'>Performance Analytics</h2>
                    <p className='throeconsper text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] mt-[6px] xl:mt-[7px] 2xl:mt-[8px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]'>Track win rate, profit factor, expectancy, drawdown, and <br className='md:block hidden'/>risk-to-reward performance automatically.</p>
                  </div>
                </div>   
                <div ref={cardsRefs} className='grid items-center md:grid-cols-3 gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px]'> 
                  <div className='bordingrtexara h-fit relative pt-[8px] md:pt-[9px] lg:pt-[10px] 2xl:pt-[12px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]  px-[8px] md:px-[9px] lg:px-[10px] 2xl:px-[12px] overflow-hidden'>
                    <img className='w-full pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]' src={imagefore} alt='Loading...'/>
                    <h2 className='repetinmaksa text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]'>Daily Trading Journal</h2>
                    <p className='throeconsper text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] mt-[6px] xl:mt-[7px] 2xl:mt-[8px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]'>Capture entries, exits, position size, screenshots, and <br className='md:block hidden'/>notes in a clean structured format.</p> 
                  </div>
                  {/* section 2 */}
                  <div className='bordingrtexara  h-fit relative pt-[8px] md:pt-[9px] lg:pt-[10px] 2xl:pt-[12px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]  px-[8px] md:px-[9px] lg:px-[10px] 2xl:px-[12px] overflow-hidden'>
                    <img className='w-full pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]' src={imagefive} alt='Loading...'/>
                    <h2 className='repetinmaksa text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]'>Reports & Insights</h2>
                    <p className='throeconsper text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] mt-[6px] xl:mt-[7px] 2xl:mt-[8px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]'>Tag each trade by strategy and instantly see which <br className='md:block hidden'/>setups are consistently profitable.
                    </p> 
                  </div>
                  {/* section 3 */}
                  <div className='bordingrtexara h-fit  relative pt-[8px] md:pt-[9px] lg:pt-[10px] 2xl:pt-[12px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px] px-[8px] md:px-[9px] lg:px-[10px] 2xl:px-[12px] overflow-hidden'>
                    <img className='w-full pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]' src={imagesix} alt='Loading...'/>
                    <h2 className='repetinmaksa text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]'>AI Trading Feedback (Elite)</h2>
                    <p className='throeconsper text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] mt-[6px] xl:mt-[7px] 2xl:mt-[8px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]'>Track win rate, profit factor, expectancy, drawdown, and <br className='md:block hidden'/>risk-to-reward performance automatically.</p>
                  </div>
                </div>
                </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Pageone;