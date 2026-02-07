import { useCallback, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';
import { darkMode } from 'utils';
import { Button } from 'atoms';

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
      size="sm"
      className="p-2"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <LuSun size={16} /> : <LuMoon size={16} />}
    </Button>
  );
}
