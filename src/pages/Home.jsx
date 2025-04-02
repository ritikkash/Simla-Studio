import React from 'react'
import Navbar from '../components/Navbar'
import Start from '../components/Start'
import About from '../components/About'
import MyWorks from '../components/Portfolio'
import Services from '../components/Services'
import ClientsShowcase from '../components/Clients.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Contact from '../components/Contact.jsx'


const Home = () => {
  return (
    <div >
      {/* Navigation Bar */}
      <Navbar />

      {/* Sections with matching IDs */}
      <section id="home">
        <Start />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        <MyWorks />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="clients">
        <ClientsShowcase />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home