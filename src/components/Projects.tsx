import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with React, Node.js, and MongoDB. Includes user authentication, product management, and payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://your-ecommerce-platform.com"
  },
  {
    title: "Task Management App",
    description: "A responsive web application for managing tasks and projects. Built with Vue.js and Firebase, featuring real-time updates and team collaboration.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    github: "https://github.com/yourusername/task-manager",
    live: "https://your-task-manager.com"
  },
  {
    title: "Weather Dashboard",
    description: "A sleek weather application that provides real-time weather data and forecasts. Built with React and integrates with a weather API.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://your-weather-dashboard.com"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Github size={20} className="mr-1" /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800">
                    <ExternalLink size={20} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects