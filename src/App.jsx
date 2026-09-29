import teachImg from './assets/teach_in_studio.jpg'
import meditateImg from './assets/ganesha_meditate.jpg'
import mountainImg from './assets/mountain_top.jpg'
import cycleImg from './assets/cycle_group_tam.jpg'
import './App.css'

function App() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <span className="nav-name">Codey Yoga</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#classes">Classes</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <img src={teachImg} alt="Codey teaching yoga" />
        <div className="hero-overlay">
          <h1>Codey Yoga</h1>
          <p>Showing up for yourself, every time.</p>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <p className="section-label">About</p>
        <div className="about-grid">
          <img
            src={meditateImg}
            alt="Codey meditating"
            className="about-photo"
          />
          <div className="about-text">
            <h2>Movement help me find myself.</h2>
            <p>
              I didn't come to yoga through grace or flexibility. I came through grief and injury from years of high-impact sport and pushing my limits until I decided to listen to my body. Yoga is a path to rebuilding and self discovery.
            </p>
            <p>
              I'm a cognitive neuroscientist by training, a world traveler, and a movement teacher by choice. I've lived and worked across 3 continents in 7 languages, what keeps me going is my curiosity for each person I meet, whether it's on or off the mat.
            </p>
            <p>
              My classes blend Vinyasa flow, myofascial release, and joint mobility.  Whether you're a cyclist, climber, dancer or just love hitting the gym (me too), I'll create a class to meet you where you're at. 
            </p>
            <p>
              The goal is simple: Come with an open-mind and leave feeling stronger, lighter, and more like yourself.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <div className="photo-strip">
        <img src={mountainImg} alt="Mountain top" />
        <img src={cycleImg} alt="Cycling with friends" />
      </div>

      {/* CLASSES */}
      <div className="offer-section" id="classes">
        <div className="offer-inner">
          <p className="section-label">What I Offer</p>
          <div className="offer-grid">
            <div className="offer-item">
              <h3>Vinyasa Yoga</h3>
              <p>
                Breath-linked movement that builds strength, focus, and flow. Sequences are creative and intentional — designed to challenge you without losing you.
              </p>
            </div>
            <div className="offer-item">
              <h3>Myofascial Release</h3>
              <p>
                Targeted work on the connective tissue that holds tension in the body. Particularly effective for athletes, desk workers, and anyone carrying chronic tightness.
              </p>
            </div>
            <div className="offer-item">
              <h3>Joint Mobility</h3>
              <p>
                Functional range of motion work for hips, shoulders, and spine. The kind of movement that makes everything else in your life feel easier.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="testimonials-section" id="testimonials">
        <p className="section-label">What Students Say</p>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>
              "Took a single class and immediately felt better! I'm a Brazilian jiu jitsu fighter / desk worker, the class helped to open up my hips, shoulders, and loosen my hamstrings. Even learnt some new exercises to prevent injury. Looking forward to next class!"
            </p>
            <span className="testimonial-author">JC — BJJ Fighter</span>
          </div>
          <div className="testimonial">
            <p>
              "Codey teaches from the heart. She's passionate and tailored the class to my background. I'm a professional dancer who knows which muscles need more attention but haven't always been able to target them well. Throughout the yoga class, as we flowed, her cues and guides helped me change that. Thank you!!."
            </p>
            <span className="testimonial-author">LW — Professional Dancer & Choreographer</span>
          </div>
          <div className="testimonial">
            <p>
              "Challenging class? Yes! Fun class, definite yes! Her sequences are creative, and she incorporates mobility, breathwork, meditation and even a savasana with her voice. For someone who hasn't been teaching long, the quality and passion is above average. Take the class!"
            </p>
            <span className="testimonial-author">Student</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <h2>Ready to show up?</h2>
        <p>Get in touch to book a class or ask a question.</p>
        <a href="mailto:codey.yoga@gmail.com" className="btn-dark">
          codey.yoga@gmail.com
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Codey Yoga</p>
      </footer>
    </>
  )
}

export default App
