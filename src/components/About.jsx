import React from "react";

export default function About() {
  return (
    <section id="about" className="about-section">

      <h2 className="about-title">Crafting AI-Powered <span>Experiences</span></h2>

      <div className="about-container">

        {/* LEFT CARD */}
        <div className="about-card-modern">

          <div className="about-avatar">SP</div>

          <div className="about-floating top-right">
            <span className="icon">💼</span>
            Currently at <b>ECode Learning</b>
          </div>

          <div className="about-floating bottom-left">
            <span className="icon">📍</span>
            Hyderabad, India
          </div>

          <h3 className="about-name">Sriram Posimsetti</h3>
          <p className="about-role">AI Engineer</p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-text">
          <h3>I'm an AI Engineer who loves turning data into intelligent solutions</h3>

          <p>
            With over a year of hands-on experience in AI and backend development,  
            I specialize in building scalable systems that leverage the power of  
            machine learning. Currently, I'm working at ECode Learning Software Services,  
            where I design and deploy ML models, develop full-stack applications,  
            and help researchers bring their ideas to life.
          </p>

          <p>
            My journey spans brain tumor detection systems using MRI imaging,  
            synthetic image generation with GANs, NLP pipelines, and predictive analytics.  
            I’m passionate about LLMs, RAG architectures, and building end-to-end  
            intelligent solutions.
          </p>

          <div className="about-badges">
            <span className="badge">🎓 B.Tech – YSR Engineering College</span>
            <span className="badge">☕ Coffee-Powered Coding</span>
          </div>
        </div>

      </div>

    </section>
  );
}
