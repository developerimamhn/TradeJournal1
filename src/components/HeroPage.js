// import { gsap } from "gsap";
// import { useEffect, useRef } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import righticon from '../assets/Frame 1984078515.png';
import righticona from '../assets/Rectangle 42.png';


const HeroPage = () => {



    return (
        <div id="hero" className='relative  h-full'> 
          <div className='relative z-[2] overflow-hidden container mx-auto '>
            <div className='pt-[80px] sm:pt-[120px] md:pt-[90px] lg:pt-[120px] xl:pt-[150px] 2xl:pt-[15%] sm:pb-0 pb-[0px] container mx-auto px-[24px] sm:px-0 w-full grid sm:grid-cols-2 grid-cols-1 items-center justify-between'>
              <div>
                  <div className="flex items-start justify-start">
                    
                    <button className="delay-1 hero-anim transingpore relative overflow-hidden px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]
                        py-[5px] lg:py-[6px] xl:py-[7px] 2xl:py-[9.5px]
                        text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]
                      "
                    >
                      professional trading analytics 

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
                  <h2 className='tradines hero-anim delay-2 text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] !text-start mt-[8px] lg:mt-[12px]'>
                     <span >Track Every Trade. </span><br/> <span >Improve Every Week.</span>  
                    </h2>
                    </div>
                  
                <div  className='flex items-end justify-center flex-col'>
                  <div className='flex items-start flex-col justify-center'>
                    
                    <p className='bitstartp hero-anim delay-3 text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px] !text-start md:pt-0 pt-2'>A powerful trading journal and analytics platform built <br className='md:block hidden'/>to help traders identify patterns, reduce mistakes, and <br className='md:block hidden'/> improve consistency.</p>
                    <button className='buttonauditelt hero-anim delay-4 bg-[#608BFE] hover:bg-transparent! group relative  cursor-pointer px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px]
                        py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px]
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
                  </div>
                </div>
            </div>
           <div className="rounded-[60px] shadow-[0px_22px_48px_#608BFE]">
            <img  className='w-full sm:px-0 px-6 mt-[40px] sm:mt-[48px] md:mt-[58px] lg:mt-[74px] xl:mt-[110px] 2xl:mt-[132px] hero-anim delay-5 ' src={righticon} alt='loading..'/>
             </div>
          </div>
          <img className='w-full arrorbg absolute bottom-0 -z-10 hero-anims delay-6 animate-pulse' src={righticona} alt='loading..'/>
        </div>
    );
};

export default HeroPage;