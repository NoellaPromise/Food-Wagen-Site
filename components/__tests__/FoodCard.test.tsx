import { render, screen } from '@testing-library/react'
import FoodCard from '../FoodCard'
import { Food } from '@/lib/types'

const mockFood: Food = {
  id: '1',
  name: 'Pizza Margherita',
  rating: 4.5,
  image: 'https://example.com/pizza.jpg',
  restaurant: {
    name: 'Italian Bistro',
    logo: 'https://example.com/logo.jpg',
    status: 'Open Now',
  },
}

describe('FoodCard', () => {
  const mockOnEdit = jest.fn()
  const mockOnDelete = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders food name and rating', () => {
    render(<FoodCard food={mockFood} onEdit={mockOnEdit} onDelete={mockOnDelete} index={0} />)

    expect(screen.getByTestId('food-card-name-1')).toHaveTextContent('Pizza Margherita')
    expect(screen.getByTestId('food-card-rating-1')).toHaveTextContent('4.5')
  })

  it('renders restaurant information', () => {
    render(<FoodCard food={mockFood} onEdit={mockOnEdit} onDelete={mockOnDelete} index={0} />)

    expect(screen.getByTestId('food-card-restaurant-name-1')).toHaveTextContent('Italian Bistro')
    expect(screen.getByTestId('food-card-restaurant-status-1')).toHaveTextContent('Open Now')
    expect(screen.getByTestId('food-card-restaurant-logo-1')).toBeInTheDocument()
  })

  it('renders edit and delete buttons', () => {
    render(<FoodCard food={mockFood} onEdit={mockOnEdit} onDelete={mockOnDelete} index={0} />)

    expect(screen.getByTestId('food-card-edit-button-1')).toBeInTheDocument()
    expect(screen.getByTestId('food-card-delete-button-1')).toBeInTheDocument()
  })
})

