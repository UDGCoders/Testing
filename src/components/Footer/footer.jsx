import React from 'react'
import styles from './Footer.module.css'
import PrimaryButton from '../PrimaryButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <>
            <div className={`container-fluid ${styles.footer}`}>
                <div className={`container `}>
                    <div className="row g-3 ">
                        <div className="col-sm-5">
                            <img src="http://rmaac.local/wp-content/uploads/2026/01/Logo-2-1.webp" alt="company logo" className='img-fluid' />
                            <p className={`${styles.txtdescription} w-75`}>From code to concrete — RMAAC reshapes industries through digital, healthcare, AI, and real estate innovation.</p>
                            <PrimaryButton btntxt="Get Started" />
                        </div>

                        <div className="col-sm-2 flex-grow-1">
                            <h5 className={`styles.heading`}>Quick Links</h5>
                            <ul className={`list-unstyled ${styles.linkList}`}>
                                <li>
                                    <a href="/" className=' text-decoration-none text-light-emphasis'>Home</a>
                                </li>
                                <li>
                                    <a href="/" className=' text-decoration-none text-light-emphasis'>About</a>
                                </li>
                                <li>
                                    <a href="/" className=' text-decoration-none text-light-emphasis'>Services</a>
                                </li>
                                <li>
                                    <a href="/" className=' text-decoration-none text-light-emphasis'>Portfolio</a>
                                </li>
                                <li>
                                    <a href="/" className=' text-decoration-none text-light-emphasis'>Case Studies</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-2  flex-grow-1">
                            <h5 className={`styles.heading`}>Quick Links</h5>
                            <p className={`${styles.txtdescription} w-75`}>
                                Plaza No. 31/32, 1st Floor, Westeria Road, Sector C, DHA 2 Islamabad.
                            </p>
                        </div>
                        <div className="col-sm-2 flex-grow-1">
                            <h5 className={`styles.heading`}>Quick Links</h5>
                            <ul className={`list-unstyled ${styles.linkList}`}>
                                <li>
                                    <a href="/" className=' text-decoration-none text-light-emphasis'>+92 309 188 8879</a>
                                </li>
                                <li>
                                    <a href="/" className=' text-decoration-none text-light-emphasis'>info@rmaacpk.com</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={`row ${styles.social} justify-content-between `}>
                        <div className="col-sm-6">
                            <p className={`${styles.txtdescriptions}`}>Copyright © 2025 Rmaacgroup. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-sm-6 ">
                            <ul className={`list-unstyled d-flex gap-3 justify-content-end ${styles.socialIcons}`}>
                                <li>
                                    <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                </li>
                                <li>
                                    <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                                </li>
                                <li>
                                    <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer