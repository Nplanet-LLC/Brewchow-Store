export interface Product {
  id: string
  name: string
  price: number
  category: 'coffee' | 'cold-drinks' | 'bakery'
  image: string
  badge?: string
  description: string
  ingredients: string[]
  allergens: string[]
  nutritionFacts: {
    calories: number
    protein: string
    carbs: string
    fat: string
  }
}

export const products: Product[] = [
  // Coffee
  {
    id: 'espresso',
    name: 'Espresso',
    price: 3.50,
    category: 'coffee',
    image: '/images/hero-espresso.avif',
    description: 'A rich, bold shot of pure coffee perfection. Our espresso is crafted from premium Arabica beans, roasted to perfection for a smooth, intense flavor.',
    ingredients: ['Premium Arabica coffee beans', 'Filtered water'],
    allergens: ['None'],
    nutritionFacts: {
      calories: 5,
      protein: '0.5g',
      carbs: '1g',
      fat: '0g'
    }
  },
  {
    id: 'black-coffee',
    name: 'Black Coffee',
    price: 3.00,
    category: 'coffee',
    image: '/images/hero-black-coffee.avif',
    description: 'Classic drip coffee brewed fresh throughout the day. Simple, pure, and delicious - the way coffee should be.',
    ingredients: ['Premium coffee beans', 'Filtered water'],
    allergens: ['None'],
    nutritionFacts: {
      calories: 2,
      protein: '0.3g',
      carbs: '0g',
      fat: '0g'
    }
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    price: 6.75,
    category: 'coffee',
    image: '/images/menu-coldbrew.avif',
    badge: 'New',
    description: 'Smooth, refreshing cold brew steeped for 24 hours. Less acidic than traditional coffee with a naturally sweet flavor profile.',
    ingredients: ['Cold brew coffee concentrate', 'Filtered water', 'Ice'],
    allergens: ['None'],
    nutritionFacts: {
      calories: 5,
      protein: '0.5g',
      carbs: '1g',
      fat: '0g'
    }
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    price: 4.45,
    category: 'coffee',
    image: '/images/menu-icedlatte.avif',
    description: 'Creamy and refreshing, our iced latte combines rich espresso with cold milk over ice. Perfect for warm days.',
    ingredients: ['Espresso', 'Whole milk', 'Ice'],
    allergens: ['Milk'],
    nutritionFacts: {
      calories: 130,
      protein: '8g',
      carbs: '13g',
      fat: '5g'
    }
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: 4.25,
    category: 'coffee',
    image: '/images/category-coffee.avif',
    description: 'Equal parts espresso, steamed milk, and foam. A classic Italian coffee drink with perfect balance.',
    ingredients: ['Espresso', 'Steamed milk', 'Milk foam'],
    allergens: ['Milk'],
    nutritionFacts: {
      calories: 120,
      protein: '7g',
      carbs: '11g',
      fat: '4g'
    }
  },
  {
    id: 'latte',
    name: 'Latte',
    price: 4.50,
    category: 'coffee',
    image: '/images/about-latte.avif',
    description: 'Smooth espresso with steamed milk and a light layer of foam. Our most popular coffee drink.',
    ingredients: ['Espresso', 'Steamed milk', 'Milk foam'],
    allergens: ['Milk'],
    nutritionFacts: {
      calories: 190,
      protein: '13g',
      carbs: '18g',
      fat: '7g'
    }
  },

  // Cold Drinks
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    price: 4.35,
    category: 'cold-drinks',
    image: '/images/menu-icedtea.avif',
    description: 'Refreshing brewed tea served over ice. Choose from black, green, or herbal varieties.',
    ingredients: ['Premium tea leaves', 'Filtered water', 'Ice', 'Optional sweetener'],
    allergens: ['None'],
    nutritionFacts: {
      calories: 0,
      protein: '0g',
      carbs: '0g',
      fat: '0g'
    }
  },
  {
    id: 'virgin-mojito',
    name: 'Virgin Mojito',
    price: 5.50,
    category: 'cold-drinks',
    image: '/images/category-drinks.avif',
    description: 'Fresh mint, lime, and sparkling water create this refreshing mocktail. Perfect for a hot day.',
    ingredients: ['Fresh mint leaves', 'Lime juice', 'Simple syrup', 'Sparkling water', 'Ice'],
    allergens: ['None'],
    nutritionFacts: {
      calories: 95,
      protein: '0g',
      carbs: '24g',
      fat: '0g'
    }
  },
  {
    id: 'lemonade',
    name: 'Fresh Lemonade',
    price: 4.50,
    category: 'cold-drinks',
    image: '/images/testimonial-2.avif',
    description: 'Made fresh daily with real lemons. Sweet, tart, and incredibly refreshing.',
    ingredients: ['Fresh lemon juice', 'Cane sugar', 'Filtered water', 'Ice'],
    allergens: ['None'],
    nutritionFacts: {
      calories: 120,
      protein: '0g',
      carbs: '31g',
      fat: '0g'
    }
  },
  {
    id: 'smoothie',
    name: 'Berry Smoothie',
    price: 6.25,
    category: 'cold-drinks',
    image: '/images/testimonial-3.avif',
    description: 'Blended with fresh berries, banana, and yogurt. A healthy and delicious treat.',
    ingredients: ['Mixed berries', 'Banana', 'Greek yogurt', 'Honey', 'Ice'],
    allergens: ['Milk'],
    nutritionFacts: {
      calories: 245,
      protein: '12g',
      carbs: '48g',
      fat: '3g'
    }
  },

  // Bakery
  {
    id: 'macaroon',
    name: 'Macaroon',
    price: 2.60,
    category: 'bakery',
    image: '/images/menu-macaroon.avif',
    description: 'Delicate French macarons with a crispy shell and soft center. Available in various flavors.',
    ingredients: ['Almond flour', 'Egg whites', 'Sugar', 'Buttercream filling'],
    allergens: ['Eggs', 'Nuts', 'Milk'],
    nutritionFacts: {
      calories: 140,
      protein: '3g',
      carbs: '18g',
      fat: '7g'
    }
  },
  {
    id: 'croissant',
    name: 'Butter Croissant',
    price: 3.50,
    category: 'bakery',
    image: '/images/category-bakery.avif',
    description: 'Flaky, buttery, and perfectly golden. Baked fresh every morning using traditional French techniques.',
    ingredients: ['Wheat flour', 'Butter', 'Milk', 'Yeast', 'Sugar', 'Salt'],
    allergens: ['Wheat', 'Milk', 'Eggs'],
    nutritionFacts: {
      calories: 231,
      protein: '5g',
      carbs: '26g',
      fat: '12g'
    }
  },
  {
    id: 'muffin',
    name: 'Blueberry Muffin',
    price: 3.25,
    category: 'bakery',
    image: '/images/news-1.avif',
    description: 'Moist and fluffy muffin loaded with fresh blueberries. A perfect breakfast treat.',
    ingredients: ['Wheat flour', 'Fresh blueberries', 'Sugar', 'Eggs', 'Butter', 'Milk'],
    allergens: ['Wheat', 'Eggs', 'Milk'],
    nutritionFacts: {
      calories: 385,
      protein: '6g',
      carbs: '54g',
      fat: '17g'
    }
  },
  {
    id: 'banana-bread',
    name: 'Banana Bread',
    price: 3.75,
    category: 'bakery',
    image: '/images/news-2.avif',
    description: 'Moist, sweet banana bread made with ripe bananas. A customer favorite!',
    ingredients: ['Ripe bananas', 'Wheat flour', 'Sugar', 'Eggs', 'Butter', 'Walnuts'],
    allergens: ['Wheat', 'Eggs', 'Milk', 'Nuts'],
    nutritionFacts: {
      calories: 326,
      protein: '5g',
      carbs: '48g',
      fat: '14g'
    }
  },
  {
    id: 'cookie',
    name: 'Chocolate Chip Cookie',
    price: 2.50,
    category: 'bakery',
    image: '/images/news-3.avif',
    description: 'Classic chocolate chip cookie with a crispy edge and chewy center. Made with premium chocolate.',
    ingredients: ['Wheat flour', 'Chocolate chips', 'Butter', 'Brown sugar', 'Eggs', 'Vanilla'],
    allergens: ['Wheat', 'Eggs', 'Milk', 'Soy'],
    nutritionFacts: {
      calories: 220,
      protein: '3g',
      carbs: '28g',
      fat: '11g'
    }
  },
  {
    id: 'scone',
    name: 'Cranberry Scone',
    price: 3.25,
    category: 'bakery',
    image: '/images/about-interior.avif',
    description: 'Buttery scone studded with dried cranberries. Perfect with your morning coffee.',
    ingredients: ['Wheat flour', 'Dried cranberries', 'Butter', 'Heavy cream', 'Sugar'],
    allergens: ['Wheat', 'Milk'],
    nutritionFacts: {
      calories: 290,
      protein: '5g',
      carbs: '42g',
      fat: '12g'
    }
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}
