import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      {/* HEADER */}
      <p className="contact-sub">GET IN TOUCH</p>
      <h2 className="contact-main-title">
        Let's Build Something <span>Amazing</span>
      </h2>
      <p className="contact-text">
        Have a project in mind? Let's connect and bring your ideas to life.
      </p>

      <div className="contact-grid">

        {/* LEFT CARD — CONTACT INFO */}
        <div className="contact-card">

          <h3 className="contact-card-title">Contact Information</h3>

          {/* EMAIL */}
          <div className="contact-row">
            <span className="icon">📧</span>
            <div>
              <p className="label">Email</p>
              <a
                href="mailto:sriramposimsetti15@gmail.com"
                className="contact-value"
              >
                sriramposimsetti15@gmail.com
              </a>
            </div>
          </div>

          {/* PHONE */}
          <div className="contact-row">
            <span className="icon">📞</span>
            <div>
              <p className="label">Phone</p>
              <a href="tel:+919849197841" className="contact-value">
                +91 9849197841
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="contact-row">
            <span className="icon">📍</span>
            <div>
              <p className="label">Location</p>
              <p className="contact-value">Hyderabad, Telangana</p>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="social-section">
            <p className="label">Find me on</p>

            <div className="social-icons">

              <a href="https://www.linkedin.com/in/sriram-posimsetti-a8b519292"
                target="_blank"
                className="social-btn">
                  <span className="icon">
                      {<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.98 0H12v2.2h.04c.49-.93 1.67-2.2 4.33-2.2 4.63 0 5.48 3.04 5.48 6.98V24h-4v-7.78c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.03-3 4.12V24h-4V8z"/>
</svg>
}
                      </span>
                      </a>

              <a href="https://x.com/3029sriram"
                target="_blank"
                className="social-btn"><span className="icon">
                      {<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
  <path d="M18.244 2H21.5l-7.423 8.49L23 22h-6.123l-4.807-6.23L6.63 22H3.37l7.93-9.07L1 2h6.245l4.31 5.662L18.244 2zm-1.07 17.52h1.8L7.04 4.39H5.14l12.034 15.13z"/>
</svg>

}
                      </span></a>

              <a href="https://www.instagram.com/_wanted_sriram_"
                target="_blank"
                className="social-btn"><span className="icon">
                      {<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm4.5-.75c0 .69-.56 1.25-1.25 1.25S14 8.94 14 8.25s.56-1.25 1.25-1.25S16.5 7.56 16.5 8.25z"/>
</svg>

}
                      </span></a>

              <a href="https://wa.me/919849197841"
                target="_blank"
                className="social-btn"><span className="icon">
                      {<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 2.1.56 4.15 1.62 5.94L2 22l4.31-1.72c1.7.93 3.6 1.42 5.73 1.42 5.47 0 9.9-4.44 9.9-9.9 0-5.45-4.43-9.8-9.9-9.8zm0 17.8c-1.78 0-3.42-.47-4.85-1.37l-.35-.21-2.56 1.02.97-2.49-.23-.38A8.54 8.54 0 013.64 12c0-4.66 3.77-8.45 8.4-8.45 4.63 0 8.4 3.79 8.4 8.45 0 4.67-3.77 8.4-8.4 8.4zm4.58-6.25c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.12-.57.12-.17.23-.65.8-.8.96-.14.17-.29.19-.54.06-.25-.12-1.04-.38-2-1.22-.74-.66-1.24-1.48-1.38-1.73-.14-.25-.02-.38.1-.5.1-.1.23-.25.34-.38.12-.13.17-.22.26-.37.08-.15.04-.28-.02-.38-.06-.09-.57-1.37-.78-1.88-.21-.51-.42-.44-.57-.45h-.48c-.17 0-.45.06-.68.28-.23.23-.9.88-.9 2.15 0 1.27.93 2.5 1.06 2.67.14.17 1.82 2.77 4.44 3.88 2.62 1.1 2.62.73 3.1.68.48-.05 1.53-.63 1.75-1.24.22-.62.22-1.15.15-1.27-.06-.11-.23-.18-.48-.3z"/>
</svg>

}
                      </span></a>

              <a href="https://github.com/Sriram7841"
                target="_blank"
                className="social-btn"><span className="icon">
                      {<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.2 1.8 1.2 1.05 1.8 2.76 1.28 3.44.98.1-.76.41-1.28.75-1.57-2.56-.29-5.26-1.28-5.26-5.72 0-1.27.45-2.31 1.2-3.12-.12-.3-.52-1.52.12-3.17 0 0 .97-.31 3.18 1.19a11.1 11.1 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.64 1.65.24 2.87.12 3.17.75.81 1.2 1.85 1.2 3.12 0 4.46-2.7 5.42-5.28 5.7.42.37.8 1.1.8 2.22v3.29c0 .3.21.66.8.55A10.99 10.99 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
</svg>

}
                      </span></a>

            </div>
          </div>
        </div>


        {/* RIGHT SIDE — SIMPLE CONTACT MESSAGE BOX */}
        <div className="contact-message-box">
          <h3 className="msg-title">Send a Message</h3>

          <form
            action="https://formsubmit.co/sriramposimsetti15@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Contact Message from Portfolio"
            />

            <div className="input-row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
            </div>

            <input type="text" name="subject" placeholder="Subject" required />

            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit" className="send-btn">
              <span className="icon">
    {<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
</svg>
}
  </span> Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
