import React from "react";
import BigTitle from "../BigTitle";
import SmallTitle from "../SmallTitle";
import PrimaryText from "../PrimaryText";
import styles from "./SpliteSectionLeft.module.css";
import PrimaryButton from "../PrimaryButton";
const SpliteSectionLeft = (props) => {
  const hasButtonText =
    typeof props.btntxt === "string"
      ? props.btntxt.trim().length > 0
      : Boolean(props.btntxt);
  const hasMedia = Boolean(props.videoSrc || props.src);

  return (
    <>
      <div className={`container ${styles.spliteSectionLeft}`} id={props.id ? props.id : ""}>
        <div className="row align-items-md-center flex-column-reverse flex-md-row">
          {hasMedia && (
            <div className="col-md-6 justify-content-start d-flex align-items-md-center mt-3 mt-md-0">
              {props.videoSrc ? (
                <video
                  src={props.videoSrc}
                  className={`img-fluid ${styles.media} ${styles.video}`}
                  autoPlay={props.autoPlay}
                  loop={props.loop}
                  muted={props.muted}
                  playsInline={props.playsInline}
                  controls={props.controls}
                  preload={props.preload || 'none'}
                  poster={props.poster}
                />
              ) : (
                <img
                  src={props.src}
                  alt={props.alt || 'Diversifeid'}
                  className={`img-fluid h-100 ${styles.image} ${styles.media} ${props.disableGrayscale ? styles.noGrayscale : ''}`}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          )}
          <div className={hasMedia ? "col-md-6" : "col-12"}>
            {props.title2 && <PrimaryText primaryText={props.title2} />}
            {props.text2 && <PrimaryText primaryText={props.text2} />}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                margin: "0",
              }}
            >
              {/* check for this titles 
              if these are passed then show them  */}

              {props.bigTitle && <BigTitle bigTitle={props.bigTitle} />}
              {props.smallTitle && <SmallTitle smallTitle={props.smallTitle} />}
            </div>

            {/* check for the text 
            if avaialble then show with default style */}

            {props.primaryText && (
              <PrimaryText primaryText={props.primaryText} />
            )}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {props.present && (
                <div
                  className="d-inline-flex align-items-center"
                  style={{ cursor: "pointer" }}
                >
                  <span
                    style={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      border: "2px solid white",
                      fontSize: "18px",
                      marginRight: "15px",
                    }}
                  >
                    ▶
                  </span>
                  <span style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                    Watch Presentation
                  </span>
                </div>
              )}
            </div>
              {hasButtonText && <PrimaryButton btntxt={props.btntxt} />}
            {/*
             * it will show list heading
             * List style default dots
             */}
            {props.listData && props.listData.length > 0 && (
              <div className="mt-3">
                {/* Optional: Render a heading if it exists */}
                {props.listHeading && (
                  <h5 className={styles.listHeading}>{props.listHeading}</h5>
                )}

                <ul className={styles.customList}>
                  {props.listData.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpliteSectionLeft;
