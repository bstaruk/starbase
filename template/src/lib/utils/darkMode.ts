const STORAGE_KEY = 'theme-preference';
const DARK_CLASS = 'dark';

export type ThemePreference = 'light' | 'dark' | 'system';

export function getThemePreference(): ThemePreference {
  const value = localStorage.getItem(STORAGE_KEY);

  if (value === 'light' || value === 'dark') {
    return value;
  }

  return 'system';
}

export function setThemePreference(preference: ThemePreference): void {
  localStorage.setItem(STORAGE_KEY, preference);
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
    document.documentElement.style.backgroundColor = 'var(--sb-surface)';
  } else {
    document.documentElement.classList.remove(DARK_CLASS);
    document.documentElement.style.backgroundColor = 'var(--sb-surface)';
  }
}
