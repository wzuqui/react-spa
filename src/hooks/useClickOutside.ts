import { useEffect } from 'react';

export function useClickOutside(
  ref: any,
  callback: () => void,
  active: boolean
) {
  function handleClick(event: { target: any }) {
    if (active && ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    if (active) {
      document.addEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [active]);
}
