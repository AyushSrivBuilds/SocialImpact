import Link from "next/link"
import { ChevronRight, Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FallbackImage } from "@/components/fallback-image"

// Sample product data - in a real app, this would come from a database
const getProductData = (id: string) => {
  return {
    id,
    name: "Ocean Conservation T-Shirt",
    description:
      "This 100% organic cotton t-shirt features a beautiful ocean-inspired design created by local artist Maria Chen. Comfortable, durable, and perfect for everyday wear while spreading awareness about ocean conservation.",
    price: 25,
    campaign: "Clean Ocean Initiative",
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000",
    additionalImages: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1000",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000",
    ],
    features: [
      "100% organic cotton",
      "Screen-printed with eco-friendly inks",
      "Available in multiple sizes",
      "Unisex design",
      "Machine washable",
    ],
    impact:
      "50% of the proceeds from this t-shirt go directly to the Clean Ocean Initiative, supporting beach cleanups, educational workshops, and advocacy for plastic reduction policies.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "White", "Gray"],
    reviews: [
      {
        id: 1,
        name: "Emily Chen",
        rating: 5,
        date: "April 15, 2025",
        comment:
          "Love this t-shirt! The fabric is so soft and comfortable, and I've received many compliments on the design. Knowing that my purchase supports ocean conservation makes it even better.",
      },
      {
        id: 2,
        name: "Marcus Johnson",
        rating: 4,
        date: "April 2, 2025",
        comment:
          "Great quality shirt with a beautiful design. Runs slightly large, so I'd recommend sizing down if you're between sizes. Very happy with my purchase!",
      },
      {
        id: 3,
        name: "Sophia Rodriguez",
        rating: 5,
        date: "March 28, 2025",
        comment:
          "This is my second purchase from the Clean Ocean Initiative collection. The quality is excellent, and I love supporting such an important cause.",
      },
    ],
    relatedProducts: [
      {
        id: 2,
        name: "Reusable Water Bottle",
        price: 15,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1000",
        campaign: "Clean Ocean Initiative",
      },
      {
        id: 3,
        name: "Tote Bag",
        price: 10,
        image: "https://images.unsplash.com/photo-1591273082871-39933a57b528?q=80&w=1000",
        campaign: "Clean Ocean Initiative",
      },
      {
        id: 7,
        name: "Sustainable Hoodie",
        price: 40,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000",
        campaign: "Green City Project",
      },
    ],
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductData(params.id)

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-emerald-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/shop" className="hover:text-emerald-600">
              Shop
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border bg-white p-4">
                <FallbackImage
                  src={product.image}
                  alt={product.name}
                  className="mx-auto h-auto max-h-[500px] w-auto"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex gap-4">
                {product.additionalImages.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-md border bg-white p-2">
                    <FallbackImage
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="h-20 w-20 object-cover"
                      width={80}
                      height={80}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Badge>{product.category}</Badge>
                <Badge variant="outline">Campaign: {product.campaign}</Badge>
              </div>
              <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < 4.5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">({product.reviews.length} reviews)</span>
              </div>
              <p className="mb-6 text-2xl font-bold text-emerald-600">${product.price.toFixed(2)}</p>
              <p className="mb-6 text-gray-600">{product.description}</p>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="mb-2 font-medium">Color</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <div
                      key={color}
                      className="relative h-10 w-10 cursor-pointer rounded-full border-2 border-gray-300 bg-gray-100 hover:border-emerald-600"
                    >
                      <span className="sr-only">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="mb-2 font-medium">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <div
                      key={size}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-gray-300 hover:border-emerald-600 hover:bg-emerald-50"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="mb-2 font-medium">Quantity</h3>
                <div className="flex h-10 w-32 items-center">
                  <button className="flex h-full w-10 items-center justify-center rounded-l-md border border-r-0 border-gray-300 hover:bg-gray-100">
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="flex h-full w-12 items-center justify-center border border-gray-300 text-center">
                    1
                  </div>
                  <button className="flex h-full w-10 items-center justify-center rounded-r-md border border-l-0 border-gray-300 hover:bg-gray-100">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="mb-6 flex flex-wrap gap-4">
                <Button className="flex-1 gap-2">
                  <ShoppingCart className="h-5 w-5" /> Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Impact */}
              <div className="rounded-lg bg-emerald-50 p-4">
                <h3 className="mb-2 font-semibold text-emerald-700">Your Impact</h3>
                <p className="text-emerald-700">{product.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="border-t py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3 md:w-auto">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold">Product Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-emerald-600"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold">Care Instructions</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Machine wash cold with like colors</li>
                    <li>Do not bleach</li>
                    <li>Tumble dry low</li>
                    <li>Do not iron decoration</li>
                    <li>Do not dry clean</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="impact">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold">How Your Purchase Helps</h3>
                  <p className="mb-4 text-gray-600">
                    50% of the proceeds from this product go directly to the Clean Ocean Initiative, supporting their
                    mission to protect our oceans from plastic pollution and promote marine conservation.
                  </p>
                  <p className="mb-4 text-gray-600">
                    Your purchase helps fund beach cleanups, educational workshops, and advocacy for plastic reduction
                    policies. It also supports research and development of sustainable alternatives to single-use
                    plastics.
                  </p>
                  <div className="mb-4 rounded-lg bg-gray-50 p-4">
                    <h4 className="mb-2 font-semibold">Impact Breakdown</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>Beach Cleanups: 20%</li>
                      <li>Education & Awareness: 15%</li>
                      <li>Policy Advocacy: 10%</li>
                      <li>Research & Innovation: 5%</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <FallbackImage
                    src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1000"
                    alt="Impact visualization"
                    className="rounded-lg"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Customer Reviews</h3>
                  <Button>Write a Review</Button>
                </div>
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="rounded-lg border p-4 shadow-sm">
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="font-semibold">{review.name}</h4>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="mb-2 flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="border-t bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">You May Also Like</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {product.relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="overflow-hidden">
                <Link href={`/shop/product/${relatedProduct.id}`}>
                  <div className="aspect-square overflow-hidden bg-white p-4">
                    <FallbackImage
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                      width={200}
                      height={200}
                    />
                  </div>
                </Link>
                <CardContent className="p-4">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{relatedProduct.campaign}</span>
                    <span className="font-medium text-emerald-600">${relatedProduct.price.toFixed(2)}</span>
                  </div>
                  <Link href={`/shop/product/${relatedProduct.id}`}>
                    <h3 className="font-bold hover:text-emerald-600">{relatedProduct.name}</h3>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Viewed */}
      <section className="border-t py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">Recently Viewed</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {[
              {
                id: 1,
                name: "Eco-Friendly Notebook",
                image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=1000",
                category: "Stationery",
                price: 12.99,
              },
              {
                id: 2,
                name: "Bamboo Toothbrush",
                image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=1000",
                category: "Home",
                price: 4.99,
              },
              {
                id: 3,
                name: "Recycled Glass Vase",
                image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=1000",
                category: "Home",
                price: 24.99,
              },
              {
                id: 4,
                name: "Organic Cotton Socks",
                image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=1000",
                category: "Apparel",
                price: 9.99,
              },
              {
                id: 5,
                name: "Beeswax Food Wraps",
                image: "https://images.unsplash.com/photo-1601459441988-04b7c7e70043?q=80&w=1000",
                category: "Kitchen",
                price: 15.99,
              },
              {
                id: 6,
                name: "Recycled Plastic Backpack",
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000",
                category: "Accessories",
                price: 49.99,
              },
            ].map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <Link href={`/shop/product/${item.id}`}>
                  <div className="aspect-square overflow-hidden bg-white p-2">
                    <FallbackImage
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                      width={120}
                      height={120}
                    />
                  </div>
                </Link>
                <CardContent className="p-3">
                  <Link href={`/shop/product/${item.id}`}>
                    <h3 className="text-sm font-medium hover:text-emerald-600">{item.name}</h3>
                  </Link>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{item.category}</span>
                    <span className="text-sm font-medium text-emerald-600">${item.price.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
