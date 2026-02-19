'use client';


import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import righticon from '../assets/image fill.png';

gsap.registerPlugin(ScrollTrigger);




const Pagefive = () => {
const [openIndex, setOpenIndex] = useState(0);
const wrapperRef = useRef(null);


  const faqData = [
    {
      question: 'Can I import trades automatically?',
      answer: 'Yes. You can import trades manually, and broker integrations are coming soon.',
    },
    {
       question:'Does it support Forex, Crypto, and Stocks?',
       answer: 'Yes. You can import trades manually, and broker integrations are coming soon.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, all your data is encrypted and stored securely in the cloud with regular backups.',
    },
    {
      question: 'Can I export reports?',
      answer: 'Absolutely. You can export your trading reports in PDF, CSV, and Excel formats.',
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes, we offer a 14-day free trial with full access to all features.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time without any penalties.',
    },
  ];

const toggleFAQ = (index) => {
  setOpenIndex(index);  
};      

useEffect(() => {
  const ctx = gsap.context(() => {

    const items = gsap.utils.toArray(".feqscsa");

    // Section smooth reveal
    gsap.fromTo(
      wrapperRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );

    // FAQ stagger animation
    gsap.fromTo(
      items,
      { y: 180, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1.2,
        },
      }
    );

  }, wrapperRef);

  return () => ctx.revert();
}, []);


    return (   
        <div id='FAQ' ref={wrapperRef}>
          <div className='relative'>
            <svg className='w-1/2 bottom-[-40%] left-0 absolute' viewBox="0 0 1350 2238" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_953_3232)">
            <path d="M-329.938 1512.32L-250.847 1337.57L-496 1498.08L-58.2592 1000L349.175 1310.22L308 1336.06L256.866 1399.73C207.193 1423.11 112.363 1476.38 130.419 1502.4C148.474 1528.42 45.8572 1543.15 -7.70816 1547.26L-98.0714 1460.28L-329.938 1512.32Z" fill="#5570D3"/>
            </g>
            <defs>
            <filter id="filter0_f_953_3232" x="-1496" y="0" width="2845.18" height="2547.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_953_3232"/>
            </filter>
            </defs>
            </svg>
            <div className='container mx-auto py-[40px] sm:py-[45px] md:py-[50px] lg:py-[64px] xl:py-[96px] 2xl:py-[120px] sm:px-0 px-4 lg:px-[100px] xl:px-[150px] 2xl:px-[201px]'>
              <div className="flex items-start justify-start">
                <button  className=" transingpore relative overflow-hidden px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]
                    py-[5px] lg:py-[6px] xl:py-[7px] 2xl:py-[9.5px]
                    text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]
                  "
                >
                  FAQ
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
              Answers to common questions. 
              </h2>   
              <div className='pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[56px] xl:pt-[60px] 2xl:pt-[64px]'>
                <ul className='flex flex-col gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'>
                  {faqData.map((faq, index) => (
                    <li key={index} className='feqscsa px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] relative'>
                      <div
                          className="
                          absolute inset-0 h-full w-full 
                        bg-[linear-gradient(200deg,transparent_0%,#FFFFFF33_3%,#FFFFFF33_97%,transparent_100%)]
                          bg-[length:var(--bg-size)_100%]   
                            [border-radius:inherit]
                            [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                            ![mask-composite:subtract] 
                            p-[1px]
                            -z-10
                          " 
                        />
                      <div
                        onClick={() => toggleFAQ(index)}
                        className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px]  flex items-center justify-between cursor-pointer transition-all duration-300 hover:opacity-80'
                      >
                        <h5 className='faqquestion text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]'>
                          {faq.question}
                        </h5>
                        
                        {openIndex === index ? (
                          <svg className='w-[20px] sm:w-[22px] md:w-[24px] lg:w-[28px] xl:w-[30px] 2xl:w-[32px] h-[20px] sm:h-[22px] md:h-[24px] lg:h-[28px] xl:h-[30px] 2xl:h-[32px] shrink-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                            <path d="M24 17H8C7.45333 17 7 16.5467 7 16C7 15.4533 7.45333 15 8 15H24C24.5467 15 25 15.4533 25 16C25 16.5467 24.5467 17 24 17Z" fill="white"/>
                          </svg>
                        ) : (
                          <svg className='w-[20px] sm:w-[22px] md:w-[24px] lg:w-[28px] xl:w-[30px] 2xl:w-[32px] h-[20px] sm:h-[22px] md:h-[24px] lg:h-[28px] xl:h-[30px] 2xl:h-[32px] shrink-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" fill="none">
                            <path d="M24.4189 17H8.13965C7.58344 17 7.12219 16.5467 7.12219 16C7.12219 15.4533 7.58344 15 8.13965 15H24.4189C24.9752 15 25.4364 15.4533 25.4364 16C25.4364 16.5467 24.9752 17 24.4189 17Z" fill="white"/>
                            <path d="M16.2793 25C15.7231 25 15.2618 24.5467 15.2618 24V8C15.2618 7.45333 15.7231 7 16.2793 7C16.8355 7 17.2968 7.45333 17.2968 8V24C17.2968 24.5467 16.8355 25 16.2793 25Z" fill="white"/>
                          </svg>
                        )}
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className='faqanswer border-t-[1px] border-t-[#FFFFFF1F] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px]'>
                          {faq.answer}
                        </p>
                      </div>  
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='container mx-auto'> 
              <div className='lastfooter relative  overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[32px] xl:rounded-[36px] 2xl:rounded-[40px]'>
                <div className="
                        absolute inset-0 h-full w-full animate-gradient
                        bg-[linear-gradient(330deg,rgba(85,112,211,0.3),rgba(85,112,211,0.3),rgba(85,112,211,0.3),rgba(85,112,211,0.4),#5570D3)] 
                        bg-[length:var(--bg-size)_100%]   
                          [border-radius:inherit]
                          [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                          ![mask-composite:subtract] 
                          p-[1px]
                        "/>
                <div className='pl-[24px] sm:pl-[32px] md:pl-[36px] lg:pl-[40px] xl:pl-[48px] 2xl:pl-[64px] pt-[24px] sm:pt-[32px] md:pt-[36px] lg:pt-[40px] xl:pt-[48px] 2xl:pt-[55px]  pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[54px]'>
                  <h2 className='tradines text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[62px] text-start! pt-[8px] sm:pt-[9px] md:pt-[10px] lg:pt-[11px] xl:pt-[12px] 2xl:pt-[12px]'>
                 Ready to trade with <br className='sm:block hidden'/> discipline and clarity? 
                  </h2>
                  <p className='starttreadjorya text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>Start using TradeJournal today and turn every trade into <br className='sm:block hidden'/> measurable improvement.</p>
                  <div className='pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px] flex items-center gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'>
                    <button className='buttonauditelt bg-[#608BFE] hover:bg-transparent! group relative  cursor-pointer px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px]
                        py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] leading-[28px]! leading-[28px]!
                        text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] group gap-[7.50px]'>
                            Get Started Free
                            <div
                        className=" group-hover:opacity-100 opacity-0
                        absolute inset-0 h-full w-full animate-gradient
                        bg-[linear-gradient(330deg,rgba(85,112,211,0.3),rgba(85,112,211,0.3),rgba(85,112,211,0.3),rgba(85,112,211,0.4),#5570D3)] 
                        bg-[length:var(--bg-size)_100%]   
                          [border-radius:inherit]
                          [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                          ![mask-composite:subtract]   
                          p-[1px]
                        " 
                      />
                    </button>
                    <button className='buttonauditelt relative  cursor-pointer px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px]
                        py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] leading-[28px]!
                        text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] group gap-[7.50px]'>
                            View Demo Dashboard
                            <div
                        className="
                        absolute inset-0 h-full w-full animate-gradient
                        bg-[linear-gradient(330deg,rgba(85,112,211,0.3),rgba(85,112,211,0.3),rgba(85,112,211,0.3),rgba(85,112,211,0.4),#5570D3)] 
                        bg-[length:var(--bg-size)_100%]   
                          [border-radius:inherit]
                          [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                          ![mask-composite:subtract] 
                          p-[1px]
                        " 
                      />
                    </button>
                  </div>
                </div>
                <img className='absolute top-0 right-0 z-[-1] h-full object-cover object-center' src={righticon} alt='Loading...'/>
              </div>
          </div>
        </div>
    );
};

export default Pagefive;