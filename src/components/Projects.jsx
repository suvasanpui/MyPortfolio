import React from "react";
import news from "../assets/news.png";
import bookMSImage from "../assets/admin-dashboard.png";
import pass from "../assets/password.png";
import weather from "../assets/weather.png";
const projects = [
  {
    id: 1,
    name: "News Web App",
    technologies:
      "Integrated APIs to display daily current news updates using React.js",
    image: news,
    github: "https://github.com/suvasanpui/projectReact/tree/main/newsapp",
    view:"#",
  },
  {
    id: 2,
    name: "Currency Convrter",
    technologies: "Integrated real time currency exchange rates using APIs",
    image: bookMSImage,
    github:
      "https://github.com/suvasanpui/projectReact/tree/main/currencyconverter",
    view:"#",
  },
  {
    id: 3,
    name: "Password Generator",
    technologies:
      "Create password generator application where implemented functionality to generate character only or mix chaacter and number",
    image: pass,
    github:
      "https://github.com/suvasanpui/projectReact/tree/main/passwordgenerator03",
    view:"#",
  },
  {
    id: 4,
    name: "Weather Forecast",
    technologies:
      "Developed a weather forecast web application using React for an interactive UI, Tailwind CSS for responsive design, and Axios to fetch real-time weather data. The app allows users to check current weather conditions, temperature, and humidity for any city worldwide, providing a clean and user-friendly interface optimized for both mobile and desktop",
    image: weather,
    github: "https://github.com/suvasanpui/weatherForecast",
  view:"https://expert-weather-report.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <br/>
              <br/>
              <a
                href={project.view}
                className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 gap-5 text-white px-6 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
