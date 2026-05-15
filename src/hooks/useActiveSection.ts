import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[], offset = 180): string {
  const [active, setActive] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    function compute() {
      const y = window.scrollY + offset;
      let current = sectionIds[0] ?? '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    }

    compute();
    window.addEventListener('scroll', compute, { passive: true });
    return () => window.removeEventListener('scroll', compute);
  }, [sectionIds, offset]);

  return active;
}
