import React from 'react'
import FAQSection from '../components/FAQSection';
import ScrollCards from '../components/Cards/ScrollCards';
import CenteredTexts from '../components/Services/CenteredTexts';
import ClientsTestinomials from '../components/ClientsTestinomials';
import Hero from '../components/Hero';
import SplitSection from '../components/About/SplitSection';
import SpliteSectionLeft from '../components/About/SpliteSectionLeft';

const RealEstate = () => {
    const texts = ["REAL ESTATE DEVELOPMENT"];
    
    const listata = ["High ROI potential via short-term rental models ",
        "5-star hotel-grade amenities including rooftop dining, spa, and indoor pool ",
        "24/7 smart security, concierge services & seamless property management ",
        "Construction-led credibility with transparent project timelines and progress updates"
    ];
    const listata1 = ["Timeless architecture",
        "Sustainable materials",
        "Eco-conscious design"
    ];
    const appFaq = [
        { question: "Smart Living Infrastructure", answer: "From integrated IoT systems to predictive maintenance, our projects think ahead — so you don’t have to." },
        { question: "Sustainability as Standard", answer: "We design with the land, not against it — using low-impact materials, passive cooling, and renewable energy where possible." },
        { question: "Design with Depth", answer: "Our architecture draws from human psychology, not just blueprints — creating spaces that uplift mood, foster connection, and flow with natural rhythms." },
        { question: "Future-Ready Urbanism", answer: "We go beyond buildings to envision entire ecosystems: tech parks, housing zones, mixed-use communities, and infrastructure-ready plots." },

    ];
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

                    />
                </div>
            </div>
            <SplitSection bigTitle="WE DONT BUILD BUILDINGS"
                smallTitle="WE BUILD LEGACIES"
                primaryText="At RMAAC, we don't just market properties — we build them. From mountain retreats to urban towers, every project is backed by real timelines, real assets, and real returns. Whether you're diversifying your portfolio or making your first move in real estate, we're here to offer more than just listings — we offer clarity, credibility, and control."
                btntxt="See Our Projects"
                id="scroll-down"

                src="/wp-content/uploads/Frame-2608290-1-1.webp"
            />
            <SpliteSectionLeft src="/wp-content/uploads/Screenshot-2026-01-28-171837.webp"
                bigTitle="Spaces that Inspire."
                smallTitle="Structures that Last"
                primaryText="At RMAAC, every square foot tells a story of balance, elevation and quiet confidence"
                listData={listata1}
                listHeading="What We Do Best:"
            />
            <SplitSection bigTitle="Spotlight Project"
                smallTitle="Zen Retreats"
                primaryText="Zen Retreats is not a listing we promote. It's a flagship project we imagined, developed, and executed — from land acquisition to design, development approvals to delivery strategy. Nestled in the hills of Barian, Nathia Gali, this hotel apartment project embodies everything we believe real estate in Pakistan can be: bold, wellness-driven, and deeply rooted in nature"
                listHeading="Built-In Value"
                listData={listata}
                src="/wp-content/uploads/678782fd8c1db5502cb3fcc2_6785e0c7ceaa67d48a3abbef_portfolio2520img25204.webp.png"
            />
            <ClientsTestinomials bigTitle="REAL CLIENT" smallTitle="VOICES" clientName="Rizwan M — Mid-Career Banker, Karachi"
                clientReview="I've seen too many so-called 'smart' developments that are all branding, no backbone. What caught my eye with RMAAC's project wasn't the flashy bits — it was the ecosystem thinking. The Zen Retreat isn't just pretty — it's future-aligned"
            />
            <ClientsTestinomials clientName="Bilal A — Tech Consultant, Dubai"
                clientReview="Honestly, I wasn't planning to invest in Pakistan anytime soon. Too volatile. But the Enclave pitch made sense — high-demand zone, flexible commercial space, future-proof infrastructure. What sealed it was the transparency: construction timelines, utility provisions, the whole lot"
            />
            <FAQSection items={appFaq} />
            <CenteredTexts
                bigTitle="Let's Build Something "
                smallTitle="Real"
                primaryText="We’re not just selling square footage — we’re creating assets that grow with you. If you're looking to invest in projects backed by vision, delivery, and data — start with RMAAC."
                btntxt="BOOK A STRATEGY Call"
            />
            <ScrollCards />
        </>
    )
}

export default RealEstate
