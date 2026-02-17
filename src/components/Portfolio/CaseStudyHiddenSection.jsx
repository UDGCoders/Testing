import React from 'react'
import BigTitle from '../BigTitle'
import PrimaryText from '../PrimaryText'
import styles from './CaseStudyHiddenSection.module.css'

const CaseStudyHiddenSection = ({ title, text, sections = [] }) => {
  const hasSections = Array.isArray(sections) && sections.length > 0

  if (!title && !text && !hasSections) {
    return null
  }

  return (
    <>
      {title ? <BigTitle bigTitle={title} className={styles.hiddenTitle} /> : null}
      {text ? <PrimaryText primaryText={text} /> : null}
      {hasSections
        ? sections.map((section, index) => (
            <div key={`${section.title || 'section'}-${index}`} className="py-3 border-1 border-bottom">
              {section.title ? (
                <BigTitle bigTitle={section.title} className={styles.hiddenTitle} />
              ) : null}
              {section.text ? <PrimaryText primaryText={section.text} /> : null}
            </div>
          ))
        : null}
    </>
  )
}

export default CaseStudyHiddenSection
