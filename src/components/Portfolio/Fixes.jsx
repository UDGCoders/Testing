import React from 'react'
import BigTitle from '../BigTitle'
import SmallTitle from '../SmallTitle'
import styles from './Fixes.module.css'

const Fixes = ({ bigTitle1, smallTitle, bigTitle2 }) => {
    return (
        <>
        
            <div className={`text-center container ${styles.fixesSection}`}>
                <div className="d-flex justify-content-center">
                    <BigTitle bigTitle={bigTitle1} />
                    <SmallTitle smallTitle={smallTitle} />
                </div>
                <BigTitle bigTitle={bigTitle2} />
            </div>
        </>
    )
}

export default Fixes
