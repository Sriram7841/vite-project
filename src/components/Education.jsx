import React from "react";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Electrical Engineering",
      college: "Y.S.R Engineering College, Yogi Vemana University",
      duration: "2020 – 2024",
      location: "Proddutur, Kadapa",
      score: "CGPA: 7.97",
    },
    {
      degree: "Intermediate (MPC)",
      college: "G.R.C Jr. College",
      duration: "2018 – 2020",
      location: "Ramachandrapuram, East Godavari",
      score: "CGPA: 9.17",
    },
    {
      degree: "10th SSC",
      college: "G.V & K.B.M (EM) High School",
      duration: "2017 – 2018",
      location: "Ramachandrapuram, East Godavari",
      score: "CGPA: 9.7",
    },
  ];

  return (
    <section id="education" className="edu-section">
      <div className="edu-header">
        <p className="edu-subtitle">ACADEMIC JOURNEY</p>
        <h2 className="edu-title">
          My <span>Education</span>
        </h2>
      </div>

      <div className="edu-grid">
        {education.map((edu, index) => (
          <div key={index} className="edu-card">
            <div className="edu-degree">{edu.degree}</div>

            <div className="edu-college">{edu.college}</div>

            <div className="edu-row">
              <span>{edu.duration}</span>
              <span>{edu.location}</span>
            </div>

            <div className="edu-score">{edu.score}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
