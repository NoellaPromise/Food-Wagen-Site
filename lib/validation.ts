export interface ValidationErrors {
  name?: string
  rating?: string
  image?: string
  restaurantName?: string
  restaurantLogo?: string
  restaurantStatus?: string
}

export const validateFoodForm = (data: {
  name: string
  rating: number
  image: string
  restaurantName: string
  restaurantLogo: string
  restaurantStatus: string
}): ValidationErrors => {
  const errors: ValidationErrors = {}

  if (!data.name || data.name.trim() === '') {
    errors.name = 'Name is required'
  }

  if (!data.rating || isNaN(data.rating)) {
    errors.rating = 'Rating is required'
  } else if (data.rating < 1 || data.rating > 5) {
    errors.rating = 'Rating must be between 1 and 5'
  }

  if (!data.image || data.image.trim() === '') {
    errors.image = 'Image URL is required'
  } else if (!isValidUrl(data.image)) {
    errors.image = 'Please enter a valid URL'
  }

  if (!data.restaurantName || data.restaurantName.trim() === '') {
    errors.restaurantName = 'Restaurant name is required'
  }

  if (!data.restaurantLogo || data.restaurantLogo.trim() === '') {
    errors.restaurantLogo = 'Restaurant logo URL is required'
  } else if (!isValidUrl(data.restaurantLogo)) {
    errors.restaurantLogo = 'Please enter a valid URL'
  }

  if (!data.restaurantStatus || (data.restaurantStatus !== 'Open Now' && data.restaurantStatus !== 'Closed')) {
    errors.restaurantStatus = 'Restaurant status is required'
  }

  return errors
}

const isValidUrl = (urlString: string): boolean => {
  try {
    const url = new URL(urlString)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

