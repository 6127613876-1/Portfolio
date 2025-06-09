import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">E-Learning Platform</h3>
              <p className="text-gray-400 mb-4">
              Developed an AI-powered e-learning platform that generates course content from YouTube transcripts, providing automated summaries, quizzes, and key insights for enhanced learning.              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Python", "Flask", "Gemini","Youtube Api"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://www.e-learning.gokulcb.com/"
                  target="blank"
                  className="text-pink-400 hover:text-pink-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

<div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-pink-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Conclave Web Application</h3>
              <p className="text-gray-400 mb-4">
              Developed a dynamic Conclave web application for college events
               featuring real-time event updates, admin management panel.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Firebase", "TailWindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-pink-500/10 text-pink-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-pink-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <br/>
              <div className="flex justify-between items-center ">
                <a
                  href="https://conclave.gokulcb.com/"
                  target="blank"
                  className="text-pink-400 hover:text-pink-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-pink-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">SBW Trust</h3>
              <p className="text-gray-400 mb-4">
               SBW Trust, a non-profit organization dedicated to education and empowerment.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JS", "Bootstrap"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-pink-500/10 text-pink-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-pink-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.sbwtrust.org/"
                  target="blank"
                  className="text-pink-400 hover:text-pink-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-pink-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Portfolio</h3>
              <p className="text-gray-400 mb-4">
              Developed a personal portfolio showcasing projects, skills, and achievements with an interactive design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailWindCSS", "Emailjs"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-pink-500/10 text-pink-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-pink-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.portfolio.gokulcb.com/"
                  target="blank"
                  className="text-pink-400 hover:text-pink-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
