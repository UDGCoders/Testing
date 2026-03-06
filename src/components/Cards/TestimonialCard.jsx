import React from "react";
import styles from "./TestimonialCard.module.css";
import PrimaryText from "../PrimaryText";
import WordPressImage from "../WordPressImage";
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
        <div className="mt-3">
                  <PrimaryText primaryText={props.says} />
        </div>
        <WordPressImage
          src="/wp-content/uploads/Frame-2608293.webp"
          alt={`${props.employee || 'Employee'} quotation mark`}
          className={styles.image}
        />
      </div>
    </>
  );
};

export default TestimonialCard;
