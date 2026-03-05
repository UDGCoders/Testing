import React from 'react'
import { useNavigate } from 'react-router-dom'
import useScrollTarget from '../hooks/useScrollTarget'
import SplitSection from '../components/About/SplitSection'
import SpliteSectionLeft from '../components/About/SpliteSectionLeft'
import BigTitle from '../components/BigTitle'
import SmallTitle from '../components/SmallTitle'
import PrimaryText from '../components/PrimaryText'
import PrimaryButton from '../components/PrimaryButton'
import styles from './OurApproach.module.css'
import ScrollCards from '../components/Cards/ScrollCards'
import { Helmet } from 'react-helmet-async'

const OurApproach = () => {
  useScrollTarget()

  const navigate = useNavigate()
  const scrollCardsData = [
  {
    id: 1,
    // title: 'Zen',
    src: '/wp-content/uploads/zen-1.webp',
    redirectTo: '/singlelayoutpage/zen',
  },
  {
    id: 2,
    // title: 'Ai vigil',
    src: '/wp-content/uploads/Property-1Frame-2608283.webp',
    redirectTo: '/singlelayoutpage/aivigil',
  },
  {
    id: 3,
    // title: 'ppgp',
    src: '/wp-content/uploads/Property-1Frame-2608284-1.webp',
    redirectTo: '/singlelayoutpage/ppgp',
  },
   {
    id: 4,
    // title: 'vividly',
    src: '/wp-content/uploads/Property-1Frame-2608284.webp',
    redirectTo: '/singlelayoutpage/vividly',
  },
  {
    id: 5,
    // title: 'Digital Marketing',
    src: '/wp-content/uploads/scootsee-1.webp',
    redirectTo: '/singlelayoutpage/scootsee',
  },
];

  return (
    <>
          <Helmet>
        <title>RMAAC</title>
        <meta name='description' content='Welcome to the site of most moderen world 3d websites will be built for you here'/>
        </Helmet>
    <div className={styles.page}>
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
          <source src="/wp-content/uploads/GettyImages-672335472-1.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="header-content">
          <div className={styles.heroSplit}>
            <div className="container">
              <div className="row">
                <div className={`col-12 col-md-6 ${styles.heroContent}`}>
                  <BigTitle bigTitle="Our Strategic" />
                  <div className={styles.heroTitleLine}>
                    <BigTitle bigTitle="Investment" />
                    <SmallTitle smallTitle="APPROACH" />
                  </div>
                  <div className="mt-3">
                  <PrimaryText primaryText="We partner where capability meets conviction." />
                  </div>
                  <BigTitle
                    bigTitle="Beyond Capital:"
                    className={styles.secondaryBigTitle}
                  />
                  <div className={styles.secondaryPrimaryText}>
                    <PrimaryText primaryText="We don't just invest capital -- we deploy strategy, systems, and execution support to scale real ventures. Whether it's an internal incubation or a strategic partnership, our approach is anchored in product-market fit, operational clarity, and long-term value creation." />
                  </div>
                  <PrimaryButton
                    btntxt="Explore Partnership Opportunities"
                    className={styles.heroButton}
                    onClick={() => navigate('/contactpage')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="approach-start" className={styles.investmentSection}>
        <div className="container">
          <div className={styles.investmentHeader}>
            <BigTitle bigTitle="Our Investment" />
            <SmallTitle smallTitle="Philosophy" />
          </div>

          <div className="row align-items-md-center">
            <div className="col-md-6">
              <img
                src="/wp-content/uploads/philosophy.webp"
                alt="Our Investment Philosophy"
                className={`img-fluid ${styles.investmentImage}`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-md-6">
              <div className={styles.investmentTitleLine}>
                <BigTitle bigTitle="At RMAAC," />
                <SmallTitle smallTitle="We believe sustainable ventures are built on three fundamentals:" />
              </div>
              <div className="mt-3">
                <PrimaryText primaryText="We selectively invest in or co-build digital-first businesses where our strategic involvement leads to exponential outcomes. Our vertical experience across real estate, healthcare, IT, and product ventures gives us the operational insight needed to support, not just fund, growth." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.strategicModelSection}>
        <div className="container text-center">
          <div className={styles.strategicTitleLine}>
            <BigTitle bigTitle="Our Strategic" />
            <SmallTitle smallTitle="Model" />
          </div>
          <div className={styles.strategicIntro}>
            <PrimaryText primaryText="We operate across three core engagement models:" />
          </div>
        </div>
      </section>

      <SpliteSectionLeft
        bigTitle="Built"
        primaryText="We incubate products that solve clearly defined problems with commercial viability. These are internally led ventures where we control the end-to-end lifecycle from market research to product development, brand creation, and monetization."
        src="/wp-content/uploads/shiptquick-container-1.webp"
        alt="Built model"
        disableGrayscale
        listHeading="Scope Includes:"
        listData={[
          'Ideation & validation',
          'Full-stack product development',
          'Brand & digital asset creation',
          'GTM strategy and execution',
          'Monetization architecture',
        ]}
      />

      <SplitSection
        bigTitle="Partner"
        primaryText="We enter select equity or revenue-share partnerships with external ventures where our operational involvement significantly improves business outcomes. This is ideal for early-to-mid-stage companies requiring execution capacity in product, tech, branding, or marketing."
        src="/wp-content/uploads/premier-1.webp"
        alt="Partner model"
        listHeading="Scope Includes:"
        listData={[
          'Technical architecture & system rebuilds',
          'Product-market fit refinement',
          'Marketing automation & digital performance',
          'Brand repositioning',
          'Tech-enabled operational support',
        ]}
      />

      <SpliteSectionLeft
        bigTitle="Scale"
        primaryText="For post-revenue businesses positioned for growth, we provide execution support in infrastructure, paid marketing, analytics, and platform development. Our scale model aligns with companies ready to expand market reach, standardize delivery, or prepare for external funding."
        src="/wp-content/uploads/ai-3.webp"
        alt="Scale model"
        disableGrayscale
        listHeading="Scope Includes:"
        listData={[
          'Technical architecture & system rebuilds',
          'Product-market fit refinement',
          'Marketing automation & digital performance',
          'Brand repositioning',
          'Tech-enabled operational support',
        ]}
      />

      <SplitSection
        bigTitle="What We Look For"
        primaryText="We assess both product potential and partnership viability. Our ideal engagements include:"
        src="/wp-content/uploads/shiptquick-container-1.webp"
        alt="What we look for"
        listData={[
          'A clearly defined customer pain point and addressable market',
          'Digital or tech-leveraged delivery model',
          'Demonstrated founder or operational capacity',
          'Room for execution partnership not just capital',
          'Strategic alignment with one or more RMAAC verticals',
        ]}
      />

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <BigTitle bigTitle="Let's Discuss Strategic Alignment" />
            <div className={styles.ctaText}>
              <PrimaryText primaryText="We're actively exploring high-potential partnerships in healthtech, proptech, SaaS, digital platforms, and product-based ventures. If you're building something scalable and require a partner with real delivery capacity, we'd like to hear from you." />
            </div>
            <PrimaryButton
              btntxt="Book a Strategic Call"
              className={styles.ctaButton}
              onClick={() => navigate('/contactpage')}
            />
          </div>
        </div>
      </section>
      <ScrollCards cards={scrollCardsData} />
    </div>
    </>
  )
}

export default OurApproach
