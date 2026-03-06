import React from "react";
import { Link } from "react-router-dom";
import styles from "./Reasons.module.css";
import BigTitle from "./BigTitle";
import SmallTitle from "./SmallTitle";
import PrimaryText from "./PrimaryText";
import WordPressImage from "./WordPressImage";

const Reasons = (props) => {
  // const navigate = useNavigate();
  const {
    bigTitle,
    smallTitle,
    inline,
    titleDescription,
    cardColClass = "col-md-3",
    variant = "default",
    cards,
  } = props;

  const resolvedCards = Array.isArray(cards) && cards.length > 0
    ? cards
    : [
        {
          imageSrc: "/wp-content/uploads/677fc09f4f39272a4a8cec86_Group201009002650.svg_.png",
          imageAlt: "",
          title: "EXPERTISE & SPECIALIZATION",
          text: "We incubate and create new ventures with real-world relevance",
          buttonText: "Work with us",
          className: "",
        },
        {
          imageSrc: "/wp-content/uploads/677fc09f4f39272a4a8cec84_Group201000001874.svg_.webp",
          imageAlt: "",
          title: "RESULTS DRIVEN APPROACH",
          text: "We invest with aligned teams and strategic collaborators",
          buttonText: "Work with us",
          className: "border-md-end border-md-start border-dark",
        },
        {
          imageSrc: "/wp-content/uploads/677fc09f4f39272a4a8cec87_Group201009002709.svg-fill-1.webp",
          imageAlt: "",
          title: "SEAMLESS COLLABORATION",
          text: "We apply systems, automation, and market insight to grow efficiently",
          buttonText: "Work with us",
          className: "",
        },
      ];
  const rowGutterClass = variant === "automation" ? "g-4" : "g-0";

  return (
    <>
      <div
        className={`container-fluid ${styles.reasons} ${
          variant === "automation" ? styles.automation : ""
        }`}

      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8 col-12 text-center">
              <div
                className={`d-flex ${styles.titleGroup} ${
                  inline
                    ? "flex-row flex-wrap justify-content-center align-items-center"
                    : "flex-column align-items-center "
                }`}
              >
                <BigTitle bigTitle={bigTitle} />
                <SmallTitle smallTitle={smallTitle} />
              </div>
            </div>
            {titleDescription ? (
              <div className="col-12 d-flex justify-content-center">
                <div className={styles.titleDescription}>
                  <PrimaryText primaryText={titleDescription} />
                </div>
              </div>
            ) : null}
          </div>
          <div className={`row ${rowGutterClass} ${styles.cards} justify-content-center`}>
            {resolvedCards.map((card, index) => (
              <div
                key={`${card.title || "card"}-${index}`}
                className={`${cardColClass} col-12 ${card.className || ""} ${styles.card}`}
              >
                <div className={styles.cardInner}>
                  {card.imageSrc ? (
                    <WordPressImage src={card.imageSrc} alt={card.imageAlt || card.title || ''} />
                  ) : null}
                  {card.title ? <h2 className={styles.transform}>{card.title}</h2> : null}
                  {card.text ? <p className={styles.transform}>{card.text}</p> : null}
                  {Array.isArray(card.list) && card.list.length > 0 ? (
                    <ul className={styles.cardList}>
                      {card.list.map((item, itemIndex) => (
                        <li key={`${card.title || "item"}-${itemIndex}`}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                    <Link to="/contactpage">
                  {card.buttonText ? (
                    
                      <button
                        className={styles.cardButton}
                        // onClick={() => navigate("/contactpage")}
                      >
                        {card.buttonText}
                      </button>
                  ) : null}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reasons;
