import React from "react";
import styles from "./ServiceCard.module.css";

const ServiceCard = (props) => {
  return (
    <div className={styles.card}>
      <button className={styles.button}>&rarr;</button>
      <h2 className={styles.title}>{props.title}</h2>
      <div className="mt-5">
      <p className={styles.description}>
        {props.description}
      </p>
      </div>
      <ul className={styles.list}>
        <li>{props.li1}</li>
        <li>{props.li2}</li>
        <li>{props.li3}</li>
      </ul>
    </div>
  );
};

export default ServiceCard;