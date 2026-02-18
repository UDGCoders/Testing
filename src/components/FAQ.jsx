import React, { useState } from 'react';
import styles from './FAQ.module.css'; 
import BigTitle from './BigTitle';
import SmallTitle from './SmallTitle';

const faqData = [
  { id: 1, q: "What industries do you serve?", 
    a: "We serve businesses across real estate, construction, healthcare, IT, digital marketing, and app development. From builders managing multi-site projects to SMBs scaling with AI automations, we tailor solutions that meet the unique needs of each sector we work in." },
  { id: 2, q: "How do we get started with your services?",
     a: "It’s simple. Reach out through our contact form or book a free consultation. We’ll sit down with you to understand your goals, challenges, and timeline and then map out the best-fit solution, whether that’s IT automation, digital campaigns, or a new project build." },
  { id: 3, q: "How can your services benefit my business?", 
    a: "Our services are designed to save time, cut costs, and unlock growth. Whether it’s reducing IT downtime by 70%, running high-conversion ad campaigns, or helping a developer streamline investor reporting, we deliver outcomes that directly impact your bottom line." },
  { id: 4, q: "Do you offer customized solutions?", 
    a: "Yes. No two clients are the same, so we don’t force one-size-fits-all packages. Every engagement is tailored from building an AI chatbot that fits your sales process to creating a real estate portal designed around your investors’ needs." },
    { id: 5, q: "Do you provide support after the project is completed?", 
    a: "Absolutely. We don’t disappear after launch. Whether it’s ongoing IT monitoring, SEO upkeep, or campaign optimization, we provide long-term support to make sure your project keeps delivering results well beyond the initial handover." },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className={styles.faqContainer}>
        <div className="text-center">
            <div>
              <BigTitle bigTitle="FREQUENTLY ASKED"/>
              <SmallTitle smallTitle="Questions"/>
            </div>
        </div>
      {faqData.map((item, index) => (
        <div 
          key={item.id}
          className={`${styles.faqItem} ${activeId === item.id ? styles.isActive : ''}`}
          onClick={() => handleToggle(item.id)}
        >
          <div className="d-flex align-items-start">
            {/* 1. Number */}
            <span className={styles.number}>
              {(index + 1).toString().padStart(2, '0')}
            </span>

            {/* 2. Question & Answer Content */}
            <div className={styles.content}>
              <h4 className={styles.question}>{item.q}</h4>
              <div className={styles.answer}>
                {item.a}
              </div>
            </div>

            {/* 3. The Cross/Plus Icon */}
            <div className={styles.iconWrapper}>
              +
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
