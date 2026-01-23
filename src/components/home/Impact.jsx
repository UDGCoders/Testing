import React from 'react'
import styles from './Impact.module.css'
import Partners from './Partners'
const Impact = () => {
    return (
        <>
            <div className={styles.impact}>
                <h2>Where We Make Impact</h2>
            </div>
            <Partners title="Real Estate Development" description="A premier residential project redefining community living in Nathia Gali" src="wp-content/uploads/2026/01/real.webp"/>
            <Partners title="Healthcare & Wellness" description="Personalized private healthcare & wellness screenings, Healthcare Tech Investments, Backing digital innovation in patient experience & clinic automation" src="wp-content/uploads/2026/01/health.webp"/>
            <Partners title="AI & Automation" description="Managed IT & AI automation services for SMEs, AI Tools & Conversational Bots, Custom solutions for healthcare, sales and operations" src="wp-content/uploads/2026/01/ai.webp"/>
            <Partners title="Technology & Mobile Innovation" description="RMAAC Technologies: Delivering GTM Strategy apps, and digital platforms under Matkalytics. Proven track record in successful app launches & monetization" src="wp-content/uploads/2026/01/evo.webp"/>
        </>
    )
}

export default Impact