/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { vi } from 'vitest'

vi.mock('motion/react', async () => {
  const actual = await vi.importActual<any>('motion/react')
  return {
    ...actual,
    useReducedMotion: vi.fn().mockReturnValue(false),
    AnimatePresence: (props: any) => props.children,
    motion: new Proxy(
      {},
      {
        get: (_, key) => {
          return (props: any) => {
            const { children, ...rest } = props
            const element = React.createElement(key as string, rest, children)

            const updatedProps = { ...element.props, ...rest }
            return React.createElement(key as string, updatedProps, children)
          }
        },
      }
    ),
  }
})
