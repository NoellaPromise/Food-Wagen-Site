import axios from 'axios'
import { Food, FoodFormData } from './types'

const API_BASE_URL = 'https://6852821e0594059b23cdd834.mockapi.io/Food'

export const foodApi = {
  getAll: async (searchParam?: string): Promise<Food[]> => {
    const url = searchParam 
      ? `${API_BASE_URL}?name=${encodeURIComponent(searchParam)}`
      : API_BASE_URL
    const response = await axios.get<Food[]>(url)
    return response.data
  },

  create: async (foodData: FoodFormData): Promise<Food> => {
    const response = await axios.post<Food>(API_BASE_URL, {
      name: foodData.name,
      rating: foodData.rating,
      image: foodData.image,
      restaurant: {
        name: foodData.restaurantName,
        logo: foodData.restaurantLogo,
        status: foodData.restaurantStatus,
      },
    })
    return response.data
  },

  update: async (id: string, foodData: FoodFormData): Promise<Food> => {
    const response = await axios.put<Food>(`${API_BASE_URL}/${id}`, {
      name: foodData.name,
      rating: foodData.rating,
      image: foodData.image,
      restaurant: {
        name: foodData.restaurantName,
        logo: foodData.restaurantLogo,
        status: foodData.restaurantStatus,
      },
    })
    return response.data
  },

  delete: async (id: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/${id}`)
  },
}

