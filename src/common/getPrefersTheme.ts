type Theme = 'DARK' | 'LIGHT'

export function getPrefersTheme(): Theme {
  let prefersTheme: Theme = 'DARK'
  const isPrefersDarkTheme = window.matchMedia('(prefers-color-scheme:dark)').matches
  if (!isPrefersDarkTheme) {
    prefersTheme = 'LIGHT'
  }
  return prefersTheme
}
