import { describe, it, expect, afterEach, vi } from 'vitest'
import { Header } from '.'
import { renderWithI18n } from '../../tests/helpers/renderWithI18n'
import { handleClick } from '../../tests/__mocks__/downloadCv'
import { fireEvent, screen } from '@testing-library/react'

vi.mock(
  './downloadCv',
  async () => await import('../../tests/__mocks__/downloadCv')
)

describe('Header component', () => {
  afterEach(() => {
    handleClick.mockClear()
  })

  const languages = [
    {
      code: 'pt',
      navItems: ['Início', 'Conhecimentos', 'Projetos', 'Contato'],
    },
    { code: 'en', navItems: ['Home', 'Knowledge', 'Projects', 'Contact'] },
  ] as const

  languages.forEach(({ code, navItems }) => {
    describe(`language: ${code}`, () => {
      it('renders header with logo and navigation links', () => {
        renderWithI18n(<Header />, code)

        const logo = screen.getByAltText(/logo/i)
        expect(logo).toBeInTheDocument()

        navItems.forEach((item) => {
          expect(screen.getByText(item)).toBeInTheDocument()
        })
      })

      it('renders download button', () => {
        renderWithI18n(<Header />, code)

        const downloadButton = screen.getByTestId('mock-download-button')
        expect(downloadButton).toBeInTheDocument()
        expect(downloadButton).toHaveTextContent('Mock Download')
      })

      it('handles download button click', () => {
        renderWithI18n(<Header />, code)

        const downloadButton = screen.getByTestId('mock-download-button')
        fireEvent.click(downloadButton)

        expect(handleClick).toHaveBeenCalled()
      })
    })
  })
})
