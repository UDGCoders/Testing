import React from 'react'
import BigTitle from '../BigTitle'
import SmallTitle from '../SmallTitle'
import PrimaryText from '../PrimaryText'
import styles from './ContactSplitSection.module.css'
import ContactForm from './ContactForm'
const ContactSplitSection = () => {
    return (
        <>
            <div className={`container ${styles.contactSplitSection}`}>
                <div className="row">
                    <div className="col-md-6 border-md-1 border-end border-secondary">
                        <div className={`mt-md-5 `}>
                            <BigTitle bigTitle="Get In Touch" />
                            <SmallTitle smallTitle="With Us Today" />
                        </div>
                    <div className={`mt-3 mt-md-0${styles.w75}`}>
                            <PrimaryText primaryText="Whether you have a vision to build, design, or scale, we’re ready to listen. Our team is here to bring your ideas to life with clarity, care and precision." />
                        </div>
                    </div>
                    <div className="col-md-6 p-md-4 px-md-5 mt-3 mt-md-0">
                        <h4>Connect With RMAAC</h4>
                        <div className="mt-3">
                        <PrimaryText primaryText="Let’s start the conversation. Reach out to explore how RMAAC can support your goals across construction, design, or digital innovation and beyond." />
                        </div>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactSplitSection
