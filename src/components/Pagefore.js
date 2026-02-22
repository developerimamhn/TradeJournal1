'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Pagefore = () => {
const wrapperRef = useRef(null);
const textRef = useRef(null);
// const imageRef = useRef(null);
// const playIconRef = useRef(null);

  
  useEffect(() => {
  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {

      const cards = gsap.utils.toArray(".cardfooara");

      // SECTION PARALLAX
      gsap.fromTo(
        wrapperRef.current,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 1.2,
          },
        }
      );

      // TEXT BLOCK
      gsap.fromTo(
        textRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // CARDS FLOAT REVEAL (NEW STYLE)
      gsap.fromTo(
        cards,
        {
          y: 150,
          opacity: 0,
          rotate: (i) => (i === 0 ? -6 : i === 2 ? 6 : 0),
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          scale: 1,
          stagger: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 75%",
            end: "top 30%",
            scrub: 1.5,
          },
        }
      );

    });
  }, wrapperRef);

  return () => ctx.revert();
}, []);




    return (
        <div id='Pricing' ref={wrapperRef} className='py-[45px] sm:py-[55px] md:py-[75px] lg:py-[105px] xl:py-[124px] 2xl:py-[148px] px-6 sm:px-0 relative'>
          <svg className='w-1/2 absolute bottom-[-60%] right-0 select-none' viewBox="0 0 1679 2548" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1874_1799)">
            <path d="M1166.06 1512.32L1245.15 1337.57L1000 1498.08L1437.74 1000L1845.18 1310.22L1804 1336.06L1752.87 1399.73C1703.19 1423.11 1608.36 1476.38 1626.42 1502.4C1644.47 1528.42 1541.86 1543.15 1488.29 1547.26L1397.93 1460.28L1166.06 1512.32Z" fill="#5570D3"/>
            </g>  
            <defs>
            <filter id="filter0_f_1874_1799" x="0" y="0" width="2845.18" height="2547.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_1874_1799"/>
            </filter>
            </defs>
            </svg> 

        <div className='container mx-auto relative z-20'>
            <div ref={textRef} className='grid grid-cols-1 justify-center items-center gap-[32px] sm:gap-[36px] md:gap-[40px] lg:gap-[48px] xl:gap-[64px] 2xl:gap-[78px]'>
            <div>
                
                <div className="flex items-center justify-center">
                    <button  className=" transingpore relative overflow-hidden px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]
                        py-[5px] lg:py-[6px] xl:py-[7px] 2xl:py-[9.5px]
                        text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]
                      "
                    >
                      How it works
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
                  </div>
                  <h2 className='tradines text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[62px] text-center pt-[8px] sm:pt-[9px] md:pt-[10px] lg:pt-[11px] xl:pt-[12px] 2xl:pt-[12px]'>
                 Start tracking in minutes. <br className='lg:block hidden'/> Improve for life. 
                  </h2>


                <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[64px] 2xl:pt-[64px] gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'>
                  <div className='cardfooara relative'>
                    <div
                      className="
                      absolute inset-0 h-full w-full animate-gradient
                      bg-[linear-gradient(100deg,#07011B,rgba(85,112,211,0),rgba(255,255,255,0.05),rgba(255,255,255,0.08),rgba(255,255,255,0.10))] 
                      bg-[length:var(--bg-size)_100%]    
                      [border-radius:inherit]
                      [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                      ![mask-composite:subtract]   
                      p-[1px]
                      " 
                    />
                    <div
                        className="
                        absolute inset-0 h-full w-full 
                        bg-[linear-gradient(100deg,#07011B,rgba(85,112,211,0),rgba(255,255,255,0.05),rgba(255,255,255,0.08),rgba(255,255,255,0.10))]  
                        bg-[length:var(--bg-size)_100%]   
                          [border-radius:inherit]
                          [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                          ![mask-composite:subtract] 
                          p-[1px]
                        " 
                      />
                    <svg className='w-full h-auto' viewBox="0 0 416 68" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                      <path d="M24 46L0 46" stroke="url(#paint0_linear_step1)"/>
                      <path d="M46 24L46 0" stroke="url(#paint1_linear_step1)"/>
                      <foreignObject x="-26" y="-26" width="144" height="144">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter:'blur(25px)', clipPath:'url(#bgblur_0_step1_clip_path)', height:'100%', width:'100%'}}></div>
                      </foreignObject>
                      <g data-figma-bg-blur-radius="50">
                        <rect x="24.5" y="24.5" width="43" height="43" rx="21.5" stroke="white" strokeOpacity="0.2"/>
                      </g>
                      <foreignObject x="-21" y="-21" width="134" height="134">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter:'blur(25px)', clipPath:'url(#bgblur_1_step1_clip_path)', height:'100%', width:'100%'}}></div>
                      </foreignObject>
                      <g data-figma-bg-blur-radius="50">
                        <rect x="29" y="29" width="34" height="34" rx="17" fill="url(#paint2_linear_step1)"/>
                        <rect x="29.5" y="29.5" width="33" height="33" rx="16.5" stroke="white" strokeOpacity="0.1"/>
                        <path d="M40 42C40 40.3431 41.3431 39 43 39H49C50.6569 39 52 40.3431 52 42" stroke="white" strokeLinecap="round"/>
                        <path d="M42.1295 46.4188L45.1863 42.1392C45.5851 41.5809 46.4149 41.5809 46.8137 42.1392L49.8705 46.4188C50.3433 47.0806 49.8702 48 49.0568 48H42.9432C42.1298 48 41.6567 47.0806 42.1295 46.4188Z" fill="url(#paint3_linear_step1)" stroke="white" strokeLinecap="round"/>
                        <path d="M46 48L46 52" stroke="white" strokeLinecap="round"/>
                      </g>
                      <path d="M68 46L416 46" stroke="url(#paint4_linear_step1)"/>
                      <defs>
                        <clipPath id="bgblur_0_step1_clip_path" transform="translate(26 26)">
                          <rect x="24" y="24" width="44" height="44" rx="22"/>
                        </clipPath>
                        <clipPath id="bgblur_1_step1_clip_path" transform="translate(21 21)">
                          <rect x="29" y="29" width="34" height="34" rx="17"/>
                        </clipPath>
                        <linearGradient id="paint0_linear_step1" x1="-4.37114e-08" y1="46.5" x2="24" y2="46.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0"/>
                          <stop offset="1" stopColor="white" stopOpacity="0.2"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_step1" x1="45.5" y1="-2.18557e-08" x2="45.5" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0"/>
                          <stop offset="1" stopColor="white" stopOpacity="0.2"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_step1" x1="46" y1="46" x2="46" y2="63" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0"/>
                          <stop offset="1" stopColor="white" stopOpacity="0.3"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_step1" x1="46" y1="44" x2="46" y2="47.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0"/>
                          <stop offset="1" stopColor="white" stopOpacity="0.4"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_step1" x1="416" y1="45.5" x2="68" y2="45.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0"/>
                          <stop offset="1" stopColor="white" stopOpacity="0.2"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className='pb-[16px] sm:pb-[18px] md:pb-[20px] lg:pb-[22px] xl:pb-[24px] 2xl:pb-[24px] pl-[24px] sm:pl-[26px] md:pl-[28px] lg:pl-[31px] xl:pl-[34px] 2xl:pl-[32px]'>
                      <div className='stepbadge inline-flex justify-center items-center 
                        rounded-[20px] sm:rounded-[22px] md:rounded-[24px] lg:rounded-[26px] xl:rounded-[28px] 2xl:rounded-[30px]
                        pt-[4px] sm:pt-[4px] md:pt-[5px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[6px]
                        pb-[4px] sm:pb-[4px] md:pb-[5px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[6px]
                        px-[8px] sm:px-[9px] md:px-[10px] lg:px-[11px] xl:px-[12px] 2xl:px-[12px]
                        gap-[7px] sm:gap-[8px] md:gap-[8px] lg:gap-[9px] xl:gap-[10px] 2xl:gap-[10px]
                        mt-[16px] sm:mt-[18px] md:mt-[20px] lg:mt-[22px] xl:mt-[24px] 2xl:mt-[24px]'>
                        <span className='steptext text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[12px]'>
                          Step 1
                        </span>
                      </div>
                      <h4 className='tagjournal text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[7px] sm:pt-[8px] md:pt-[8px] lg:pt-[9px] xl:pt-[10px] 2xl:pt-[10px]'>
                        Import or Add Trades
                      </h4>
                      <p className='strategytext text-[10px] sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pt-[4px] sm:pt-[4px] md:pt-[5px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[6px]'>
                        Upload trades manually or import from <br className='lg:block hidden'/> your broker platform.
                      </p>
                    </div>
                  </div>
                  <div className='cardfooara relative'>
                     <div
                        className="
                        absolute inset-0 h-full w-full animate-gradient
                        bg-[linear-gradient(100deg,#07011B,rgba(85,112,211,0),rgba(255,255,255,0.05),rgba(255,255,255,0.08),rgba(255,255,255,0.10))] 
                        bg-[length:var(--bg-size)_100%]    
                          [border-radius:inherit]
                          [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                          ![mask-composite:subtract]   
                          p-[1px]
                        " 
                      />
                      <div
                        className="
                        absolute inset-0 h-full w-full 
                        bg-[linear-gradient(100deg,#07011B,rgba(85,112,211,0),rgba(255,255,255,0.05),rgba(255,255,255,0.08),rgba(255,255,255,0.10))]  
                        bg-[length:var(--bg-size)_100%]   
                          [border-radius:inherit]
                          [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                          ![mask-composite:subtract] 
                          p-[1px]
                        " 
                      />
                    <svg className='w-full h-auto' viewBox="0 0 416 68" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    <path d="M24 46L0 46" stroke="url(#paint0_linear_953_5240)"/>
                    <path d="M46 24L46 0" stroke="url(#paint1_linear_953_5240)"/>
                    <foreignObject x="-26" y="-26" width="144" height="144">
                      <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter:'blur(25px)', clipPath:'url(#bgblur_0_953_5240_clip_path)', height:'100%', width:'100%'}}></div>
                    </foreignObject>
                    <g data-figma-bg-blur-radius="50">
                      <rect x="24.5" y="24.5" width="43" height="43" rx="21.5" stroke="white" strokeOpacity="0.2"/>
                    </g>
                    <foreignObject x="-21" y="-21" width="134" height="134">
                      <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter:'blur(25px)', clipPath:'url(#bgblur_1_953_5240_clip_path)', height:'100%', width:'100%'}}></div>
                    </foreignObject>
                    <g data-figma-bg-blur-radius="50">
                      <rect x="29" y="29" width="34" height="34" rx="17" fill="url(#paint2_linear_953_5240)"/>
                      <rect x="29.5" y="29.5" width="33" height="33" rx="16.5" stroke="white" strokeOpacity="0.1"/>
                      <path d="M40 42C40 40.3431 41.3431 39 43 39H49C50.6569 39 52 40.3431 52 42" stroke="white" strokeLinecap="round"/>
                      <path d="M42.1295 46.4188L45.1863 42.1392C45.5851 41.5809 46.4149 41.5809 46.8137 42.1392L49.8705 46.4188C50.3433 47.0806 49.8702 48 49.0568 48H42.9432C42.1298 48 41.6567 47.0806 42.1295 46.4188Z" fill="url(#paint3_linear_953_5240)" stroke="white" strokeLinecap="round"/>
                      <path d="M46 48L46 52" stroke="white" strokeLinecap="round"/>
                    </g>
                    <path d="M68 46L416 46" stroke="url(#paint4_linear_953_5240)"/>
                    <defs>
                      <clipPath id="bgblur_0_953_5240_clip_path" transform="translate(26 26)">
                        <rect x="24" y="24" width="44" height="44" rx="22"/>
                      </clipPath>
                      <clipPath id="bgblur_1_953_5240_clip_path" transform="translate(21 21)">
                        <rect x="29" y="29" width="34" height="34" rx="17"/>
                      </clipPath>
                      <linearGradient id="paint0_linear_953_5240" x1="-4.37114e-08" y1="46.5" x2="24" y2="46.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0"/>
                        <stop offset="1" stopColor="white" stopOpacity="0.2"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_953_5240" x1="45.5" y1="-2.18557e-08" x2="45.5" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0"/>
                        <stop offset="1" stopColor="white" stopOpacity="0.2"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_953_5240" x1="46" y1="46" x2="46" y2="63" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0"/>
                        <stop offset="1" stopColor="white" stopOpacity="0.3"/>
                      </linearGradient>
                      <linearGradient id="paint3_linear_953_5240" x1="46" y1="44" x2="46" y2="47.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0"/>
                        <stop offset="1" stopColor="white" stopOpacity="0.4"/>
                      </linearGradient>
                      <linearGradient id="paint4_linear_953_5240" x1="416" y1="45.5" x2="68" y2="45.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0"/>
                        <stop offset="1" stopColor="white" stopOpacity="0.2"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className='pb-[16px] sm:pb-[18px] md:pb-[20px] lg:pb-[22px] xl:pb-[24px] 2xl:pb-[24px] pl-[24px] sm:pl-[26px] md:pl-[28px] lg:pl-[31px] xl:pl-[34px] 2xl:pl-[32px]'>
                    <div className='stepbadge inline-flex justify-center items-center 
                      rounded-[20px] sm:rounded-[22px] md:rounded-[24px] lg:rounded-[26px] xl:rounded-[28px] 2xl:rounded-[30px]
                      pt-[4px] sm:pt-[4px] md:pt-[5px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[6px]
                      pb-[4px] sm:pb-[4px] md:pb-[5px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[6px]
                      px-[8px] sm:px-[9px] md:px-[10px] lg:px-[11px] xl:px-[12px] 2xl:px-[12px]
                      gap-[7px] sm:gap-[8px] md:gap-[8px] lg:gap-[9px] xl:gap-[10px] 2xl:gap-[10px]
                      mt-[16px] sm:mt-[18px] md:mt-[20px] lg:mt-[22px] xl:mt-[24px] 2xl:mt-[24px]'>
                      <span className='steptext text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[12px]'>
                        Step 2
                      </span>
                    </div>
                    <h4 className='tagjournal text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[7px] sm:pt-[8px] md:pt-[8px] lg:pt-[9px] xl:pt-[10px] 2xl:pt-[10px]'>
                      Tag & Journal
                    </h4>
                    <p className='strategytext text-[10px] sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pt-[4px] sm:pt-[4px] md:pt-[5px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[6px]'>
                      Add strategy tags, emotions, session notes, and<br className='lg:block hidden'/> screenshots for each trade.
                    </p>
                    </div>
                  </div>
                  <div className='cardfooara relative'>
                    <div
                      className="
                      absolute inset-0 h-full w-full animate-gradient
                      bg-[linear-gradient(100deg,#07011B,rgba(85,112,211,0),rgba(255,255,255,0.05),rgba(255,255,255,0.08),rgba(255,255,255,0.10))] 
                      bg-[length:var(--bg-size)_100%]    
                      [border-radius:inherit]
                      [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                      ![mask-composite:subtract]   
                      p-[1px]
                      " 
                    />
                    <div
                        className="
                        absolute inset-0 h-full w-full 
                        bg-[linear-gradient(100deg,#07011B,rgba(85,112,211,0),rgba(255,255,255,0.05),rgba(255,255,255,0.08),rgba(255,255,255,0.10))]  
                        bg-[length:var(--bg-size)_100%]   
                          [border-radius:inherit]
                          [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                          ![mask-composite:subtract] 
                          p-[1px]
                        " 
                      />
                    <svg className='w-full h-auto' viewBox="0 0 416 68" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                      <path d="M24 46L0 46" stroke="url(#paint0_linear_step3)"/>
                      <path d="M46 24L46 0" stroke="url(#paint1_linear_step3)"/>
                      <foreignObject x="-26" y="-26" width="144" height="144">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter:'blur(25px)', clipPath:'url(#bgblur_0_step3_clip_path)', height:'100%', width:'100%'}}></div>
                      </foreignObject>
                      <g data-figma-bg-blur-radius="50">
                        <rect x="24.5" y="24.5" width="43" height="43" rx="21.5" stroke="white" strokeOpacity="0.2"/>
                      </g>
                      <foreignObject x="-21" y="-21" width="134" height="134">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter:'blur(25px)', clipPath:'url(#bgblur_1_step3_clip_path)', height:'100%', width:'100%'}}></div>
                      </foreignObject>
                      <g data-figma-bg-blur-radius="50">
                        <rect x="29" y="29" width="34" height="34" rx="17" fill="url(#paint2_linear_step3)"/>
                        <rect x="29.5" y="29.5" width="33" height="33" rx="16.5" stroke="white" strokeOpacity="0.1"/>
                        <path d="M40 42C40 40.3431 41.3431 39 43 39H49C50.6569 39 52 40.3431 52 42" stroke="white" strokeLinecap="round"/>
                        <path d="M42.1295 46.4188L45.1863 42.1392C45.5851 41.5809 46.4149 41.5809 46.8137 42.1392L49.8705 46.4188C50.3433 47.0806 49.8702 48 49.0568 48H42.9432C42.1298 48 41.6567 47.0806 42.1295 46.4188Z" fill="url(#paint3_linear_step3)" stroke="white" strokeLinecap="round"/>
                        <path d="M46 48L46 52" stroke="white" strokeLinecap="round"/>
                      </g>
                      <path d="M68 46L416 46" stroke="url(#paint4_linear_step3)"/>
                      <defs>
                        <clipPath id="bgblur_0_step3_clip_path" transform="translate(26 26)">
                          <rect x="24" y="24" width="44" height="44" rx="22"/>
                        </clipPath>
                        <clipPath id="bgblur_1_step3_clip_path" transform="translate(21 21)">
                          <rect x="29" y="29" width="34" height="34" rx="17"/>
                        </clipPath>
                        <linearGradient id="paint0_linear_step3" x1="-4.37114e-08" y1="46.5" x2="24" y2="46.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0"/>
                          <stop offset="1" stopColor="white" stopOpacity="0.2"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_step3" x1="45.5" y1="-2.18557e-08" x2="45.5" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0"/>
                          <stop offset="1" stopColor="white" stopOpacity="0.2"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_step3" x1="46" y1="46" x2="46" y2="63" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0"/>
                          <stop offset="1" stopColor="white" stopOpacity="0.3"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_step3" x1="46" y1="44" x2="46" y2="47.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0"/>
                          <stop offset="1" stopColor="white" stopOpacity="0.4"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_step3" x1="416" y1="45.5" x2="68" y2="45.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0"/>
                          <stop offset="1" stopColor="white" stopOpacity="0.2"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className='pb-[16px] sm:pb-[18px] md:pb-[20px] lg:pb-[22px] xl:pb-[24px] 2xl:pb-[24px] pl-[24px] sm:pl-[26px] md:pl-[28px] lg:pl-[31px] xl:pl-[34px] 2xl:pl-[32px]'>
                      <div className='stepbadge inline-flex justify-center items-center 
                        rounded-[20px] sm:rounded-[22px] md:rounded-[24px] lg:rounded-[26px] xl:rounded-[28px] 2xl:rounded-[30px]
                        pt-[4px] sm:pt-[4px] md:pt-[5px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[6px]
                        pb-[4px] sm:pb-[4px] md:pb-[5px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[6px]
                        px-[8px] sm:px-[9px] md:px-[10px] lg:px-[11px] xl:px-[12px] 2xl:px-[12px]
                        gap-[7px] sm:gap-[8px] md:gap-[8px] lg:gap-[9px] xl:gap-[10px] 2xl:gap-[10px]
                        mt-[16px] sm:mt-[18px] md:mt-[20px] lg:mt-[22px] xl:mt-[24px] 2xl:mt-[24px]'>
                        <span className='steptext text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[12px]'>
                          Step 3
                        </span>
                      </div>
                      <h4 className='tagjournal text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[7px] sm:pt-[8px] md:pt-[8px] lg:pt-[9px] xl:pt-[10px] 2xl:pt-[10px]'>
                        Analyze & Improve
                      </h4>
                      <p className='strategytext text-[10px] sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pt-[4px] sm:pt-[4px] md:pt-[5px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[6px]'>
                        Review reports, spot weaknesses, and double down on your best setups.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Pagefore;