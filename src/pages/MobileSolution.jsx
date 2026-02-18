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
const MobileSolution = () => {

  useScrollTarget();
  const mobileSolutionCards = [
    {
      id: 'clinic-funnel',
      picture: '/wp-content/uploads/Frame-2608314-3.webp',
      radialBackground: '#16cba190',
      bigTitle:
        'An AI background remover loved across the US, Canada, and the Netherlands',
      text:
        'Backify started with a simple mission. Give users a clean, crisp background removal tool without the mess. In a market flooded with complex editors, we focused on speed, accuracy, and ease of use. The result? An AI-powered app with over 100K installs and a loyal user base across multiple countries, praised for its one-tap results and professional-quality cutouts.',
      hiddenTitle: 'Story That Scales',
      hiddenText:
        '',
      hiddenSections: [
        {
          title: 'Phase 1: Discovery & Vision Alignment',
          text: 'We mapped out the real problem users faced. Slow, clunky photo editing and zeroed in on an AI-first solution that could deliver instant, accurate cutouts',
        },
        {
          title: 'Phase 2: AI Core Development',
          text: 'Trained a custom image segmentation model optimized for speed without sacrificing edge precision.',
        },
        {
          title: 'Phase 3: UX & Feature Layer',
          text: 'Added drag-and-drop simplicity, background replacement, batch editing, and high-res exports, all accessible in under 3 taps',
        },
         {
          title: 'Phase 4: Testing & Optimization',
          text: 'A/B tested edge detection accuracy, reduced load time by 38%, and optimized UI for both beginners and pros.',
        },
        {
          title: 'Phase 5: Launch & Scale',
          text: 'Deployed on both Android & iOS with localisation for 8 languages. Marketing push drove 500K+ downloads and a 4.0★ rating within 6 months',
        },
        
      ],
    },
    {
      id: 'magic-ai',
      picture: '/wp-content/uploads/Layer_1-5.webp',
      radialBackground: '#A1FFB2',
      bigTitle:
        'Incorporating a smarter way to erase unwanted objects in no time, powered by AI precision.',
      text:
        'Magic AI was built for creators who needed more than a background remover. They wanted full control over what stays and what goes in an image. Our AI detects and removes objects seamlessly, reconstructing the background with natural detail. With 50K+ installs and a stellar 4.5★ rating, it’s now a go-to tool for mobile photo editing worldwide.',
      hiddenTitle: 'Their Success Is Our Win',
      hiddenText:
        '',
      hiddenSections: [
        {
          title: 'Phase 1: Problem Identification',
          text: 'Recognized demand for object removal that doesn’t distort images.',
        },
        {
          title: 'Phase 2: Feature Integration',
          text: 'Added AI-assisted background editing and manual tools',
        },
        {
          title: 'Phase 3: Testing Across Use Cases',
          text: 'Optimized for portraits, landscapes, and product shots.',
        },
        {
          title: 'Phase 4: Global Rollout',
          text: 'Achieved high ratings and 3.2x repeat user engagement.',
        },
      ],
    },
    {
      id: 'Ship Finder',
      picture: '/wp-content/uploads/Frame-2608314-4.webp',
      radialBackground: '#00CC25',
      bigTitle:
        'Real-time vessel tracking for hobbyists and professionals alike.',
      text:
        'Ship Finder’s vision was to transform the way maritime data is accessed. Designed for both marine industry professionals and enthusiasts, it provides real-time tracking, port schedules, and weather updates in one sleek app. With eight core features, including detailed ship information and global coverage, it’s become a must-have tool for anyone navigating the seas.',
      hiddenTitle: 'Ocean Mapped in Pocket',
      hiddenText:
        '',
      hiddenSections: [
        {
          title: 'Phase 1: Industry & User Research',
          text: 'Partnered with maritime professionals to shape core needs.',
        },
        {
          title: 'Phase 2: Core Functionality Build',
          text: 'Implemented live AIS ship tracking, global vessel database, and marine weather updates.',
        },
        {
          title: 'Phase 3: Feature Expansion',
          text: 'Integration compass, altimeter, and detailed port information for both commercial and hobbyist use',
        },
         {
          title: 'Phase 4: Data Optimization & Security',
          text: 'Encrypted streams and compliance with global standards.',
        },
         {
          title: 'Phase 5: Release & Adoption',
          text: 'Launched globally, quickly gaining traction with ship spotters, logistics professionals, and port authorities.',
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
            bigTitle="APPS BUILT TO BE"
            smallTitle="DOWNLOADED AND USED"
            primaryText="Every tap, swipe, and download is designed for speed, security, and long-term love from your users"
            primaryButtonText="SEE OUR WORK"
            secondaryButtonText=""
          />
        </div>
      </div>
      <div id="scroll-down">
      <Solutions
              bigTitle="WHAT EVERY SUCCESSFUL APP"
        smallTitle="HAS IN ITS DNA"
        primaryText="Apps are built on a rock-solid foundation of security, compliance, and seamless performance. Here’s our “must-have” recipe for every mobile product we create"
        cards={[
          {
            id: 1,
            imageSrc: "/wp-content/uploads/Group-1000008068-1.webp",
            imageAlt: "Web Development & Revamps",
            title: "Secure Data Architecture",
            text: "Encryption at every interaction, from login to logout"
          },
          {
            id: 2,
            imageSrc: "/wp-content/uploads/Group-1000008032.webp",
            imageAlt: "Web Development & Revamps",
            title: "GDPR & CCPA Compliance",
            text: "Global regulations baked in, so you stay compliant "
          },
          {
            id: 3,
            imageSrc: "/wp-content/uploads/Group-1000008031.webp",
            imageAlt: "Web Development & Revamps",
            title: "Lightning-Fast Performance ",
            text: "Optimized for speed on every network, from 5G to 3G"
          },
          {
            id: 4,
            imageSrc: "/wp-content/uploads/Group-1000008030.webp",
            imageAlt: "Web Development & Revamps",
            title: "Cloud Storage & Transfer",
            text: "Safe, scalable, and accessible, so your app grows with your user base"
          },
          {
            id: 5,
            imageSrc: "/wp-content/uploads/Group-1000008029.webp",
            imageAlt: "Web Development & Revamps",
            title: "Intuitive UX & UI Design",
            text: "User-friendly interfaces so you know exactly what to do without a manual"
          },
          {
            id: 6,
            imageSrc: "/wp-content/uploads/Mask-group-1.webp",
            imageAlt: "Web Development & Revamps",
            title: "Cross-Platform Optimization",
            text: "iOS, Android, tablets, your app should shine everywhere."
          },

        ]}
      />
      </div>
      <CaseStudySection  bigTitle="SEE OUR " smallTitle="BOLDEST BUILDS" cards={mobileSolutionCards}/>
      <DigitalImpact />
      <Reasons
        bigTitle="That’s just the tip of the"
        smallTitle="Backstory"
        titleDescription="Clear strategy, flawless execution, and fine-tuning, a process that takes months of meticulous planning, coding, testing, and iteration."
        inline
        cardColClass="col-md-5"
        variant="automation"
        cards={[
          {

            title: "App Development",
            list: ["Rapid prototyping", "Custom UI/UX design", "Cross-platform builds (iOS & Android)", "Optimized performance", "Secure architecture"],

          },
          {

            title: "Compliance & Security",
            list:["GDPR & CCPA compliance","End-to-end encryption","Secure data storage","Safe third-party integrations","Regular vulnerability checks"],
          },
          {

            title: "User Engagement & Retention",
            list:["In-app notifications","Loyalty programs","Personalized user journeys","Push messaging strategies","Gamification features"],
          },
          {

            title: "AI & Advanced Features",
            list:["AI-powered object detection","Predictive search","Chatbots for in-app support","Automation workflows","Smart analytics"],
          },
        ]}
      />
      <Fixes bigTitle2="HIGHER USER RETENTION" bigTitle1="POWERING GROWTH" smallTitle="WITH 3X"/>
      <CenteredTexts bigTitle="Ready to Build the App Everyone’s Talking About?" primaryText="Let’s take your idea from concept to a top-performing product that wins users and the market." btntxt="BUILD MY APP NOW"/>
    </>
  )
}

export default MobileSolution
