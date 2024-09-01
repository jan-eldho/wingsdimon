import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div
        style={{ width: '100%', height: '300px',overflowX:'hidden' }}
        className='d-flex justify-content-center align-items-center flex-column mt-5 bg-primary footer'
      >
        <div
          className='d-flex justify-content-evenly align-items-center mb-5 w-100'
          style={{ color: 'white',overflowX:'hidden' }}
        >
          <div style={{ width: '400px', color: 'white' }}>
            <h4>
              <i
                style={{ color: 'white' }}
                className='fa-solid fa-heart fa-bounce me-3'
              ></i>
              Wings Diamonds
            </h4>
            <img
              src="https://jan-eldho.github.io/wings-decorations/images/wings-deco.jpg"
              height="120px"
              width="200px"
              alt="Decorative wings"
            />
          </div>

          <div className='d-flex flex-column'>
            <h4>Links</h4>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            <Link to='/testimonials' style={{ textDecoration: 'none', color: 'white' }}>Testimonials</Link>
            <Link to='/gallery' style={{ textDecoration: 'none', color: 'white' }}>Gallery</Link>
          </div>

          <div className='d-flex flex-column'>
            <h4>
              <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>Contact</Link>
            </h4>
            <Link to='https://maps.app.goo.gl/fHMDoEqykzNyoD258' style={{ textDecoration: 'none', color: 'white' }} target='_blank' rel='noopener noreferrer'>
              <i className='fa-solid fa-location-dot me-2'></i>
              <span>Mulanthuruthy</span>
            </Link>
            <Link to='tel:+917592943871' style={{ textDecoration: 'none', color: 'white' }}>
              <i className='fa-solid fa-phone me-2'></i>
              <span>Call: +91 75929 43871</span>
            </Link>
            <Link to='tel:+919633675442' style={{ textDecoration: 'none', color: 'white' }}>
              <i className='fa-solid fa-phone me-2'></i>
              <span>Call: +91 96336 75442</span>
            </Link>
            <Link to='mailto:wingsdecorations@gmail.com' style={{ textDecoration: 'none', color: 'white' }}>
              <i className='fa-solid fa-envelope me-2'></i>
              <span>wingsdecorations@gmail.com</span>
            </Link>
          </div>

          <div>
            <h4>Follow Us</h4>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='Enter Email Id' />
              <button className='btn btn-warning ms-2'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly mt-3'>
              <Link to='https://www.instagram.com' style={{ textDecoration: 'none' }} className='text-warning'>
                <i className='fa-brands fa-instagram fa-2x'></i>
              </Link>
              <Link to='https://www.youtube.com' style={{ textDecoration: 'none' }} className='text-warning'>
                <i className='fa-brands fa-youtube fa-2x'></i>
              </Link>
              <Link to='https://www.facebook.com' style={{ textDecoration: 'none' }} className='text-warning'>
                <i className='fa-brands fa-facebook fa-2x'></i>
              </Link>
              <Link to='https://twitter.com' style={{ textDecoration: 'none' }} className='text-warning'>
                <i className='fa-brands fa-twitter fa-2x'></i>
              </Link>
            </div>
          </div>
        </div>

        <p style={{ color: 'white' }}>
          ©{currentYear} All Rights Reserved. Design by{' '}
          <a
            href='https://www.instagram.com/me_emk_/?utm_source=qr'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            EMK
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
