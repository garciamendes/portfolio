import { useTranslation as useTranslationI18, Trans } from 'react-i18next'

export const useTranslation = () => {
  const trans = useTranslationI18()

  return { gettext: trans.t, Trans, ...trans }
}
