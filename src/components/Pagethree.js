'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import linerone from '../assets/420755831_1a6fd383-1cd8-49ssssc3-a098-7d9696b5be08 1.png';

gsap.registerPlugin(ScrollTrigger);

const listItems = [
  'Connect UNLIMITED accounts',
  '5GB of secure data storage',
  'Unlimited Playbooks',
  'Unlimited Mentor Invites',
  'Unlimited Backtesting',
  'Sessions Trade Replay',
];


const starterListItems = [
  'Can add up to 1 accounts',
  '1GB of secure data storage',
  'Create up to 3 Playbooks',
  '5 Mentor Invites',
  'Unlimited Backtesting',
];

const securityItems = [
  'No credit card required',
  'Secure cloud storage',
  'Works for Forex / Crypto / Stocks',
];

const Pagethree = ({ item } ) => {
const wrapperRef = useRef(null);
const headerRef = useRef(null);
const cardsRef = useRef([]);

  useEffect(() => {
  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {

      // SECTION PARALLAX LIFT
      gsap.fromTo(
        wrapperRef.current,
        {
          y: 120,
          opacity: 0,
        },
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

      // HEADER SMOOTH REVEAL
      gsap.fromTo(
        headerRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // CARDS CINEMATIC REVEAL
      gsap.fromTo(
        cardsRef.current,
        {
          y: 150,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
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
        <div id='Strategies' className='relative '>
          <svg className='w-1/2 absolute top-1/2 -translate-y-1/2 z-10 select-none' viewBox="0 0 1350 2548" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_953_3233)">
          <path d="M-329.938 1512.32L-250.847 1337.57L-496 1498.08L-58.2592 1000L349.175 1310.22L308 1336.06L256.866 1399.73C207.193 1423.11 112.363 1476.38 130.419 1502.4C148.474 1528.42 45.8572 1543.15 -7.70816 1547.26L-98.0714 1460.28L-329.938 1512.32Z" fill="#5570D3"/>
          </g>
          <defs>
          <filter id="filter0_f_953_3233" x="-1496" y="0" width="2845.18" height="2547.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>  
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_953_3233"/>
          </filter>
          </defs>
          </svg>
          <svg className='w-1/2 absolute top-[-60%] right-0 z-10 select-none' viewBox="0 0 1679 2548" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_945_12042)">
          <path d="M1166.06 1512.32L1245.15 1337.57L1000 1498.08L1437.74 1000L1845.18 1310.22L1804 1336.06L1752.87 1399.73C1703.19 1423.11 1608.36 1476.38 1626.42 1502.4C1644.47 1528.42 1541.86 1543.15 1488.29 1547.26L1397.93 1460.28L1166.06 1512.32Z" fill="#5570D3"/>
          </g>
          <defs>
          <filter id="filter0_f_945_12042" x="0" y="0" width="2845.18" height="2547.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_945_12042"/>
          </filter>
          </defs>
          </svg>

          <img className='w-full absolute top-1/2 -translate-y-1/2 -z-11 object-cover object-center select-none' src={linerone} alt='lineroneLoading...'/>
            <div ref={wrapperRef} className='relative z-20 container overflow-hidden mx-auto py-[70px] sm:py-[80px] md:py-[90px] lg:py-[100px] xl:py-[110px] 2xl:py-[120px] px-[24px] md:px-[100px] lg:px-[120px] xl:px-[150px] 2xl:px-[232px]'>
                <div className="">
                  <div ref={headerRef} className='flex flex-col items-start justify-start'>
                    <div className="flex items-start justify-start">
                    <button  className=" transingpore relative overflow-hidden px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]
                        py-[5px] lg:py-[6px] xl:py-[7px] 2xl:py-[9.5px]
                        text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] ">
                      Pricing
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
                  <h2 className='tradines text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[62px] text-start! pt-[8px] sm:pt-[9px] md:pt-[10px] lg:pt-[11px] xl:pt-[12px] 2xl:pt-[12px]'>
                  Designed for every step <br className='sm:block hidden'/> of your journey 
                  </h2>

                  </div>
                    <div ref={(el) => {
                        if (el) cardsRef.current = el.children;
                      }} className="grid sm:grid-cols-2 gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[64px] 2xl:pt-[64px]">
                      <div className='gradientgordferas p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[32px] overflow-hidden group duration-500'>
                        <svg className='w-1/2 blur-[130px] absolute -left-[10%] -top-[10%] group-hover:opacity-100 opacity-0 group-active:opacity-100' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 118" fill="none">
                          <circle cx="59" cy="59" r="59" fill="#608BFE"/>
                        </svg>
                        <svg className='w-1/2 blur-[130px] absolute -right-[20%] -bottom-[20%] group-hover:opacity-100 opacity-0 group-active:opacity-100' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 118" fill="none">
                          <circle cx="59" cy="59" r="59" fill="#608BFE"/>
                        </svg>
                        <svg className='w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[56px]' viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_ii_starter)">
                            <rect width="56" height="56" rx="28" fill="white" fillOpacity="0.04"/>
                            <path d="M31 39.9996C31 40.2648 30.8946 40.5192 30.7071 40.7067C30.5196 40.8943 30.2652 40.9996 30 40.9996H26C25.7348 40.9996 25.4804 40.8943 25.2929 40.7067C25.1053 40.5192 25 40.2648 25 39.9996C25 39.7344 25.1053 39.48 25.2929 39.2925C25.4804 39.105 25.7348 38.9996 26 38.9996H30C30.2652 38.9996 30.5196 39.105 30.7071 39.2925C30.8946 39.48 31 39.7344 31 39.9996ZM39.9525 31.4784L38.4075 38.4321C38.3342 38.7623 38.1783 39.0686 37.9545 39.3222C37.7307 39.5758 37.4462 39.7685 37.1276 39.8822C36.8091 39.996 36.4669 40.0271 36.133 39.9726C35.7992 39.9182 35.4846 39.7799 35.2187 39.5709L31.8137 36.9996H24.1887L20.7812 39.5709C20.5153 39.7799 20.2008 39.9182 19.8669 39.9726C19.5331 40.0271 19.1909 39.996 18.8723 39.8822C18.5538 39.7685 18.2693 39.5758 18.0455 39.3222C17.8216 39.0686 17.6658 38.7623 17.5925 38.4321L16.0475 31.4784C15.982 31.1799 15.9853 30.8705 16.0572 30.5736C16.1291 30.2766 16.2677 30 16.4625 29.7646L20.0325 25.4821C20.1523 23.9083 20.5136 22.3623 21.1037 20.8984C22.7162 16.8559 25.6037 14.3196 26.775 13.4171C27.1256 13.1455 27.5565 12.998 28 12.998C28.4435 12.998 28.8744 13.1455 29.225 13.4171C30.3925 14.3196 33.2837 16.8559 34.8962 20.8984C35.4864 22.3623 35.8477 23.9083 35.9675 25.4821L39.5375 29.7646C39.7323 30 39.8709 30.2766 39.9428 30.5736C40.0147 30.8705 40.018 31.1799 39.9525 31.4784ZM22.5487 35.7284C21.2062 33.2842 20.3912 30.8813 20.1037 28.5196L18 31.0446L19.545 37.9996L19.5675 37.9834L22.5487 35.7284ZM29.5 24.4996C29.5 24.2029 29.412 23.9129 29.2472 23.6663C29.0824 23.4196 28.8481 23.2273 28.574 23.1138C28.2999 23.0003 27.9983 22.9706 27.7074 23.0284C27.4164 23.0863 27.1491 23.2292 26.9393 23.4389C26.7295 23.6487 26.5867 23.916 26.5288 24.207C26.4709 24.4979 26.5006 24.7995 26.6142 25.0736C26.7277 25.3477 26.92 25.582 27.1666 25.7468C27.4133 25.9116 27.7033 25.9996 28 25.9996C28.3978 25.9996 28.7793 25.8416 29.0606 25.5603C29.342 25.279 29.5 24.8974 29.5 24.4996ZM38 31.0446L35.8962 28.5196C35.6112 30.8763 34.7962 33.28 33.4512 35.7309L36.4325 37.9809L36.455 37.9971L38 31.0446Z" fill="#E5E5E5"/>
                          </g>
                          <defs>
                            <filter id="filter0_ii_starter" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset dy="-1"/>
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.24 0"/>
                              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_starter"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset dy="1"/>
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.24 0"/>
                              <feBlend mode="normal" in2="effect1_innerShadow_starter" result="effect2_innerShadow_starter"/>
                            </filter>
                          </defs>
                        </svg>

                        <h3 className='freeplanpro pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] pb-[5px] sm:pb-[6px] md:pb-[7px] lg:pb-[8px] xl:pb-[8px] 2xl:pb-[8px]'>
                          Starter Plan
                        </h3>

                        <p className='throeconsper text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                          Get access to all the essential tools to <br className='sm:block hidden'/>
                          kickstart your journey.
                        </p>

                        <p className='typhographi text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] text-start pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                          <span className='dollarmonth'>$</span>
                          <span className='numberwhite'>15</span>
                          <span className='permonth text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]'>/month</span>
                        </p>

                        <button className='starterbtn w-full flex justify-center items-center gap-[4px]
                          rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px]
                          pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[16px] 2xl:pt-[16px]
                          pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[16px] 2xl:pb-[16px]
                          px-[20px] sm:px-[24px] md:px-[28px] lg:px-[32px] xl:px-[32px] 2xl:px-[32px]
                          my-[20px] sm:my-[24px] md:my-[28px] lg:my-[32px] xl:my-[32px] 2xl:my-[32px]
                          transition-all duration-200 group-hover:scale-[1.02] group-active:scale-[0.98] group-hover:bg-[#5570D3] group-active:bg-[#5570D3]'>
                          <span className='ctabuttontext text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                            Start with Starter
                          </span>
                        </button>

                        <p className='featureinclude text-[10px] sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pb-[8px] sm:pb-[9px] md:pb-[10px] lg:pb-[11px] xl:pb-[12px] 2xl:pb-[12px]'>
                          Features include:
                        </p>

                        <ul className='flex flex-col gap-[8px] sm:gap-[9px] md:gap-[10px] lg:gap-[11px] xl:gap-[12px] 2xl:gap-[12px]'>
                          {starterListItems.map((item, index) => (
                            <li key={index} className='flex items-center gap-[8px] sm:gap-[9px] md:gap-[10px] lg:gap-[11px] xl:gap-[12px] 2xl:gap-[14px]'>
                              <svg className='w-[16px] sm:w-[17px] md:w-[18px] lg:w-[20px] xl:w-[22px] 2xl:w-[24px] h-[16px] sm:h-[17px] md:h-[18px] lg:h-[20px] xl:h-[22px] 2xl:h-[24px] shrink-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1218 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57865 13.1399 7.49959 12.949 7.49959 12.75C7.49959 12.551 7.57865 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44903 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.2891 9.14969 15.3718 9.09442 15.4628 9.0567C15.5539 9.01899 15.6515 8.99958 15.75 8.99958C15.8486 8.99958 15.9461 9.01899 16.0372 9.0567C16.1282 9.09442 16.2109 9.14969 16.2806 9.21937C16.3503 9.28906 16.4056 9.37178 16.4433 9.46283C16.481 9.55387 16.5004 9.65145 16.5004 9.75C16.5004 9.84855 16.481 9.94613 16.4433 10.0372C16.4056 10.1282 16.3503 10.2109 16.2806 10.2806Z" fill="url(#starterGrad)"/>
                                <defs>
                                  <linearGradient id="starterGrad" x1="12" y1="2.25" x2="12" y2="21.75" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#E5E5E5"/>
                                    <stop offset="1" stopColor="#B8B8B8"/>
                                  </linearGradient>
                                </defs>
                              </svg>
                              <span className='prolisttext text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className='gradientgordferas group p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[32px] overflow-hidden'>
                        <svg className='w-1/2 blur-[130px] absolute -left-[10%] -top-[10%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 118" fill="none">
                          <circle cx="59" cy="59" r="59" fill="#608BFE"/>
                        </svg>
                        <svg className='w-1/2 blur-[130px] absolute -right-[20%] -bottom-[20%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 118" fill="none">
                          <circle cx="59" cy="59" r="59" fill="#608BFE"/>
                        </svg>
                        <svg className='w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[56px]' viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_ii_1874_1607)">
                          <rect width="56" height="56" rx="28" fill="white" fill-opacity="0.04"/>
                          <path d="M31 39.9996C31 40.2648 30.8946 40.5192 30.7071 40.7067C30.5196 40.8943 30.2652 40.9996 30 40.9996H26C25.7348 40.9996 25.4804 40.8943 25.2929 40.7067C25.1053 40.5192 25 40.2648 25 39.9996C25 39.7344 25.1053 39.48 25.2929 39.2925C25.4804 39.105 25.7348 38.9996 26 38.9996H30C30.2652 38.9996 30.5196 39.105 30.7071 39.2925C30.8946 39.48 31 39.7344 31 39.9996ZM39.9525 31.4784L38.4075 38.4321C38.3342 38.7623 38.1783 39.0686 37.9545 39.3222C37.7307 39.5758 37.4462 39.7685 37.1276 39.8822C36.8091 39.996 36.4669 40.0271 36.133 39.9726C35.7992 39.9182 35.4846 39.7799 35.2187 39.5709L31.8137 36.9996H24.1887L20.7812 39.5709C20.5153 39.7799 20.2008 39.9182 19.8669 39.9726C19.5331 40.0271 19.1909 39.996 18.8723 39.8822C18.5538 39.7685 18.2693 39.5758 18.0455 39.3222C17.8216 39.0686 17.6658 38.7623 17.5925 38.4321L16.0475 31.4784C15.982 31.1799 15.9853 30.8705 16.0572 30.5736C16.1291 30.2766 16.2677 30 16.4625 29.7646L20.0325 25.4821C20.1523 23.9083 20.5136 22.3623 21.1037 20.8984C22.7162 16.8559 25.6037 14.3196 26.775 13.4171C27.1256 13.1455 27.5565 12.998 28 12.998C28.4435 12.998 28.8744 13.1455 29.225 13.4171C30.3925 14.3196 33.2837 16.8559 34.8962 20.8984C35.4864 22.3623 35.8477 23.9083 35.9675 25.4821L39.5375 29.7646C39.7323 30 39.8709 30.2766 39.9428 30.5736C40.0147 30.8705 40.018 31.1799 39.9525 31.4784ZM22.5487 35.7284C21.2062 33.2842 20.3912 30.8813 20.1037 28.5196L18 31.0446L19.545 37.9996L19.5675 37.9834L22.5487 35.7284ZM29.5 24.4996C29.5 24.2029 29.412 23.9129 29.2472 23.6663C29.0824 23.4196 28.8481 23.2273 28.574 23.1138C28.2999 23.0003 27.9983 22.9706 27.7074 23.0284C27.4164 23.0863 27.1491 23.2292 26.9393 23.4389C26.7295 23.6487 26.5867 23.916 26.5288 24.207C26.4709 24.4979 26.5006 24.7995 26.6142 25.0736C26.7277 25.3477 26.92 25.582 27.1666 25.7468C27.4133 25.9116 27.7033 25.9996 28 25.9996C28.3978 25.9996 28.7793 25.8416 29.0606 25.5603C29.342 25.279 29.5 24.8974 29.5 24.4996ZM38 31.0446L35.8962 28.5196C35.6112 30.8763 34.7962 33.28 33.4512 35.7309L36.4325 37.9809L36.455 37.9971L38 31.0446Z" fill="#E5E5E5"/>
                          </g>
                          <defs>
                          <filter id="filter0_ii_1874_1607" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="-1"/>
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.24 0"/>
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1874_1607"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="1"/>
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.24 0"/>
                          <feBlend mode="normal" in2="effect1_innerShadow_1874_1607" result="effect2_innerShadow_1874_1607"/>
                          </filter>
                          </defs>
                        </svg>
                        <h3 className='freeplanpro gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] pb-[5px] sm:pb-[6px] md:pb-[7px] lg:pb-[8px] xl:pb-[8px] 2xl:pb-[8px]'>Pro Plan</h3>
                        <p className='throeconsper text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                          Unlock capabilities to scale and <br className='sm:block hidden'/> streamline operations.
                        </p>
                        <p className='typhographi text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] text-start pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                          <span className='dollarmonth'>$</span>
                          <span className='numberwhite'>45</span>
                          <span className='permonth text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]'>/month</span>
                        </p>
                        <button className='ctabutton w-full flex justify-center items-center gap-[4px] 
                          rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px]
                          pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[16px] 2xl:pt-[16px]
                          pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[16px] 2xl:pb-[16px]
                          px-[20px] sm:px-[24px] md:px-[28px] lg:px-[32px] xl:px-[32px] 2xl:px-[32px]
                          my-[20px] sm:my-[24px] md:my-[28px] lg:my-[32px] xl:my-[32px] 2xl:my-[32px]
                          transition-all duration-300 group-hover:opacity-80 group-hover:scale-[1.02] group-active:scale-[0.98]'>
                          <span className='ctabuttontext text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                            Upgrade to Pro
                          </span>
                        </button>
                        <p className='featureinclude text-[10px] sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pb-[8px] sm:pb-[9px] md:pb-[10px] lg:pb-[11px] xl:pb-[12px] 2xl:pb-[12px]'>
                          Features include:
                        </p>
                        <ul className='flex flex-col gap-[8px] sm:gap-[9px] md:gap-[10px] lg:gap-[11px] xl:gap-[12px] 2xl:gap-[12px]'>
                        {listItems.map((item, index) => (
                          <li key={index} className='flex items-center gap-[8px] sm:gap-[9px] md:gap-[10px] lg:gap-[11px] xl:gap-[12px] 2xl:gap-[14px]'>
                            <svg className='w-[16px] sm:w-[17px] md:w-[18px] lg:w-[20px] xl:w-[22px] 2xl:w-[24px] h-[16px] sm:h-[17px] md:h-[18px] lg:h-[20px] xl:h-[22px] 2xl:h-[24px] shrink-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1218 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57865 13.1399 7.49959 12.949 7.49959 12.75C7.49959 12.551 7.57865 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44903 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.2891 9.14969 15.3718 9.09442 15.4628 9.0567C15.5539 9.01899 15.6515 8.99958 15.75 8.99958C15.8486 8.99958 15.9461 9.01899 16.0372 9.0567C16.1282 9.09442 16.2109 9.14969 16.2806 9.21937C16.3503 9.28906 16.4056 9.37178 16.4433 9.46283C16.481 9.55387 16.5004 9.65145 16.5004 9.75C16.5004 9.84855 16.481 9.94613 16.4433 10.0372C16.4056 10.1282 16.3503 10.2109 16.2806 10.2806Z" fill="url(#paint0_linear_1874_1658)"/>
                              <defs>
                                <linearGradient id="paint0_linear_1874_1658" x1="12" y1="2.25" x2="12" y2="21.75" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#E5E5E5"/>
                                  <stop offset="1" stopColor="#B8B8B8"/>
                                </linearGradient>
                              </defs>
                            </svg>
                            <span className='prolisttext text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                              {item}
                            </span> 
                          </li>
                        ))}
                      </ul>
                      </div>
                    </div>
                    <ul className='flex sm:flex-row flex-col items-center justify-center gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] pt-[20px] sm:pt-[24px] md:pt-[28px] lg:pt-[32px] xl:pt-[32px] 2xl:pt-[32px]'>
                      {securityItems.map((item, index) => (
                        <li key={index} className='flex items-center gap-[6px] sm:gap-[6px] md:gap-[7px] lg:gap-[7px] xl:gap-[8px] 2xl:gap-[8px]'>
                          <svg className='w-[11px] sm:w-[12px] md:w-[13px] lg:w-[14px] xl:w-[15px] 2xl:w-[16px] h-[11px] sm:h-[12px] md:h-[13px] lg:h-[14px] xl:h-[15px] 2xl:h-[16px] shrink-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_security)">
                              <path d="M2.59954 2.64798C-0.349087 5.62867 -0.333062 10.4522 2.64762 13.4009C5.6283 16.3495 10.4519 16.3335 13.4005 13.3528C16.3491 10.3721 16.3331 5.54854 13.3524 2.59991C10.3717 -0.34872 5.54817 -0.332696 2.59954 2.64798ZM11.7018 6.5421L7.56734 10.7247C7.21479 11.0772 6.63789 11.0772 6.28533 10.7247L6.12508 10.5644L5.64432 10.0837L4.29821 8.75357C3.94566 8.40102 3.94566 7.82411 4.29821 7.47156C4.65076 7.11901 5.22767 7.11901 5.58022 7.47156L6.92634 8.80165L10.4198 5.27611C10.7724 4.92356 11.3493 4.92356 11.7018 5.27611C12.0544 5.61264 12.0544 6.18955 11.7018 6.5421Z" fill="#908EAE"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_security">
                                <rect width="16" height="16" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className='securitytext text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                </div>  
            </div>
        </div>
    );
};

export default Pagethree;