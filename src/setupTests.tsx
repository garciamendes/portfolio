import '@testing-library/jest-dom'
import { version } from '../package.json'

// Mock version of the global app
// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(globalThis as any).__APP_VERSION__ = version

import './tests/__mocks__/canvas'
import './tests/__mocks__/matchMedia'
import './tests/__mocks__/motion'
import './tests/__mocks__/i18nForTests'
import './tests/__mocks__/lottie'
