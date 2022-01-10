import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Praia',
      slug: 'praia',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Assomada',
      slug: 'assomada',
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/praia/i)).toBeInTheDocument()
    expect(screen.getByTitle(/assomada/i)).toBeInTheDocument()
  })
})
