import React from 'react';
import portraitImage from './photo.jpg';
import { Mail, MapPin } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-80 p-6 card">
      <img
        src={portraitImage}
        alt="Maneesh Reddy"
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">Maneesh Reddy</h1>
      <p className="text-sm text-gray-400 mb-6">Software Developer</p>
      <div className="space-y-4">
        <div className="flex items-center">
          <Mail size={20} className="mr-2 text-gray-400" />
          <span className="text-sm">pgonegary@cs.stonybrook.edu</span>
        </div>
        <div className="flex items-center">
          <MapPin size={20} className="mr-2 text-gray-400" />
          <span className="text-sm">New York, NY</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
