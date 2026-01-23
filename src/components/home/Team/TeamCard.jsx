import React from 'react';
import styles from './TeamCard.module.css';

const TeamCard = ({ name, role, description, img }) => {
    return (
        <div className={`${styles.mainCard}`}>
            {/* Sub-card: Prominent identifying info */}
            <div className={styles.subCard}>
                <div className="d-flex gap-4">
                    <div className="image w-25">
                        <img src={img} alt=" Team Member" className='rounded-circle img-fluid'/>
                    </div>
                    <div className="text d-flex flex-column justify-content-around">
                        <span className={styles.role}>{role}</span>
                        <h3 className={styles.name}>{name}</h3>
                    </div>
                </div>
            </div>

            {/* Main body: Secondary info */}
            <div className={styles.contentArea}>
                <p className={styles.description}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default TeamCard;