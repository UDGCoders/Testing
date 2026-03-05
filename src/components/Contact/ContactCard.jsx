import React from 'react'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ContactInfo from './ContactInfo'
import styles from './ContactCard.module.css'
const ContactCard = ({ onLocationClick }) => {
    return (
        <>
            <div className={`container ${styles.cardSection}`}>
                <div className="row g-3 gap-2 justify-content-around align-items-stretch">
                    <div className={`col-md-3 ${styles.cardCol}`} id={styles.progressbar}>
                        <ContactInfo
                            className={styles.cardContent}
                            icon={faEnvelope}
                            title="EMAIL"
                            description="info@rmaacpk.com"
                            href="mailto:info@rmaacpk.com"
                        />
                    </div>
                    <div className={`col-md-3 ${styles.cardCol}`} id={styles.progressbar}>
                        <ContactInfo
                            className={styles.cardContent}
                            icon={faPhone}
                            title="PHONE"
                            description="+92 309 188 8879"
                            href="tel:+923091888879"
                        />
                    </div>
                    <div className={`col-md-3 ${styles.cardCol}`} id={styles.progressbar}>
                        <ContactInfo
                            className={styles.cardContent}
                            icon={faLocationDot}
                            title="LOCATION"
                            description="Plaza No. 31/32, 1st Floor,
Westeria Road, Sector C, DHA 2 Islamabad."
                            onClick={onLocationClick}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard
