import {React} from 'react'
import BigTitle from '../BigTitle'
import SmallTitle from '../SmallTitle'
import PrimaryText from '../PrimaryText'
import styles from './SplitSection.module.css'
import PrimaryButton from '../PrimaryButton'
const SplitSection = (props,ref) => {
  const hasMedia = Boolean(props.videoSrc || props.src)
  const hasButtonText =
    typeof props.btntxt === 'string'
      ? props.btntxt.trim().length > 0
      : Boolean(props.btntxt)

  return (
        <>
        <div className={`container ${styles.splitSection}`} >
        <div className="row align-items-md-center flex-column-reverse flex-md-row" id={props.id ? props.id : ""}>
            <div className={hasMedia ? 'col-md-6' : 'col-12'}>
                <BigTitle bigTitle={props.bigTitle}/>
                {props.smallTitle && <SmallTitle smallTitle={props.smallTitle}/>}
                <div className="mt-3">
                {props.primaryText && <PrimaryText primaryText={props.primaryText}/>}
                </div>
                {hasButtonText && <PrimaryButton btntxt={props.btntxt}/>}
                {props.listData && props.listData.length > 0 && (
              <div className="mt-3">
                {/* Optional: Render a heading if it exists */}
                {props.listHeading && (
                  <h5 className={styles.listHeading}>{props.listHeading}</h5>
                )}

                <ul className={styles.customList}>
                  {props.listData.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            </div>
            {hasMedia && (
              <div className="col-md-6 justify-content-end d-flex mb-3 mb-md-0">
                  {props.videoSrc ? (
                    <video
                      src={props.videoSrc}
                      className={`img-fluid ${styles.media} ${styles.video}`}
                      autoPlay={props.autoPlay}
                      loop={props.loop}
                      muted={props.muted}
                      playsInline={props.playsInline}
                      controls={props.controls}
                      preload={props.preload || 'none'}
                      poster={props.poster}
                    />
                  ) : (
                    <img
                      src={props.src}
                      alt={props.alt || 'Diversifeid'}
                      className={`img-fluid ${styles.image} ${styles.media}`}
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      onDragStart={(e) => e.preventDefault()}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  )}
              </div>
            )}
        </div>
        </div>
        </>
  )
}

export default SplitSection
