import Image from 'next/image'

export default function OrderBanner() {
  return (
    <section className="py-20 bg-[#F5EFE6]">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <Image src="/icons/hands.svg" alt="" width={80} height={80} />
            <div>
              <h3 className="text-3xl font-heading text-[#2D5F4C] mb-2">Order Online</h3>
              <p className="text-xl text-gray-700">Get your favorites delivered fast.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://www.google.com/" 
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <Image src="/icons/delivery-1.svg" alt="Delivery service" width={120} height={60} />
            </a>
            <div className="flex flex-col gap-2">
              <a 
                href="https://www.google.com/" 
                target="_blank"
                className="hover:opacity-80 transition"
              >
                <Image src="/icons/delivery-2.svg" alt="Delivery service" width={60} height={60} />
              </a>
              <a 
                href="https://www.google.com/" 
                target="_blank"
                className="hover:opacity-80 transition"
              >
                <Image src="/icons/delivery-3.svg" alt="Delivery service" width={60} height={60} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
