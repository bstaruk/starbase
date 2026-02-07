import { useCallback, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';
import { Button } from 'atoms';
import { darkMode } from 'utils';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(
    () => darkMode.getEffectiveTheme(darkMode.getThemePreference()) === 'dark',
  );

  const toggle = useCallback(() => {
    const next = isDark ? 'light' : 'dark';
    darkMode.setThemePreference(next);
    darkMode.applyTheme(next);
    setIsDark(next === 'dark');
  }, [isDark]);

  return (
    <Button
      variant="ghost"
      iconOnly
      size="sm"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <LuSun size={16} /> : <LuMoon size={16} />}
    </Button>
  );
}
