import React from 'react';
import wpImageSizes from '../constants/wpImageSizes';

const normalizeMediaSizes = (mediaSizes) => {
  if (!mediaSizes || typeof mediaSizes !== 'object') {
    return [];
  }

  return Object.values(mediaSizes)
    .filter(
      (size) =>
        size &&
        typeof size.source_url === 'string' &&
        size.source_url.trim().length > 0 &&
        Number.isFinite(Number(size.width))
    )
    .map((size) => ({
      source_url: size.source_url,
      width: Number(size.width),
    }))
    .sort((a, b) => a.width - b.width);
};

const resolveMediaSizesFromSrc = (src) => {
  if (typeof src !== 'string' || !src.trim()) {
    return null;
  }

  return wpImageSizes[src] || null;
};

const buildFallbackSrcSet = (sourceUrl) => {
  if (typeof sourceUrl !== 'string' || !sourceUrl.trim()) {
    return undefined;
  }

  // Keep fallback candidates URL-safe by reusing the same source while still
  // providing responsive width descriptors everywhere.
  return [640, 1024, 1600]
    .map((width) => `${sourceUrl} ${width}w`)
    .join(', ');
};

const WordPressImage = ({
  mediaSizes,
  src,
  alt = '',
  className,
  sizes,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  ...imgProps
}) => {
  const resolvedMediaSizes = mediaSizes || resolveMediaSizesFromSrc(src);
  const normalizedSizes = normalizeMediaSizes(resolvedMediaSizes);

  const fallbackSrc =
    resolvedMediaSizes?.full?.source_url ||
    normalizedSizes[normalizedSizes.length - 1]?.source_url ||
    src ||
    '';

  const widthBasedSrcSet =
    normalizedSizes.length > 1
      ? normalizedSizes.map((size) => `${size.source_url} ${size.width}w`).join(', ')
      : undefined;

  const srcSetString = widthBasedSrcSet || buildFallbackSrcSet(fallbackSrc);

  if (!fallbackSrc) {
    return null;
  }

  return (
    <img
      src={fallbackSrc}
      srcSet={srcSetString}
      sizes={srcSetString ? sizes || '(max-width: 768px) 100vw, 50vw' : undefined}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      {...imgProps}
    />
  );
};

export default WordPressImage;
