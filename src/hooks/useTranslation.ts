import { useTranslation as useTranslationI18 } from 'react-i18next'

export const useTranslation = () => {
  const trans = useTranslationI18()

  return { gettext: trans.t, ...trans }
}
