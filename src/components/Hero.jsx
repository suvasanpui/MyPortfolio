import HeroImage from "./../assets/photo.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Suva Sanpui
        </span>
        , MERN Stack Developer
      </h1>
      <p className="mt-2 text-lg">
        Software Developer at Vittam Smart Solutions
      </p>

      <div className="mt-8 space-x-4">
        <a href="#contact" className="hover:text-gray-400">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Contact With Me
          </button>
        </a>
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a href="resume123.pdf" target="_blank" download>
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
