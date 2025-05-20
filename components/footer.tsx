import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">SocialImpact</h3>
            <p className="mb-4 text-sm">
              Empowering communities to create positive social change through collaborative campaigns and initiatives.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/campaigns" className="hover:text-white">
                  Browse Campaigns
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="hover:text-white">
                  Webinars & Workshops
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Impact Stories
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Stay Updated</h3>
            <p className="mb-4 text-sm">Subscribe to our newsletter for the latest campaigns and impact stories.</p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white placeholder:text-gray-500"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SocialImpact. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
