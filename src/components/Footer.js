'use client'


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect, useRef, useState } from 'react';
import backgroundimageawsta from "../assets/Frame 1321319039.png";
import logo from "../assets/TradeJournal.png";


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
  
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
      ) {
        setToggle(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const handleScroll = (e, sectionId) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 50,
          behavior: "smooth",
        });
        setToggle(false);
      }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      // Example of animating elements when they come into view
      gsap.fromTo('.feature', 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.feature',
            start: 'top 100%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
  
      // Example of animating the button with scale and opacity
      gsap.fromTo('.buttonaudit-3', 
        { opacity: 0, scale: 0.8 }, 
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'ease-in-out',
          scrollTrigger: {
            trigger: '.buttonaudit-3',
            start: 'top 100%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
    }, []);
  
    const [isTranslated, setIsTranslated] = useState(false);
  
    const handleClick = () => {
      setIsTranslated(true);
      setTimeout(() => {
        setIsTranslated(false);
      }, 200);
    };


    const iconRefs = useRef([]);

  useEffect(() => {
    // GSAP entrance animation for icons
    gsap.fromTo(
      iconRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, []);

  // Handle hover animation with GSAP
  const handleMouseEnter = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1.2,
      rotate: 10,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };


    return (
        <div id='Support' className='footersvg relative pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[84px] '>
          <img className='h-fit absolute bottom-0 left-0 animate-pulse -z-10' src={backgroundimageawsta} alt='backgroundLoading...'/>
            <div className='w-full flex flex-col justify-between gap-[44px] px-6 sm:px-0 sm:gap-0 sm:grid grid-cols-2 container mx-auto'>
              <div className='flex items-start justify-start flex-col'>
                <a href='/' className='cursor-pointer flex items-center justify-start Froggo-Logo'>
                <img className='w-auto h-[21px] sm:h-[24px] 2xl:h-[28px]' src={logo} alt=''/></a>
                <p className='bitstartp text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] pt-[7px] lg:pt-[10px]'>The modern trading journal built for performance.</p>
              </div>
              <div className=' flex items-start justify-start sm:justify-end gap-[24px] sm:gap-[32px] md:gap-[36px] lg:gap-[40px] xl:gap-[48px] 2xl:gap-[64px]'>

                <div>
                  <h2 className='conadcsteraagara text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>About Us</h2>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px]" href="#Features">
                    Features</a>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]" href="#Howitworksl">
                    How it works</a>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]" href="#FAQ">
                    FAQ</a>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]" href="#Contact">
                    Contact</a>
                </div>

                <div>
                  <h2 className='conadcsteraagara text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Legal</h2>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px]" href="#Terms of service">
                    Terms of service</a>
                    <a className="cursor-pointer Link-manu-bar flex items-start !p-0 group relative mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]" href="#Privacy policy">
                    Privacy policy</a>
                </div>
              </div>
            </div>
            <p className='bitstartp text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] py-[14px] sm:py-[15px] md:py-[16px] lg:py-[20px] xl:py-[24px] 2xl:py-[32px]'>© 2026 TradeJournal. All rights reserved.</p>
        </div>
    );
};

export default Footer;