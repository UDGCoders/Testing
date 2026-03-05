import React from 'react'

const WordPressImage = ({ mediaSizes, src }) => {
    const srcSetString = Object.values(mediaSizes)
        .map(size => `${size.source_url} ${size.width}w`)
        .join(', ');
    return (
        <img 
      src={mediaSizes.full?.source_url} // Fallback to full size
      srcSet={srcSetString}
      sizes="(max-width: 600px) 100vw, 50vw" 
      alt=""
      // className={`img-fluid ${styles.img}`}
      loading="lazy"
    />
    )
}

export default WordPressImage
