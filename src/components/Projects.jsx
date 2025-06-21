import news from "../assets/news.png";
import weather from "../assets/weather.png";
import vote from "../assets/vote.jpg";
const projects = [
  {
    id: 1,
    name: "Voting System",
    technologies:
      "A secure and user-authenticated voting system built with Node.js, Express, and MongoDB, designed for seamless and reliable voting processes",
    image: vote,
    github: "https://github.com/suvasanpui/vote_now",
    view: "https://vote-now-71kj-ui.vercel.app/",
  },
  {
    id: 2,
    name: "Weather Application",
    technologies:
      "A real-time weather forecast application built with React, Tailwind CSS, and Axios, providing accurate weather updates based on user location",
    image: weather,
    github: "https://github.com/suvasanpui/weatherForecast",
    view: "https://expert-weather-report.netlify.app/",
  },
  {
    id: 3,
    name: "Real-Time  News Web Application",
    technologies:
      "dynamic news web application built with React, delivering the latest updates and articles from various sources in real-time",
    image: news,
    github: "https://github.com/suvasanpui/projectReact/tree/main/newsapp",
    view: "#",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#1B1B1E] text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            My Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-40 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex gap-5 items-center">
                <div>
                  <a
                    href={project.github}
                    className="inline-block bg-gradient-to-r 
              from-yellow-400 to-blue-500 text-white px-4 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>

                <div>
                  <a
                    href={project.view}
                    className="inline-block bg-gradient-to-r 
              from-yellow-400 to-blue-500 gap-5 text-white px-6 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
