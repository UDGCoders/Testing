import React from 'react'
import PortfolioHero from '../components/Portfolio/PortfolioHero';
import Solutions from '../components/Portfolio/Solutions';
import CaseStudySection from '../components/Portfolio/CaseStudySection';
import DigitalImpact from '../components/Portfolio/DigitalImpact';
import Reasons from '../components/Reasons';
import Fixes from '../components/Portfolio/Fixes'
import CenteredTexts from '../components/Services/CenteredTexts';
const Real = () => {
  const realEstateCaseStudies = [
    {
      id: 'enclave-launch',
      picture: '/wp-content/uploads/Frame-2608314-2.webp',
      radialBackground: '#00875B',
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
            smallTitle="That Free Up Your Smartest People"
            primaryText="We’ve helped real estate and construction brands go from blueprint to breakthrough — building everything from ground-up digital systems that keep projects moving, to marketing that gets buyers lining up before the foundation is set."
            primaryButtonText="VIEW OUR PROJECTS"
            secondaryButtonText=""
          />
        </div>
      </div>
      <Solutions
        cards={[
          {
            id: 1,
            imageSrc: "/wp-content/uploads/Group-1000008068-1.webp",
            imageAlt: "Web Development & Revamps",
            title: "Web Development & Revamps",
            text: "High-performance websites that are secure, responsive, and built to convertÂ from brochure sites to complex platforms."
          },
          {
            id: 2,
            imageSrc: "/wp-content/uploads/Group-1000008032.webp",
            imageAlt: "Web Development & Revamps",
            title: "AI Integrations",
            text: "Embed intelligence into your operations Â from predictive analytics to automated decision-making.Â "
          },
          {
            id: 3,
            imageSrc: "/wp-content/uploads/Group-1000008031.webp",
            imageAlt: "Web Development & Revamps",
            title: "Custom ChatbotsÂ ",
            text: "Conversational AI assistants that handle customer queries, book appointments, and collect leads 24/7.Â "
          },
          {
            id: 4,
            imageSrc: "/wp-content/uploads/Group-1000008030.webp",
            imageAlt: "Web Development & Revamps",
            title: "Business Dashboards",
            text: "Centralised dashboards that pull in live data from across your systems, so decision-making happens in real time."
          },
          {
            id: 5,
            imageSrc: "/wp-content/uploads/Group-1000008029.webp",
            imageAlt: "Web Development & Revamps",
            title: "CRM Solutions",
            text: "Tailored CRMs that track leads, manage clients, and automate follow-ups â€” all in one secure hub."
          },
          {
            id: 6,
            imageSrc: "/wp-content/uploads/Mask-group-1.webp",
            imageAlt: "Web Development & Revamps",
            title: "Endpoint SecurityÂ ",
            text: "Advanced device protection that stops malware, ransomware, and phishing before they impact your business."
          },

        ]}
      />
      <CaseStudySection
        bigTitle="Real Estate Case Studies"
        smallTitle="From Plan to Profit"
        primaryText="A closer look at how we combine positioning, digital execution, and automation to help projects launch faster and convert better."
        cards={realEstateCaseStudies}
      />
      <DigitalImpact />
      <Reasons
        bigTitle="That’s just the tip of the"
        smallTitle="Iceberg"
        inline
        cardColClass="col-md-5"
        variant="automation"
        cards={[
          {

            title: "IT & Cybersecurity",
            text: "We incubate and create new ventures with real-world relevance",
            list: ["24/7 endpoint protection", "AI-powered threat detection", "Dark web monitoring", "Advanced email security", "Compliance-ready backups"],

          },
          {

            title: "Automations",
            text: "We invest with aligned teams and strategic collaborators",
            list:["AI-driven CRM workflows","Automated onboarding sequences ","Smart reporting dashboards ","License & tool usage audits ","Predictive maintenance alerts "],
          },
          {

            title: "Cloud & Infrastructure ",
            list:["Microsoft 365 setup & optimization","Secure cloud migrations ","Network monitoring & patching ","Disaster recovery solutions ","Hardware-as-a-service "],
          },
          {

            title: "Campaigns & Outreach ",
            list:["Industry-specific lead funnels ","Automated email sequences ","Conversion-focused landing pages ","Multi-channel remarketing ","ROI tracking & reporting "],
          },
        ]}
      />
      <Fixes bigTitle2="£7K Back in Your Pocket." bigTitle1="68%" smallTitle="Faster Fixes."/>
      <CenteredTexts bigTitle="Ready to Turn Your IT into a Growth Story?" primaryText="Let’s ditch the endless “IT headaches” and build you a setup that actually fuels your business with airtight security, smart automations, and measurable wins." btntxt="Let’s Get Started"/>
    </>
  )
}

export default Real
