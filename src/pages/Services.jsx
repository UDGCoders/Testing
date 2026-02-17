import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import ScrollCards from "../components/Cards/ScrollCards";
import ServiceReason from "../components/Services/ServiceReason";
import ShapingSuccess from "../components/Services/ShapingSuccess";
import FAQ from "../components/FAQ";
import useScrollTarget from "../hooks/useScrollTarget";
const Services = () => {
  const texts = ["OUR SERVICES"];
  useScrollTarget();
  const navigate = useNavigate();
  const handleHeroScroll = (targetId) => {
    if (!targetId) return;
    const hash = targetId.startsWith("#") ? targetId : `#${targetId}`;
    navigate({ hash });
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
            scrollTargetId="services-start"
            onScrollTarget={handleHeroScroll}
          />
        </div>
      </div>
      <div id="services-start">
        <ScrollCards />
      </div>
      {/* 
      * what we offer
      * simplifeid card with redirection of thier page
      */}
      <ServiceReason
        bigTitle="Beyond Services We Deliver"
        smallTitle="Success"
      />
      {/*
        * Our Pillars 
        * double titled and the three pillars of rmaac
       */}
      <ShapingSuccess/>
      <FAQ/>
    </>
  );
};

export default Services;
