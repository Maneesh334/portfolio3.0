import React from 'react';
import { BookOpen, Briefcase } from 'lucide-react';

const Resume = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Resume</h2>
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <BookOpen size={24} className="text-accent mr-2" />
          <h3 className="text-2xl font-bold">Education</h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold">Stony Brook University</h4>
            <p className="text-sm text-accent">2023 — 2025</p>
            <p className="text-sm text-gray-400">Master of Sciences in Computer Science</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">BITS Pilani</h4>
            <p className="text-sm text-accent">2018 - 2022</p>
            <p className="text-sm text-gray-400">Bachelor of Engineering in Computer Science</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center mb-4">
          <Briefcase size={24} className="text-accent mr-2" />
          <h3 className="text-2xl font-bold">Experience</h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold">Software Engineering Intern</h4>
            <p className="text-sm text-accent">May 2024 - Current — Highlight Health</p>
            <p className="text-sm text-gray-400">Software Development & Computer Vision with Python & Java.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Project Assistant</h4>
            <p className="text-sm text-accent">Jan 2024 - Current — Stony Brook University</p>
            <p className="text-sm text-gray-400">Supporting healthcare workers with patient data analysis w/ LLMs and NLP under Prof. IV Ramakrishnan.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Project Assistant</h4>
            <p className="text-sm text-accent">July 2024 - Aug 2024 — North Carolina Institute of Climate Studies</p>
            <p className="text-sm text-gray-400">Facilitated easier and faster information access for climate scientists with RAGs.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Software Development Engineer</h4>
            <p className="text-sm text-accent">July 2022 - Aug 2023 — Rupifi</p>
            <p className="text-sm text-gray-400">Software Development with Go & Python. Wrote APIs, managed databases and built microservices.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Software Engineering Intern</h4>
            <p className="text-sm text-accent">July 2021 - Dec 2021 — Flipkart</p>
            <p className="text-sm text-gray-400">API development, cloud and quality engineering for a scrapped buying feature for Flipkart.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Software Engineering Intern</h4>
            <p className="text-sm text-accent">May 2020 - Aug 2020 — Convergent</p>
            <p className="text-sm text-gray-400">Mobile app development with Kotlin and full stack development with C#/.NET.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;