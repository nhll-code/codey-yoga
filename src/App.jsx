import teachImg from './assets/teach_in_studio.jpg'
import meditateImg from './assets/ganesha_meditate.jpg'
import mountainImg from './assets/mountain_top.jpg'
import cycleImg from './assets/cycle_group_tam.jpg'
import lscpImg from './assets/lscp_3.jpg'
import './App.css'

function App() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <span className="nav-name">Kotiin Yoga</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#classes">The Practice</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <img src={teachImg} alt="Codey teaching yoga" />
        <div className="hero-overlay">
          <h1>Kotiin Yoga</h1>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </section>

      {/* VALUE TEXT */}
      <section className="value-text">
        <h2>
          Kotiin — Finnish for "homeward".<br />
          Back to body and breath.<br />
          Back to being grounded.<br />
          Welcome home to yourself.
        </h2>
      </section>

      {/* LANDSCAPE WITH TEXT */}
      <section className="landscape-overlay">
        <img src={lscpImg} alt="Landscape" />
        <div className="landscape-overlay-text">
          {/* <h2>Movement that grounds you and brings you home to yourself.</h2> */}
          <p>
            Join me on a guided journey through breath and motion.<br />
            Leave feeling stronger, steadier and calmer.
          </p>
        </div>
      </section>

      {/* CLASSES */}
      <div className="offer-section" id="classes">
        <div className="offer-inner">
          <p className="section-label">The Practice</p>
          <p className="offer-intro">Whether you cycle, climb, dance, or love hitting the gym — every class is built to meet you where you're at.</p>
          <div className="offer-grid">
            <div className="offer-item">
              <h3>Vinyasa Yoga</h3>
              <p>
                A dynamic flow - we move in all planes and direction to build strength and awareness.
              </p>
            </div>
            <div className="offer-item">
              <h3>Myofascial Release</h3>
              <p>
                Release what you've been holding.  Targeting connective tissue to release tension so you feel more light and free.
              </p>
            </div>
            <div className="offer-item">
              <h3>Joint Mobility</h3>
              <p>Improve your range of motion for hips, shoulders, and spine. Feel more open and free.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PHOTO STRIP */}
      <div className="photo-strip">
        <img src={mountainImg} alt="Mountain top" />
        <img src={cycleImg} alt="Cycling with friends" />
      </div>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="about-inner">
        <p className="section-label">About</p>
        <div className="about-grid">
          <img
            src={meditateImg}
            alt="Codey meditating"
            className="about-photo"
          />
          <div className="about-text">
            <h2>Movement helped me find myself.</h2>
            <p>
              Hello, I'm Codey! I didn't come to yoga through grace or flexibility. I came through grief and injury from years of high-impact sport and pushing my limits until I decided to listen to my body. Yoga is a path to rebuilding and self discovery.
            </p>
            <p>
              I'm a neuroscientist by training, and a movement teacher by choice. Being a researcher helped me understand others, but yoga taught me to understand myself and who I am (cheesy but true).   My vision is to use yoga and movement to help you get to know yourself and your body better.
            </p>
            <p>
              Join me on the mat - come with an open mind and leave feeling stronger, calmer, and more like yourself.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section" id="testimonials">
        <p className="section-label">What Students Say</p>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>
              "Teaching from the heart, lots of passion. Codey tailored the class to my background as a professional dancer. She knew which muscles I wanted to work on while building a full body flow. The cues were clear, safe and made yoga intuitive to do. Thank you Codey."
            </p>
            <span className="testimonial-author">LW — Professional Dancer & Choreographer</span>
          </div>
          <div className="testimonial">
            <p>
              "Took a single class and immediately felt better! I'm a Brazilian jiu jitsu fighter / desk worker, the class helped to open up my hips, shoulders, and loosen my hamstrings. Even learnt some new exercises to prevent injury. Looking forward to next class!"
            </p>
            <span className="testimonial-author">JC — BJJ Practioner</span>
          </div>
          {/* <div className="testimonial">
            <p>
              "Challenging class? Yes! Fun class, definite yes! Her sequences are creative, and she incorporates mobility, breathwork, meditation and even a savasana with her voice. It's clear she loves what she does."
            </p>
            <span className="testimonial-author">Student</span>
          </div> */}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <h2>Where to Find Me</h2>
        <p>Currently teaching at Action & Reaction Markham — a mixed martial arts studio in the Greater Toronto Area.</p>
        {/* <p>Get in touch to book a class or ask a question.</p>
        <a href="mailto:codey.yoga@gmail.com" className="btn-dark">
          codey.yoga@gmail.com
        </a> */}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Kotiin Yoga</p>
      </footer>
    </>
  )
}

export default App
