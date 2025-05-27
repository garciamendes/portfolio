import { useEffect } from 'react'
import { Header } from './sections/header'
import './styles/globals.css'
import './i18n'
import { ScrollToHome } from './sections/scrollTohome'
import { Translation } from './components/translation'
import { useTranslation } from './hooks/useTranslation'
import { Home } from './sections/home'
import { SkillsSection } from './sections/skills'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage('pt')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="flex justify-center w-full relative">
      <ScrollToHome />

      <div className="fixed bottom-5 left-5">
        <Translation />
      </div>

      <div className="flex flex-col w-full p-3 md:p-none md:w-[1280px]">
        <Header />
        <Home />
        <SkillsSection />
      </div>
    </main>
  )
}

export default App
