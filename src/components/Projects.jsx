import { SiLaravel, SiPhp, SiMysql, SiTailwindcss, SiFlutter, SiDart, SiSqlite, SiVuedotjs, SiFastapi, SiPython, SiOpencv } from 'react-icons/si';
import { FaExternalLinkAlt, FaChartLine } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DINAMIKA Forum",
      subtitle: "Dinasti Mahasiswa Teknik Informatika",
      description: "Pada proyek 1 semester 3, saya membuat website bernama 'DINAMIKA (Dinasti Mahasiswa Teknik Informatika)' website ini dibuat untuk Mahasiswa D3 TI untuk saling bertukar pikiran seputar tugas perkuliahan dan berinteraksi satu sama lain",
      tags: ["Laravel", "PHP", "MySQL"],
      techStack: [
        { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
        { icon: SiPhp, name: "PHP", color: "#777BB4" },
        { icon: SiMysql, name: "MySQL", color: "#4479A1" }
      ],
      link: "#",
      hashtag: "#DinastiMahasiswaTeknikInformatika"
    },
    {
      id: 2,
      title: "Forex Trading Robot",
      subtitle: "Robot Trading",
      description: "Pada proyek 2 semester 5, saya membuat robot trading khusus forex trading yang menggunakan indikator RSI (Relative Strength Index) sebagai pemicu entry nya, robot ini memiliki fitur trading panel dan juga alert notification untuk metatrader 5 mobile",
      tags: ["MetaTrader 5", "MetaEditor", "MQL5"],
      techStack: [
        { icon: FaChartLine, name: "MetaTrader 5", color: "#1C64F2" }
      ],
      link: "#",
      hashtag: "#RobotTrading"
    },
    {
      id: 3,
      title: "E-Aspirasi",
      subtitle: "Web Programming",
      description: "Pada tugas besar web programming saya membuat website E-Aspirasi yang bertujuan untuk mengumpulkan aspirasi masyarakat dan menampilkan data secara transparan laporan masyarakat yang sedang di proses",
      tags: ["PHP", "Tailwind CSS"],
      techStack: [
        { icon: SiPhp, name: "PHP", color: "#777BB4" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" }
      ],
      link: "#",
      hashtag: "#SemuaBerhakDidengar"
    },
    {
      id: 4,
      title: "CV. Batu Usaha Mandiri",
      subtitle: "Company Profile",
      description: "Membuat website company profile CV. BUM yang bergerak di bidang supply material konstruksi.",
      tags: ["HTML", "CSS", "JavaScript"],
      techStack: [
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" }
      ],
      link: "#",
      hashtag: "#CompanyProfile"
    },
    {
      id: 5,
      title: "BelajarJejepangan",
      subtitle: "Web Programming Lanjutan",
      description: "Membuat website latihan/quiz bahasa jepang. Hiragana dan Kanji dengan mode dark/light theme.",
      tags: ["HTML", "CSS", "JavaScript"],
      techStack: [
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" }
      ],
      link: "#",
      hashtag: "#BelajarJepangGratis"
    },
    {
      id: 6,
      title: "Hotelin - Hotel Booking App",
      subtitle: "Mobile Programming",
      description: "Pada tugas besar mobile programming saya membuat aplikasi mobile booking hotel yang bernama hotelin dan aplikasi ini dibangun menggunakan Flutter dengan desain modern dan antarmuka yang intuitif dan tampilan visual yang menarik.",
      tags: ["Flutter", "Dart", "SQLite"],
      techStack: [
        { icon: SiFlutter, name: "Flutter", color: "#02569B" },
        { icon: SiDart, name: "Dart", color: "#0175C2" },
        { icon: SiSqlite, name: "SQLite", color: "#003B57" }
      ],
      link: "#",
      hashtag: "#MobileProgramming"
    },
    {
      id: 7,
      title: "Tabunganku - AI Scanner",
      subtitle: "Pengantar AI",
      description: "Pada matakuliah ini saya membuat aplikasi tabunganku dengan AI pendeteksi nilai uang kertas untuk memudahkan penghitungan saat menabung dan tersimpan di database",
      tags: ["Vue.js", "MySQL", "FastAPI", "Python", "OpenCV"],
      techStack: [
        { icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
        { icon: SiMysql, name: "MySQL", color: "#4479A1" },
        { icon: SiFastapi, name: "FastAPI", color: "#009688" },
        { icon: SiPython, name: "Python", color: "#3776AB" },
        { icon: SiOpencv, name: "OpenCV", color: "#5C3EE8" }
      ],
      link: "#",
      hashtag: "#PengantarAI"
    }
  ];

  return (
    <section id="projects" className="pt-24 2xl:pt-32 pb-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="bg-neo-yellow neo-brutalism-border px-4 py-2 shadow-neo-sm rounded-md inline-block w-fit">
            <span className="text-sm font-bold uppercase">Creative Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            MY <span className="text-neo-blue">PROJECTS</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            Berikut adalah proyek-proyek yang telah saya kerjakan selama masa perkuliahan
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-neo-white neo-brutalism-border shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-hover transition-all rounded-lg overflow-hidden group"
            >
              {/* Project Header */}
              <div className="bg-neo-blue text-white p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-black mb-1">{project.title}</h3>
                    <p className="text-xs opacity-90">{project.subtitle}</p>
                  </div>
                  <div className="bg-white text-neo-blue neo-brutalism-border px-2 py-1 text-xs font-bold rounded">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 flex flex-col gap-3">
                <p className="text-sm text-gray-700 leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.map((tech, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-white neo-brutalism-border px-2 py-1 shadow-neo-sm rounded">
                      <tech.icon style={{ color: tech.color }} className="text-sm" />
                      <span className="text-xs font-bold">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Hashtag */}
                <div className="pt-1">
                  <span className="text-xs text-neo-blue font-bold">{project.hashtag}</span>
                </div>

                {/* View Project Link */}
                <a 
                  href={project.link}
                  className="flex items-center gap-1.5 text-xs font-bold uppercase text-neo-blue hover:underline decoration-2 underline-offset-4 mt-1"
                >
                  View Project <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
