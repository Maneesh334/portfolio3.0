import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'AI based Reservation Assistant',
    category: 'LLMs',
    description: 'A full-scale voice assistant that can take calls, answer user queries and handle reservations. Built with VAPI, Make.com, Claude and Google Suite.'
  },
  {
    id: 2,
    title: 'Try-It-On Extension',
    category: 'Machine Learning',
    description: 'A Chrome extension that lets you try on any article of clothing from a website. Built with JavaScript, Claude and a HuggingFace model.'
  },
  {
    id: 3,
    title: 'RAG for Climate Datasets',
    category: 'LLMs',
    description: 'Explored a wide variety of adaptive, corrective and self RAG techniques to build an efficent RAG for climate datasets.'
  },
  {
    id: 4,
    title: 'Recognition of Ocular Diseases',
    category: 'Machine Learning',
    description: 'Classification model built for identifying a range of eye diseases. Built with Keras.'
  },
  {
    id: 5,
    title: 'Predicting Flight Delays',
    category: 'Machine Learning',
    description: 'Predictive models built to predict flight delays with Python. Data analysis with R.'
  },
  {
    id: 6,
    title: 'Attribute Information Extractor',
    category: 'LLMs',
    description: 'Leveraged BERT models, SQL, Gemini and Claude to extract specific information for a range of attributes from a database of doctors\' notes.'
  },
  {
    id: 7,
    title: 'Chatting with APIs',
    category: 'Data Engineering',
    description: 'Built a Streamlit application to chat with API data. Data flow into a SQL database orchestrated with Airflow, Kafka and Spark. Natural language querying facilitated with LangChain and Claude.'
  },
  {
    id: 8,
    title: 'NES Emulator',
    category: 'Systems Programming',
    description: 'Built an NES emulator with Rust.'
  },
  {
    id: 9,
    title: 'Q&A for YouTube',
    category: 'LLMs',
    description: 'Leveraged LLMs to perform natural language querying over user input YouTube video.'
  },
  {
    id: 10,
    title: 'Discord Bots',
    category: 'Fullstack Development',
    description: 'Built a number of Discord bots for recreational purposes with JavaScript.'
  },
  {
    id: 11,
    title: 'Cab Booking Application',
    category: 'Fullstack Development',
    description: 'Built a cab booking application in Java.'
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
      <div className="mb-6">
        <button onClick={() => setFilter('All')} className={`mr-4 ${filter === 'All' ? 'text-accent' : 'text-gray-400'}`}>All</button>
        <button onClick={() => setFilter('LLMs')} className={`mr-4 ${filter === 'LLMs' ? 'text-accent' : 'text-gray-400'}`}>LLMs</button>
        <button onClick={() => setFilter('Fullstack Development')} className={`mr-4 ${filter === 'Fullstack Development' ? 'text-accent' : 'text-gray-400'}`}>Fullstack Development</button>
        <button onClick={() => setFilter('Machine Learning')} className={`mr-4 ${filter === 'Machine Learning' ? 'text-accent' : 'text-gray-400'}`}>Machine Learning</button>
      </div>
      <ul className="space-y-6">
        {filteredProjects.map(project => (
          <li key={project.id} className="card p-4">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{project.category}</p>
            <p className="text-sm">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;