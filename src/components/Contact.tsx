import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 bg-gray-800 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 bg-gray-800 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full p-2 bg-gray-800 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-accent text-black font-medium py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
