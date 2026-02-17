import React from "react";
import styles from "./Team.module.css";
import TeamTabs from "./TeamTabs";
const Team = (props) => {
  return (
    <>
      <div className={`container ${styles.mt80}`}>
        <h2 className={`text-center ${styles.bigtitle}`}>
          {props.bigtitle}{" "}
          <span className={`${styles.smallTitle}`}>{props.smallTitle}</span>
        </h2>
        <TeamTabs />
      </div>
    </>
  );
};

export default Team;
