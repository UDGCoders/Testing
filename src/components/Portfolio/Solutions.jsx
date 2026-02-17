import React from 'react'
import BigTitle from '../BigTitle'
import SmallTitle from '../SmallTitle'
import PrimaryText from '../PrimaryText'
import styles from './Solutions.module.css'
import PortfolioCard from './PortfolioCard'
import PrimaryButton from '../PrimaryButton'

const Solutions = ({ cards = [] }) => {
  return (
    <>
      <div className={`container ${styles.solutions}`}>
        <div className={styles.titleRow}>
          <BigTitle bigTitle="The Digital Solutions" />
          <SmallTitle smallTitle="We Deliver" />
        </div>
        <div className={styles.textWrap}>
          <PrimaryText primaryText=" From fortified security to intelligent automation, these are the tools, systems, and strategies we put in place to help businesses run safer, faster, and smarter." />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          {cards.map((card, index) => (
            <div className="col d-flex" key={card?.id || card?.title || index}>
              <PortfolioCard
                imageSrc={card?.imageSrc}
                imageAlt={card?.imageAlt}
                title={card?.title}
                text={card?.text}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
          <div className="content">
            <PrimaryButton btntxt="Explore Our Automation Solutions"/>
          </div>
      </div>
    </>
  )
}

export default Solutions
