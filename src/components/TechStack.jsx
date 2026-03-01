import { 
  SiPhp, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiJavascript,
  SiMysql,
  SiDart,
  SiLaravel,
  SiTailwindcss,
  SiCodeigniter,
  SiVuedotjs,
  SiFlutter,
  SiMongodb,
  SiFastapi,
  SiOpencv,
  SiSqlite
} from 'react-icons/si';
import { FaChartLine } from 'react-icons/fa';

const TechStack = () => {
  const technologies = [
    { icon: SiPhp, name: "PHP", color: "#777BB4", category: "Language" },
    { icon: SiPython, name: "Python", color: "#3776AB", category: "Language" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26", category: "Language" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6", category: "Language" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", category: "Language" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1", category: "Database" },
    { icon: SiDart, name: "Dart", color: "#0175C2", category: "Language" },
    { icon: SiLaravel, name: "Laravel", color: "#FF2D20", category: "Framework" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4", category: "Framework" },
    { icon: SiCodeigniter, name: "CodeIgniter", color: "#EF4223", category: "Framework" },
    { icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D", category: "Framework" },
    { icon: SiFlutter, name: "Flutter", color: "#02569B", category: "Framework" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248", category: "Database" },
    { icon: FaChartLine, name: "MetaTrader 5", color: "#1C64F2", category: "Tools" },
    { icon: SiFastapi, name: "FastAPI", color: "#009688", category: "Framework" },
    { icon: SiOpencv, name: "OpenCV", color: "#5C3EE8", category: "Library" },
    { icon: SiSqlite, name: "SQLite", color: "#003B57", category: "Database" }
  ];

  return (
    <section id="skills" className="pt-24 2xl:pt-32 pb-16 px-4 md:px-8 bg-neo-yellow">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-10 text-center">
          <div className="flex justify-center">
            <div className="bg-white neo-brutalism-border px-4 py-2 shadow-neo-sm rounded-md inline-block">
              <span className="text-sm font-bold uppercase">My Arsenal</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            TECHNOLOGIES <span className="text-neo-blue">I&apos;VE USE</span>
          </h2>
          <p className="text-sm md:text-base text-gray-800 max-w-2xl mx-auto">
            Tech stack dan tools yang saya gunakan untuk membangun aplikasi web dan mobile
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 md:gap-4">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white neo-brutalism-border shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-hover transition-all rounded-lg p-2 md:p-4 flex flex-col items-center gap-1.5 md:gap-2 group"
            >
              <div className="text-2xl md:text-4xl transition-transform group-hover:scale-110">
                <tech.icon style={{ color: tech.color }} />
              </div>
              <div className="text-center">
                <h3 className="text-[10px] md:text-sm font-bold leading-tight">{tech.name}</h3>
                <span className="text-[8px] md:text-xs text-gray-600">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <div className="bg-white neo-brutalism-border shadow-neo rounded-lg p-4 md:p-5">
            <h3 className="text-lg md:text-xl font-black mb-2 text-neo-blue">Full-stack Development</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Experienced in building complete web applications from frontend to backend using modern frameworks
            </p>
          </div>
          <div className="bg-white neo-brutalism-border shadow-neo rounded-lg p-4 md:p-5">
            <h3 className="text-lg md:text-xl font-black mb-2 text-neo-blue">Mobile Development</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Creating responsive and intuitive mobile applications with Flutter for cross-platform deployment
            </p>
          </div>
          <div className="bg-white neo-brutalism-border shadow-neo rounded-lg p-4 md:p-5">
            <h3 className="text-lg md:text-xl font-black mb-2 text-neo-blue">Data Visualization</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Passionate about creating visual representations of data to optimize public information systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
