import React from "react";
import 'remixicon/fonts/remixicon.css'

const educations = [
  {
    id: 1,
    tag:"Graduation",
    institution: "Budge Budge Institute Of Technology",
    degree: "B.Tech in Information Technology",
    year: "2022 - 2025",
    persentage: "...",
    OGPA: "...",
  },
  {
    id: 2,
    tag:"Diploma",
    institution: "Murarai Government Polytechnic",
    degree: "Diploma in Computer Science & Technology",
    year: "2019 - 2022",
    persentage: "80.4%",
    OGPA: "8.4",
  },
  {
    id: 3,
    tag:"High School",
    institution: "Srichanda M.N.M Institution",
    degree: "Higher Secondary Examination",
    year: "2017 - 2019",
    persentage: "78%",
    OGPA: "...",
  },
];
const Education = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className=" px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 items-center text-center border-2 pt-3"
            >
            <div>
            <i className=" text-3xl ri-graduation-cap-fill"></i>
            <div>{edu.tag}</div>
            </div>
              <div>
                <h4
                  className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
                            bg-gradient-to-r from-green-400 to-yellow-500"
                >
                  {edu.institution}
                </h4>
              </div>
              <div>
                <h5 className="mt-2 text-gray-300">{edu.degree}</h5>
              </div>
              <div className=" flex gap-8">
                <div>
                  <p className="mt-2 text-gray-300">{edu.year}</p>
                </div>
                <div>
                  <p className="mt-2 text-gray-300">
                    Persentage : {edu.persentage}
                  </p>
                </div>
                <div>
                  <p className="mt-2 text-gray-300">OGPA : {edu.OGPA}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
