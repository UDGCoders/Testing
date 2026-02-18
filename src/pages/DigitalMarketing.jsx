import React from "react";
import { useNavigate } from "react-router-dom";
import CenteredTexts from "../components/Services/CenteredTexts";
import ScrollCards from "../components/Cards/ScrollCards";
import Hero from "../components/Hero";
import SplitSection from "../components/About/SplitSection";
import SpliteSectionLeft from "../components/About/SpliteSectionLeft";
import FAQSection from "../components/FAQSection";
import useScrollTarget from "../hooks/useScrollTarget";
import ClientsTestinomials from "../components/ClientsTestinomials";
const DigitalMarketing = () => {
  const texts = ["Digital Marketing"];
  useScrollTarget();
  const navigate = useNavigate();
  const handleHeroScroll = (targetId) => {
    if (!targetId) return;
    const hash = targetId.startsWith("#") ? targetId : `#${targetId}`;
    navigate({ hash });
  };
  const goToContact = () => {
    navigate("/contactpage");
  };
  const listata=["Luxury brand experience for a concierge medical service",
    "SEO-optimized, conversion-led website",
    "Meta + Google Ads funnel with 7x ROI in first 60 days",
    "EMR & CRM integrations for automated lead handling",
    "Brand photography, tone of voice, and social storytelling"
  ];
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
            scrollTargetId="digital-marketing-start"
            onScrollTarget={handleHeroScroll}
          />
        </div>
      </div>
      <div id="scroll-down">
      <SplitSection bigTitle="NOT JUST CLICKS."
      smallTitle="WE CREATE BRANDS PEOPLE TRUST"
      primaryText="At RMAAC, we turn your business into a brand, and your brand into performance. From real estate to private healthcare, we blend narrative strategy with data-backed execution to build visibility that doesn’t just look good — it drives revenue. Whether you're launching a product or scaling a service, we offer more than impressions — we offer impact"
      btntxt="VIEW OUR WORK"
      onButtonClick={goToContact}
      src="/wp-content/uploads/Screenshot-2026-01-28-170622.webp"
      />
      </div>
      <SpliteSectionLeft src="/wp-content/uploads/Screenshot-2026-01-28-171837.webp"
      bigTitle="Strategy That Sells."
      smallTitle="Content That Connects. Results That Compound."
      primaryText="Marketing today isn’t about running ads — it’s about building an engine that works while you sleep. At RMAAC, our digital marketing services are rooted in deep brand thinking and scaled through real-time performance. Here’s how we help you grow:"

      />
      <SplitSection bigTitle="Flagship Case:"
      smallTitle="Premier Private GP"
      primaryText="When Premier Private GP, a private gp service in Surrey, UK approached us, they didn’t just need a marketing campaign — they needed a full digital identity. We worked from ground zero: creating their brand voice, designing every patient touchpoint, and launching a full-stack performance engine in less than 90 days."
      listHeading="Why Premier Private GP"
      listData={listata}
      src="/wp-content/uploads/Screenshot-2026-02-02-172345.webp"
      />
      <ClientsTestinomials bigTitle="REAL CLIENT" smallTitle=" VOICES" clientName="Mudassir Ahmed — Healthcare Founder, London"
      clientReview="We had the clinic, the vision but zero digital presence. RMAAC built it all from scratch from brand name, logo, story, website, ads, everything. They understood our patients, and it shows in how fast we filled up. Felt like we had a CMO on our side, not an agency."
      />
      <ClientsTestinomials clientName="Alondra — Founder, Virginia"
      clientReview="I’ve worked with agencies that chase trends — RMAAC isn’t that. They asked hard questions, understood our sales process, and gave us a digital strategy that fit our buyers. The difference? They don’t just market, they partner to grow."
      />
      <FAQSection/>
      <CenteredTexts
        bigTitle="LET'S BUILD VISIBILITY"
        smallTitle="THAT PERFORMS"
        primaryText="IF YOU'RE LOOKING FOR A DIGITAL PARTNER THAT BLENDS SHARP STRATEGY WITH GROUNDED STORYTELLING - YOU'RE IN THE RIGHT PLACE. LET'S TAKE YOUR BUISNESS FROM SEENTO SOUGHT-AFTER"
        btntxt="BOOK A DISCOVERY Call"
        onButtonClick={goToContact}
      />
      <ScrollCards />
    </>
  );
};

export default DigitalMarketing;
