import { screen, fireEvent, cleanup, act } from '@testing-library/react'
import { describe, it, expect, vi, afterEach, beforeAll, vitest } from 'vitest'
import { DowndloadCv } from './downloadCv'
import { renderWithI18n } from '../../tests/helpers/renderWithI18n'

describe('DowndloadCv component', () => {
  beforeAll(() => {
    vitest.mock('react-lottie', () => ({
      default: () => <div data-testid="mock-lottie" />,
    }))
  })

  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  const languages = [
    { code: 'pt', buttonText: 'Currículo' },
    { code: 'en', buttonText: 'Resume' },
  ] as const

  languages.forEach(({ code, buttonText }) => {
    describe(`language: ${code}`, () => {
      it(`renders the download button with text "${buttonText}"`, () => {
        renderWithI18n(<DowndloadCv />, code)

        const button = screen.getByTestId('download-button')
        expect(button).toBeInTheDocument()
        expect(screen.getByText(buttonText)).toBeInTheDocument()
      })

      it('starts downloading when clicked', () => {
        vi.useFakeTimers()
        const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)

        renderWithI18n(<DowndloadCv />, code)
        const button = screen.getByTestId('download-button')
        act(() => {
          fireEvent.click(button)
        })

        act(() => {
          vi.runAllTimers()
        })
        expect(button).toHaveAttribute('data-download-loading', 'false')
        expect(openSpy).toHaveBeenCalledWith(
          expect.stringContaining('.pdf'),
          '_blank'
        )

        vi.useRealTimers()
        openSpy.mockRestore()
      })
    })
  })
})
