import React from 'react'
import { createRoot } from 'react-dom/client'

import { Avatar, Button } from '../components'

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<Button />)
    root.unmount()
  })
})

describe('Avatar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<Avatar />)
    root.unmount()
  })
})
