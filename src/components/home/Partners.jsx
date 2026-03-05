import React from 'react';
import styles from './Partner.module.css';

const Partners = (props) => {
    return (
        <div className={`container-fluid ${styles.accordionContainer}`}>
            <div className={`container-fluid px-0 ${styles.partnerInner}`}>
                <div className="row">
                    <div className="col-12">

                        {/* Item 1 */}
                        <div className={styles.customItem}>
                            <div className="row w-100 align-items-center">
                                <div className="col-md-2">
                                    <div className={styles.arrowCircle}>&#8594;</div>
                                </div>
                                <div className="col-md-8 col-10">
                                    <div className="accordin">
                                        <div className={styles.headerWrapper}>
                                            <h3 className={styles.questionText}>{props.title}</h3>
                                        </div>
                                        <div className={styles.customBody}>
                                            <div className="mt-3">
                                            <p>{props.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 d-flex justify-content-end m-0">
                                    <div className="col-md-6">
                                    <img
                                        src={props.src}
                                        alt="Partnership Visual" loading='lazy'
                                        className={`img-fluid ${styles.staticImage}`}/>
                                        </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Partners;
