import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import numbeingss from '../assets/Frame 1321318957.png';
import numbeings1 from '../assets/Group 2087329730.png';
import numbeings2 from '../assets/Group 2087329731.png';
import backgroudimage from '../assets/image5.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

gsap.registerPlugin(ScrollTrigger);

const Pagetwo = () => {
  const wrapperRef = useRef(null);
  const gridItem1Ref = useRef(null);
  const titleRef = useRef(null);
  const itemRefs = useRef([]);
  const imageRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({});
  const buttonRefs = useRef([]);
  const containerRef = useRef(null);

  const buttons = ['DASHBOARD PREVIEW', 'Analytics & Reports', 'Journal & Strategies'];
  
  // তোমার 3টা image এর array - এখানে তোমার actual images দাও
  const images = [
    numbeingss,      // DASHBOARD PREVIEW
    numbeings1,      // Analytics & Reports - তোমার actual image path দাও
    numbeings2       // Journal & Strategies - তোমার actual image path দাও
  ];

  const updateSlider = (index) => {
    const button = buttonRefs.current[index];
    const container = containerRef.current;
    if (!button || !container) return;

    const btnRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setSliderStyle({
      width: `${btnRect.width}px`,
      left: `${btnRect.left - containerRect.left}px`,
      height: `${btnRect.height}px`,
    });
  };

  const handleTabChange = (index) => {
    setActiveIndex(index);
    
    // Image fade out → fade in with scale animation
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(imageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });
    }
  };

  useEffect(() => {
    updateSlider(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // SECTION LIFT
        gsap.fromTo(
          wrapperRef.current,
          { y: 150, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top 90%",
              end: "top 80%",
              scrub: 1.2,
            },
          }
        );

        // TITLE RISE
        gsap.fromTo(
          titleRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              end: "top 80%",
              scrub: 1,
            },
          }
        );

        // BUTTONS STAGGER
        gsap.fromTo(
          buttonRefs.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 95%",
              end: "top 80%",
              scrub: 1,
            },
          }
        );

        // IMAGE CINEMATIC REVEAL
        gsap.fromTo(
          gridItem1Ref.current,
          { y: 200, scale: 1.08, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: gridItem1Ref.current,
              start: "top 95%",
              end: "top 80%",
              scrub: 1.5,
            },
          }
        );
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isMobile } = context.conditions;

        if (isMobile) return;

        itemRefs.current.forEach((el, index) => {
          if (!el) return;

          gsap.fromTo(
            el,
            {
              autoAlpha: 0,
              y: 50,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 100%',
                toggleActions: 'play none none none',
              },
              delay: index * 0.1,
            }
          );
        });
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div id='Analytics' ref={wrapperRef} className='pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[96px] 2xl:pt-[120px] px-6 sm:px-0 relative'>
      <LazyLoadImage className='w-full absolute top-0 -z-10' src={backgroudimage} alt='Loading...'/>
      
      <div className='container mx-auto relative z-10'>
        <div className='grid grid-cols-1 justify-center items-center gap-[32px] sm:gap-[36px] md:gap-[40px] lg:gap-[48px] xl:gap-[64px] 2xl:gap-[78px]'>
          <div>
            <div className="flex items-center justify-center">
              <button className="transingpore relative overflow-hidden 
                px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]
                py-[5px] lg:py-[6px] xl:py-[7px] 2xl:py-[9.5px]
                text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]">
                DASHBOARD PREVIEW
                <div className="
                  absolute inset-0 h-full w-full animate-gradient
                  bg-[conic-gradient(from_-2deg_at_10.04%_60.48%,rgba(255,255,255,0)_15.49deg,#ffffff_360deg)]
                  bg-[length:var(--bg-size)_100%]   
                  [border-radius:inherit]
                  [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                  ![mask-composite:subtract] 
                  p-[1px]" 
                />
              </button>
            </div>

            <div className='flex items-center justify-center flex-col pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>
              <div className='flex items-start flex-col justify-start pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[64px]'>
                <h2 ref={titleRef} className='tradines text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[62px] items-center'>
                  <span>See your trading performance clearly.</span>  
                </h2>
              </div>
              
              {/* Tab Slider */}
              <span ref={containerRef} className='DashboardOverview relative flex justify-between sm:inline-flex p-1 w-full'>
                <div
                  className='absolute top-1/2 -translate-y-1/2 bg-[#608BFE] rounded-[50px] -z-10 transition-all duration-300 ease-in-out'
                  style={sliderStyle}
                /> 

                {buttons.map((label, index) => (  
                  <button
                    key={index}
                    ref={(el) => (buttonRefs.current[index] = el)} 
                    onClick={() => handleTabChange(index)} 
                    className={`transingpore relative overflow-hidden 
                      px-[8px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[20px]
                      py-[5px] lg:py-[6px] xl:py-[7px] 2xl:py-[9.5px] cursor-pointer
                      text-[5.6px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]
                      transition-colors duration-300
                      ${activeIndex === index ? 'text-white' : 'text-gray-400'}`}>
                    {label} 
                  </button>
                ))}
              </span>
            </div> 
          </div>

          {/* Dynamic Image Container */}
          <div ref={gridItem1Ref} className="relative">
            <LazyLoadImage 
              ref={imageRef}
              className='w-full relative' 
              src={images[activeIndex]} 
              alt={`${buttons[activeIndex]} preview`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagetwo;