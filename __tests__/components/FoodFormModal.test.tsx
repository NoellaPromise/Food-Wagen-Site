import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FoodFormModal from '@/components/FoodFormModal'
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

describe('FoodFormModal', () => {
  const mockOnClose = jest.fn()
  const mockOnSubmit = jest.fn().mockResolvedValue(undefined)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('submits form with valid data', async () => {
    const user = userEvent.setup()
    render(
      <FoodFormModal
        isOpen={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        food={null}
        isLoading={false}
      />
    )

    // Fill in the form - rating defaults to 1 which is valid and status defaults to Open Now
    await user.type(screen.getByTestId('food-form-name-input'), 'Burger')
    await user.type(screen.getByTestId('food-form-image-input'), 'https://example.com/burger.jpg')
    await user.type(screen.getByTestId('food-form-restaurant-name-input'), 'Burger Place')
    await user.type(screen.getByTestId('food-form-restaurant-logo-input'), 'https://example.com/burger-logo.jpg')

    await user.click(screen.getByTestId('food-form-submit-button'))

    await waitFor(
      () => {
        expect(mockOnSubmit).toHaveBeenCalledWith({
          name: 'Burger',
          rating: 1,
          image: 'https://example.com/burger.jpg',
          restaurantName: 'Burger Place',
          restaurantLogo: 'https://example.com/burger-logo.jpg',
          restaurantStatus: 'Open Now',
        })
      },
      { timeout: 3000 }
    )
  })

  it('shows validation errors for invalid data', async () => {
    const user = userEvent.setup()
    render(
      <FoodFormModal
        isOpen={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        food={null}
        isLoading={false}
      />
    )

    // Try to submit empty form to trigger validation errors
    await user.click(screen.getByTestId('food-form-submit-button'))

    await waitFor(
      () => {
        expect(screen.getByTestId('food-name-error')).toBeInTheDocument()
        expect(screen.getByTestId('food-image-error')).toBeInTheDocument()
        expect(screen.getByTestId('food-restaurant-name-error')).toBeInTheDocument()
        expect(screen.getByTestId('food-restaurant-logo-error')).toBeInTheDocument()
      },
      { timeout: 3000 }
    )

    expect(mockOnSubmit).not.toHaveBeenCalled()
  })

  it('closes modal when cancel button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <FoodFormModal
        isOpen={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        food={null}
        isLoading={false}
      />
    )

    await user.click(screen.getByTestId('food-form-cancel-button'))

    expect(mockOnClose).toHaveBeenCalled()
  })
})


