import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products, getProductById } from '@/data/products'

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)
  
  if (!product) {
    return {
      title: 'Product Not Found - Brewhaus',
    }
  }

  return {
    title: `${product.name} - Brewhaus Menu`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#2D5F4C]">Home</Link>
          <span>/</span>
          <Link href="/menu" className="hover:text-[#2D5F4C]">Menu</Link>
          <span>/</span>
          <span className="text-[#2D5F4C]">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#F5EFE6]">
            {product.badge && (
              <span className="absolute top-6 left-6 bg-[#2D5F4C] text-white px-6 py-2 rounded-full text-sm z-10">
                {product.badge}
              </span>
            )}
            <Image 
              src={product.image} 
              alt={product.name} 
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="inline-block mb-4">
              <span className="text-sm text-gray-600 bg-[#F5EFE6] px-4 py-2 rounded-full">
                {product.category === 'coffee' && 'Coffee'}
                {product.category === 'cold-drinks' && 'Cold Drinks'}
                {product.category === 'bakery' && 'Bakery'}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-heading text-[#2D5F4C] mb-4">
              {product.name}
            </h1>

            <div className="flex items-center text-4xl font-heading text-[#8B6F47] mb-6">
              <span>$</span>
              <span>{product.price.toFixed(2)}</span>
            </div>

            <p className="text-xl text-gray-700 mb-8">
              {product.description}
            </p>

            <div className="flex gap-4 mb-8">
              <Link 
                href="/locations"
                className="bg-[#2D5F4C] text-white px-8 py-4 rounded-full hover:bg-[#234739] transition"
              >
                Order In-Store
              </Link>
              <Link 
                href="/menu"
                className="border-2 border-[#2D5F4C] text-[#2D5F4C] px-8 py-4 rounded-full hover:bg-[#2D5F4C] hover:text-white transition"
              >
                View Full Menu
              </Link>
            </div>

            {/* Allergen Warning */}
            {product.allergens.length > 0 && product.allergens[0] !== 'None' && (
              <div className="bg-[#FFF8F0] border-l-4 border-[#8B6F47] p-4 rounded">
                <p className="text-sm font-semibold text-[#8B6F47] mb-1">Allergen Information</p>
                <p className="text-sm text-gray-700">
                  Contains: {product.allergens.join(', ')}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Details Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Ingredients */}
          <div className="bg-[#F5EFE6] rounded-3xl p-8">
            <h2 className="text-2xl font-heading text-[#2D5F4C] mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {product.ingredients.map((ingredient, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#2D5F4C] mt-1">•</span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition Facts */}
          <div className="bg-[#F5EFE6] rounded-3xl p-8">
            <h2 className="text-2xl font-heading text-[#2D5F4C] mb-4">Nutrition Facts</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Calories</span>
                <span className="font-semibold text-[#2D5F4C]">{product.nutritionFacts.calories}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Protein</span>
                <span className="font-semibold text-[#2D5F4C]">{product.nutritionFacts.protein}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Carbs</span>
                <span className="font-semibold text-[#2D5F4C]">{product.nutritionFacts.carbs}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Fat</span>
                <span className="font-semibold text-[#2D5F4C]">{product.nutritionFacts.fat}</span>
              </div>
            </div>
          </div>

          {/* Allergens */}
          <div className="bg-[#F5EFE6] rounded-3xl p-8">
            <h2 className="text-2xl font-heading text-[#2D5F4C] mb-4">Allergens</h2>
            {product.allergens[0] === 'None' ? (
              <p className="text-gray-700">This product contains no common allergens.</p>
            ) : (
              <ul className="space-y-2">
                {product.allergens.map((allergen, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#8B6F47] mt-1">⚠</span>
                    <span className="text-gray-700">{allergen}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-4xl md:text-5xl font-heading text-[#2D5F4C] mb-8">
              You Might Also Like
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id}
                  href={`/menu/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-[#F5EFE6] rounded-3xl overflow-hidden hover:shadow-xl transition">
                    <div className="relative aspect-square">
                      {relatedProduct.badge && (
                        <span className="absolute top-4 left-4 bg-[#2D5F4C] text-white px-4 py-1 rounded-full text-sm z-10">
                          {relatedProduct.badge}
                        </span>
                      )}
                      <Image 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-heading text-[#2D5F4C] mb-2 group-hover:text-[#8B6F47] transition">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center text-2xl font-heading text-[#8B6F47]">
                        <span>$</span>
                        <span>{relatedProduct.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
