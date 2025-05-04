import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AppVersion } from '.'
import { version } from '../../../package.json'

describe('AppVersion component', () => {
  it('renders the app version text', () => {
    render(<AppVersion />)

    const footer = screen.getByText(/Versão:/i)
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveTextContent(`Versão: ${version}`)
  })
})
