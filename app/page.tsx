"use client";

import React from "react";

export default function Home() {
  const features = [
    {
      title: "Community Driven",
      description:
        "Built by developers, for the Sri Lankan community. Your contributions matter.",
      icon: "👥",
    },
    {
      title: "Open Source",
      description:
        "All our projects are open source, transparent, and accessible to everyone.",
      icon: "🔓",
    },
    {
      title: "Innovation",
      description:
        "Creating innovative solutions that address real challenges in Sri Lanka.",
      icon: "💡",
    },
    {
      title: "Collaboration",
      description:
        "Working together to build software that makes a difference in our communities.",
      icon: "🤝",
    },
  ];

  const projects = [
    {
      title: "Open Source Projects",
      description: "Contribute to meaningful projects that serve the community",
    },
    {
      title: "Learning Resources",
      description: "Educational materials and documentation for developers",
    },
    {
      title: "Community Support",
      description: "Get help, share ideas, and connect with other developers",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">🇱🇰</span>
              <span className="ml-2 text-xl font-bold text-gray-900">
                Build for Sri Lanka
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600">
                Features
              </a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600">
                Projects
              </a>
              <a href="#join" className="text-gray-700 hover:text-blue-600">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Build for Sri Lanka
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
            Open Source Initiative
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Developing innovative open source software for the Sri Lankan community.
            Join us in creating solutions that make a real difference in our nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Join Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-blue-600"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of developers and contribute to open source projects
            that help Sri Lanka grow and innovate.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
            Explore Our Projects
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Build for Sri Lanka
              </h3>
              <p className="text-sm">
                An open source initiative dedicated to developing software for the
                Sri Lankan community.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: To be Update</li>
                <li>Discord: To be update</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>
              &copy; 2025 Build for Sri Lanka. All rights reserved. Licensed under
              MIT.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
