const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neo-black text-white py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-neo-blue text-white w-8 h-8 flex items-center justify-center neo-brutalism-border shadow-neo-sm rounded-sm">
              <span className="font-bold text-sm">MYA</span>
            </div>
            <p className="text-sm">
              © {currentYear} Muhammad Yasir Arafat. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4 text-sm">
            <a href="#about" className="hover:text-neo-yellow transition-colors">About</a>
            <a href="#projects" className="hover:text-neo-yellow transition-colors">Projects</a>
            <a href="#skills" className="hover:text-neo-yellow transition-colors">Skills</a>
            <a href="#contact" className="hover:text-neo-yellow transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-400">
          <p>Built with React + Vite + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
