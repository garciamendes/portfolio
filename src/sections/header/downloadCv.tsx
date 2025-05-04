import { useState } from 'react'
import animDowloadCv from '../../assets/animations/download-cv.json'
import animWaitDownloadCv from '../../assets/animations/wait-download-cv.json'
import Lottie from 'react-lottie'
import { AnimatePresence, motion } from 'motion/react'
import cv from '../../assets/cv/Matheus_Garcia.pdf'

export const DowndloadCv = () => {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

    setTimeout(() => {
      setIsDownloading(false)
      window.open(cv, '_blank')
    }, 8500)
  }

  const downloadCvOptions = {
    loop: true,
    autoplay: true,
    animationData: animDowloadCv,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const waitDownloadCvOptions = {
    loop: false,
    autoplay: isDownloading,
    animationData: animWaitDownloadCv,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isDownloading}
      animate={{ width: isDownloading ? 130 : 150 }}
      transition={{ duration: 0.3 }}
      data-download-loading={isDownloading}
      className="flex overflow-hidden items-center bg-black text-white font-semibold rounded-sm py-2 px-4 data-[download-loading=trie]:px-0 cursor-pointer"
    >
      <AnimatePresence mode="wait">
        {!isDownloading ? (
          <motion.div
            key="content"
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <span className="text-lg">Currículo</span>
            <Lottie options={downloadCvOptions} width={25} height={35} />
          </motion.div>
        ) : (
          <motion.div
            key="loading"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <Lottie options={waitDownloadCvOptions} width={100} height={35} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
