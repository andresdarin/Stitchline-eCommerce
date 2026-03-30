'use client';

import React from 'react';
import { motion, Variants, TargetAndTransition } from 'motion/react';

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // ms
  duration?: number; // s
  ease?: string; // ignored for now, using default easeOut
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: TargetAndTransition;
  to?: TargetAndTransition;
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  // ease prop is intentionally unused for now to keep implementation simple and consistent
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  tag: Tag = 'p',
  textAlign = 'center',
  onLetterAnimationComplete
}) => {
  // Simple word/char splitter
  const words = text.split(' ');

  // Variants for the container (staggering)
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  // Variants for children
  const itemVariants: Variants = {
    hidden: from as Variants['hidden'],
    visible: {
      ...to,
      transition: {
        duration: duration,
        ease: 'easeOut',
      },
    } as Variants['visible'],
  };

  let content: React.ReactNode;

  if (splitType === 'chars' || splitType === 'words, chars') {
    content = words.map((word, wIndex) => (
      <span key={wIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
        {word.split('').map((char, cIndex) => (
          <motion.span
            key={cIndex}
            variants={itemVariants}
            style={{ display: 'inline-block' }}
            onAnimationComplete={
                (wIndex === words.length - 1 && cIndex === word.length - 1)
                ? onLetterAnimationComplete
                : undefined
            }
          >
            {char}
          </motion.span>
        ))}
        {wIndex < words.length - 1 && <span style={{ display: 'inline-block' }}>&nbsp;</span>}
      </span>
    ));
  } else {
    // Words or lines (fallback to words)
    content = words.map((word, wIndex) => (
      <React.Fragment key={wIndex}>
        <motion.span
            variants={itemVariants}
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
            onAnimationComplete={wIndex === words.length - 1 ? onLetterAnimationComplete : undefined}
        >
          {word}
        </motion.span>
        {wIndex < words.length - 1 && <span>&nbsp;</span>}
      </React.Fragment>
    ));
  }

  return (
    <Tag
      className={className}
      style={{ textAlign, overflow: 'hidden' }}
    >
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: rootMargin, amount: threshold }}
        variants={containerVariants}
        style={{ display: 'inline-block' }}
      >
        {content}
      </motion.span>
    </Tag>
  );
};

export default SplitText;
