import React, { lazy, Suspense } from 'react'
import { useNavigate } from "react-router-dom";
import Hero from '../components/Hero'
import { scrollCardsData } from '../constants/scrollCardsData';
import { Helmet } from 'react-helmet-async';    


const CenteredTexts = lazy(() => import('../components/Services/CenteredTexts'))
const ScrollCards = lazy(() => import('../components/Cards/ScrollCards'))
const SplitSection = lazy(() => import('../components/About/SplitSection'))
const SpliteSectionLeft = lazy(() => import('../components/About/SpliteSectionLeft'))
const ClientsTestinomials = lazy(() => import('../components/ClientsTestinomials'))
const FAQSection = lazy(() => import('../components/FAQSection'))

const AppsDevelopment = () => {
    const texts = ["Apps Development"];
    const navigate = useNavigate();
    const listdata = ["Luxury brand experience for a concierge medical service",
        "SEO-optimized, conversion-led website",
        "Meta + Google Ads funnel with 7x ROI in first 60 days",
        "EMR & CRM integrations for automated lead handling",
        "Brand photography, tone of voice, and social storytelling"
    ];
    const listdata1 = ["UI/UX from scratch based on competitive research",
        "Full AI model training and integration",
        "Backend infrastructure to handle high image-processing loads",
        "Google Play Store deployment and ASO strategy",
        "Monetization through freemium + premium feature tiers"
    ];
    const handleHeroScroll = (targetId) => {
        if (!targetId) return;
        const hash = targetId.startsWith("#") ? targetId : `#${targetId}`;
        navigate({ hash });
    };
    const appFaq = [
  { question: "We Own Delivery", answer: "Every product is treated like our own — from first commit to first customer.Every product is treated like our own — from first commit to first customer." },
  { question: "We Build for Monetization", answer: "No vanity features, no bloat — just user-first flows that convert." },
  { question: "We Operate Post-Launch", answer: "We don’t ghost you after launch. We optimize, iterate, and keep shipping." },
];

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
            <Suspense fallback={null}>
            <SplitSection bigTitle="We Don’t Just Build Apps"
                smallTitle="We Build Digital Products That Earn."
                primaryText="We don’t do half-builds or MVPs that sit idle. At RMAAC, we take on entire product lifecycles: research, UI/UX, development, deployment, monetization, and growth. Our team doesn’t just write clean code — we write growth stories."
                btntxt="LET'S BUILD AN APP TOGETHER"
                src="/wp-content/uploads/Frame-2608290.webp"
                id="scroll-down"
            />
            <SpliteSectionLeft src="/wp-content/uploads/Frame-2608297.webp"
                listheading="What we do best:"
                bigTitle="Full-Cycle Digital"
                smallTitle="Product Development"
                primaryText="From idea to installs to income — we do it all under one roof. Most dev shops stop at handoff. We don’t. With RMAAC, every app we launch is supported by real monetization plans, performance tracking, and infrastructure designed to scale."
                listData={listdata}
                reverseOnMobile={false}
            />
            <SplitSection bigTitle="Spotlight Product"
      smallTitle="Photo Enhancer"
      primaryText="Photo Enhancer App is more than a client project — it’s a RMAAC flagship build. Conceptualized, developed, deployed, and scaled entirely in-house, this AI-powered photo app crossed 10,000+ installs in just 6 months with zero external funding."
      listHeading="What We Did:"
      listData={listdata1}
      src="/wp-content/uploads/EVO-1-1.webp"
      />
      <ClientsTestinomials bigTitle="Founders. Startups. Studios." smallTitle="Here's Why They Work With RMAAC" titleLayout="column" clientName="Ali M — Solo Founder, Lahore"
      clientReview="I had an idea. That’s it. RMAAC helped me turn it into a working app, monetize it, and scale it to 1,000+ paid users in months."
      />
      <ClientsTestinomials clientName="Hassan T — Marketing Lead, Karachi"
      clientReview="What impressed me wasn’t the app, it was the growth mindset. The RMAAC team gave me a roadmap, metrics, and actual traction."
      />
            <FAQSection items={appFaq} />
            <CenteredTexts
                bigTitle="Got an Idea?"
                smallTitle="Or a Stalled App That Needs Real Traction?"
                primaryText="At RMAAC, we don’t chase downloads. We build digital assets that generate revenue, grow user bases, and prove market fit. Ready to build your next product — with a partner who sees it through?"
                btntxt="BOOK A STRATEGY Call"   
            />
            <ScrollCards cards={scrollCardsData} />
            </Suspense>
        </>
    )
}

export default AppsDevelopment
