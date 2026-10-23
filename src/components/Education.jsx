import React from "react";

export default function Education() {
  const education = [
    {
      degree: "B.Tech — Electrical & Electronics Engineering",
      college: "Y.S.R. Engineering College of Yogi Vemana University",
      duration: "2020 – 2024 · Graduated 2024",
      location: "Proddatur, Kadapa",
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
    <section id="education" className="section section--light">
      <div className="section-header">
        <p className="eyebrow">Academic Journey</p>
        <h2 className="section-title">
          My <span>Education</span>
        </h2>
      </div>

      <div className="edu-grid">
        {education.map((edu) => (
          <div key={edu.degree} className="edu-card">
            <span className="edu-icon">🎓</span>
            <h3 className="edu-degree">{edu.degree}</h3>
            <p className="edu-college">{edu.college}</p>
            <div className="edu-row">
              <span>{edu.duration}</span>
              <span>{edu.location}</span>
            </div>
            <span className="edu-score">{edu.score}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
