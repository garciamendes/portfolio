import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  let addEventListenerSpy: ReturnType<typeof vi.spyOn>
  let removeEventListenerSpy: ReturnType<typeof vi.spyOn>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockMediaQuery: any

  beforeEach(() => {
    // Cria o favicon falso no head
    const favicon = document.createElement('link')
    favicon.id = 'logo-icon'
    favicon.href = '/favicon.ico'
    document.head.appendChild(favicon)

    // Prepara um matchMedia mock compartilhado
    mockMediaQuery = {
      matches: true,
      media: '(prefers-color-scheme: dark)',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }

    window.matchMedia = vi.fn().mockImplementation(() => mockMediaQuery)

    addEventListenerSpy = vi.spyOn(mockMediaQuery, 'addEventListener')
    removeEventListenerSpy = vi.spyOn(mockMediaQuery, 'removeEventListener')
  })

  afterEach(() => {
    cleanup()
    document.head.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('adds event listener on mount', () => {
    render(<App />)
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'change',
      expect.any(Function)
    )
  })

  it('removes favicon listener on unmount', () => {
    const { unmount } = render(<App />)

    unmount()
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'change',
      expect.any(Function)
    )
  })

  it('updates favicon when theme changes', () => {
    render(<App />)
    const favicon = document.getElementById('logo-icon') as HTMLLinkElement

    // Captura o callback passado no addEventListener
    const changeCallback = addEventListenerSpy.mock.calls[0][1] as VoidFunction

    // Simula mudança para o light mode
    mockMediaQuery.matches = false
    changeCallback()
    expect(favicon.href).toContain('logo.svg')

    // Simula mudança para o dark mode novamente
    mockMediaQuery.matches = true
    changeCallback()
    expect(favicon.href).toContain('logo-light.svg')
  })
})
