import React from 'react'
import { Code, Database, Layout, Server } from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout size={24} />,
    skills: ["React", "Vue.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: <Server size={24} />,
    skills: ["Node.js", "Express", "Python", "Django", "Ruby on Rails"]
  },
  {
    title: "Databases",
    icon: <Database size={24} />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
  },
  {
    title: "Other",
    icon: <Code size={24} />,
    skills: ["Git", "Docker", "AWS", "RESTful APIs", "GraphQL", "Agile Methodologies"]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills