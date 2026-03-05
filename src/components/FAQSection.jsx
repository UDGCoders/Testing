import React from 'react';
import styles from './FAQSection.module.css';
import BigTitle from './BigTitle';
import SmallTitle from './SmallTitle';

/* =========================
   Single FAQ Item
========================= */
const FAQItem = React.memo(({ number, question, answer }) => {
  return (
    <div className={styles.faqWrapper}>
      <div className={styles.faqContainer}>
        {/* Row: Number | Content | Arrow */}
        <div className="row align-items-center justify-content-between">
          
          {/* Number */}
          <div className="col-2">
            <div
              className={`${styles.faqIcon}`}
            >
              {number}
            </div>
          </div>

          {/* Question + Answer */}
          <div className="col-8 col-md-8">
            <div className={styles.textCenterBlock}>
              <h3 className={`${styles.faqQuestion} mb-0`}>
                {question}
              </h3>

              <div className={styles.faqAnswer}>
                <p className="mb-0">{answer}</p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="col-2 d-flex justify-content-end">
            <div
              className={` d-flex align-items-center justify-content-center`}
              aria-hidden="true"
            >
              <span className={styles.arrowIcon}>&rarr;</span>
            </div>
          </div>
        </div>

        {/* Bottom Animated Line */}
        <div className={styles.lineTrack}>
          <div className={styles.lineFill} />
        </div>
      </div>
    </div>
  );
});

/* =========================
   FAQ Section
========================= */
const FAQSection = ({ items }) => {
  const data =
    Array.isArray(items) && items.length > 0
      ? items
      : [
    {
      number: '01',
      question: 'We build for real business needs.',
      answer:
        'Every feature we ship has a job — whether it’s speeding up a process, securing a site, or capturing more data.',
    },
    {
      number: '02',
      question: 'We combine software, infrastructure, and product thinking.',
      answer:
        'Our teams don’t just code. They understand hardware, design, and the day-to-day needs of modern businesses.',
    },
    {
      number: '03',
      question: 'We plan for scale from day one',
      answer:
        'We build products and systems that stay stable, secure, and efficient as you grow — without expensive rebuilds later.',
    },
        ];

  return (
    <section className="container-fluid py-5">
      <div className={`container ${styles.faqContainerWrap}`}>
        <div className="row">
          
          {/* Section Title */}
          <div className="text-center mt-md-5 d-md-flex justify-content-center gap-3">
            <BigTitle bigTitle="WHY TEAMS WORK" />
            <SmallTitle smallTitle="WITH US" />
          </div>

          {/* FAQ Items */}
          <div className="col-12 justify-content-between">
            {data.map((item, index) => (
              <FAQItem
                key={item.id || item.number || index}
                number={item.number || String(index + 1).padStart(2, '0')}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
