import { I18nextProvider } from 'react-i18next'
import { render } from '@testing-library/react'
import i18n from '../__mocks__/i18nForTests'

export function renderWithI18n(ui: React.ReactElement, lng = 'en') {
  i18n.changeLanguage(lng)
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>)
}
