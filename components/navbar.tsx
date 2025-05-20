"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-emerald-600">
          SocialImpact
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-emerald-600">
            Home
          </Link>
          <Link href="/campaigns" className="text-sm font-medium hover:text-emerald-600">
            Campaigns
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-emerald-600">
            About Us
          </Link>
          <Link href="/webinars" className="text-sm font-medium hover:text-emerald-600">
            Webinars
          </Link>
          <Link href="/shop" className="text-sm font-medium hover:text-emerald-600">
            Shop
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-emerald-600">
            Contact
          </Link>
        </nav>

        {/* CTA and Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex">Start a Campaign</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/campaigns"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Campaigns
            </Link>
            <Link
              href="/about"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/webinars"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Webinars
            </Link>
            <Link
              href="/shop"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="mt-2">Start a Campaign</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
