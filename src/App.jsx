import { useState } from "react";
import profilePic from "./assets/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import rack1 from "./assets/rack1.jpg";

// Example placeholders (you already said you have images)
// Replace filenames with your real ones
import ai1 from "./assets/ai-repair-1.jpg";
import ai2 from "./assets/ai-repair-2.jpg";
import ai3 from "./assets/ai-repair-3.jpg";
import cane1 from "./assets/cane-1.jpg";
import cane2 from "./assets/cane-2.jpg";
import cane3 from "./assets/cane-3.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const aiImages = [ai1, ai2, ai3];
  const caneImages = [cane1, cane2, cane3];

  const [selectedAiImage, setSelectedAiImage] = useState(ai1);
  const [selectedCaneImage, setSelectedCaneImage] = useState(cane1);

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
            Passionate about Mobile Apps, Data Analytics, Networking, Web and IoT systems.
            Actively seeking internship opportunities.
          </p>

          <p className="opacity-60">
            Expected Graduation: 2028
            <br />
            Universiti Teknologi MARA (UiTM)
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
        <p className="text-slate-600 dark:text-slate-700">
          I am a Bachelor of Computer Science (Hons.) Netcentric Computing student at
          Universiti Teknologi MARA (UiTM) with experience in software development,
          networking, and IoT systems. During my internship and subsequent employment
          at Infradata Technology Sdn. Bhd., I gained hands-on experience in network
          installation, configuration, troubleshooting, and infrastructure deployment.

          <br /><br />

          My technical interests include mobile application development, data analytics, artificial
          intelligence, cloud technologies, and network infrastructure. I have
          developed projects using Flutter, Firebase, OpenAI API, ESP8266, GPS, and
          geolocation services, including an AI-powered repair assistant application
          and a smart navigation cane for visually impaired individuals.

          <br /><br />

          I am passionate about building practical technology solutions that solve
          real-world problems and continuously expanding my skills in software
          engineering, networking, and emerging technologies.
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
              "HTML",
              "CSS",
              "Ruby on Rails",
              "Git",
              "MySQL",
              "ESP8266 & IoT Dev",
              "Network Troubleshooting",
              "Switch & Router Configuration",
              "Data Analytics"
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

          <div className="p-4">

            {/* Main Image */}
            <img
              src={selectedAiImage}
              className="w-full h-[420px] object-contain bg-slate-100 dark:bg-slate-800 rounded-xl"
            />

            {/* Thumbnails */}
            <div className="flex justify-center gap-2 mt-4 flex-wrap">
              {aiImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`AI Screenshot ${index + 1}`}
                  onClick={() => setSelectedAiImage(img)}
                  className={`w-16 h-16 rounded-lg object-cover cursor-pointer border-2 transition
                    ${
                      selectedAiImage === img
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                />
              ))}
            </div>

          </div>

          <div className="p-6 space-y-3">

            <h3 className="text-2xl font-bold text-blue-600">
              AI Repair Assistant
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300">
              AI-powered mobile app for diagnosing appliance issues,
              providing repair guidance, technician search, geolocation services,
              and interactive AI assistance through chat and camera-based support.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Flutter",
                "Firebase",
                "OpenAI API",
                "Geolocation",
                "Google Maps",
              ].map((t) => (
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

        {/* SMART CANE */}
        <div className="group bg-white dark:bg-slate-900 border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

          <div className="p-4">

            {/* Main Image */}
            <img
              src={selectedCaneImage}
              className="w-full h-[420px] object-contain bg-slate-100 dark:bg-slate-800 rounded-xl"
            />

            {/* Thumbnails */}
            <div className="flex justify-center gap-2 mt-4 flex-wrap">
              {caneImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Smart Cane ${index + 1}`}
                  onClick={() => setSelectedCaneImage(img)}
                  className={`w-16 h-16 rounded-lg object-cover cursor-pointer border-2 transition
                    ${
                      selectedCaneImage === img
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                />
              ))}
            </div>

          </div>

          <div className="p-6 space-y-3">

            <h3 className="text-2xl font-bold text-blue-600">
              Smart Navigation Cane
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300">
              IoT-based assistive device developed using ESP8266, ultrasonic sensing,
              GPS tracking, caregiver notifications, and obstacle detection to support
              visually impaired individuals during navigation.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "ESP8266",
                "GPS",
                "Blynk",
                "IoT",
                "Ultrasonic Sensor",
              ].map((t) => (
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

      {/* EXPERIENCE */}
      <section data-aos="fade-up" id="projects" className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Professional Experience
        </h2>

        <div className="flex justify-center">

          <div className="group bg-white dark:bg-slate-900 border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 max-w-3xl w-full">

            <div className="overflow-hidden">
              <img
                src={rack1}
                className="w-full h-[420px] object-contain bg-slate-100 dark:bg-slate-800 p-4"
              />
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-blue-600">
                Network Technician
              </h3>
              <p className= "text-sm text-slate-600 dark:text-slate-500">
              Network Technician Intern / Network Technician at Infradata Technology Sdn. Bhd.
              </p>
              <p className= "text-sm text-slate-600 dark:text-slate-500">
                Mar 2024 – Sep 2024
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-300">
                Assisted in the installation, configuration, and maintenance of network infrastructure.
                <br />
                Performed troubleshooting and diagnosis of network connectivity issues.
                <br />
                Supported the deployment and organization of network racks, structured cabling, switches, and routers.
                <br />
                Participated in on-site network implementation and infrastructure projects.
                <br />
                Collaborated with technical teams to ensure reliable and secure network operations.
                <br />
                Continued with the company after internship completion to provide ongoing technical support and project assistance.
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Cambium Network Configuration", "TP-Link Network Configuration", "Switch Configuration", "Router Configuration"].map((t) => (
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
          <p>
            Currently seeking internship opportunities in:
          </p>
          <p>
            • Mobile Application Development
            <br />
            • Data Analytics
            <br />
            • Network Engineer
            <br />
            • Software Development
            <br />
            • IoT Development
          </p>
          <p>
            Available from: September 2026 – February 2027
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