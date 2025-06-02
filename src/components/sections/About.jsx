import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "JavaScript", "TailwindCSS"];
  const backendSkills = ["Node.js", "Python"];
  const databaseskills = ["Firebase","MySql"];
  const otherSkills = ["Git", "Figma","Photoshop"];
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/6127613876-1" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/gpriyan/" },
    { name: "X", url: "https://x.com/gokulpriyan781" },
    { name: "Instagram", url: "https://www.instagram.com/itz_gokul_cbg/?hl=en" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web applications and creating innovative solutions.
            </p>

            {/* Frontend & Backend Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span key={key} className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span key={key} className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Skills & Social Links - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Other Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">DBMS</h3>
                <div className="flex flex-wrap gap-2">
                  {databaseskills.map((tech, key) => (
                    <span key={key} className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
                 
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Other Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((other, key) => (
                    <span key={key} className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 transition">
                      {other}
                    </span>
                  ))}
                </div>
              </div>
              {/* Social Links
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Social Links</h3>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social, key) => (
                    <a
                      key={key}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 transition"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Education & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Education */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>B.Tech Information Technology</strong>
                    <br /> Thiagarajar College of Engineering (2022-2026)
                  </li>
                  <li>Relevant Coursework: Data Structures, Web Development, Cloud Computing...</li>
                </ul>
              </div>

              {/* Achievements */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Achievements</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-bold">Hackathon Winner</h4>
                    <p>Won second place in NeoHacks for building a smart AI-based E-Learning Platform.</p>
                  </div>

                  <div>
                    <h4 className="font-bold">Hackathon Winner</h4>
                    <p>Won First place in Infinix'25 for building a E-Learning Platform.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Photography</h4>
                    <p>Won First in Yugam'25 Photography Conteset</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
