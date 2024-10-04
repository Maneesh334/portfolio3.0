import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-white flex flex-col justify-center"
      style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/593e5895a5790aa6651b4390/1521475514761-8D9UBX12O7GWWG4A3CP1/vlcsnap-2018-03-19-15h36m27s542.jpg?format=2500w')",
        height: '32vh',
        margin: 0,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/maneesh334"
            target="_blank"
            rel="noopener noreferrer"
            className="transparent-icon"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/maneesh-reddy-05718b208/"
            target="_blank"
            rel="noopener noreferrer"
            className="transparent-icon"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:palemmaneeshr.gonegary@stonybrook.edu"
            className="transparent-icon"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
