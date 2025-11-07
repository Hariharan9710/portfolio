import React from "react";
import './Footer.css';
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter, FaHeart } from 'react-icons/fa';

const socialLinks = [
  { href: "https://www.linkedin.com/in/hariharan-v-591a27241/", icon: <FaLinkedin /> },
  { href: "https://github.com/Hariharan9710", icon: <FaGithub /> },
  { href: "#", icon: <FaFacebook /> },
  { href: "#", icon: <FaTwitter /> },
];

export default function Footer() {
  return (
    <footer className="footer_area text-center py-4">
      <div className="container">
        <h4 className="mb-3 text-dark hello">Follow Me</h4>
        <div className="footer_social mb-4">
          {socialLinks.map(({ href, icon }, idx) => (
            <a key={idx} href={href} target='blank' className="mx-2 text-dark fs-5">
              {icon}
            </a>
          ))}
        </div>
        <p className="small text-muted mb-0">
          © {new Date().getFullYear()} All rights reserved | Made with{" "}
          <FaHeart className="text-danger" /> by{" "}
          <a href="#" className="text-decoration-none">Hariharan V</a>
        </p>
      </div>
    </footer>
  );
}
