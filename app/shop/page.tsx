import Link from "next/link"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/optimized-image"

const products = [
  {
    id: 1,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000",
    description: "100% organic cotton t-shirt with our logo. Ethically made and eco-friendly.",
  },
  {
    id: 2,
    name: "Reusable Water Bottle",
    price: 24.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1000",
    description: "Stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
  },
  {
    id: 3,
    name: "Canvas Tote Bag",
    price: 19.99,
    category: "Accessories",
    image: "https://www.myprotein.co.in/images?url=https://static.thcdn.com/productimg/original/13844162-3744996777202100.jpg&format=webp&auto=avif&crop=1100,1200,smart",
    description: "Durable canvas tote bag perfect for shopping or everyday use. Reduces plastic waste.",
  },
  {
    id: 4,
    name: "Set of 3 Inspirational Posters",
    price: 34.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1585314062604-1a357de8b000?q=80&w=1000",
    description: "Beautiful posters with inspirational messages about social change and environmental action.",
  },
  {
    id: 5,
    name: "Recycled Paper Notebook",
    price: 12.99,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=1000",
    description: "Notebook made from 100% recycled paper with a biodegradable cover.",
  },
  {
    id: 6,
    name: "Social Impact Book Collection",
    price: 49.99,
    category: "Books",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000",
    description: "Collection of three books about social entrepreneurship and creating positive change.",
  },
  {
    id: 7,
    name: "Eco-Friendly Hoodie",
    price: 44.99,
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000",
    description: "Cozy hoodie made from recycled materials and organic cotton. Perfect for cool evenings.",
  },
  {
    id: 8,
    name: "Heirloom Seed Collection",
    price: 18.99,
    category: "Garden",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1000",
    description: "Collection of heirloom vegetable and herb seeds for your home garden.",
  },
  {
    id: 9,
    name: "Community Cookbook",
    price: 22.99,
    category: "Books",
    image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=1000",
    description:
      "Recipes contributed by community members from around the world, celebrating diverse culinary traditions.",
  },
  {
    id: 10,
    name: "Digital Activism Guide",
    price: 14.99,
    category: "Digital",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1000",
    description: "Comprehensive digital guide to effective online activism and advocacy.",
  },
  {
    id: 11,
    name: "Eco Sticker Pack",
    price: 8.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?q=80&w=1000",
    description: "Pack of 10 vinyl stickers with environmental and social justice themes.",
  },
  {
    id: 12,
    name: "Ceramic Mug",
    price: 16.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=1000",
    description: "Handcrafted ceramic mug made by artisans in our partner communities.",
  },
]

const categories = ["All", "Apparel", "Accessories", "Home", "Stationery", "Books", "Garden", "Digital"]

export default function ShopPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold">Shop With Purpose</h1>
              <p className="mb-6 text-lg text-slate-700">
                Every purchase from our shop directly supports our campaigns and initiatives. All products are ethically
                sourced and environmentally responsible.
              </p>
              <p className="mb-8 text-lg text-slate-700">
                100% of profits go toward funding community projects and campaigns featured on our platform.
              </p>
              <Button asChild size="lg">
                <a href="#products">Browse Products</a>
              </Button>
            </div>
            <div className="overflow-hidden rounded-lg">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000"
                alt="Ethically made products with impact"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Products</h2>

          {/* Categories */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} className="mb-2">
                {category}
              </Button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
              >
                <Link href={`/shop/product/${product.id}`}>
                  <div className="relative h-64 w-full overflow-hidden">
                    <OptimizedImage
                      src={product.image}
                      alt={product.name}
                      className="h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 bg-emerald-600 px-3 py-1 text-sm font-medium text-white">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
                    <p className="mb-3 text-sm text-slate-600 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-emerald-700 py-16 text-white">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Shop Impact</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-emerald-800 p-6 text-center">
              <div className="mb-4 text-4xl font-bold">100%</div>
              <p className="text-lg">of profits support our campaigns and community initiatives</p>
            </div>
            <div className="rounded-lg bg-emerald-800 p-6 text-center">
              <div className="mb-4 text-4xl font-bold">5,000+</div>
              <p className="text-lg">products sold, directly funding positive change</p>
            </div>
            <div className="rounded-lg bg-emerald-800 p-6 text-center">
              <div className="mb-4 text-4xl font-bold">20+</div>
              <p className="text-lg">artisan and fair trade partners worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Customer Reviews</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="mb-4 text-slate-600">
                "I love my organic cotton t-shirt! It's super comfortable, and I feel good knowing my purchase is
                supporting important causes."
              </p>
              <p className="font-semibold">- Jamie L.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="mb-4 text-slate-600">
                "The water bottle is fantastic quality and keeps my drinks cold all day. Shipping was fast and packaging
                was minimal and eco-friendly."
              </p>
              <p className="font-semibold">- Alex T.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="mb-4 text-slate-600">
                "The seed collection is amazing! Everything sprouted quickly, and I love that the packaging is
                compostable. Will definitely order again."
              </p>
              <p className="font-semibold">- Sam R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold">How does my purchase make an impact?</h3>
              <p className="text-slate-600">
                100% of profits from our shop go directly to funding the campaigns and initiatives featured on our
                platform. Each product page shows which specific campaign your purchase supports.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold">What is your shipping policy?</h3>
              <p className="text-slate-600">
                We ship worldwide using carbon-neutral shipping methods whenever possible. Domestic orders typically
                arrive within 3-5 business days, while international orders may take 7-14 business days.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold">Are your products ethically made?</h3>
              <p className="text-slate-600">
                Yes, all our products are ethically sourced and produced. We work with fair trade certified suppliers
                and artisan cooperatives that provide fair wages and safe working conditions.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold">What is your return policy?</h3>
              <p className="text-slate-600">
                We accept returns within 30 days of purchase for unused items in original packaging. Please contact our
                customer service team to initiate a return.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
