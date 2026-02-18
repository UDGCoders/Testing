import React from 'react'
import Hero from '../components/Hero';
import useScrollTarget from '../hooks/useScrollTarget'
import SplitSection from '../components/About/SplitSection';
import SpliteSectionLeft from '../components/About/SpliteSectionLeft';
import TimeLineAbout from '../components/TimeLineAbout/TimeLineAbout';
import Reasons from '../components/Reasons';
import Gallery from '../components/About/Gallery';
import Testimonials from '../components/About/Testimonials';
import Marquee from '../components/Marquee/Marquee';
const About = () => {
  useScrollTarget()

  const texts = ["About Rmaac"];
  const items = [
    {
      year: "2012",
      title: "OUR BEGINNING",
      description: "We launched in 2012, laying the foundation of RMAAC with a vision to shape industries through smart, future-driven projects.",
      image: "/wp-content/uploads/rmaac-group-image.webp"
    },
    {
      year: "2015",
      title: "REAL ESTATE EXPANSION",
      description: "By 2015, we moved into large-scale real estate, delivering both commercial and residential projects with Enclave Business Center marking a major milestone.",
      image: "/wp-content/uploads/real-estate-image.webp"
    },
    {
      year: "2019",
      title: "MARKALYTICS TAKES OFF",
      description: "In 2019, we launched Markalytics, a full-scale marketing agency that powered global campaigns, web platforms, and brand transformations.",
      image: "/wp-content/uploads/Group-1000008068.webp"
    },
    {
      year: "2020",
      title: "SCENIC RETREATS",
      description: "We expanded again in 2020, this time into luxury real estate, breaking ground with Zen Retreats in Barrian Valley, a project blending design and lifestyle.",
      image: "/wp-content/uploads/Group-1000008069.webp"
    },
    {
      year: "2023",
      title: "HEALTHCARE INNOVATION",
      description: "2023 saw the birth of Premier Private GP (PPGP), a private healthcare venture in UK redefining patient-first private care in Surrey.",
      image: "/wp-content/uploads/premier-image.webp"
    },
    {
      year: "2024",
      title: "APPS & DIGITAL TOOLS",
      description: "In 2024, we entered app development with products like Vividly, a creative suite featuring background remover, enhancer, and colorizer tools.",
      image: "/wp-content/uploads/vividly-image.webp"
    },
    {
      year: "2025",
      title: "APPS & DIGITAL TOOLS",
      description: "Now in 2025, we've launched AI-Vigil and beyond advancing SMBs with cybersecurity, AI chatbots, GHL integrations, and industry-specific automation projects, including a marine-tech app in progress.",
      image: "/wp-content/uploads/Group-1000008070.webp"
    },
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
          <source src="/wp-content/uploads/about-bg-video-2.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="header-content">
          <Hero
            animatedTexts={texts}
          />
        </div>
      </div>
      <div id="scroll-down">
      <SplitSection bigTitle="A DIVERSIFIED" 
      smallTitle="GROUP OF COMPANIES" 
      primaryText="We are a diversified group specializing in construction, investment, planning, digital marketing, and IT services. Our expertise drives business growth, resource optimization, and expanding partnerships across industries." src="wp-content/uploads/aboutPic.webp" 
      /></div>
      <SpliteSectionLeft bigTitle="ABOUT" 
      smallTitle="Us" 
      title2="From Foundation to Future - A Legacy of Vision" 
      src="/wp-content/uploads/about-us-1-scaled-1.webp"
      present="eatch"
      primaryText="RMAAC Group was founded with the belief that great companies are built by combining long-term vision with execution excellence. Our portfolio spans industries — yet every venture shares a common thread: impact, innovation, and sustainable growth. With strategic investments across real estate, private healthcare, Al automation, and mobile technologies, we lead with integrity and build with purpose." text2="We are builders at heart - whether its smart communities, meaningful health services, or intelligent software" />
      <TimeLineAbout items={items}/>
      <Reasons
      bigTitle="HERE ARE SOME REASONS"
      smallTitle="WHY YOU WILL LOVE RMAAC"
      cards={[
        {
          imageSrc: "/wp-content/uploads/677fc09f4f39272a4a8cec86_Group201009002650.svg_.png",
          imageAlt: "card",
          title: "EXPERTISE & SPECIALIZATION",
          text: "We incubate and create new ventures with real-world relevance",
          buttonText: "Work with us",
        },
        {
          imageSrc: "/wp-content/uploads/677fc09f4f39272a4a8cec84_Group201000001874.svg_.webp",
          imageAlt: "card",
          title: "RESULTS DRIVEN APPROACH",
          text: "We invest with aligned teams and strategic collaborators",
          buttonText: "Work with us",
          className: "border-md-end border-md-start border-dark",
        },
        {
          imageSrc: "/wp-content/uploads/677fc09f4f39272a4a8cec87_Group201009002709.svg-fill-1.webp",
          imageAlt: "card",
          title: "SEAMLESS COLLABORATION",
          text: "We apply systems, automation, and market insight to grow efficiently",
          buttonText: "Work with us",
        },
      ]}
      />
      <SplitSection smallTitle="OUR CEO" 
      primaryText="We've been at the forefront of innovation for over 25 years, delivering results that make a real difference for our clients. Whether it's construction, IT, or digital marketing, our diverse expertise fuels our success. Our focus is to help the businesses in all aspects of the business, from efficiently utilizing their available resources to improving those resources and building new ones. Our services are not limited to the fields mentioned above, but we also offer assistance in other fields where needed." src="wp-content/uploads/ceo.webp"
    />
    <Gallery/>
    <Testimonials/>
     <Marquee text=" * CONSTRUCTION * DESIGN * INNOVATION" speed={30} />
    </>
  )
}

export default About
