import React, { useMemo, useState } from 'react'
import styles from './CaseStudyCard.module.css'
import CaseStudyHiddenSection from './CaseStudyHiddenSection'

const CaseStudyCard = ({
  picture,
  radialBackground,
  cardBackground,
  text,
  expandText,
  hiddenTitle,
  hiddenText,
  hiddenSections,
  children,
  bigTitle,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasChildren = React.Children.count(children) > 0
  const resolvedHiddenText = hiddenText || expandText
  const hasHiddenContent =
    Boolean(hiddenTitle) ||
    Boolean(resolvedHiddenText) ||
    (Array.isArray(hiddenSections) && hiddenSections.length > 0)
  const canExpand = hasHiddenContent || hasChildren || Boolean(expandText)

  const cardStyle = useMemo(
    () => ({
      '--radial-color': radialBackground || 'rgba(255, 255, 255, 0.18)',
      ...(cardBackground ? { '--card-background': cardBackground } : {}),
    }),
    [radialBackground, cardBackground]
  )

  if (!picture && !text && !expandText && !hasChildren && !bigTitle) {
    return null
  }

  return (
    <button
      type="button"
      className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
      style={cardStyle}
      aria-expanded={canExpand ? isExpanded : undefined}
      onClick={() => {
        if (canExpand) {
          setIsExpanded((prev) => !prev)
        }
      }}
    >
      {picture ? (
        <div className={styles.media}>
          <img src={picture} alt={bigTitle || 'Case study'} />
        </div>
      ) : null}
      <div className={styles.body}>
        {bigTitle ? <h3 className={styles.title}>{bigTitle}</h3> : null}
        {text ? <p className={styles.text}>{text}</p> : null}
        {(hasHiddenContent || hasChildren) ? (
          <div className={styles.details} aria-hidden={!isExpanded}>
            <div className={styles.detailsInner}>
              {hasHiddenContent ? (
                <CaseStudyHiddenSection
                  title={hiddenTitle}
                  text={resolvedHiddenText}
                  sections={hiddenSections}
                />
              ) : null}
              {hasChildren ? <div className={styles.detailsContent}>{children}</div> : null}
            </div>
          </div>
        ) : null}
        {canExpand ? (
          <span className={styles.toggleText}>
            {isExpanded ? 'Show less' : 'Read more'}
          </span>
        ) : null}
      </div>
    </button>
  )
}

export default CaseStudyCard
