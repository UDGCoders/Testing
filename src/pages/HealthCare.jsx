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

  const healthCareCaseStudies = [
    {
      id: 'clinic-funnel',
      picture: '/wp-content/uploads/Frame-2608314-3.webp',
      radialBackground: '#ACB5F1',
      bigTitle:
        'From Newcomer to UK Trusted Healthcare Brand Serving 1,000+ Patients',
      text:
        'RMAAC has been part of Premier Private GP’s journey since day one, transforming it from an unknown name into a go-to private clinic in Surrey. This has been achieved through complete brand development, a custom-built website, SEO, targeted ad campaigns, email marketing, print materials, social media, chatbot automation, GHL integration, and a fully functional mobile app, we’ve built a digital and offline presence that works in perfect sync.',
      hiddenTitle: 'Execution Highlights',
      hiddenText:
        'The outcome came from connecting clinical operations and marketing into one measurable pipeline.',
      hiddenSections: [
        {
          title: 'Phase 1: Patient Journey Mapping',
          text: 'Defined a clear path from ad click to consultation booking with fewer drop-offs.',
        },
        {
          title: 'Phase 2: Intake Automation',
          text: 'Automated first-response, appointment confirmations, reminders, and missed-call recovery.',
        },
        {
          title: 'Phase 3: Reporting and Optimization',
          text: 'Added dashboard visibility for lead quality, no-show rates, and conversion performance.',
        },
      ],
    },
    {
      id: 'sehat-zindagi',
      picture: '/wp-content/uploads/Layer_1-5.webp',
      radialBackground: '#A1FFB2',
      bigTitle:
        'Connecting UK-Level Primary Care with Every Home in Pakistan. A telehealth platform making trusted healthcare accessible nationwide.',
      text:
        'Sehat Zindagi set out to raise the standard of primary care in Pakistan. We built a full digital ecosystem, from branding and UX to local SEO and marketing that reaches both urban and rural users. Multilingual support, mobile optimization, and integrated patient tools ensure quality care is always within reach., and retention messaging.',
      hiddenTitle: 'What We Delivered',
      hiddenText:
        'The project focused on trust, speed, and conversion in a sensitive healthcare context.',
      hiddenSections: [
        {
          title: 'Phase 1: Brand and Positioning',
          text: 'Created a trusted brand tone and visual system aligned with patient expectations.',
        },
        {
          title: 'Phase 2: Conversion-Focused Pages',
          text: 'Built service pages and booking flows designed to answer concerns and remove friction.',
        },
        {
          title: 'Phase 3: Retention Workflows',
          text: 'Set up post-visit communication and engagement automations to improve repeat visits.',
        },
      ],
    },
    {
      id: 'Simple',
      picture: '/wp-content/uploads/Frame-2608314-4.webp',
      radialBackground: '#00CC25',
      bigTitle:
        'SIMPL Health needed more than a brochure site, they needed a conversion-ready platform that spoke to patients, providers, and investors alike. RMAAC provided a custom, mobile-first UI/UX, ADA compliance, SEO content, and secure integrations for scheduling and demos. The result: a marketing-driven website that supports their vision and scales with their business.',
      text:
        'Sehat Zindagi set out to raise the standard of primary care in Pakistan. We built a full digital ecosystem, from branding and UX to local SEO and marketing that reaches both urban and rural users. Multilingual support, mobile optimization, and integrated patient tools ensure quality care is always within reach., and retention messaging.',
      hiddenTitle: 'What We Delivered',
      hiddenText:
        'The project focused on trust, speed, and conversion in a sensitive healthcare context.',
      hiddenSections: [
        {
          title: 'Phase 1: Brand and Positioning',
          text: 'Created a trusted brand tone and visual system aligned with patient expectations.',
        },
        {
          title: 'Phase 2: Conversion-Focused Pages',
          text: 'Built service pages and booking flows designed to answer concerns and remove friction.',
        },
        {
          title: 'Phase 3: Retention Workflows',
          text: 'Set up post-visit communication and engagement automations to improve repeat visits.',
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
            bigTitle="HEALTHCARE SYSTEMS"
            smallTitle="BUILT FOR BETTER PATIENT OUTCOMES"
            primaryText="From digital intake to patient engagement automation, we design healthcare workflows that improve care delivery and operational efficiency."
            primaryButtonText="VIEW HEALTHCARE WORK"
            secondaryButtonText="START YOUR HEALTHCARE PROJECT"
          />
        </div>
      </div>

      <Solutions
        cards={[
          {
            id: 1,
            imageSrc: '/wp-content/uploads/Group-1000008068-1.webp',
            imageAlt: 'Patient Journey Optimization',
            title: 'Patient Journey Optimization',
            text: 'We design digital patient journeys that reduce drop-offs and increase appointment completion rates.',
          },
          {
            id: 2,
            imageSrc: '/wp-content/uploads/Group-1000008032.webp',
            imageAlt: 'Clinical Workflow Automation',
            title: 'Clinical Workflow Automation',
            text: 'Automate intake, follow-ups, reminders, and routine coordination so teams can focus on care.',
          },
          {
            id: 3,
            imageSrc: '/wp-content/uploads/Group-1000008031.webp',
            imageAlt: 'Patient Support Chatbots',
            title: 'Patient Support Chatbots',
            text: 'AI assistants that handle FAQs, booking requests, and pre-visit guidance across channels.',
          },
          {
            id: 4,
            imageSrc: '/wp-content/uploads/Group-1000008030.webp',
            imageAlt: 'Healthcare Dashboards',
            title: 'Healthcare Dashboards',
            text: 'Live operational dashboards for clinic performance, pipeline visibility, and team workload.',
          },
          {
            id: 5,
            imageSrc: '/wp-content/uploads/Group-1000008029.webp',
            imageAlt: 'Patient CRM Systems',
            title: 'Patient CRM Systems',
            text: 'Purpose-built CRM setups for healthcare teams to manage lead flow, appointments, and retention.',
          },
          {
            id: 6,
            imageSrc: '/wp-content/uploads/Mask-group-1.webp',
            imageAlt: 'Security and Compliance',
            title: 'Security and Compliance',
            text: 'Secure infrastructure and device-level protection aligned to healthcare data sensitivity.',
          },
        ]}
      />

      <CaseStudySection
        bigTitle="Healthcare Case Studies"
        smallTitle="Built for Real Clinics"
        primaryText="See how we combine technology, automation, and growth strategy to deliver measurable improvement for healthcare teams."
        cards={healthCareCaseStudies}
      />

      <DigitalImpact />

      <Reasons
        bigTitle="Healthcare transformation"
        smallTitle="You can measure"
        inline
        cardColClass="col-md-5"
        variant="automation"
        cards={[
          {
            title: 'Patient Experience',
            text: 'Faster response times, clearer communication, and smoother booking journeys.',
            list: [
              'Automated reminders',
              'Missed-call recovery',
              'WhatsApp and email follow-ups',
              'Intake flow improvements',
              'Lower no-show rates',
            ],
          },
          {
            title: 'Clinical Operations',
            text: 'Systems that remove repetitive admin so teams can focus on care quality.',
            list: [
              'Workflow automation',
              'Task routing',
              'Team dashboards',
              'Performance tracking',
              'Operational alerts',
            ],
          },
          {
            title: 'Data and Compliance',
            list: [
              'Access control policies',
              'Secure cloud setup',
              'Endpoint protection',
              'Backup routines',
              'Risk monitoring',
            ],
          },
          {
            title: 'Growth and Outreach',
            list: [
              'Service-line landing pages',
              'Targeted healthcare campaigns',
              'Reputation support',
              'Lead quality reporting',
              'Conversion optimization',
            ],
          },
        ]}
      />

      <Fixes
        bigTitle2="Lower admin load"
        bigTitle1="30%"
        smallTitle="Faster patient response"
      />

      <CenteredTexts
        bigTitle="Ready to Build a Smarter Healthcare Operation?"
        primaryText="We can help you connect care delivery with secure systems, automation, and growth workflows that scale with confidence."
        btntxt="Let's Build Your Healthcare Stack"
      />
    </>
  )
}

export default HealthCare
