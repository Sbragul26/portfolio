
import { useState, useEffect } from 'react';

type TypingAnimationProps = {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
};

const TypingAnimation = ({
  texts,
  typingSpeed = 150,
  deletingSpeed = 50,
  delayBetween = 1000
}: TypingAnimationProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // If we're waiting, don't do anything yet
      if (isWaiting) return;

      // Get the current text from the array
      const fullText = texts[currentTextIndex];

      // If deleting, remove the last character
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        // If typing, add the next character
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      // If we've completed typing the current text
      if (!isDeleting && currentText === fullText) {
        // Wait before starting to delete
        setIsWaiting(true);
        setTimeout(() => {
          setIsDeleting(true);
          setIsWaiting(false);
        }, delayBetween);
      }

      // If we've deleted all characters
      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        // Move to the next text or back to the beginning
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentTextIndex,
    delayBetween,
    deletingSpeed,
    isDeleting,
    isWaiting,
    texts,
    typingSpeed
  ]);

  return (
    <span className="typing-text">
      {currentText}
    </span>
  );
};

export default TypingAnimation;
