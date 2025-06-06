const experiences = [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "Vittam Smart Solutions",
      date: "Feb 2025 - Present",
      location: "Bangaluru, India",
      description: [
        "Developed full-stack applications using React and Node.js",
        "Implemented responsive designs and improved user experience",
        "Implemented modern UI/UX design principles"
      ],
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "acharyaG",
      date: "Dec 2024 - May 2025",
      location: "",
      description: [
        "Built responsive web applications using React and Firebase cloud technology",
        "Optimized website performance and loading times",
        "Collaborated with team members using Git and Agile methodologies"
      ],
    },
  
  ];

const Experience = () => {
  return (
    <div className="bg-black text-white py-12 sm:py-20" id="experience">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 px-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            My Experience
          </span>
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-800/50 p-4 sm:p-6 rounded-xl hover:shadow-xl transform 
              transition-all duration-300 hover:scale-[1.02] border border-gray-700"
            >
              <div className="flex flex-col mb-3 sm:mb-4">
                <div className="mb-2 sm:mb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500">
                    {exp.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mt-1">{exp.company}</p>
                </div>
                <div className="mt-1 sm:mt-2">
                  <p className="text-green-400 text-sm sm:text-base">{exp.date}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2 pl-4">
                {exp.description.map((item, index) => (
                  <li key={index} className="text-gray-300 text-sm sm:text-base relative">
                    <span className="absolute -left-4 top-2 w-2 h-2 bg-green-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
