import React from "react";
import myPic from "../assets/ram.jpg";

import LikeButton from "./LikeButton";
import VisitorCounter from "./VisitorCounter";

export default function Hero() {
  return (
    <section className="hero">
      <img src={myPic} alt="Sriram Posimsetti" className="hero-img" />

      <h1 className="hero-title">
        Hi, I'm <span>Sriram</span>
      </h1>

      <p className="hero-subtitle">
        An AI Engineer & Full Stack Developer building intelligent, modern solutions.
      </p>

      <a href="#projects">
        <button className="hero-btn">View Projects</button>
      </a>

      {/* 🔥 Like Button & Visitor Counter */}
      <div className="hero-social-stats">
        <LikeButton />
        <VisitorCounter />
      </div>
    </section>
  );
}
