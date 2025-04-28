import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, MessageCircle } from 'lucide-react';
import ContactForm from './Form';
import emailjs from '@emailjs/browser';
// import keisok from '../assets/file/keisok.png';
import logo from '../assets/file/logo.png';
import HeroSection from './HeroSection';


// useEffect(() => {
//   emailjs.init("fvRHaGt4rgpUfGaWf");
// }, []);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    emailjs.init("fvRHaGt4rgpUfGaWf");
  }, []);

  const projects = [
    {
      title: "Financial Technology Maintenance and solutions company.",
      description: "ATM Maintenance, Card Issuance and financial solutions",
      tags: ["React JS", "Javascript", "Tailwind CSS",  ],
      link: "#"
    },
    {
      title: "A Fintech Savings Platform",
      description: "A savings platform for individuals with various platform options",
      tags: ["React", "TypeScript", "Tailwind CSS", "REST API",],
      link: "#"
    },
    {
      title: "Health Triage Platform",
      description: "An AI powered platform for patients and consultants",
      tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "Swagger", "Api Documentation"],
      link: "#"
    },
    {
      title: "Lizy AI Platform",
      description: "An AI tool for ongoing customization and innovation, ensuring software evolves with business needs.",
      tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
      link: "//www.buildas.io/#/signup/"
    },
    {
      title: "A human-assisted AI platform",
      description: "A feature offering pre-built templates for rapid software deployment, allowing businesses to customize and launch applications quickly.",
      tags: ["React", "JavaScript", "Typescript", "Tailwind CSS", "REST API" ],
      link: "//www.buildas.io/"
    },
    {
      title: "Professional baby photography manipulation platform",
      description: "A platform that creates beautiful digital photoshoot of  babies",
      tags: ["TypeScript", "CSS", "Tailwind", "Next Js"],
      link: "//tinytography.co.uk/"
    },
    {
      title: "E Commerce Platform",
      description: "Checkstall is an Ecommerce platform that allow users in Nigeria make bulk orders of goods in china using platforms such as 1688 and taliban. its still in development.",
      tags: ["TypeScript", "CSS", "Tailwind"],
      link: "//www.checkstall.com/"
    },
    {
      title: "Fintech Engineering Company",
      description: "Fintech Maintenance and engineeering company",
      tags: ["TypeScript", "CSS", "Tailwind", ],
      link: "//www.dycomnetng.com/"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "Bootstrap", "React", "TypeScript", "Optimization"] },
    { category: "Backend", items: ["Firebase", "RESTful APIs", "SQL"] },
    { category: "Tools", items: ["Git", "VS Code", "npm", "Dev Tool Kit"] }
  ];

  return (
    <div className="min-h-screen bg-gray-50 width-full">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-gray-800">Ijeoma Onuaju</span>
            {/* <img src={logo} alt="Ijeoma Onuaju" className="h-12 w-16" /> */}
            <div className="hidden md:flex space-x-8">
              {['home', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`${
                    activeSection === section
                      ? 'text-black border-b-2 border-black'
                      : 'text-black hover:text-black'
                  } capitalize`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <section className="py-20 bgImg">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-black/10 text-black/80 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-black/50 hover:text-black/10"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 bgImg">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 " id="contact">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-black" />
                <a href="mailto:ijeomaonuajurx@gmail.com" className="text-gray-600 hover:text-black/40">
                  ijeomaonuajurx@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-black" />
                <a href="tel:+2348032779222" className="text-gray-600 hover:text-black/40">
                  +2348032779222
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MessageCircle className="w-6 h-6 text-black" />
                <a
                  href="https://wa.me/23407055525522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black/40"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Linkedin className="w-6 h-6 text-black" />
                <a
                  href="//www.linkedin.com/in/ijeomaonuaju/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Github className="w-6 h-6 text-black" />
                <a
                  href="https://github.com/HerExcellency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                >
                  GitHub
                </a>
              </div>
            </div>
            <ContactForm />
            {/* <div className="bg-white rounded-xl shadow-md p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </section>

      {/* <ContactForm /> */}

      {/* Footer */}
      <footer className="bg-black  text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 Ijeoma Onuaju. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;