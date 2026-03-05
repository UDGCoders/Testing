import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import ScrollCards from "../components/Cards/ScrollCards";
import ServiceReason from "../components/Services/ServiceReason";
import ShapingSuccess from "../components/Services/ShapingSuccess";
import FAQ from "../components/FAQ";
import useScrollTarget from "../hooks/useScrollTarget";
import { scrollCardsData } from "../constants/scrollCardsData";
import { Helmet } from "react-helmet-async";
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
          <Helmet>
        <title>RMAAC</title>
        <meta name='description' content='Welcome to the site of most moderen world 3d websites will be built for you here'/>
        </Helmet>
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
      <div id="scroll-down">
        <ScrollCards cards={scrollCardsData} />
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
