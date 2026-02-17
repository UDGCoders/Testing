import React from 'react'
import BigTitle from '../BigTitle'
import SmallTitle from '../SmallTitle'
import PrimaryText from '../PrimaryText'
import styles from './Solutions.module.css'
import CaseStudyCard from './CaseStudyCard'

const defaultCards = [
  {
    id: 'ai-vigil',
    picture: '/wp-content/uploads/Frame-2608314.webp',
    radialBackground: '#150958',
    bigTitle:
      'Delivering AI-Powered IT and Cybersecurity That Cut Downtime by 68% and Reduced Client IT Costs by Over 500K',
    text:
      'Through our end-to-end IT services spanning website builds, AI chatbot integration, secure cloud migrations, automation workflows, advanced cybersecurity, and ongoing IT support, we have helped our clients transform from tech-frustrated to tech-enabled.',
    hiddenTitle: 'How We Built Their IT Growth Engine',
    hiddenText:
      "From the first day we plugged in their systems to now running multi-industry campaigns, here's how the journey unfolded.",
    hiddenSections: [
      {
        title: 'Phase 1: Getting the Basics Locked In',
        text: 'We kicked things off by giving AI-Vigil the essentials like secure cloud access, 24/7 helpdesk, and rock-solid endpoint protection.',
      },
      {
        title: 'Phase 2: Taking It Industry-Wide',
        text: 'Once the foundation was solid, we helped AI-Vigil branch out into healthcare, finance, logistics, and real estate with automated reporting from day one.',
      },
      {
        title: 'Phase 3: Creating Products That Fit Like a Glove',
        text: 'We rolled out tailored solutions like MedShield for clinics, RetailShield for shops, and LogiDefend for logistics with AI-powered monitoring and instant alerts.',
      },
      {
        title: 'Phase 4: Making Cybersecurity Automatic',
        text: "Instead of 'hope nothing happens,' we shifted to proactive defense with AI threat detection, automatic patching, and reliable backup routines.",
      },
      {
        title: 'Phase 5: Growing the Brand',
        text: 'With their tech and security humming, we launched industry-targeted campaigns, security-focused messaging, and lead funnels.',
      },
    ],
  },
  {
    id: 'scaling-suite',
    picture: '/wp-content/uploads/Frame-2608314-1.webp',
    radialBackground: '#61DFFC',
    bigTitle:
      'How a SaaS Startup Launched a Fully Branded CRM and Secured 5 Industries in Under 8 Weeks',
    text:
      'ScalingSuite started as an idea for an all-in-one CRM and automation platform, but in two months, it became a fully launched SaaS brand with paying customers across insurance, legal, real estate, healthcare, and marketing.',
    hiddenTitle: 'The Journey We Built with ScalingSuite',
    hiddenText:
      'We handled the full build including brand identity, website, SaaS integrations, Google SSO, industry-specific pages, and social media rollout.',
    hiddenSections: [
      {
        title: 'Phase 1: Built the Brand',
        text: 'We created the logo, color system, Webflow site, and a distinct SaaS visual identity.',
      },
      {
        title: 'Phase 2: Made Signing Up Friction-Free',
        text: 'We wired Google SSO, connected CTAs to GHL, and built a clean pricing flow to increase trial starts.',
      },
      {
        title: 'Phase 3: Turned Features into Visual Stories',
        text: 'We designed product visuals, motion elements, and an explainer video so users understood value instantly.',
      },
      {
        title: 'Phase 4: Created a Home for Every Use Case',
        text: 'Each vertical got a tailored page showing how ScalingSuite solved specific operational problems.',
      },
      {
        title: 'Phase 5: Growing the Brand',
        text: 'We launched social branding, ad campaigns, and a resource hub to sustain lead flow.',
      },
    ],
  },
]

const hasText = (value) =>
  typeof value === 'string' ? value.trim().length > 0 : Boolean(value)

const CaseStudySection = ({
  bigTitle = 'The Digital Solutions',
  smallTitle = 'We Deliver',
  primaryText =
    'From fortified security to intelligent automation, these are the tools, systems, and strategies we put in place to help businesses run safer, faster, and smarter.',
  cards = defaultCards,
}) => {
  const resolvedCards = Array.isArray(cards) ? cards.filter(Boolean) : []
  const hasOddCardCount = resolvedCards.length % 2 === 1

  return (
    <>
      <div className={`container ${styles.solutions}`}>
        <div className={styles.titleRow}>
          {hasText(bigTitle) && <BigTitle bigTitle={bigTitle} />}
          {hasText(smallTitle) && <SmallTitle smallTitle={smallTitle} />}
        </div>
        {hasText(primaryText) && (
          <div className={styles.textWrap}>
            <PrimaryText primaryText={primaryText} />
          </div>
        )}
      </div>

      {resolvedCards.length > 0 && (
        <div className="container mt-md-5">
          <div className="row g-4">
            {resolvedCards.map((card, index) => {
              const isLastUnpaired =
                hasOddCardCount && index === resolvedCards.length - 1
              const isNewRow = index >= 2

              return (
                <div
                  className={`${card.colClassName || 'col-md-6'}${
                    isLastUnpaired ? ' mx-auto' : ''
                  }${isNewRow ? ' pt-md-4' : ''}`}
                  key={card.id || index}
                >
                  <CaseStudyCard {...card} />
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default CaseStudySection
