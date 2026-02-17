import React from "react";
import styles from "./TestimonialCard.module.css";
import PrimaryText from "../PrimaryText";
const TestimonialCard = (props) => {
  return (
    <>
      <div
        className={styles.card}
        style={{
          backgroundImage: 'url("/wp-content/uploads/1.webp")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top 12px right 20px",
        }}
      >
        <h4 className={styles.cardHeading}>{props.employee} </h4>
        <PrimaryText primaryText={props.says} />
        <img
          src="/wp-content/uploads/Frame-2608293.webp"
          alt="ratings"
          className={styles.image}
        />
      </div>
    </>
  );
};

export default TestimonialCard;
