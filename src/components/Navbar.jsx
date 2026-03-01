import { useState } from 'react';
import { FaCode } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 2xl:px-12 flex justify-center w-full">
      <header className="bg-neo-white neo-brutalism-border shadow-neo flex w-full max-w-6xl 2xl:max-w-screen-xl items-center justify-between rounded-lg px-4 md:px-6 2xl:px-10 py-2 2xl:py-3">
        <div className="flex items-center gap-2">
          <div className="bg-neo-blue text-white w-7 h-7 2xl:w-10 2xl:h-10 flex items-center justify-center neo-brutalism-border shadow-neo-sm rounded-sm">
            <FaCode className="text-xs md:text-sm 2xl:text-lg font-bold" />
          </div>
          <h2 className="text-lg md:text-xl 2xl:text-3xl font-black uppercase tracking-tight">MYA</h2>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 2xl:gap-12">
          <nav className="flex gap-4 lg:gap-6 2xl:gap-10">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-xs lg:text-sm 2xl:text-lg font-bold uppercase hover:underline decoration-4 decoration-neo-blue underline-offset-4"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-xs lg:text-sm 2xl:text-lg font-bold uppercase hover:underline decoration-4 decoration-neo-blue underline-offset-4"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-xs lg:text-sm 2xl:text-lg font-bold uppercase hover:underline decoration-4 decoration-neo-blue underline-offset-4"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-xs lg:text-sm 2xl:text-lg font-bold uppercase hover:underline decoration-4 decoration-neo-blue underline-offset-4"
            >
              Contact
            </button>
          </nav>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-neo-blue text-white text-xs md:text-sm 2xl:text-lg font-bold uppercase px-4 md:px-6 2xl:px-10 py-2 2xl:py-3 neo-brutalism-border shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-hover transition-all rounded-md"
          >
            Let&apos;s Talk
          </button>
        </div>
        
        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-1 neo-brutalism-border bg-white shadow-neo-sm rounded active:translate-y-1 active:shadow-none"
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </header>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-neo-white neo-brutalism-border shadow-neo rounded-lg p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-bold uppercase hover:underline decoration-4 decoration-neo-blue underline-offset-4 text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-sm font-bold uppercase hover:underline decoration-4 decoration-neo-blue underline-offset-4 text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-sm font-bold uppercase hover:underline decoration-4 decoration-neo-blue underline-offset-4 text-left"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-bold uppercase hover:underline decoration-4 decoration-neo-blue underline-offset-4 text-left"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
