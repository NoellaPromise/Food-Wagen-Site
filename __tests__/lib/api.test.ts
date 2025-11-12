import axios from 'axios'
import { foodApi } from '@/lib/api'
import { Food, FoodFormData } from '@/lib/types'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('foodApi', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getAll', () => {
    it('fetches all foods successfully', async () => {
      const mockFoods: Food[] = [
        {
          id: '1',
          name: 'Pizza',
          rating: 4.5,
          image: 'https://example.com/pizza.jpg',
          restaurant: {
            name: 'Italian Bistro',
            logo: 'https://example.com/logo.jpg',
            status: 'Open Now',
          },
        },
      ]

      mockedAxios.get.mockResolvedValue({ data: mockFoods })

      const result = await foodApi.getAll()

      expect(mockedAxios.get).toHaveBeenCalledWith('https://6852821e0594059b23cdd834.mockapi.io/Food')
      expect(result).toEqual(mockFoods)
    })

    it('fetches foods with search parameter', async () => {
      const mockFoods: Food[] = [
        {
          id: '1',
          name: 'Pizza',
          rating: 4.5,
          image: 'https://example.com/pizza.jpg',
          restaurant: {
            name: 'Italian Bistro',
            logo: 'https://example.com/logo.jpg',
            status: 'Open Now',
          },
        },
      ]

      mockedAxios.get.mockResolvedValue({ data: mockFoods })

      const result = await foodApi.getAll('pizza')

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://6852821e0594059b23cdd834.mockapi.io/Food?name=pizza'
      )
      expect(result).toEqual(mockFoods)
    })

    it('handles API errors', async () => {
      const errorMessage = 'Network Error'
      mockedAxios.get.mockRejectedValue(new Error(errorMessage))

      await expect(foodApi.getAll()).rejects.toThrow(errorMessage)
    })
  })

  describe('create', () => {
    it('creates a new food successfully', async () => {
      const formData: FoodFormData = {
        name: 'Burger',
        rating: 5,
        image: 'https://example.com/burger.jpg',
        restaurantName: 'Burger Place',
        restaurantLogo: 'https://example.com/burger-logo.jpg',
        restaurantStatus: 'Open Now',
      }

      const mockCreatedFood: Food = {
        id: '2',
        name: 'Burger',
        rating: 5,
        image: 'https://example.com/burger.jpg',
        restaurant: {
          name: 'Burger Place',
          logo: 'https://example.com/burger-logo.jpg',
          status: 'Open Now',
        },
      }

      mockedAxios.post.mockResolvedValue({ data: mockCreatedFood })

      const result = await foodApi.create(formData)

      expect(mockedAxios.post).toHaveBeenCalledWith(
        'https://6852821e0594059b23cdd834.mockapi.io/Food',
        {
          name: 'Burger',
          rating: 5,
          image: 'https://example.com/burger.jpg',
          restaurant: {
            name: 'Burger Place',
            logo: 'https://example.com/burger-logo.jpg',
            status: 'Open Now',
          },
        }
      )
      expect(result).toEqual(mockCreatedFood)
    })
  })

  describe('update', () => {
    it('updates a food successfully', async () => {
      const formData: FoodFormData = {
        name: 'Updated Pizza',
        rating: 4.8,
        image: 'https://example.com/pizza-updated.jpg',
        restaurantName: 'Updated Bistro',
        restaurantLogo: 'https://example.com/logo-updated.jpg',
        restaurantStatus: 'Closed',
      }

      const mockUpdatedFood: Food = {
        id: '1',
        ...formData,
        restaurant: {
          name: formData.restaurantName,
          logo: formData.restaurantLogo,
          status: formData.restaurantStatus,
        },
      }

      mockedAxios.put.mockResolvedValue({ data: mockUpdatedFood })

      const result = await foodApi.update('1', formData)

      expect(mockedAxios.put).toHaveBeenCalledWith(
        'https://6852821e0594059b23cdd834.mockapi.io/Food/1',
        {
          name: 'Updated Pizza',
          rating: 4.8,
          image: 'https://example.com/pizza-updated.jpg',
          restaurant: {
            name: 'Updated Bistro',
            logo: 'https://example.com/logo-updated.jpg',
            status: 'Closed',
          },
        }
      )
      expect(result).toEqual(mockUpdatedFood)
    })
  })

  describe('delete', () => {
    it('deletes a food successfully', async () => {
      mockedAxios.delete.mockResolvedValue({ data: {} })

      await foodApi.delete('1')

      expect(mockedAxios.delete).toHaveBeenCalledWith(
        'https://6852821e0594059b23cdd834.mockapi.io/Food/1'
      )
    })
  })
})


