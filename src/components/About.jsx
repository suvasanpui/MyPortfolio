import AboutImage from "../assets/image1.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-80 rounded-lg shadow-lg object-cover mb-8 md:mb-5 lg:mb-0 transform transition-transform duration-300 hover:scale-105 border-4 border-gray-700 mx-auto md:mx-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              I’m Suva Sanpui, a passionate and dedicated MERN Stack Developer
              with a solid foundation in full-stack web development. Currently,
              I’m working as a Software Developer at{" "}
              <span className="font-semibold text-green-400">
                Vittam Smart Solutions
              </span>
              , where I contribute to building robust and scalable web
              applications. Proficient in MongoDB, Express.js, React, and
              Node.js, I specialize in creating dynamic solutions that provide
              seamless user experiences. My journey in web development is fueled
              by a deep love for coding and problem-solving. I thrive on turning
              challenges into high-performance, functional outcomes. Always
              eager to grow, I stay updated with the latest technologies and
              best practices to deliver modern, efficient web solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "React.js",
                "Node.js",
                "Express.js",
                "JavaScript",
                "MongoDB",
                "HTML & CSS",
                "Java",
                "MySQL",
              ].map((skill) => (
                <div
                  className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
                  key={skill}
                >
                  <span className="text-gray-200 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
