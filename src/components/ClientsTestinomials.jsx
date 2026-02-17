import React from "react";
import styles from "./ClientsTestinomials.module.css";
import BigTitle from "./BigTitle";
import SmallTitle from "./SmallTitle";
import PrimaryText from "./PrimaryText";
const ClientsTestinomials = (props) => {
  return (
    <>
      {(props.bigTitle && props.smallTitle) && (
  <div className={` ${styles.topconatiner}`}>
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
            <img
              src="/wp-content/uploads/Frame-2608293.webp"
              alt="ratings" className="img-fluid"
              loading="lazy"
              decoding="async"
            /></div>
          </div>
          <div className="animatedpic">
              <img src="/wp-content/uploads/1.webp" alt="" className={styles.img} loading="lazy" decoding="async"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsTestinomials;
