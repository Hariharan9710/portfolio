import React from "react";
import './Newspaper.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="newsletter_area d-flex align-items-center text-white text-center rounded-3 py-5 px-3"
             style={{
               backgroundImage: "url('/assets/subscribe-bg.png')",
               backgroundSize: "cover",
               backgroundPosition: "center"
             }}
        >
          <div className="w-100">
            <h2 className="fw-bold text-uppercase mb-3">Get Update From Anywhere</h2>
            <p className="mb-4">
              Bearing Void gathering light light his evening unto don't afraid.
            </p>
            <form className="row g-2 justify-content-center">
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="col-md-3">
                <button type="submit" className="btn btn-light btn-lg w-100">
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
