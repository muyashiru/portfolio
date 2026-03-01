import { FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <section id="about" className="pt-14 pb-2 px-3 md:px-6 xl:px-8 2xl:px-12 relative min-h-screen flex items-center">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[150%] bg-neo-blue/10 -skew-x-12 border-l-4 border-neo-black"></div>
      </div>
      
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto relative z-10 w-full">
        {/* Main Content Frame */}
        <div className="bg-white border-2 md:border-4 border-neo-black p-0.5 md:p-1 shadow-neo-lg rotate-1">
          <div className="border-2 border-neo-black p-1.5 md:p-4 2xl:p-8 bg-white relative">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 w-full flex justify-between px-2 md:px-4 2xl:px-6 py-1 2xl:py-2 border-b-2 border-neo-black bg-gray-100">
              <div className="flex gap-2 font-mono text-[9px] md:text-[10px] 2xl:text-sm font-bold text-neo-black">
                <span>VOL. 1</span>
                <span>NO. 1</span>
              </div>
              <div className="font-mono text-[9px] md:text-[10px] 2xl:text-sm font-bold text-neo-black hidden sm:block">
                FULL STACK APPROVED AUTHORITY
              </div>
              <div className="font-mono text-[9px] md:text-[10px] 2xl:text-sm font-bold text-neo-black">
                $priceless
              </div>
            </div>
            
            <div className="mt-3 md:mt-5 2xl:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-1.5 md:gap-3 2xl:gap-6 items-center">
              {/* Left Column - Text Content */}
              <div className="lg:col-span-7 flex flex-col gap-2 md:gap-3 2xl:gap-5 relative -mt-1 md:-mt-3">
                {/* Decorative blob behind everything */}
                <div className="absolute top-[55%] left-[42%] -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[520px] md:h-[520px] lg:w-[610px] lg:h-[610px] 2xl:w-[760px] 2xl:h-[760px] opacity-20 z-0">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M42.7,-62.9C50.9,-52.8,49.3,-34.4,52.3,-19.1C55.4,-3.8,63.1,8.4,60.8,19.3C58.5,30.2,46.1,39.9,34.1,48.5C22.1,57.1,10.5,64.7,-2.4,68C-15.3,71.3,-31.1,70.4,-41.8,61.2C-52.5,52,-58.1,34.6,-61.7,17.4C-65.3,0.2,-66.9,-16.8,-59.4,-29.4C-51.9,-42,-35.3,-50.2,-21.1,-56.3C-6.9,-62.4,4.9,-66.4,18.4,-67.2C31.9,-68,47.1,-65.6,42.7,-62.9Z" fill="#f42525" transform="translate(100 100)" />
                  </svg>
                </div>
                
                {/* Badge */}
                <div className="inline-flex self-start -rotate-2 relative z-20">
                  <span className="bg-neo-yellow border-2 border-neo-black px-1.5 py-0.5 md:px-2 md:py-1 2xl:px-3 2xl:py-1.5 text-[8px] md:text-[10px] 2xl:text-sm font-black tracking-widest uppercase shadow-neo-sm">
                    WORLD PREMIERE!
                  </span>
                </div>
                
                {/* Main Headline with Comic Style */}
                <div className="relative z-20">
                  <h1 className="font-comic text-2xl sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl leading-[0.9] tracking-wide">
                    <span className="block text-neo-black text-stroke-white" style={{
                      textShadow: '2px 2px 0px rgba(0,0,0,1)'
                    }}>HI! I&apos;M</span>
                    <span className="block text-comic-red text-stroke-white" style={{
                      textShadow: '2px 2px 0px rgba(0,0,0,1)'
                    }}>MUHAMMAD YASIR</span>
                    <span className="block text-neo-blue text-stroke-white" style={{
                      textShadow: '2px 2px 0px rgba(0,0,0,1)'
                    }}>ARAFAT</span>
                  </h1>
                </div>
                
                {/* Subtext Box */}
                <div className="bg-white border-2 border-neo-black p-1 md:p-2 2xl:p-4 shadow-neo max-w-md 2xl:max-w-xl transform -rotate-1 relative z-20">
                  <p className="font-bold text-[9px] md:text-xs 2xl:text-base leading-tight text-neo-black">
                    <span className="text-comic-red">Vibe Coding Enthusiast</span> & Full-Stack Developer turning caffeine into clean code and pixel-perfect chaos.


                  </p>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 2xl:gap-3 pt-1 md:pt-1.5 relative z-20">
                  <a 
                    href="#contact"
                    className="relative group cursor-pointer inline-block"
                  >
                    <div className="bg-gradient-to-br from-yellow-300 to-neo-yellow border-2 border-neo-black px-2 py-0.5 md:px-2.5 md:py-1 2xl:px-5 2xl:py-2.5 shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-hover transition-all">
                      <span className="font-comic text-xs md:text-sm 2xl:text-xl text-neo-black tracking-wider leading-none -rotate-3 block">
                        REACH ME OUT!
                      </span>
                    </div>
                  </a>
                  
                  <a 
                    href="#projects"
                    className="relative group cursor-pointer inline-block"
                  >
                    <div className="bg-neo-blue border-2 border-neo-black px-2 py-0.5 md:px-2.5 md:py-1 2xl:px-5 2xl:py-2.5 shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-hover transition-all">
                      <span className="font-comic text-xs md:text-sm 2xl:text-xl text-white tracking-wider leading-none -rotate-3 block">
                        VIEW PROJECTS
                      </span>
                    </div>
                  </a>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-1.5 md:gap-2 2xl:gap-3 pt-1 md:pt-1.5 relative z-20">
                  <a 
                    href="https://github.com/yashiru0118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white neo-brutalism-border p-1 md:p-1.5 2xl:p-3 shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  >
                    <FaGithub className="text-xs md:text-sm 2xl:text-xl" />
                  </a>
                  <a 
                    href="mailto:muhyasir299@gmail.com"
                    className="bg-white neo-brutalism-border p-1 md:p-1.5 2xl:p-3 shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  >
                    <MdEmail className="text-xs md:text-sm 2xl:text-xl" />
                  </a>
                  <a 
                    href="https://wa.me/6289935388811"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white neo-brutalism-border p-1 md:p-1.5 2xl:p-3 shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  >
                    <FaWhatsapp className="text-xs md:text-sm 2xl:text-xl" />
                  </a>
                  <a 
                    href="https://instagram.com/yashiru.13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white neo-brutalism-border p-1 md:p-1.5 2xl:p-3 shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  >
                    <FaInstagram className="text-xs md:text-sm 2xl:text-xl" />
                  </a>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="lg:col-span-5 relative h-full min-h-[220px] md:min-h-[315px] 2xl:min-h-[400px] flex items-end justify-center">
                {/* Panel Background */}
                <div className="absolute bottom-0 w-full max-w-[180px] md:max-w-[320px] 2xl:max-w-md aspect-[3/4] bg-neo-blue border-3 md:border-4 border-neo-black transform rotate-2 z-10 opacity-20"></div>
                
                {/* Hero Image Box */}
                <div className="relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-105 origin-bottom">
                  {/* Star decoration */}
                  <div className="absolute -top-4 -right-4 w-14 h-14 md:w-24 md:h-24 2xl:w-32 2xl:h-32 text-neo-yellow animate-[pulse_1s_ease-in-out_infinite]">
                    <svg fill="currentColor" viewBox="0 0 100 100">
                      <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z"></path>
                    </svg>
                  </div>
                  
                  {/* Outer Border Frame */}
                  <div className="w-full max-w-[180px] md:max-w-[320px] 2xl:max-w-md bg-[#fffef0] border-[3px] border-neo-black shadow-neo-lg p-1">
                    {/* Inner Dashed Border */}
                    <div className="border-[3px] border-dashed border-neo-black p-1 aspect-[3/4] overflow-hidden">
                      <img 
                        src="/me.png" 
                        alt="Muhammad Yasir Arafat" 
                        className="w-full h-full object-cover object-[center_10%]"
                      />
                    </div>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute -bottom-2 -left-2 bg-white border-3 md:border-4 border-neo-black rounded-full p-1.5 md:p-2 2xl:p-4 w-12 h-12 md:w-16 md:h-16 2xl:w-24 2xl:h-24 flex items-center justify-center rotate-12 shadow-neo">
                    <div className="text-center font-comic leading-none">
                      <span className="block text-[6px] md:text-[8px] 2xl:text-xs">Rated</span>
                      <span className="block text-base md:text-xl 2xl:text-3xl text-comic-red">A+</span>
                      <span className="block text-[6px] md:text-[8px] 2xl:text-xs">Code</span>
                    </div>
                  </div>
                  
                  {/* GPA Badge */}
                  <div className="absolute top-1 right-3 md:top-2 md:right-0 bg-neo-yellow neo-brutalism-border px-1.5 py-0.5 md:px-2.5 md:py-0.5 2xl:px-4 2xl:py-2 shadow-neo-sm rotate-6">
                    <span className="text-[8px] md:text-[10px] 2xl:text-sm font-bold">GPA 3.83</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
