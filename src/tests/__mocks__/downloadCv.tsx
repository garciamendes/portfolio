import { vi } from 'vitest'

export const handleClick = vi.fn()

export const DowndloadCv = () => (
  <button data-testid="mock-download-button" onClick={handleClick}>
    Mock Download
  </button>
)
