import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import WordPressImage from '../WordPressImage';

const ScrollCards = ({ cards }) => {
  const navigate = useNavigate();

  if (!Array.isArray(cards) || cards.length === 0) {
    return null;
  }

  const duplicatedCards = [...cards, ...cards];

  const getRedirectTarget = (card) => {
    if (!card || typeof card !== 'object') {
      return '';
    }

    return (
      card.redirectTo ||
      card.redirectPath ||
      card.path ||
      card.link ||
      card.href ||
      ''
    );
  };

  const handleCardRedirect = (target) => {
    if (typeof target !== 'string') {
      return;
    }

    const trimmedTarget = target.trim();

    if (!trimmedTarget) {
      return;
    }

    if (
      trimmedTarget.startsWith('http://') ||
      trimmedTarget.startsWith('https://')
    ) {
      window.location.href = trimmedTarget;
      return;
    }

    navigate(trimmedTarget);
  };

  const containerStyle = {
    overflow: 'hidden',
    width: '100%',
    padding: '2rem 0',
    background: 'transparent'
  };

  const trackStyle = {
    display: 'flex',
    width: 'max-content', // Allows track to extend beyond screen
    gap: '20px'
  };

  const cardStyle = {
    position: 'relative',
    width: '300px',
    height: '400px',
    borderRadius: '6px',
    overflow: 'hidden',
    flexShrink: 0,
  };

  const clickableCardStyle = {
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '20px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
    color: 'white',
    fontSize: '1.25rem',
    fontWeight: '600'
  };

  return (
    <div style={containerStyle}>
      <motion.div
        style={trackStyle}
        animate={{ x: ["0%", "-50%"] }} // Slide exactly half-way (one full set)
        transition={{
          ease: "linear",
          duration: 30, // Adjust speed (higher is slower)
          repeat: Infinity,
        }}
      >
        {duplicatedCards.map((card, index) => {
          const redirectTarget = getRedirectTarget(card);
          const isClickable = Boolean(redirectTarget);

          return (
            <div
              key={`${card.id ?? 'card'}-${index}`}
              style={{
                ...cardStyle,
                ...(isClickable ? clickableCardStyle : {}),
              }}
              onClick={
                isClickable
                  ? () => handleCardRedirect(redirectTarget)
                  : undefined
              }
              onKeyDown={
                isClickable
                  ? (event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        handleCardRedirect(redirectTarget);
                      }
                    }
                  : undefined
              }
              role={isClickable ? 'link' : undefined}
              tabIndex={isClickable ? 0 : undefined}
            >
              <WordPressImage
                src={card.src}
                alt={card.imageAlt || card.title || 'Portfolio card image'}
                style={imageStyle}
              />
              {card.title ? <div style={overlayStyle}>{card.title}</div> : null}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ScrollCards;
