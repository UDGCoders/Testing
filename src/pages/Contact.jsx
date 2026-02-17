import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Hero from '../components/Hero'
import useScrollTarget from '../hooks/useScrollTarget';
import ContactCard from '../components/Contact/ContactCard';
import ContactSplitSection from '../components/Contact/ContactSplitSection';

const Contact = () => {
    const texts = ["GET IN TOUCH"];
  const [showMap, setShowMap] = useState(false);
  useScrollTarget();
  const navigate = useNavigate();
  const handleHeroScroll = (targetId) => {
    if (!targetId) return;
    const hash = targetId.startsWith("#") ? targetId : `#${targetId}`;
    navigate({ hash });
  };
  const handleLocationClick = () => {
    setShowMap(true);
    const target = document.getElementById('contact-map');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const handleHideMap = () => {
    setShowMap(false);
  };
  return (
    <>
          <div className="headerbackground h-100">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
          preload="none"
          loading="lazy"
        >
          <source
            src="/wp-content/uploads/GettyImages-672335472-1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay"></div>
        <div className="header-content">
          {/* 
          * Animated text down to top animation
          */}
          <Hero
            animatedTexts={texts}
            scrollTargetId="contact-start"
            onScrollTarget={handleHeroScroll}
          />
        </div>
      </div>
            <div id="contact-start">
              <ContactCard onLocationClick={handleLocationClick} />
            </div>
            {showMap && (
              <section className="container my-5" id="contact-map">
                <div className="d-flex justify-content-end mb-3">
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    onClick={handleHideMap}
                  >
                    Hide Map
                  </button>
                </div>
                <div className="ratio ratio-16x9">
                  <iframe
                    title="RMAAC Location"
                    src="https://www.google.com/maps?hl=en&q=RMAAC%20Group%2C%201st%20Floor%2C%20CBA%20Main%20Commercial%2C%20Plaza%2C%2031%2F32%2C%20Westeria%20Rd%2C%20Sector%20C%20Sector%20A%2C%20DHA%20Phase%20II%2C%20Islamabad%2C%2045730%2C%20Pakistan&z=16&output=embed"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </section>
            )}
            <div className="container-fluid border-1 border-top border-secondary" style={{marginTop:'80px'}}>
            <ContactSplitSection/>
            </div>
    </>
  )
}

export default Contact
