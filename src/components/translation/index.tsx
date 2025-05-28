import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '../../hooks/useTranslation'
import { Translate } from '@phosphor-icons/react'
import { TransitionOverlay } from '../overlay'

export const Translation = () => {
  const [trigger, setTrigger] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const { i18n } = useTranslation()

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const handlerChangeLang = (data: 'pt' | 'en') => {
    setTrigger(true)

    setTimeout(async () => {
      await i18n.changeLanguage(data)
      setIsOpen(false)
      setTrigger(false)
    }, 1100)
  }

  return (
    <>
      <TransitionOverlay trigger={trigger} />

      <div className="relative flex flex-col items-center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center mb-2"
            >
              <button
                data-lang={i18n.language}
                className="
                mb-1 px-3 py-1 bg-white border rounded-full
                shadow hover:bg-gray-100 cursor-pointer
                data-[lang=en]:bg-black data-[lang=en]:text-white duration-300"
                onClick={() => handlerChangeLang('en')}
              >
                EN
              </button>
              <button
                data-lang={i18n.language}
                className="
                px-3 py-1 bg-white border rounded-full
                shadow hover:bg-gray-100 cursor-pointer
                data-[lang=pt]:bg-black data-[lang=pt]:text-white duration-300"
                onClick={() => handlerChangeLang('pt')}
              >
                PT
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleMenu}
          data-open={isOpen}
          className="
          p-2 rounded-full bg-white border shadow hover:bg-gray-100
          cursor-pointer data-[open=true]:bg-black data-[open=true]:text-white duration-300"
          whileTap={{ scale: 1.2 }}
        >
          <Translate size={25} />
        </motion.button>
      </div>
    </>
  )
}
