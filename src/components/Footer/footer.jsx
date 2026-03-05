import React from 'react'
import styles from './Footer.module.css'
import PrimaryButton from '../PrimaryButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <>
            <div className={`container-fluid bg-black`}>
                <div className={`container-fluid px-0 ${styles.footer}`}>
                    <div className="row g-0">
                        <div className="col-sm-5">
                            <img src="/wp-content/uploads/Logo-2-1-1.webp" loading='lazy' alt="" className='img-fluid' />
                            <p className={`${styles.txtdescription} mt-3 w-75`}>From code to concrete — RMAAC reshapes industries through digital, healthcare, AI, and real estate innovation.</p>
                           <Link to ="/contactpage">
                            <PrimaryButton btntxt="Get Started" />
                           </Link>
                        </div>

                        <div className="col-sm-2 flex-grow-1 mt-md-0 mt-4">
                            <h5 className={`styles.heading`}>Quick Links</h5>
                            <ul className={`list-unstyled ${styles.linkList}`}>
                                <li>
                                    <a href="/" className=' text-decoration-none text-light-emphasis'>Home</a>
                                </li>
                                <li>
                                    <a href="/about" className=' text-decoration-none text-light-emphasis'>About</a>
                                </li>
                                <li>
                                    <a href="/servicespage" className=' text-decoration-none text-light-emphasis'>Services</a>
                                </li>
                                <li>
                                    <a href="/portfoliopage" className=' text-decoration-none text-light-emphasis'>Portfolio</a>
                                </li>
                                <li>
                                    <a href="/ourapproachpage" className=' text-decoration-none text-light-emphasis'>Case Studies</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-2  flex-grow-1">
                            <h5 className={`styles.heading`}>Address</h5>
                            <p className={`${styles.txtdescription} mt-md-4 w-75`}>
                                Plaza No. 31/32, 1st Floor, Westeria Road, Sector C, DHA 2 Islamabad.
                            </p>
                        </div>
                        <div className="col-sm-2 flex-grow-1">
                            <h5 className={`styles.heading`}>Get in touch</h5>
                            <ul className={`list-unstyled ${styles.linkList}`}>
                                <li>
                                    <a href="tel: +92 309 188 8879" className=' text-decoration-none text-light-emphasis'>+92 309 188 8879</a>
                                </li>
                                <li>
                                    <a href="mailTo:info@rmaacpk.com" className=' text-decoration-none text-light-emphasis'>info@rmaacpk.com</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={`row g-0 ${styles.social} justify-content-between `}>
                        <div className="col-sm-6">
                            <p className={`${styles.txtdescriptions}`}>Copyright © 2025 Rmaacgroup. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-sm-6 ">
                            <ul className={`list-unstyled d-flex gap-3 justify-content-end ${styles.socialIcons}`}>
                                <li>
                                    <a href="https://www.facebook.com/RmaacTechnologies/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/rmaac-group/"><FontAwesomeIcon icon={faTwitter} /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/rmaacgroup"><FontAwesomeIcon icon={faInstagram} /></a>
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
