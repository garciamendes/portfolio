import { useEffect } from 'react'
import { Header } from './sections/header'
import './styles/globals.css'

function App() {
  useEffect(() => {
    const updateFavicon = () => {
      const favicon = document.getElementById('logo-icon') as HTMLLinkElement
      const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (darkMode) {
        favicon.href = `${favicon.baseURI}src/assets/images/logo-light.svg`
      } else {
        favicon.href = `${favicon.baseURI}src/assets/images/logo.svg`
      }
    }

    updateFavicon()

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', updateFavicon)

    return () => {
      mediaQuery.removeEventListener('change', updateFavicon)
    }
  }, [])

  return (
    <main className="flex justify-center w-full">
      <div className="flex flex-col w-[1280px]">
        <Header />
      </div>
    </main>
  )
}

export default App
