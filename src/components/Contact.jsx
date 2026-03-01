import { FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Contact = () => {
  return (
    <section id="contact" className="pt-24 2xl:pt-32 pb-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-8 md:mb-12 text-center">
          <div className="flex justify-center">
            <div className="bg-neo-yellow neo-brutalism-border px-4 py-2 shadow-neo-sm rounded-md inline-block">
              <span className="text-sm font-bold uppercase">Get In Touch</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            MY <span className="text-neo-blue">CONTACT</span>
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto px-2">
            Let&apos;s collaborate and create something amazing together!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {/* GitHub */}
          <a 
            href="https://github.com/yashiru0118"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neo-white neo-brutalism-border shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-hover transition-all rounded-lg p-4 md:p-6 flex items-start gap-3 md:gap-4 group"
          >
            <div className="bg-neo-blue text-white p-3 md:p-4 neo-brutalism-border shadow-neo-sm rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
              <FaGithub className="text-2xl md:text-3xl" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-black mb-1">GITHUB</h3>
              <p className="text-gray-700 font-mono text-xs md:text-sm break-all">github.com/yashiru0118</p>
            </div>
          </a>

          {/* Email */}
          <a 
            href="mailto:muhyasir299@gmail.com"
            className="bg-neo-white neo-brutalism-border shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-hover transition-all rounded-lg p-4 md:p-6 flex items-start gap-3 md:gap-4 group"
          >
            <div className="bg-neo-blue text-white p-3 md:p-4 neo-brutalism-border shadow-neo-sm rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
              <MdEmail className="text-2xl md:text-3xl" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-black mb-1">EMAIL ADDRESS</h3>
              <p className="text-gray-700 text-xs md:text-sm break-all">muhyasir299@gmail.com</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/6289935388811"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neo-white neo-brutalism-border shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-hover transition-all rounded-lg p-4 md:p-6 flex items-start gap-3 md:gap-4 group"
          >
            <div className="bg-neo-blue text-white p-3 md:p-4 neo-brutalism-border shadow-neo-sm rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
              <FaWhatsapp className="text-2xl md:text-3xl" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-black mb-1">PHONE NUMBER</h3>
              <p className="text-gray-700 text-xs md:text-sm">08993538811 (WhatsApp)</p>
            </div>
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com/yashiru.13"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neo-white neo-brutalism-border shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-hover transition-all rounded-lg p-4 md:p-6 flex items-start gap-3 md:gap-4 group"
          >
            <div className="bg-neo-blue text-white p-3 md:p-4 neo-brutalism-border shadow-neo-sm rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
              <FaInstagram className="text-2xl md:text-3xl" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-black mb-1">SOCIAL MEDIA</h3>
              <p className="text-gray-700 text-xs md:text-sm">@yashiru.13 (Instagram)</p>
            </div>
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-8 md:mt-12 bg-neo-yellow neo-brutalism-border shadow-neo rounded-lg p-4 md:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
            <div className="bg-white p-3 md:p-4 neo-brutalism-border shadow-neo-sm rounded-lg flex-shrink-0">
              <MdLocationOn className="text-3xl md:text-4xl text-neo-blue" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-2xl font-black mb-2">CURRENT STATUS</h3>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                <span className="font-bold">General Secretary of HIMATIF</span> at Universitas Logistik dan Bisnis Internasional (ULBI)
                <br />
                5th-semester D3 Informatics Engineering Student with GPA 3.81
                <br />
                <span className="font-bold text-neo-blue">Available for Freelance & Collaboration</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
