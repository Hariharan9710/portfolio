import './Hero.css';

const heroText = {
  subtitle: 'Hello',
  title: 'I am Hariharan V',
  description: 'Software Developer',
};

const heroButtons = [
  { text: 'Hire Me', href: '#contact', className: 'primary_btn' },
  { text: 'Get CV', href: '/assets/Hariharan_V_Resume.pdf', className: 'primary_btn tr-bg' },
];

export default function Hero() {
  return (
    <section className="home_banner_area" id="home">
      <div className="banner_inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="banner_content">
                <h3 className="text-uppercase">{heroText.subtitle}</h3>
                <h1 className="text-uppercase">{heroText.title}</h1>
                <h5 className="text-uppercase">{heroText.description}</h5>

                <div className="d-flex align-items-center mt-4">
                  {heroButtons.map((btn) => (
                    <a key={btn.text} className={btn.className} href={btn.href} target='blank'>
                      <span>{btn.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="home_right_img">
                <img src="/assets/home-right.png" alt="Banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}