import React from 'react'
import styles from './CeoMeasures.module.css'
import Counter from '../../Counter'
import WordPressImage from '../../WordPressImage'

const CeoMeasures = (props) => {
  return (
    <>
    <div className={`container-fluid ${styles['container-fluid']}`}>
        <div className="container">
            <div className="row g-5">
                <div className="col-sm-6">
                    <h2 className={styles.bigtitle}>{props.bigtitle}</h2>
                    <h2 className={styles.smallTitle}>{props.smallTitle}</h2>
                    <div className="row border-bottom mt-md-5 mt-3">
                        <div className="col-6 border-end p-3">
                            <Counter title="YEARS OF GROWTH" targetNumber={10} prefix="+"/>
                        </div>
                        <div className="col-6 p-3">
                            <Counter title="Flagship Sectors" targetNumber={5}/>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-6 border-end p-3">
                            <Counter title="Projects Completed" targetNumber={200} prefix="+"/>
                        </div>
                        <div className="col-6 p-3">
                            <Counter title=" Value Created" targetNumber={3} prefix='M+'/>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-6 border-end p-3">
                            <Counter title="across 3 Continents" prefix="IT"/>
                        </div>
                    </div>
                    {/* <Counter title="YEARS OF GROWTH" targetNumber={10} prefix="+"/> */}
                </div>
                <div className="col-sm-6 d-flex flex-column justify-content-end">
                    <WordPressImage src="/wp-content/uploads/Frame-2608359.webp" alt="Ceo measures visual" className='img-fluid' loading='lazy' />
                    <p className="text-center pb-4">
                        We've been at the forefront of innovation for over 25 years, delivering results that make a real difference for our clients. Our focus is to help the businesses in all aspects of the business, from efficiently utilizing their available resources to improving those resources and building new ones.  
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CeoMeasures
