import { useCallback, useRef, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';
import { darkMode } from 'utils';
import { Button } from 'atoms';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(
    () => darkMode.getEffectiveTheme(darkMode.getThemePreference()) === 'dark',
  );
  const hasToggled = useRef(false);

  const toggle = useCallback(() => {
    const next = isDark ? 'light' : 'dark';
    darkMode.setThemePreference(next);
    darkMode.applyTheme(next);
    setIsDark(next === 'dark');
    hasToggled.current = true;
  }, [isDark]);

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="p-2"
        onClick={toggle}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? (
          <LuSun size={16} aria-hidden="true" />
        ) : (
          <LuMoon size={16} aria-hidden="true" />
        )}
      </Button>
      <span role="status" className="sr-only">
        {hasToggled.current
          ? isDark
            ? 'Dark mode enabled'
            : 'Light mode enabled'
          : ''}
      </span>
    </>
  );
}
