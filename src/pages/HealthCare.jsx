import React from 'react'
import useScrollTarget from '../hooks/useScrollTarget'
import PortfolioHero from '../components/Portfolio/PortfolioHero'
import Solutions from '../components/Portfolio/Solutions'
import CaseStudySection from '../components/Portfolio/CaseStudySection'
import DigitalImpact from '../components/Portfolio/DigitalImpact'
import Reasons from '../components/Reasons'
import Fixes from '../components/Portfolio/Fixes'
import CenteredTexts from '../components/Services/CenteredTexts'

const HealthCare = () => {
  useScrollTarget()
  const digitalImpactRecords = [
    { id: 'patients-served', targetNumber: 500, title: 'Patients Reached', prefix: 'K+' },
    { id: 'healthcare-projects', targetNumber: 200, title: 'Healthcare Platforms Launched', prefix: '+' },
    { id: 'compliance-ready-systems', targetNumber: 8, title: 'In Healthcare Campaigns Managed', prefix: 'M+' },
    { id: 'care-workflow-automation', targetNumber: 300, title: 'Healthcare-specific ad campaigns', prefix: '+' },
    { id: 'countries-covered', targetNumber: 95, title: 'client retention rate', prefix: '%' },
  ]

  const healthCareCaseStudies = [
    {
      id: 'clinic-funnel',
      picture: '/wp-content/uploads/Frame-2608314-3.webp',
      radialBackground: '',
      bigTitle:
        'A HIPAA-compliant website built to earn trust, attract leads, and secure investor confidence.',
      text:
        'SIMPL Health needed more than a brochure site, they needed a conversion-ready platform that spoke to patients, providers, and investors alike. RMAAC provided a custom, mobile-first UI/UX, ADA compliance, SEO content, and secure integrations for scheduling and demos. The result: a marketing-driven website that supports their vision and scales with their business.',
      hiddenTitle: 'Consultations Made Easy',
      hiddenText:
        '',
      hiddenSections: [
        {
          title: 'The Challenge',
          text: 'A healthcare startup needed a website that would gain trust, attract patients, and pass every compliance check.',
        },
        {
          title: 'Our Approach',
          text: 'RMAAC designed a conversion-driven site with clear navigation, persuasive content, and full HIPAA compliance. Built to be found. Built to be trusted.',
        },
        
      ],
    },
    {
      id: 'sehat-zindagi',
      picture: '/wp-content/uploads/Layer_1-5.webp',
      radialBackground: '',
      bigTitle:
        'Connecting UK-Level Primary Care with Every Home in Pakistan. A telehealth platform making trusted healthcare accessible nationwide.',
      text:
        'Sehat Zindagi set out to raise the standard of primary care in Pakistan. We built a full digital ecosystem, from branding and UX to local SEO and marketing that reaches both urban and rural users. Multilingual support, mobile optimization, and integrated patient tools ensure quality care is always within reach., and retention messaging.',
      hiddenTitle: 'Breaking Barriers in Primary Healthcare Access',
      hiddenText:
        '',
      hiddenSections: [
        {
          title: 'The Challenge',
          text: 'Bring quality primary care to remote regions while keeping it accessible for urban patients too',
        },
        {
          title: 'Our Approach',
          text: 'A multilingual, mobile-first site that loads fast even in low-connectivity areas. Paired with targeted campaigns that spoke the local language, literally',
        },

      ],
    },
    {
      id: 'Simple',
      picture: '/wp-content/uploads/Frame-2608314-4.webp',
      radialBackground: '',
      bigTitle:
        'From Newcomer to UK Trusted Healthcare Brand Serving 1,000+ Patients.',
      text:
        'RMAAC has been part of Premier Private GP’s journey since day one, transforming it from an unknown name into a go-to private clinic in Surrey. This has been achieved through complete brand development, a custom-built website, SEO, targeted ad campaigns, email marketing, print materials, social media, chatbot automation, GHL integration, and a fully functional mobile app, we’ve built a digital and offline presence that works in perfect sync.',
      hiddenTitle: 'The Journey So Far',
      hiddenText:
        '',
      hiddenSections: [
        {
          title: 'The Challenge',
          text: 'Launch a new private GP clinic in Surrey and turn it into a recognisable, trusted healthcare provider, all while making patient bookings, improving retention, and streamlining the patient journey',
        },
        {
          title: 'Our Approach',
          text: 'We developed the brand identity of the clinic as the ground up, including a logo and site, as well as SEO and paid campaigns. Integrated Meddbase so booking appointments is a smooth process, introduced GHL to automatically follow up on patients, rolled out monthly email marketing, and created print and social content to keep the brand front-of-mind. To elevate convenience, we launched the Premier GP mobile app and added an AI-powered chatbot for 24/7 patient assistance',
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
          <source src="/wp-content/uploads/automations-bg-1.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="header-content">
          <PortfolioHero
            bigTitle="INNOVATIVE HEALTHCARE "
            smallTitle="SYSTEMS DELIVERED"
            primaryText="Every tap, each click, and every scroll built for patients, providers, and peace of mind"
            primaryButtonText="SEE OUR WORK"
            secondaryButtonText=""
          />
        </div>
      </div>
      <div id="scroll-down">
      <Solutions
        btntxt="Explore Our Healthcare Solutions"
              bigTitle="NO ROOM FOR GUESSWORK"
        smallTitle=" FOR WHAT'S IMPORTANT"
        primaryText="Built for trust, speed, and compliance, every RMMAC solution starts with a foundation you can stake your reputation on"
        cards={[
          {
            id: 1,
            imageSrc: '/wp-content/uploads/secure-patient-data.webp',
            imageAlt: 'Patient Journey Optimization',
            title: 'Secure Patient Data Systems',
            text: 'End-to-end encryption so every record stays private, from appointment to archive.',
          },
          {
            id: 2,
            imageSrc: '/wp-content/uploads/regulatory.webp',
            imageAlt: 'Clinical Workflow Automation',
            title: 'Regulatory-Ready Compliance',
            text: 'HIPAA, GDPR, or local health laws, we bake it in from day one',
          },
          {
            id: 3,
            imageSrc: '/wp-content/uploads/fast-performance.webp',
            imageAlt: 'Patient Support Chatbots',
            title: 'Fast Performance',
            text: 'Optimized to load in seconds, even on low-bandwidth hospital networks.',
          },
          {
            id: 4,
            imageSrc: '/wp-content/uploads/cloud-infrastructure.webp',
            imageAlt: 'Healthcare Dashboards',
            title: 'Cloud-First Infrastructure',
            text: 'Scalable, secure storage that grows with your patient base.',
          },
          {
            id: 5,
            imageSrc: '/wp-content/uploads/intuitive-patient.webp',
            imageAlt: 'Patient CRM Systems',
            title: 'Intuitive Patient & Provider Experience',
            text: 'Interfaces that feel effortless for everyone, no manuals required.',
          },
          {
            id: 6,
            imageSrc: '/wp-content/uploads/cross-device.webp',
            imageAlt: 'Security and Compliance',
            title: 'Cross-Device Compatibility',
            text: 'From desktops to tablets to mobiles, your platform works everywhere, every time',
          },
        ]}
      />
      </div>
      <CaseStudySection
        bigTitle="SEE OUR "
        smallTitle="BOLDEST BUILDS"
        primaryText=""
        cards={healthCareCaseStudies}
      />

      <DigitalImpact
        bigTitle="RESULTS LOVED AND VALUED"
        records={digitalImpactRecords}
      />

      <Reasons
        bigTitle="Smarter Healthcare,"
        smallTitle="One Step At A Time"
        primaryText="All the solutions we create to meet the healthcare industry are Research and compliance-driven, as well as patient-focused. It is the process of planning, developing, experimenting and perfecting it to make it safe, smooth and effective."
        inline
        cardColClass="col-md-5"
        variant="automation"
        cards={[
          {
            title: 'Healthcare Solution Development',
              list: [
              'Prototype to validate medical workflows',
              'Custom UI/UX designed for patients & practitioners',
              'Cross-platform compatibility (desktop, mobile, tablets)',
              'Optimized performance for remote & low-bandwidth areas',
            ],
          },
          {
            title: 'Compliance & Security',
            list: [
              'HIPAA, GDPR & CCPA compliance built-in',
              'End-to-end encryption for sensitive health data',
              'Secure hosting & cloud storage',
              'Safe integration with EMR/EHR and lab systems',
              'Regular security audits & vulnerability checks',
            ],
          },
          {
            title: 'Patient Engagement & Retention',
            list: [
              'Online appointment booking & management',
              'Automated reminders for visits & medication',
              'Personalized health portals for patients',
              'Push/email notifications for follow-ups & care plans',
            ],
          },
          {
            title: 'AI & Advanced Features',
            list: [
              'Chatbots for 24/7 patient support',
              'Workflow automation for clinics & hospitals',
            ],
          },
        ]}
      />

      <Fixes
        bigTitle2="THAT'S OUR BUILD"
        bigTitle1="PATIENT TRUST, TECHNOLOGY,"
        smallTitle="AND 3X RETENTION"
      />

      <CenteredTexts
        bigTitle="Your Turn To Go Live"
        primaryText="Whether it’s an app, a patient portal, or a complete healthcare marketing strategy — we’ll make sure it launches right and grows fast."
        btntxt="BUILD & MOVE"
      />
    </>
  )
}

export default HealthCare
