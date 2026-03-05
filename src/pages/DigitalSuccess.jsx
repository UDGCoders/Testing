import React from 'react'

import useScrollTarget from '../hooks/useScrollTarget';
import PortfolioHero from '../components/Portfolio/PortfolioHero';
import Solutions from '../components/Portfolio/Solutions';
import CaseStudySection from '../components/Portfolio/CaseStudySection';
import DigitalImpact from '../components/Portfolio/DigitalImpact';
import CompanyCardsCarousel from '../components/Portfolio/CompanyCardsCarousel'
import Reasons from '../components/Reasons';
import Fixes from '../components/Portfolio/Fixes'
import CenteredTexts from '../components/Services/CenteredTexts';
import { Helmet } from 'react-helmet-async';

const DigitalSuccess = () => {

  useScrollTarget();
  const digitalImpactRecords = [
    { id: 'brands-grown', targetNumber: 500, title: 'Websites', prefix: '+' },
    { id: 'campaigns-launched', targetNumber: 200, title: 'Paid Campaigns', prefix: '+' },
    { id: 'qualified-leads', targetNumber: 12, title: 'Adwords Budget Managed', prefix: 'X' },
    { id: 'seo-growth', targetNumber: 1000, title: 'SEO Campaigns', prefix: '+' },
    { id: 'markets-served', targetNumber: 100, title: 'Social Media Campaigns', prefix: '+' },
    { id: 'always-on-automation', targetNumber: 300, title: 'Clients', prefix: '+' },
  ]

  const digitalSolutionsCaseStudies = [
    {
      id: 'premier-private-gp',
      picture: '/wp-content/uploads/Frame-2608314-3.webp',
      radialBackground: '',
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
      radialBackground: '',
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

  const companySliderCards = [
    {
      id: 'premier-private-gp-slider',
      imageSrc: '/wp-content/uploads/Group-1000008048.webp',
      imageAlt: 'Premier Private GP',
      bigTitle: 'From Newcomer to UK Trusted Healthcare Brand Serving 1,000+ Patients..',
      primaryText:
        'RMAAC has been part of Premier Private GP’s journey since day one, transforming it from an unknown name into a go-to private clinic in Surrey. This has been achieved through complete brand development, a custom-built website, SEO, targeted ad campaigns, email marketing, print materials, social media, chatbot automation, GHL integration, and a fully functional mobile app, we’ve built a digital and offline presence that works in perfect sync.',
    },
    {
      id: 'shiptquick-slider',
      imageSrc: '/wp-content/uploads/Group-1000008049.webp',
      imageAlt: 'DevNest',
      bigTitle: `How RMAAC's DevNest Turned 7 App Ideas Into 100,000+ Downloads With 4.5-Star Ratings`,

      primaryText:
        `DevNest, powered by RMAAC's full-stack expertise, specializes in building mobile applications that users genuinely love. Using Flutter, Kotlin, and Jetpack Compose, we've launched successful apps across diverse markets from photo editing and e-commerce tools to Islamic guidance and maritime tracking. Every app is backed by market research, rigorous testing, strategic positioning, and ongoing optimization that keeps users engaged and ratings high.`,
    },
    {
      id: 'simpl-health-slider',
      imageSrc: '/wp-content/uploads/Group-1000008050.webp',
      imageAlt: 'assistpro',
      bigTitle: 'How RMAAC Built AssistPro University: A Complete LMS Platform Serving Executive Assistants.',
      primaryText:
       `AssistPro University represents RMAAC's expertise in educational technology and platform development. We delivered end-to-end Wordpress website development with integrated learning management system, structured e-learning modules covering essential VA skills, automated subscription billing, resource libraries with downloadable templates and mobile-responsive design for learning on-the-go.`,
    },
    {
      id: 'backify-slider',
      imageSrc: '/wp-content/uploads/Group-1000008052.webp',
      imageAlt: 'Trademark Shark',
      bigTitle: 'Building Trademark Shark: The Platform That Makes Brand Protection Simple for Entrepreneurs.',

      primaryText:
        `RMAAC created Trademark Shark's complete digital presence using WordPress development, strategic SEO, and CRM integration. We designed an intuitive platform where business owners can search trademarks, file applications, and manage their brand protection, all without needing a law degree. The result is a thriving service that helps Amazon sellers, startups, and growing businesses navigate trademark registration with confidence and clarity`,
    },
    {
      id: 'magic-ai-slider',
      imageSrc: '/wp-content/uploads/Group-1000008067.webp',
      imageAlt: 'Leo’s Construction',
      bigTitle: `How RMAAC Built Leo's Construction's WordPress Site That Now Generates Quality Leads for a 25-Year Painting Contractor.`,
  
      primaryText:
        `RMAAC developed Leo's Construction's complete WordPress website featuring integrated quote request forms, service-specific landing pages for interior, exterior, commercial and industrial painting, mobile-responsive design for on-site contractors, project gallery showcasing their work quality, and local SEO optimization targeting Tampa Bay area searches. The platform positions their decades of experience and partnerships with local builders, the City of Tampa, and State Department of Health, converting website visitors into residential and commercial painting clients.`
    },
    {
      id: 'ship-finder-slider',
      imageSrc: '/wp-content/uploads/Group-1000008053.webp',
      imageAlt: 'Scaling Suite',
      bigTitle: `How a SaaS Startup Launched a Fully Branded CRM and Secured 5 Industries in Under 8 Weeks`,

      primaryText:
`ScalingSuite started as an idea for an all-in-one CRM and automation platform, but in just two months, it became a fully launched SaaS brand with paying customers across insurance, legal, real estate, healthcare, and marketing sectors. We handled the full build like brand identity, website, SaaS integrations, Google SSO, industry-specific pages, and social media rollout.`
    },
    {
      id: 'ship-finder-slider',
      imageSrc: '/wp-content/uploads/Group-1000008066.webp',
      imageAlt: 'Scaling Suite',
      bigTitle: `Building Chief Detective's Website: A Premium Platform That Attracts Founders of Multi-Million Dollar DTC Brands.`,

      primaryText:
`RMAAC developed Chief Detective's complete digital presence with custom website development showcasing their work with MERIT, Avaline, and Versed, strategically designed landing pages addressing specific founder pain points like underperforming paid channels and limited creative bandwidth, integrated CRM system for managing high-ticket client relationships, and UI/UX enhancements that communicate sophistication and strategic depth. Every element positions Chief Detective as the go-to growth partner.`
    },
      
    {
      id: 'ship-finder-slider',
      imageSrc: '/wp-content/uploads/Group-1000008054.webp',
      imageAlt: 'cd',
      bigTitle: `Building Marc Illy's Digital Empire: The Complete Course Platform That Turned His $130K/Month Blueprint Into a Teachable System.`,

      primaryText:
`RMAAC developed The Illy Method platform that transformed Marc Illy from agency owner into course creator and educator. Through sophisticated website development, integrated learning management system, strategic course structure breaking down his exact methods into digestible modules, high-converting sales funnel featuring his Forbes TV appearance and real business results, automated student onboarding, and professional branding that reflects his journey working with NHL, Maserati, and Red Bull, we created a digital education brand that attracts serious entrepreneurs ready to replicate his success.`
    },
    {
      id: 'ship-finder-slider',
      imageSrc: '/wp-content/uploads/Group-1000008055.webp',
      imageAlt: 'cd',
      bigTitle: `Building TransCanada.Tech's Digital Platform: Website, E-Commerce Portal, and Social Presence for a Growing IT Services Provider.
`,

      primaryText:
`RMAAC developed TransCanada.Tech's complete online presence featuring professional website development with 10+ years of credibility showcased, integrated e-commerce system for hardware procurement and service purchasing, streamlined quote request and client onboarding process, social media management establishing them as Canadian IT authorities, service pages optimized for managed IT, cybersecurity, and fractional CTO searches, and client portal for seamless 24/7 support access. The result is a comprehensive digital infrastructure that positions TransCanada.Tech as the go-to MSP for businesses ready to stop managing IT and start innovating with it.`
    },
    {
      id: 'ship-finder-slider',
      imageSrc: '/wp-content/uploads/Group-1000008056.webp',
      imageAlt: 'cd',
      bigTitle: `Building Scootsee From Concept to Market: Complete Brand Launch for Canadian Smart Mobility Startup.
`,

      primaryText:
`RMAAC took Scootsee from idea to launch-ready startup with zero existing assets. We delivered end-to-end brand creation including naming strategy and visual identity, fully responsive Webflow website with rider and partner journeys, scalable CMS allowing their team to update without developers, complete marketing suite with social templates and city partner pitch materials, PR-ready visual kit for media coverage, and conversion-optimized page architecture. In just 5 weeks, Scootsee went from having no brand presence to a professional digital platform ready for pre-beta rollout, positioning them as a credible player in Canada's urban mobility market.

`
    },
    {
      id: 'ship-finder-slider',
      imageSrc: '/wp-content/uploads/Group-1000008057.webp',
      imageAlt: 'cd',
      bigTitle: `Crafting a Personal Brand That Reflects Confidence and Creativity.`,
  
      primaryText:
`RMAAC built Lara Gelya’s personal branding website on WordPress, a sleek, minimal portfolio showcasing her professional journey and creative work. From UI/UX design to SEO optimization, the site was structured to elevate her personal brand visibility, ensuring fast performance, clean aesthetics, and a strong digital identity.`
    },
    {
      id: 'ship-finder-slider',
      imageSrc: '/wp-content/uploads/Group-1000008058.webp',
      imageAlt: 'cd',
      bigTitle: `Powering Evo Studios’ Digital Presence with a Seamless Media Experience.
`,
   
      primaryText:
`RMAAC developed Evo Studios’ dynamic website for their media and video production business. The WordPress platform was enhanced with custom video streaming integrations and optimized hosting, providing visitors with smooth playback and quick access to services. The result, a creative hub that brings storytelling and technology together effortlessly.

`
    },
    {
      id: 'ship-finder-slider',
      imageSrc: '/wp-content/uploads/Group-1000008060.webp',
      imageAlt: 'cd',
      bigTitle: `Building Medics UK’s Trusted Healthcare Platform for Patients Nationwide.
`,
    
      primaryText:
`RMAAC delivered a WordPress-based healthcare website for Medics UK focused on patient experience and reliability. Featuring a streamlined appointment booking system, secure backend maintenance, and mobile-first design, the platform ensures accessibility, trust, and compliance setting up a new benchmark for digital healthcare presence

`
    },
    {
      id: 'ship-finder-slider',
      imageSrc: '/wp-content/uploads/Group-1000008061.webp',
      imageAlt: 'cd',
      bigTitle: `Designing a Luxury Real Estate Experience for Zen Apartments.`,
      
      primaryText:
`RMAAC created Zen Apartments’ digital presence through a high-end real estate website on WordPress. From refined UI/UX design to intuitive property listing management, every element was built to mirror the elegance of the apartments themselves, driving leads, showcasing spaces beautifully, and supporting seamless updates for property managers.`
    },
    {
      id: 'ship-finder-slider',
      imageSrc: '/wp-content/uploads/Group-1000008062.webp',
      imageAlt: 'cd',
      bigTitle: `Building MeanFunnels’ High-Performance Marketing Automation Ecosystem.
`,

      primaryText:
`RMAAC developed a Webflow-based marketing automation platform for MeanFunnels, integrating advanced funnel optimization, lead tracking, and SEO-driven landing pages. The end result, a scalable digital engine that converts data into decisions and clicks into customers.`
    },
    {
      id: 'ship-finder-slider',
      imageSrc: '/wp-content/uploads/Group-1000008063.webp',
      imageAlt: 'cd',
      bigTitle: `Empowering FractionalLed with a Data-Driven Consulting Platform.
`,

      primaryText:
`RMAAC designed and developed FractionalLed’s Webflow site, a consulting hub blending strategy, analytics, and performance optimization. With integrated dashboards and fast-loading design, it gives startups and enterprises a smarter way to access business insights and growth frameworks.

`
    },
    {
      id: 'ship-finder-slider',
      imageSrc: '/wp-content/uploads/Group-1000008064.webp',
      imageAlt: 'cd',
      bigTitle: `Designing a Digital Wellness Ecosystem with Sehat Zindagi.
`,
  
      primaryText:
`RMAAC developed Sehat Zindagi’s Webflow-based wellness platform, merging clean UI/UX design with patient management systems and self-assessment tools. Built for accessibility and trust, the website empowers users to take charge of their health journey through technology-led care and community awareness.`
    },
    {
      id: 'ship-finder-slider',
      imageSrc: '/wp-content/uploads/Group-1000008065.webp',
      imageAlt: 'cd',
      bigTitle: `Building a Beauty Brand That Shines Online.`,
     
      primaryText:
`RMAAC launched Alondra Lashes’ Shopify eCommerce store with integrated payment gateways, SEO optimization, and seamless mobile shopping. The platform reflects the brand’s premium aesthetic while making the buying experience smooth, secure, and stunning from first click to checkout.

`
    },
  ]

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
        btntxt="Explore Our MArketing Services"
        cards={[
          {
            id: 1,
            imageSrc: "/wp-content/uploads/branding.webp",
            imageAlt: "Web Development & Revamps",
            title: "Branding Strategy",
            text: "Building brands with a clear voice, sharp visuals, and a story worth remembering."
          },
          {
            id: 2,
            imageSrc: "/wp-content/uploads/website.webp",
            imageAlt: "Web Development & Revamps",
            title: "Website Revamp",
            text: "Taking what’s there, making it faster, cleaner, and built to convert from day one."
          },
          {
            id: 3,
            imageSrc: "/wp-content/uploads/copywriting.webp",
            imageAlt: "Web Development & Revamps",
            title: "Copywriting",
            text: "Turning ideas into words that move people and keep them clicking."
          },
          {
            id: 4,
            imageSrc: "/wp-content/uploads/seo.webp",
            imageAlt: "Web Development & Revamps",
            title: "SEO",
            text: "Turning ideas into words that move people and keep them clicking."
          },
          {
            id: 5,
            imageSrc: "/wp-content/uploads/campaigns.webp",
            imageAlt: "Web Development & Revamps",
            title: "Campaigns",
            text: "Launching targeted campaigns that don’t just get noticed, they get results."
          },
          {
            id: 6,
            imageSrc: "/wp-content/uploads/social-media.webp",
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
      <CompanyCardsCarousel cards={companySliderCards} />
      <DigitalImpact
        bigTitle="Our Digital Marketing Impact"
        records={digitalImpactRecords}
      />
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
