import './About.css';

const aboutContent = {
  paragraphs: [
    "I am a passionate Front-End Developer with a strong foundation in HTML, CSS, and JavaScript, specializing in creating responsive and user-friendly web interfaces. I enjoy transforming ideas into visually appealing designs and engaging user experiences, while continuously learning new technologies to enhance my skills.",
    "With experience in React.js, Bootstrap, and modern web development tools, I aim to contribute to dynamic projects that make an impact. I thrive in collaborative environments and am eager to grow as part of a team of professionals."
  ],
  button: { text: 'View Portfolio', href: '/assets/Hariharan_V_Resume.pdf' }
};

export default function About() {
  return (
    <section className="about_area section_gap" id="about">
      <div className="container">
        <div className="row align-items-center justify-content-start">
          <div className="col-lg-5">
            <div className="about_img">
              <img className="img-fluid" src="/assets/about-us.png" alt="About Me" />
            </div>
          </div>
          <div className="offset-lg-1 col-lg-6">
            <div className="main_title text-left">
             <h2> Let's me <br /> introduce myself </h2>
              {aboutContent.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
              <a className="primary_btn" href={aboutContent.button.href} target='blank'>
                {aboutContent.button.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
