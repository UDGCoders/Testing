import React from "react";
import styles from "./ClientsTestinomials.module.css";
import BigTitle from "./BigTitle";
import SmallTitle from "./SmallTitle";
import PrimaryText from "./PrimaryText";
import WordPressImage from "./WordPressImage";
const ClientsTestinomials = (props) => {
  const titleLayoutClass =
    props.titleLayout === "column" ? styles.columnLayout : "";

  return (
    <>
      {(props.bigTitle && props.smallTitle) && (
  <div className={`${styles.topconatiner} ${titleLayoutClass}`.trim()}>
    {props.bigTitle && <BigTitle bigTitle={props.bigTitle} />}
    {props.smallTitle && <SmallTitle smallTitle={props.smallTitle} />}
  </div>
)}

      <div className={styles.outerWrap}>
        <div className={`container ${styles.container}`}>
          <div className={styles.content}>
            <h4 className={styles.cardHeading}> {props.clientName}</h4>
            <PrimaryText primaryText={props.clientReview} />
           <div className="image">
            <WordPressImage
              src="/wp-content/uploads/Frame-2608293.webp"
              alt={`${props.clientName || 'Client'} quotation mark`}
              className="img-fluid"
            /></div>
          </div>
          <div className="animatedpic">
              <WordPressImage
                src="/wp-content/uploads/1.webp"
                alt={`${props.clientName || 'Client'} profile`}
                className={styles.img}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsTestinomials;
