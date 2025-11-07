
import React from "react";
import './Projects.css';

const projects = [
  { 
    id: 1, 
    title: "E-Commerce TechMart", 
    description: "A full-featured online shopping platform with product catalog, cart, and checkout functionality", 
    imgSrc: "/assets/ecomjpg.jpg",
    link: "https://hariharan9710.github.io/e-commerce-web-application-TechMart-frontend/#/all-products"
  },
  { 
    id: 2, 
    title: "Vegan Store", 
    description: "A modern e-commerce website for organic and vegan products with elegant design", 
    imgSrc: "/assets/veg.jpg",
    link: "https://hariharan9710.github.io/vegan-store/"
  },
];

export default function Project() {
  return (
    <section className="portfolio_area" id="portfolio">
      <div className="container">
        <div className="main_title text-start mb-4">
          <h2>
            Quality work
            <br />
            Recently done project
          </h2>
        </div>

        <div className="row g-4 justify-content-center">
          {projects.map(({ id, title, description, imgSrc, link }) => (
            <div key={id} className="col-lg-6 col-md-6">
              <div className="portfolio_box">
                <img src={imgSrc} alt={title} className="img-fluid" style={{ width: '100%', height: '250px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                <div className="short_info p-4">
                  <h4 className="mb-3">
                    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#222222', fontWeight: '600' }}>
                      {title}
                    </a>
                  </h4>
                  <p className="mb-3" style={{ color: '#777777', fontSize: '14px', lineHeight: '1.6' }}>{description}</p>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="primary_btn" style={{ display: 'inline-block', padding: '10px 25px', fontSize: '14px', lineHeight: 'normal' }}>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}