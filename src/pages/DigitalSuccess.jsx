import React from 'react'
// import { useNavigate } from "react-router-dom";

import useScrollTarget from '../hooks/useScrollTarget';
import PortfolioHero from '../components/Portfolio/PortfolioHero';
import Solutions from '../components/Portfolio/Solutions';
import CaseStudySection from '../components/Portfolio/CaseStudySection';
import DigitalImpact from '../components/Portfolio/DigitalImpact';
import Reasons from '../components/Reasons';
import Fixes from '../components/Portfolio/Fixes'
import CenteredTexts from '../components/Services/CenteredTexts';
const DigitalSuccess = () => {

  useScrollTarget();
  const digitalSolutionsCaseStudies = [
    {
      id: 'premier-private-gp',
      picture: '/wp-content/uploads/Frame-2608314-3.webp',
      radialBackground: '#ACB5F1',
      bigTitle:
        'Transforming a Vision into a Trusted UK Healthcare Brand Serving Over 1,000 Patients',
      text:
        'We’ve been part of this healthcare clinic’s journey since day one. With our comprehensive services that enclosed the brand development, website development, content, ads, SEO, and conversion of clicks into loyal clients, we have helped Premier Private GP bring its online presence from a nondescript state to one that remains memorable.',
      hiddenTitle: 'Their Digital Journey',
      hiddenText:
        '',
      hiddenSections: [
        {
          title: 'Phase 1: Creating Strategy',
          text: 'Social media? Check. Website in the works? Double check. This was where the digital foundation was laid, and the first sparks of brand recognition began to fly.',
        },
        {
          title: 'Phase 2: Visibility with SEO',
          text: 'First, on-page SEO to get the house in order. Then off-page strategies to spread the word. Traffic started picking up as search rankings climbed.',
        },
        {
          title: 'Phase 3: Making Bookings with Meddbase',
          text: 'Integrated Meddbase, so patients could book without the back-and-forth. Smooth journeys mean happier clients (and fewer missed opportunities)',
        },
         {
          title: 'Phase 4: Targeted Ad Campaigns',
          text: 'Once the clinic opened its doors, we focused on generating leads and revenue through engaging social media content and targeted ad campaigns for key services. (XYZ ROI on launch campaigns)',
        },
         {
          title: 'Phase 5: Brand Essentials for Marketing',
          text: 'Posters, brochures, print , made sure the offline presence matched the online buzz',
        },
         {
          title: 'Phase 6: Email Marketing Momentum',
          text: 'Rolled out monthly newsletters, packed with updates, offers, and tips which quickly became one of the highest-converting channels.',
        },
         {
          title: 'Phase 7: CRM Power with GHL Integration',
          text: 'Implemented GoHighLevel to streamline patient communication, automate follow-ups, and track leads like never before',
        },
        {
          title: 'Phase 8: Always-On Support with Chatbot',
          text: 'Launched a smart chatbot to answer patient questions 24/7 and guide them to booking',
        },
         {
          title: 'Phase 9: Mobile App Launch',
          text: 'Launched a mobile app so patients can book and manage appointments with ease. The growth? Still accelerating',
        },
         {
          title: 'Today – Still Growing Strong',
          text: 'This is an ongoing journey. Today, the project keeps driving revenue and attracting more patients, with more strategies in the pipeline.',
        },
      ],
    },
    {
      id: 'shiptquick',
      picture: '/wp-content/uploads/Frame-2608314-1.webp',
      radialBackground: '#0c2826ab',
      bigTitle:
        'How a 3PL Avoided $250K in Downtime and Modernized Its Entire Warehouse IT in 6 Weeks',
      text:
        'ShiptQuick began with 120,000 sq. ft. of unused warehouse space in Indiana but today, it’s a fast-growing 3PL serving 15+ eCommerce brands with 10,000+ orders fulfilled monthly. We delivered a full digital transformation, including brand strategy, a high-converting web redesign, SEO, and marketing automation.',
      hiddenTitle: 'Mapping the Digital Growth of a 3PL Brand',
      hiddenText:
        '',
      hiddenSections: [
        {
          title: 'Phase 1: Brand Positioning',
          text: 'We started with a discovery session. This led to a clear brand positioning statement tailored for small-to-mid eCommerce businesses seeking reliable Midwest fulfillment',
        },
        {
          title: 'Phase 2: Website Revamp & SEO',
          text: 'Redesigned the website from the ground up to look and feel like a premium eCommerce brand. Developed it on a scalable CMS with mobile-first UX, optimized every page for search visibility, and created conversion-focused copy for each service.',
        },
        {
          title: 'Phase 3: UI/UX Design & Development',
          text: 'Implemented an intuitive interface that made it effortless for visitors to understand services, request quotes, and connect with the team',
        },
        {
          title: 'Phase 4: SEO & Technical Optimization',
          text: 'Went beyond on-page SEO with technical clean-up, site speed improvements, structured data, and backlink outreach to industry blogs and directories.',
        },
        {
          title: 'Phase 5: Automation & CRM Integration',
          text: 'Deployed a custom CRM to manage leads from first contact to onboarding. Integrated marketing automations including lead scoring and proposal follow-ups.',
        },
        {
          title: 'Phase 6 – Hosting & Maintenance',
          text: 'Provided lightning-fast hosting, ongoing technical maintenance, and quarterly SEO reviews to ensure ShiptQuick stays competitive',
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
            bigTitle="MEET THE PROOF"
            smallTitle="OF OUR DIGITAL IMPACT"
            primaryText="Every project here started as a goal and became a measurable success. Dive in to see how strategy, creativity, and execution come together to deliver."
            primaryButtonText="VIEW OUR WORK"
            secondaryButtonText="START YOUR SUCCESS STORY"
          />
        </div>
      </div>
      <div id="scroll-down">
      <Solutions
        cards={[
          {
            id: 1,
            imageSrc: "/wp-content/uploads/Group-1000008068-1.webp",
            imageAlt: "Web Development & Revamps",
            title: "Branding Strategy",
            text: "Building brands with a clear voice, sharp visuals, and a story worth remembering."
          },
          {
            id: 2,
            imageSrc: "/wp-content/uploads/Group-1000008032.webp",
            imageAlt: "Web Development & Revamps",
            title: "Website Revamp",
            text: "Taking what’s there, making it faster, cleaner, and built to convert from day one."
          },
          {
            id: 3,
            imageSrc: "/wp-content/uploads/Group-1000008031.webp",
            imageAlt: "Web Development & Revamps",
            title: "Copywriting",
            text: "Turning ideas into words that move people and keep them clicking."
          },
          {
            id: 4,
            imageSrc: "/wp-content/uploads/Group-1000008030.webp",
            imageAlt: "Web Development & Revamps",
            title: "SEO",
            text: "Turning ideas into words that move people and keep them clicking."
          },
          {
            id: 5,
            imageSrc: "/wp-content/uploads/Group-1000008029.webp",
            imageAlt: "Web Development & Revamps",
            title: "Campaigns",
            text: "Launching targeted campaigns that don’t just get noticed, they get results."
          },
          {
            id: 6,
            imageSrc: "/wp-content/uploads/Mask-group-1.webp",
            imageAlt: "Web Development & Revamps",
            title: "Social Media",
            text: "Keeping brands active, relevant, and impossible to scroll past."
          },

        ]}
      />
      </div>
      <CaseStudySection
        bigTitle="SEE OUR BOLDEST BUILDS"
        smallTitle=""
        primaryText=""
        cards={digitalSolutionsCaseStudies}
      />
      <DigitalImpact />
      <Reasons
        bigTitle="That’s just the tip of the"
        smallTitle="Iceberg"
        titleDescription="Great outcomes aren't magic - they're method. Behind every polished deliverable is months of precision work."
        inline
        cardColClass="col-md-5"
        variant="automation"
        cards={[
          {

            title: "Web Development",
            list: ["Quick web builds", "Custom landing pages", "SEO-ready structure", "Speed optimization", "Web and mobile tested product"],

          },
          {
            title: "Campaigns & Advertising",
            list:["Google Ads funnels","Retargeting setups","Market-specific keywords","CRO-optimised creatives","ROI tracking"],
          },
          {

            title: "Social Media",
            list:["Branded short videos","Multi-platform posting","Paid social campaigns","30-day content plans","Engagement boosts"],
          },
          {

            title: "AI & Automation",
            list:["AI chat bots","CRM workflows","GHL integrations","Analytics dashboards","Auto follow-ups"],
          },
        ]}
      />
      <Fixes bigTitle2="AND 55% FASTER CONTENT TURNAROUND" bigTitle1="FUEL GROWTH WITH 3X " smallTitle="THE QUALIFIED LEADS"/>
      <CenteredTexts bigTitle="Ready to Make Your Brand the Next Success Story?" primaryText="Let’s turn your vision into a digital powerhouse that drives measurable results." btntxt="START MY TRANSFORMATION"/>
    </>
  )
}

export default DigitalSuccess
