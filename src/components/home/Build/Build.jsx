import React from 'react'
import styles from './Build.module.css'
import { useNavigate } from 'react-router-dom'

const Build = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className={`container ${styles.build}`}>
                <div className="text-center d-flex flex-column">
                    <h2 className={`${styles.h2}`}>Let's Build the Future Together</h2>
                    <p className={`${styles.description}`}>We're more than investors. We're creators shaping real estate, healthcare, and AI solutions that stand the test of time. Ready to explore what's next with RMAAC?</p>
                    <div className="btn">
                    <button
                        className={`${styles.button}`}
                        onClick={() => navigate('/contactpage')}
                    >
                        START THE CONVERSATION
                    </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Build
