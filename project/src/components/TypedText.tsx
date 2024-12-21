import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
  className?: string;
}

export function TypedText({ strings, className = '' }: TypedTextProps) {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: '|',
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      typed.current?.destroy();
    };
  }, [strings]);

  return <span ref={el} className={className} />;
}