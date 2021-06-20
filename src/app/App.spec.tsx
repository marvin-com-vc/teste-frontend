import { render, screen } from '@testing-library/react'

import { App } from './App'
import React from 'react'

describe('App Component', () => {
	it('renders paragraph correctly', () => {
		render(<App />)

		const paragraphElement = screen.getByText(/src\/App.tsx/i)
		expect(paragraphElement).toBeInTheDocument()
	})
})
