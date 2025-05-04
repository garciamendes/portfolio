import { vi } from 'vitest'

vi.mock('lottie-web', () => ({
  loadAnimation: vi.fn().mockReturnValue({
    play: vi.fn(),
    stop: vi.fn(),
    destroy: vi.fn(),
    setSpeed: vi.fn(),
    goToAndStop: vi.fn(),
  }),
}))
