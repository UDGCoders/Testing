import styles from "./Marquee.module.css";

function Marquee({ text, speed = 10 }) {
  return (
    <div className="container">
    <div className={styles.marquee}>
      <span
        className={styles.text}
        style={{ animationDuration: `${speed}s` }}
      >
        {text}
        {text}
      </span>
      
    </div>
    </div>
  );
}

export default Marquee;
