import { useEffect } from 'react'
import { Header } from './sections/header'
import './styles/globals.css'
import './i18n'
import { MenuPopup } from './sections/menuPopup'
import { Translation } from './components/translation'
import { useTranslation } from './hooks/useTranslation'
import { Home } from './sections/home'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage('pt')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    <main className="flex justify-center w-full relative">
      <MenuPopup />

      <div className="fixed bottom-5 left-5">
        <Translation />
      </div>

      <div className="flex flex-col w-full p-3 md:p-none md:w-[1280px]">
        <Header />
        <Home />
      </div>
    </main>
  )
}

export default App
