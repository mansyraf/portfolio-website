import { useState } from "react";
import profilePic from "./assets/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";

// Example placeholders (you already said you have images)
// Replace filenames with your real ones
import ai1 from "./assets/ai-repair-1.jpg";
import ai2 from "./assets/ai-repair-2.jpg";
import cane1 from "./assets/cane-1.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className={
        darkMode
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
          : "bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-800"
      }>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 dark:bg-slate-950/70 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-6xl mx-auto">

          {/* LOGO */}
          <h1 className="text-xl font-bold text-blue-600">
            Aiman Asyraaf
          </h1>

          {/* LINKS */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-slate-700 dark:text-slate-200 hover:text-blue-500 transition font-medium">
              About
            </a>

            <a href="#skills" className="text-slate-700 dark:text-slate-200 hover:text-blue-500 transition font-medium">
              Skills
            </a>

            <a href="#projects" className="text-slate-700 dark:text-slate-200 hover:text-blue-500 transition font-medium">
              Projects
            </a>

            <a href="#contact" className="text-slate-700 dark:text-slate-200 hover:text-blue-500 transition font-medium">
              Contact
            </a>

            {/* DARK MODE TOGGLE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 border rounded-md text-xs hover:bg-slate-100 dark:hover:bg-slate-500 transition"
            >
              {darkMode ? "Light ☀️" : "Dark 🌙"}
            </button>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section data-aos="fade-up" className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-24">

        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold">
            Hi, I'm <span className="text-blue-500">Aiman Asyraaf</span>
          </h1>

          <p className="text-xl opacity-80">
            Final-Year Computer Science Student (Netcentric Computing)
          </p>

          <p className="opacity-70">
            Passionate about Mobile Apps, Networking, Web and IoT systems.
            Actively seeking internship opportunities.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              View Projects
            </a>

            <a
              href="/Aiman_Asyraaf_Resume.pdf"
              className="border px-5 py-2 rounded-lg"
              target="_blank"
            >
              Personal Resume
            </a>
          </div>
        </div>
        
        <img
          src={profilePic}
          className="w-72 h-72 object-contain rounded-full shadow-lg mt-10 md:mt-0 bg-slate-100 dark:bg-slate-800 p-2"
        />
      </section>

      <div className="h-px bg-slate-200 dark:bg-slate-800 mx-10" />

      {/* ABOUT */}
      <section data-aos="fade-up" id="about" className="max-w-5xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-md border rounded-2xl p-8 shadow-sm">
        <p className="opacity-80 leading-8">
          Computer Science undergraduate specializing in Netcentric Computing with practical experience in network installation,
          configuration and technical troubleshooting. Skilled in software and mobile application development using Flutter and Firebase
          as well as IoT system development using ESP8266 and GPS technologies. Passionate about networking, software engineering
          and IT infrastructure with a strong desire to contribute to innovative technology solutions. 
        </p>
        </div>
      </section>

      <div className="h-px bg-slate-200 dark:bg-slate-800 mx-10" />

      {/* SKILLS */}
      <section data-aos="fade-up" id="skills" className="max-w-5xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
          Skills
        </h2>

        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-md border rounded-2xl p-8 shadow-sm">

          {/* CENTERED FLEX GRID */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Flutter",
              "Dart",
              "Firebase",
              "Java",
              "C++",
              "Ruby on Rails",
              "ESP8266 & IoT Dev",
              "Git",
              "MySQL",
              "Network Troubleshooting",
              "Switch & Router Configuration",
            ].map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm border bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-200 shadow-sm hover:scale-105 transition"
              >
                {s}
              </span>
            ))}
          </div>

        </div>
      </section>

      <div className="h-px bg-slate-200 dark:bg-slate-800 mx-10" />

      {/* PROJECTS */}
      <section data-aos="fade-up" id="projects" className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* AI REPAIR */}
          <div className="group bg-white dark:bg-slate-900 border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

            <div className="overflow-hidden">
              <img
                src={ai1}
                className="w-full h-[420px] object-contain bg-slate-100 dark:bg-slate-800 p-4"
              />
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-blue-600">
                AI Repair Assistant
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300">
                AI-powered mobile app for diagnosing appliance issues,
                providing repair guidance, technician search and geolocation support.
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Flutter", "Firebase", "OpenAI", "GPS"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 hover:scale-[1.02] transition duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* CANE */}
          <div className="group bg-white dark:bg-slate-900 border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

            <div className="overflow-hidden">
              <img
                src={cane1}
                className="w-full h-[420px] object-contain bg-slate-100 dark:bg-slate-800 p-4"
              />
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-blue-600">
                Smart Navigation Cane
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300">
                IoT assistive device using ESP8266 with GPS tracking,
                obstacle detection, and emergency caregiver alerts via Blynk.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["ESP8266", "GPS", "Blynk", "IoT"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 hover:scale-[1.02] transition duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      <div className="h-px bg-slate-200 dark:bg-slate-800 mx-10" />

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>

        <div className="space-y-2 opacity-80">
          <p>
            Email:
            <a
              className="text-blue-600 ml-2"
              href="mailto:aimanasyraaf135@gmail.com"
              target="_blank"
            >
              aimanasyraaf135@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:
            <a
              className="text-blue-600 ml-2"
              href="https://linkedin.com/in/aimanasyraaf"
              target="_blank"
            >
              linkedin.com/in/aimanasyraaf
            </a>
          </p>
          <p>Github:
            <a
              className="text-blue-600 ml-2"
              href="https://github.com/mansyraf/"
              target="_blank"
            >
              github.com/mansyraf
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 opacity-60 text-sm">
        © 2026 Aiman Asyraaf
      </footer>

    </div>
  );
}

export default App;