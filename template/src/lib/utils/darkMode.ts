import Cookies from 'js-cookie';

const DARK_MODE_COOKIE = 'theme-preference';
const DARK_CLASS = 'dark';

export type ThemePreference = 'light' | 'dark' | 'system';

export function getThemePreference(): ThemePreference {
  const value = Cookies.get(DARK_MODE_COOKIE);

  if (value === 'light' || value === 'dark') {
    return value;
  }

  return 'system';
}

export function setThemePreference(preference: ThemePreference): void {
  Cookies.set(DARK_MODE_COOKIE, preference, {
    expires: 365,
    sameSite: 'lax',
  });
}

export function getEffectiveTheme(
  preference: ThemePreference,
): 'light' | 'dark' {
  if (preference === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return preference;
}

export function applyTheme(theme: 'light' | 'dark'): void {
  if (theme === 'dark') {
    document.documentElement.classList.add(DARK_CLASS);
    document.documentElement.style.backgroundColor = 'var(--sb-canvas)';
  } else {
    document.documentElement.classList.remove(DARK_CLASS);
    document.documentElement.style.backgroundColor = 'var(--sb-surface)';
  }
}
