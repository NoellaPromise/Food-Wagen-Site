export interface Restaurant {
  name: string
  logo: string
  status: 'Open Now' | 'Closed'
}

export interface Food {
  id: string
  name: string
  rating: number
  image: string
  restaurant: Restaurant
}

export interface FoodFormData {
  name: string
  rating: number
  image: string
  restaurantName: string
  restaurantLogo: string
  restaurantStatus: 'Open Now' | 'Closed'
}

