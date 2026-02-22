import gsap from "gsap";
import { useEffect, useRef, useState } from 'react';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from '../assets/logo.png';
import { LazyLoadImage } from "react-lazy-load-image-component";


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false); 
    const [isVisible, setIsVisible] = useState(true); 
    const [prevScrollPos, setPrevScrollPos] = useState(0); 
    const [, setActiveSection] = useState("");
    const [, setIsScrolling] = useState(false);


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
            if (!section) return;
            setIsScrolling(true);  

            const headerOffset = 80; // navbar height (adjust if needed)
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            setToggle(false);
            setActiveSection(sectionId);
            };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            if (currentScrollPos < 50) {
                setIsVisible(true);
            } else if (currentScrollPos > prevScrollPos) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }   

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const handleScrollToTop   = (e, targetId) => {
        e.preventDefault();
        if (targetId === "") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      


      useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

 const gradientRef = useRef(null);

  useEffect(() => {
    gsap.to(gradientRef.current, {
      rotate: 360,
      duration: 6,
      ease: "linear",
      repeat: -1,
    });
  }, []);

    return (
        <div className={` header ${scrolled ? "scrolled" : " "}  w-full header backgronsdvg   ${
            isVisible ? "translate-y-0 transition-transform duration-300" : "-translate-y-full transition-transform duration-300 borderingthisheadiner"
        }`}>
            
        <header className='border-b-[#1F1D35] border-b-[1px] py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] px-4 sm:px-0'>  
            <div className='sm:px-[36px] md:px-[40px] lg:px-[48px] xl:px-[64px] 2xl:px-[100px]  flex justify-between items-center relative  sm:overflow-hidden '>
            {/* <dev className='linersext absolute bottom-0 left-0 w-full h-[2px] z-10'></dev> */}
            <button onClick={(e) => handleScrollToTop(e, "")} className='cursor-pointer flex items-center justify-start Froggo-Logo sm:py-0 py-2'>
                <LazyLoadImage className='w-full h-[14px] sm:h-[12px] md:h-[12px] lg:h-[16px] 2xl:h-[17px]' src={logo} alt=''/></button>
                <div className='sm:hidden relative top-[-11px] -left-6'>   
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>

                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:left-0 sm:relative duration-1000 z-[999] sm:opacity-100 flex justif-start sm:justify-start items-start sm:items-center sm:bg-transparent bg-[#15161B] sm:flex-row flex-col p-[20px] sm:p-[0] sm:w-fit w-full h-screen sm:h-full 
                    ${toggle ? 'left-[0]' :'left-[120%]' }  sm:gap-0 gap-2.5
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <a className="cursor-pointer Link-manu-bar  flex items-center group relative" href="#Features" onClick={(e) => handleScroll(e, "Features")}>
                    Features
                    </a>

                    <a className="cursor-pointer Link-manu-bar flex items-center group relative" href="#Analytics" onClick={(e) => handleScroll(e, "Analytics")}>
                    Analytics </a>

                    <a className="cursor-pointer Link-manu-bar flex items-center group relative" href="#Strategies" onClick={(e) => handleScroll(e, "Strategies")}>
                    Strategies</a>
                    
                    <a className="cursor-pointer Link-manu-bar flex items-center group relative " href="#Pricing" onClick={(e) => handleScroll(e, "Pricing")}>
                    Pricing</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px] group relative " href="#Reviews" onClick={(e) => handleScroll(e, "Reviewse")}>
                    Reviews
                    </a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px] group relative " href="#FAQ" onClick={(e) => handleScroll(e, "FAQ")}>
                    FAQ
                    </a>

                    <ul className='sm:hidden flex items-center justify-center gap-4 py-[7px] sm:py-0'>
                    <button className='loginarohteaws text-[10px] sm:text-[11px] md:text-[11px] lg:text-[13px] xl:text-[14px] x-[11px] sm:px-[12px] md:px-[13px] lg:px-[14px] xl:px-[15px] 2xl:px-[16px] py-[5px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] cursor-pointer'>Login</button>
                        <button className='buttonauditelt relative  cursor-pointer px-[11px] sm:px-[10px] md:px-[13px] lg:px-[14px] xl:px-[15px] 2xl:px-[16px]
                        py-[5px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px]
                        text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] group gap-[7.50px]'>
                            Get Started Free
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
                    </ul>
                </nav>
                
                <ul className='sm:flex items-center justify-center  hidden gap-4 sm:py-0'>
                    <button className='loginarohteaws text-[10px] sm:text-[10px] md:text-[11px] lg:text-[13px] xl:text-[14px] x-[11px] sm:px-[10px] md:px-[13px] lg:px-[14px] xl:px-[15px] 2xl:px-[16px] py-[5px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] cursor-pointer'>Login</button>
                        <button className='buttonauditelt relative  cursor-pointer px-[11px] sm:px-[10px] md:px-[13px] lg:px-[14px] xl:px-[15px] 2xl:px-[16px]
                        py-[5px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px]
                        text-[10px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] group gap-[7.50px]'>
                            Get Started Free
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
                </ul>
                
                </div>
            </header>

            <div className='navbarunderborder'></div>
        </div>
    );
};

export default NavBar;