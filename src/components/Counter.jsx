import React, { useState, useEffect, useRef } from "react";
import styles from "./Counter.module.css";

const Counter = ({ targetNumber, title, prefix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 } // Starts when 50% of the component is visible
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Using Math.floor to show whole numbers
            setCount(Math.floor(progress * targetNumber));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [hasStarted, targetNumber, duration]);

    return (
        <div className={styles.counterBox} ref={counterRef}>
            {count > 0 && (
                <span className={styles.number}>
                    {count.toLocaleString()}
                </span>
            )}
            <span className={styles.prefix}>{prefix}</span>
            <h2 className={styles.numberWrapper}>
            </h2>
            <h3 className={styles.title}>{title}</h3>
        </div>
    );
};

export default Counter;