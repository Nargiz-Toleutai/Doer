import React, { useCallback, useEffect, useRef } from 'react';

interface IProps {
  children: React.ReactNode;
  onOutsideClick: () => void;
}

export const ClickOutsideWrapper: React.FC<IProps> = ({ children, onOutsideClick }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    },
    [onOutsideClick]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return <div ref={wrapperRef}>{children}</div>;
};

