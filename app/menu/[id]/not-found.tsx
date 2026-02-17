import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-heading text-[#2D5F4C] mb-6">
          Product Not Found
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Link 
          href="/menu"
          className="inline-block bg-[#2D5F4C] text-white px-8 py-4 rounded-full hover:bg-[#234739] transition"
        >
          Back to Menu
        </Link>
      </div>
    </main>
  )
}
