import React from 'react';
import styles from './Partner.module.css';

const Partners = (props) => {
    return (
        <div className={`container-fluid ${styles.accordionContainer}`}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">

                        {/* Item 1 */}
                        <div className={styles.customItem}>
                            <div className="accordin">
                                <div className={styles.headerWrapper}>

                                    <div className={styles.arrowCircle}>&#8594;</div>
                                    <h3 className={styles.questionText}>{props.title}</h3>

                                </div>
                                <div className={styles.customBody}>
                                    <p>{props.description}</p>
                                </div>
                            </div>
                            <img
                                src={props.src}
                                alt="Partnership Visual" loading='lazy'
                                className={styles.staticImage}/>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Partners;