import React from "react";
import styles from "./ServiceReason.module.css";
import BigTitle from "../BigTitle";
import SmallTitle from "../SmallTitle";
import ServiceCard from "../Cards/ServiceCard";

// Data for service cards is now centralized, making it easier to manage.
const servicesData = [
  {
    title: "Enterprise Automations & IT Solutions",
    description:
      "Building more than structures — we create investment-ready properties with lasting value and lifestyle-driven design. From site planning to handover, we cover the full development cycle.",
    li1: "Luxury serviced apartments & vacation homes",
    li2: "Full-cycle project planning & construction",
    li3: "Sales, investor marketing & after-sale support",
    isFlex: false,
  },
  {
    title: "IT Solutions",
    description:
      "BTech that works for you - from secure systems to scalable infrastructure, we deliver tailored solutions that drive business forward. Built for performance, security, and simplicity.",
    li1: "Custom software & enterprise platforms",
    li2: "IT infrastructure & security management",
    li3: "API integrations & cloud transformation",
    isFlex: true,
  },
  {
    title: "Digital Marketing",
    description:
      "We don't just market - we grow brands. Our strategies are data-backed, design-led, and focused on real business results across every channel.",
    li1: "Performance-driven ad campaigns",
    li2: "Brand strategy & creative storytelling",
    li3: "Email automation, SEO & content systems",
    isFlex: true,
  },
  {
    title: "Apps Development",
    description:
      "We design sleek, functional mobile apps that users love — and businesses rely on. From ideation to launch, we build with your growth in mind.",
    li1: "Android & iOS app development",
    li2: "UX-focused interface design",
    li3: "Scalable backend & API integration",
    isFlex: true,
  },
];

const ServiceReason = ({ bigTitle, smallTitle }) => {
  // For better separation of concerns, consider moving inline styles to the CSS module.
  const backgroundStyle = {
    backgroundImage:
      'url("/wp-content/uploads/677678301e8cf8c5c09af794_portfolio20line.svg-fill-1.webp")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className={styles["container-fluid"]} style={backgroundStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {/* Consider moving this inline style to the CSS module as well. */}
            <h2 className={styles.heading} style={{ color: "black" }}>
              <BigTitle bigTitle={bigTitle} />
              <SmallTitle smallTitle={smallTitle} />
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`col-md-6 ${service.isFlex ? "d-flex" : ""}`}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                li1={service.li1}
                li2={service.li2}
                li3={service.li3}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceReason;
