import { useTranslation } from '../../hooks/useTranslation'
import { LINKS } from './constants'
import { motion } from 'motion/react'
import HomeImg from '../../assets/images/home-image.png'

export const Home = () => {
  const { gettext } = useTranslation()

  return (
    <div className="flex flex-col-reverse gap-8 md:gap-0 mt-4 md:mt-0 md:flex-row justify-between items-center w-full h-auto md:min-h-[643px]">
      <div className="flex flex-col justify-center gap-8 h-full">
        <span className="flex max-w-[585px] text-5xl/normal">
          {gettext('home.apresentation')}
        </span>
        <p className="text-zinc-500 max-w-[600px]">
          {gettext('home.resumeAbout')}
        </p>

        <div className="flex items-center gap-8">
          {LINKS.map(({ icon: Icon, link }, index) => {
            return (
              <motion.button
                key={index}
                onClick={() => window.open(link)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
                whileFocus={{ scale: 1.2 }}
                className="flex items-center justify-center cursor-pointer border-2 p-2 rounded-sm hover:bg-black hover:text-white duration-300"
              >
                <Icon size={27} />
              </motion.button>
            )
          })}
        </div>
      </div>

      <div className="h-full flex items-center">
        <img src={HomeImg} alt="Home" />
      </div>
    </div>
  )
}
