import React from 'react';
import {
  PenTool,
  Code,
  Smartphone,
  BrainCog,
  BrainCircuit,
} from 'lucide-react';

const About = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="mb-8">
        <p className="mb-4">నమస్కారం!</p>
        <p className="mb-4">
          I'm Maneesh, a Computer Science Master's student at State University
          of New York at Stony Brook, with a strong foundation in software
          development and CS fundamentals from my time at Rupifi, Flipkart, HL
          Health and BITS Pilani. I'm dedicated to leveraging my skills and
          abilities to create innovative and robust software solutions for a
          variety of problems.
        </p>
        <p className="mb-4">
          In my personal time, I love reading NYRB classics and traveling! You
          can find me on{' '}
          <a
            href="https://www.goodreads.com/user/show/18352589-maneesh-reddy"
            className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Goodreads
          </a>{' '}
          if you want to chat about books and more.
        </p>
      </div>
      <h3 className="text-2xl font-bold mb-4">What I'm Doing</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-4">
          <PenTool size={24} className="text-accent mb-2" />
          <h4 className="text-lg font-semibold mb-2">
            Backend Software Development
          </h4>
          <p className="text-sm text-gray-400">
            Reliable, secure and production-ready.
          </p>
        </div>
        <div className="card p-4">
          <BrainCog size={24} className="text-accent mb-2" />
          <h4 className="text-lg font-semibold mb-2">AI Development</h4>
          <p className="text-sm text-gray-400">
            State-of-the-art implementation of the latest in the realm of LLMs,
            RAGs and agentic AI.
          </p>
        </div>
        <div className="card p-4">
          <BrainCircuit size={24} className="text-accent mb-2" />
          <h4 className="text-lg font-semibold mb-2">Data Science</h4>
          <p className="text-sm text-gray-400">
            Professional level delivery for Data Analysis, ML, CV and NLP
            problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
