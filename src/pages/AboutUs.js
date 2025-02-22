import React from 'react'
import logo from "../assets/logo.png"

const AboutUs = () => {
  return (
    <div className='content-body'>
      <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
      <h1 className="page-title">About Me</h1>
        <div className='container'>
        <div className='about-body'>
          <div className="about-image">
            <img src={logo} alt="Captured Movement Logo" className="abt-logo" />
          </div>

          <div className="aboutbody-text">
              <p>
                Welcome to Captured Movement, where we capture moments that last a lifetime. 
                Our passion for photography drives us to create stunning images that tell stories,
                evoke emotions, and preserve memories.
              </p>
              <p>
                With years of experience in portrait, event, and landscape photography, we strive to 
                bring creativity and professionalism to every shoot. Whether it's a wedding, a family
                gathering, or a personal portrait, we are dedicated to making your moments extraordinary.
              </p>
              <p>
                Lets create something beautiful together. Get in touch with us today!
              </p>
              </div>

        </div>

        </div>
        
      </div>
    </section>
    </div>
  )
}

export default AboutUs