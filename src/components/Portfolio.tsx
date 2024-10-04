import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Axios Newsletter Signup Page',
    category: 'Web development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80'
  },
  {
    id: 2,
    title: '"Thyme" Application',
    category: 'Applications',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 3,
    title: '"Hinj" Design Application',
    category: 'Applications',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
      <div className="mb-6">
        <button onClick={() => setFilter('All')} className={`mr-4 ${filter === 'All' ? 'text-accent' : 'text-gray-400'}`}>All</button>
        <button onClick={() => setFilter('Web design')} className={`mr-4 ${filter === 'Web design' ? 'text-accent' : 'text-gray-400'}`}>Web design</button>
        <button onClick={() => setFilter('Applications')} className={`mr-4 ${filter === 'Applications' ? 'text-accent' : 'text-gray-400'}`}>Applications</button>
        <button onClick={() => setFilter('Web development')} className={`mr-4 ${filter === 'Web development' ? 'text-accent' : 'text-gray-400'}`}>Web development</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="card overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;