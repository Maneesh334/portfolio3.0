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
            <h4 className="text-lg font-semibold">Stanford University</h4>
            <p className="text-sm text-accent">2020 — 2024</p>
            <p className="text-sm text-gray-400">Studying Computer Science under the Human-Computer Interaction (HCI) program track.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Frontend Masters Bootcamp</h4>
            <p className="text-sm text-accent">2023</p>
            <p className="text-sm text-gray-400">Received certificate of completion in the Frontend Masters' frontend coding bootcamp.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Centennial High School</h4>
            <p className="text-sm text-accent">2016 — 2020</p>
            <p className="text-sm text-gray-400">Graduated Valedictorian of my class after taking an AP Computer Science course which began my Computer Science journey!</p>
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
            <h4 className="text-lg font-semibold">Quality And Software Engineer</h4>
            <p className="text-sm text-accent">2023 — Axios Media</p>
            <p className="text-sm text-gray-400">Maintained and developed frontend functionality for the company's public and private facing platforms.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Technical Operations</h4>
            <p className="text-sm text-accent">2023/Current — Stanford University</p>
            <p className="text-sm text-gray-400">Assisted students and faculty with both software and hardware technical difficulties in a timely manner.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Computer Science Tutor</h4>
            <p className="text-sm text-accent">2022/Current — Sports & Scholars Tutoring</p>
            <p className="text-sm text-gray-400">Assessed initial and ongoing understanding to create individualized computer science lesson plans for high school students.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;