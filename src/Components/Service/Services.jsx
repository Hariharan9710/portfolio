import './Service.css';

const features = [
  {
    img: '/assets/s1.png',
    alt: 'Frontend',
    title: 'Web Development',
    desc: 'Building responsive websites with clean HTML, CSS, and modern JS frameworks like React.'
  },
  {
    img: '/assets/s2.png',
    alt: 'Backend',
    title: 'UI/UX Design',
    desc: 'Designing visually appealing and intuitive user interfaces for web and mobile applications.'
  },
  {
    img: '/assets/s3.png',
    alt: 'Database',
    title: 'Backend Development',
    desc: 'Creating REST APIs and server-side logic using Node.js, Express.js and SpringBoot.'
  },
  {
    img: '/assets/s4.png',
    alt: 'Tools',
    title: 'Project Solutions',
    desc: 'Developing complete solutions like travel booking systems, traffic management systems, and more.'
  }
];

export default function Features() {
  return (
    <section className="features_area section_gap" id="services">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="main_title">
              <h2>SERVICE OFFERS</h2>
              <p>
                Building responsive websites and interactive applications with HTML, CSS, JavaScript, and React <br/>
                Creating backend solutions, REST APIs, and full-stack projects to deliver complete digital experiences
              </p>
            </div>
          </div>
        </div>
        <div className="row feature_inner">
          {features.map((feature, idx) => (
            <div className="col-lg-3 col-md-6" key={idx}>
              <div className="feature_item text-center">
                <img src={feature.img} alt={feature.alt} className="mb-3" />
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}