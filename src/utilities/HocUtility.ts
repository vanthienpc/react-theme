import * as React from 'react';

export function useWindowWidth(): number {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
}

export function useThemeMode(initial: string): [string, (t: string) => void] {
  const [theme, setTheme] = React.useState(initial);

  const toggleTheme = (t: string) => {
    window.localStorage.setItem('theme', t);
    setTheme(t);
  };

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
}
