import React from 'react'
import PortfolioHero from '../components/Portfolio/PortfolioHero';
import Solutions from '../components/Portfolio/Solutions';
import CaseStudySection from '../components/Portfolio/CaseStudySection';
import DigitalImpact from '../components/Portfolio/DigitalImpact';
import Reasons from '../components/Reasons';
import Fixes from '../components/Portfolio/Fixes'
import CenteredTexts from '../components/Services/CenteredTexts';
const Real = () => {
  const digitalImpactRecords = [
    { id: 'units-sold', targetNumber: 40, title: 'Property & development websites launched', prefix: '+' },
    { id: 'projects-delivered', targetNumber: 70, title: 'Construction project tech setups delivered', prefix: '+' },
    { id: 'lead-conversion', targetNumber: 800, title: 'In property sales driven through our marketing campaigns', prefix: 'K+' },
    { id: 'qualified-investors', targetNumber: 40, title: 'Developers, agents & firms we’ve partnered with', prefix: '+' },
  ]

  const realEstateCaseStudies = [
    {
      id: 'enclave-launch',
      picture: '/wp-content/uploads/Frame-2608314-2.webp',
      radialBackground: '',
      bigTitle:
        'How Zen Retreats Sold Out 70% of Units Before Completion and Built a Steady Rental Revenue Stream.',
      text:
        'Zen Retreats began as an idea for full-serviced luxury apartments in Nathigali. With the structure now almost complete and 70% of units already sold, it’s on track to become one of the region’s most profitable hospitality ventures. We led the project end-to-end from brand identity and investor marketing to a sleek booking-ready website, property visuals, SEO, and a custom rental portal.',
      hiddenTitle: 'How We Built Their Growth Engine',
      hiddenSections: [
        {
          title: 'Phase 1: From Concept to Reality',
          text: 'Zen Retreats started as an idea: a premium, full-serviced apartment experience in the hills of Nathigali. We began by defining the brand essence.',
        },
        {
          title: 'Phase 2: Brand & Visual Identity',
          text: 'We designed a clean, sophisticated logo, selected a calming colour palette, and curated photography that captures both the location’s and modern elegance.',
        },
        {
          title: 'Phase 3: Digital Foundation',
          text: 'We built a fast, mobile-optimised website with seamless booking capabilities, integrated property details, image galleries, and location highlights',
        },
        {
          title: 'Phase 4: Marketing & Search Visibility',
          text: 'We implemented technical + on-page SEO, wrote compelling property descriptions, and set up social channels with consistent branding',
        },
        {
          title: 'Phase 5: Guest Portal Integration',
          text: 'After launch, we added a fully functional guest portal allowing customers to manage reservations, request services, and access construction information',
        },
      ],
    },
  ]

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
            src="/wp-content/uploads/automations-bg-1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay"></div>
        <div className="header-content">
          <PortfolioHero
            bigTitle="Meet the PROOF"
            smallTitle="OF OUR DIGITAL IMPACT"
            primaryText="We’ve helped real estate and construction brands go from blueprint to breakthrough — building everything from ground-up digital systems that keep projects moving, to marketing that gets buyers lining up before the foundation is set"
            primaryButtonText="VIEW OUR PROJECTS"
            secondaryButtonText="START YOU SUCCESS STORY"
          />
        </div>
      </div>
      <div id="scroll-down">
      <Solutions
        btntxt="Explore Our Real Estate Services"
        bigTitle="THE DIGITAL RECIPE"
        smallTitle="WE WORK ON"
        primaryText=""
        cards={[
          {
            id: 1,
            imageSrc: "/wp-content/uploads/construction-1.webp",
            imageAlt: "Web Development & Revamps",
            title: "Construction Tech Setup",
            text: "From project management software to site monitoring tools, we put the tech in place"
          },
          {
            id: 2,
            imageSrc: "/wp-content/uploads/branding-positioning.webp",
            imageAlt: "Web Development & Revamps",
            title: "Branding & Positioning",
            text: "We craft an identity buyers remember from logo and colour palette to a story that sells"
          },
          {
            id: 3,
            imageSrc: "/wp-content/uploads/website-portals.webp",
            imageAlt: "Web Development & Revamps",
            title: "Website & Property Portals",
            text: "High-converting sites that showcase listings, capture leads, and keep deals moving"
          },
          {
            id: 4,
            imageSrc: "/wp-content/uploads/ai-automation.webp",
            imageAlt: "Web Development & Revamps",
            title: "AI & Automation",
            text: "Integrations that handle client follow-ups, project tracking, and data insights"
          },
          {
            id: 5,
            imageSrc: "/wp-content/uploads/marketing.webp",
            imageAlt: "Web Development & Revamps",
            title: "Marketing Campaigns",
            text: "From pre-launch buzz to sold-out openings, our campaigns drive the right buyers"
          },
          {
            id: 6,
            imageSrc: "/wp-content/uploads/seo-1.webp",
            imageAlt: "Web Development & Revamps",
            title: "SEO & Local Visibility",
            text: "We make sure you’re found by investors and partners exactly when they’re searching."
          },

        ]}
      />
      </div>
      <CaseStudySection
        bigTitle="SEE OUR "
        smallTitle="BOLDEST BUILDS"
        primaryText=""
        cards={realEstateCaseStudies}
      />
      <DigitalImpact
        bigTitle="Our Real Estate Impact"
        records={digitalImpactRecords}
      />
      <Reasons
        bigTitle="That’s just the tip of the"
        smallTitle=" Blueprint"
        inline
        cardColClass="col-md-5"
        variant="automation"
        cards={[
          {

            title: "Property Development",
            list: ["Full-scale project planning to tech integration", "Website & portal builds for developments", "SEO-ready property listings", "Fast-loading, mobile-tested designs", "3D virtual tours & interactive floorplans"],

          },
          {

            title: "Marketing & Lead Generation",
            list:["Google Ads funnels for pre-sales","Retargeting to re-engage potential buyers","Market-specific keyword targeting","Conversion-optimised creatives","ROI tracking for every campaign"],
          },
          {

            title: "AI & Smart Tech",
            list:["AI-driven CRM workflows for agents","Automated follow-ups with prospects","Predictive analytics for property trends","Chatbots for 24/7 lead capture","Smart reporting dashboards"],
          },
        ]}
      />
      <Fixes bigTitle2="MARKETING TURNAROUNDS" bigTitle1="SELL PROPERTIES FASTER WITH 3X" smallTitle="MORE QUALIFIED LEADS AND 55% QUICKER"/>
      <CenteredTexts bigTitle="Ready to Turn Your IT into a Success  Story?" primaryText="Let’s turn your vision into a digital powerhouse that drives measurable results." btntxt="STAR MY TRANSFORMATION"/>
    </>
  )
}

export default Real
