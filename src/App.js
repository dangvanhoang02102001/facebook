import useLocalStorage from 'use-local-storage'
import GlobalStyle from "./GlobalStyle/GlobalStyle"

const App = (props) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  console.log(theme)

  const handleSwitchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
  }
  return (
    <GlobalStyle>
      <div style={{ width: '100%', height: '100vh', backgroundColor: 'var(--background-color)'}} data-theme={theme}>
          <h3>FACEBOOK</h3>
          <button onClick={handleSwitchTheme}>Switch to {theme === 'light' ? 'dark' : 'light' } theme</button>
      </div>
    </GlobalStyle>

  )
}

export default App