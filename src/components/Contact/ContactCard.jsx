import React from 'react'
import ContactInfo from './ContactInfo'
import styles from './ContactCard.module.css'
const ContactCard = ({ onLocationClick }) => {
    return (
        <>
            <div className={`container ${styles.cardSection}`}>
                <div className="row g-0 gap-0 justify-content-center align-items-center">
                    <div className="col-md-4">
                        <ContactInfo
                            title="EMAIL"
                            description="info@rmaacpk.com"
                            href="mailto:info@rmaacpk.com"
                        />
                    </div>
                    <div className="col-md-4">
                        <ContactInfo
                            title="PHONE"
                            description="+92 309 188 8879"
                            href="tel:+923091888879"
                        />
                    </div>
                    <div className="col-md-4">
                        <ContactInfo
                            title="LOCATION"
                            description="Plaza No. 31/32, 1st Floor,
Westeria Road, Sector C, DHA 2
Islamabad."
                            onClick={onLocationClick}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard
