import React from 'react';

const Educations = () => {
    const educationList = [
        {
            institution: 'University of Example',
            degree: 'Bachelor of Science in Computer Science',
            year: '2015 - 2019'
        },
        {
            institution: 'Example High School',
            degree: 'High School Diploma',
            year: '2011 - 2015'
        }
    ];

    return (
        <div>
            <h1>Education</h1>
            <ul>
                {educationList.map((education, index) => (
                    <li key={index}>
                        <h2>{education.institution}</h2>
                        <p>{education.degree}</p>
                        <p>{education.year}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Educations;