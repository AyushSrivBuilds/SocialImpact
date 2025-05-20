"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { Filter, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OptimizedImage } from "@/components/optimized-image"

// Sample campaign data
const campaignData = [
  {
    id: 1,
    title: "Clean Ocean Initiative",
    description: "Help us clean the oceans and protect marine life from plastic pollution.",
    image: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=1000",
    alt: "Ocean cleanup initiative",
    cause: "Environment",
    community: "IIFT, Delhi",
    context: "Environment Campaign",
    startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    featured: true,
    status: "upcoming",
  },
  {
    id: 2,
    title: "Education for All",
    description: "Support our mission to provide quality education to underprivileged children.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000",
    alt: "Children in a classroom",
    cause: "Education",
    community: "IIFT, Delhi",
    context: "Education Campaign",
    startDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    featured: true,
    status: "upcoming",
  },
  {
    id: 3,
    title: "Food for Thought",
    description: "Join our initiative to reduce food waste and feed the hungry in our community.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000",
    alt: "Food donation drive",
    cause: "Hunger",
    community: "IIFT, Mumbai",
    context: "Food Campaign",
    startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
    featured: false,
    status: "upcoming",
  },
  {
    id: 4,
    title: "Green City Project",
    description: "Help us plant trees and create green spaces in urban areas.",
    image: "https://images.unsplash.com/photo-1552508744-1696d4464960?q=80&w=1000",
    alt: "Tree planting in urban area",
    cause: "Environment",
    community: "IIFT, Bangalore",
    context: "Environment Campaign",
    startDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    featured: true,
    status: "upcoming",
  },
  {
    id: 5,
    title: "Digital Literacy Drive",
    description: "Empower communities with digital skills for the modern world.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000",
    alt: "Digital literacy workshop",
    cause: "Education",
    community: "IIFT, Delhi",
    context: "Technology Campaign",
    startDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
    featured: false,
    status: "upcoming",
  },
  {
    id: 6,
    title: "Clean Water Initiative",
    description: "Provide clean drinking water to communities in need.",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=1000",
    alt: "Clean water initiative",
    cause: "Health",
    community: "IIFT, Chennai",
    context: "Health Campaign",
    startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    featured: false,
    status: "upcoming",
  },
  {
    id: 7,
    title: "Mental Health Awareness",
    description: "Raise awareness about mental health issues and provide support resources.",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=1000",
    alt: "Mental health awareness session",
    cause: "Health",
    community: "IIFT, Delhi",
    context: "Health Campaign",
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    featured: false,
    status: "active",
  },
  {
    id: 8,
    title: "Affordable Housing Project",
    description: "Support our initiative to provide affordable housing to low-income families.",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1000",
    alt: "Affordable housing project",
    cause: "Poverty",
    community: "IIFT, Mumbai",
    context: "Housing Campaign",
    startDate: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000), // 45 days ago
    featured: false,
    status: "active",
  },
  {
    id: 9,
    title: "Youth Empowerment Program",
    description: "Empower young people with skills and opportunities for a better future.",
    image: "https://en.jahanbanou.ir/wp-content/uploads/2022/09/linkedin-1200.jpg",
    alt: "Youth empowerment workshop",
    cause: "Education",
    community: "IIFT, Bangalore",
    context: "Education Campaign",
    startDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
    featured: false,
    status: "active",
  },
  {
    id: 10,
    title: "Elderly Care Initiative",
    description: "Provide care and support to elderly individuals in our community.",
    image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=1000",
    alt: "Elderly care program",
    cause: "Health",
    community: "IIFT, Chennai",
    context: "Health Campaign",
    startDate: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
    featured: false,
    status: "completed",
  },
  {
    id: 11,
    title: "Community Garden Project",
    description: "Create community gardens to promote sustainable food production and community bonding.",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1000",
    alt: "Community garden project",
    cause: "Environment",
    community: "IIFT, Delhi",
    context: "Environment Campaign",
    startDate: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000), // 120 days ago
    featured: false,
    status: "completed",
  },
  {
    id: 12,
    title: "Women's Empowerment Initiative",
    description: "Support programs that empower women through education, skills training, and entrepreneurship.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1000",
    alt: "Women's empowerment workshop",
    cause: "Gender Equality",
    community: "IIFT, Mumbai",
    context: "Gender Campaign",
    startDate: new Date(Date.now() - 150 * 24 * 60 * 60 * 1000), // 150 days ago
    featured: false,
    status: "completed",
  },
]

// Filter options
const causes = ["All", "Environment", "Education", "Health", "Hunger", "Poverty", "Gender Equality"]
const communities = ["All", "IIFT, Delhi", "IIFT, Mumbai", "IIFT, Bangalore", "IIFT, Chennai"]
const contexts = [
  "All",
  "Environment Campaign",
  "Education Campaign",
  "Health Campaign",
  "Food Campaign",
  "Technology Campaign",
  "Housing Campaign",
  "Gender Campaign",
]

export default function CampaignsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCause, setSelectedCause] = useState("All")
  const [selectedCommunity, setSelectedCommunity] = useState("All")
  const [selectedContext, setSelectedContext] = useState("All")

  const featuredCampaigns = campaignData.filter((campaign) => campaign.featured)

  const filterCampaigns = (campaigns: typeof campaignData, status: string) => {
    return campaigns.filter((campaign) => {
      const matchesSearch =
        campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCause = selectedCause === "All" || campaign.cause === selectedCause
      const matchesCommunity = selectedCommunity === "All" || campaign.community === selectedCommunity
      const matchesContext = selectedContext === "All" || campaign.context === selectedContext
      const matchesStatus = campaign.status === status

      return matchesSearch && matchesCause && matchesCommunity && matchesContext && matchesStatus
    })
  }

  const upcomingCampaigns = filterCampaigns(campaignData, "upcoming")
  const activeCampaigns = filterCampaigns(campaignData, "active")
  const completedCampaigns = filterCampaigns(campaignData, "completed")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleCauseFilter = (cause: string) => {
    setSelectedCause(cause)
  }

  const handleCommunityFilter = (community: string) => {
    setSelectedCommunity(community)
  }

  const handleContextFilter = (context: string) => {
    setSelectedContext(context)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCause("All")
    setSelectedCommunity("All")
    setSelectedContext("All")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-500 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight">Explore Campaigns</h1>
            <p className="mb-8 text-xl">
              Discover social campaigns that are making a difference in communities around the world. Find a cause
              you're passionate about and get involved.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Browse Campaigns
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
                Start Your Own
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Featured Campaigns</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredCampaigns.slice(0, 3).map((campaign) => (
              <div
                key={campaign.id}
                className="group overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <OptimizedImage
                    src={campaign.image}
                    alt={campaign.alt}
                    width={400}
                    height={300}
                    className="h-full w-full"
                  />
                  <div className="absolute bottom-0 left-0 bg-emerald-600 px-3 py-1 text-sm font-medium text-white">
                    {campaign.cause}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-bold">{campaign.title}</h3>
                  <p className="mb-4 text-gray-600">{campaign.description}</p>
                  <div className="mb-4 flex items-center text-sm text-gray-500">
                    <span>Starts in: {formatDistanceToNow(campaign.startDate, { addSuffix: true })}</span>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={`/campaigns/${campaign.id}`}
                      className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                      Know More
                    </Link>
                    <Link
                      href={`/shop/${campaign.id}`}
                      className="inline-flex items-center justify-center rounded-md border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-600 transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                      Shop
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Find Campaigns</h2>

          <div className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search campaigns..."
                className="pl-10"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" /> Filter
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Campaigns</SheetTitle>
                  <SheetDescription>Narrow down campaigns by cause, community, or context.</SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <div className="mb-4">
                    <h3 className="mb-2 font-medium">Cause</h3>
                    <div className="flex flex-wrap gap-2">
                      {causes.map((cause) => (
                        <Badge
                          key={cause}
                          variant={selectedCause === cause ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => handleCauseFilter(cause)}
                        >
                          {cause}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="mb-4">
                    <h3 className="mb-2 font-medium">Community</h3>
                    <div className="flex flex-wrap gap-2">
                      {communities.map((community) => (
                        <Badge
                          key={community}
                          variant={selectedCommunity === community ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => handleCommunityFilter(community)}
                        >
                          {community}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <h3 className="mb-2 font-medium">Context</h3>
                    <div className="flex flex-wrap gap-2">
                      {contexts.map((context) => (
                        <Badge
                          key={context}
                          variant={selectedContext === context ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => handleContextFilter(context)}
                        >
                          {context}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <SheetFooter className="flex flex-row justify-between gap-4 sm:justify-between">
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                  <SheetClose asChild>
                    <Button>Apply Filters</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          {/* Active Filters */}
          {(selectedCause !== "All" || selectedCommunity !== "All" || selectedContext !== "All" || searchTerm) && (
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2 rounded-lg border bg-white p-3">
                <span className="text-sm font-medium">Active Filters:</span>
                {selectedCause !== "All" && (
                  <Badge variant="secondary" className="gap-1">
                    Cause: {selectedCause}
                    <button
                      onClick={() => setSelectedCause("All")}
                      className="ml-1 rounded-full hover:bg-gray-200"
                      aria-label="Remove filter"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedCommunity !== "All" && (
                  <Badge variant="secondary" className="gap-1">
                    Community: {selectedCommunity}
                    <button
                      onClick={() => setSelectedCommunity("All")}
                      className="ml-1 rounded-full hover:bg-gray-200"
                      aria-label="Remove filter"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedContext !== "All" && (
                  <Badge variant="secondary" className="gap-1">
                    Context: {selectedContext}
                    <button
                      onClick={() => setSelectedContext("All")}
                      className="ml-1 rounded-full hover:bg-gray-200"
                      aria-label="Remove filter"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {searchTerm && (
                  <Badge variant="secondary" className="gap-1">
                    Search: {searchTerm}
                    <button
                      onClick={() => setSearchTerm("")}
                      className="ml-1 rounded-full hover:bg-gray-200"
                      aria-label="Remove filter"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-auto">
                  Clear All
                </Button>
              </div>
            </div>
          )}

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              {upcomingCampaigns.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {upcomingCampaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      className="group overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <OptimizedImage
                          src={campaign.image}
                          alt={campaign.alt}
                          width={400}
                          height={300}
                          className="h-full w-full"
                        />
                        <div className="absolute bottom-0 left-0 bg-emerald-600 px-3 py-1 text-sm font-medium text-white">
                          {campaign.cause}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                            {campaign.community}
                          </span>
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                            {campaign.context}
                          </span>
                        </div>
                        <h3 className="mb-2 text-xl font-bold">{campaign.title}</h3>
                        <p className="mb-4 text-gray-600">{campaign.description}</p>
                        <div className="mb-4 flex items-center text-sm text-gray-500">
                          <span>Starts in: {formatDistanceToNow(campaign.startDate, { addSuffix: true })}</span>
                        </div>
                        <div className="flex gap-3">
                          <Link
                            href={`/campaigns/${campaign.id}`}
                            className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                          >
                            Know More
                          </Link>
                          <Link
                            href={`/shop/${campaign.id}`}
                            className="inline-flex items-center justify-center rounded-md border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-600 transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                          >
                            Shop
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border bg-white p-8 text-center">
                  <h3 className="mb-2 text-lg font-medium">No campaigns found</h3>
                  <p className="text-gray-600">Try adjusting your filters or search terms.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="active">
              {activeCampaigns.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {activeCampaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      className="group overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <OptimizedImage
                          src={campaign.image}
                          alt={campaign.alt}
                          width={400}
                          height={300}
                          className="h-full w-full"
                        />
                        <div className="absolute bottom-0 left-0 bg-emerald-600 px-3 py-1 text-sm font-medium text-white">
                          {campaign.cause}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                            {campaign.community}
                          </span>
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                            {campaign.context}
                          </span>
                        </div>
                        <h3 className="mb-2 text-xl font-bold">{campaign.title}</h3>
                        <p className="mb-4 text-gray-600">{campaign.description}</p>
                        <div className="mb-4 flex items-center text-sm text-gray-500">
                          <span>Started: {formatDistanceToNow(campaign.startDate, { addSuffix: true })}</span>
                        </div>
                        <div className="flex gap-3">
                          <Link
                            href={`/campaigns/${campaign.id}`}
                            className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                          >
                            Know More
                          </Link>
                          <Link
                            href={`/shop/${campaign.id}`}
                            className="inline-flex items-center justify-center rounded-md border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-600 transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                          >
                            Shop
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border bg-white p-8 text-center">
                  <h3 className="mb-2 text-lg font-medium">No campaigns found</h3>
                  <p className="text-gray-600">Try adjusting your filters or search terms.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="completed">
              {completedCampaigns.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {completedCampaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      className="group overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <OptimizedImage
                          src={campaign.image}
                          alt={campaign.alt}
                          width={400}
                          height={300}
                          className="h-full w-full"
                        />
                        <div className="absolute bottom-0 left-0 bg-gray-600 px-3 py-1 text-sm font-medium text-white">
                          Completed
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="mb-1 flex items-center gap-2">
                          <Badge variant="outline">{campaign.cause}</Badge>
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                            {campaign.community}
                          </span>
                        </div>
                        <h3 className="mb-2 text-xl font-bold">{campaign.title}</h3>
                        <p className="mb-4 text-gray-600">{campaign.description}</p>
                        <div className="mb-4 flex items-center text-sm text-gray-500">
                          <span>Completed: {formatDistanceToNow(campaign.startDate, { addSuffix: true })}</span>
                        </div>
                        <div className="flex gap-3">
                          <Link
                            href={`/campaigns/${campaign.id}`}
                            className="inline-flex items-center justify-center rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
                          >
                            View Results
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border bg-white p-8 text-center">
                  <h3 className="mb-2 text-lg font-medium">No campaigns found</h3>
                  <p className="text-gray-600">Try adjusting your filters or search terms.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Start a Campaign */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-xl bg-emerald-50 p-8 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-emerald-800">Start Your Own Campaign</h2>
                <p className="mb-6 text-emerald-700">
                  Have a cause you're passionate about? Start your own campaign and make a difference in your community.
                  Our platform provides the tools and resources you need to create meaningful change.
                </p>
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-emerald-700">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-800">Create an Account</h3>
                      <p className="text-sm text-emerald-700">Sign up or log in to your SocialImpact account.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-emerald-700">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-800">Submit a Proposal</h3>
                      <p className="text-sm text-emerald-700">
                        Fill out our campaign proposal form with details about your cause and goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-emerald-700">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-800">Get Approved</h3>
                      <p className="text-sm text-emerald-700">
                        Our team will review your proposal and provide feedback within 3-5 business days.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-emerald-700">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-800">Launch Your Campaign</h3>
                      <p className="text-sm text-emerald-700">
                        Once approved, you can launch your campaign and start making an impact.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">Start a Campaign</Button>
              </div>
              <div className="flex items-center justify-center">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1000"
                  alt="Start a campaign"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Success Stories</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Clean Beach Initiative",
                description:
                  "Our community-led beach cleanup campaign removed over 5 tons of plastic waste from coastal areas, protecting marine life and improving local ecosystems.",
                image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1000",
                alt: "Beach cleanup volunteers",
                impact: "5 tons of waste removed",
              },
              {
                title: "Rural Education Project",
                description:
                  "This campaign provided educational resources and technology to 15 rural schools, benefiting over 2,000 students and improving access to quality education.",
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000",
                alt: "Rural education project",
                impact: "2,000+ students reached",
              },
              {
                title: "Community Garden Network",
                description:
                  "We established 12 community gardens in urban food deserts, providing fresh produce to over 500 families and creating green spaces for community engagement.",
                image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000",
                alt: "Community garden harvest",
                impact: "500+ families supported",
              },
            ].map((story, i) => (
              <div key={i} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="aspect-video overflow-hidden">
                  <OptimizedImage
                    src={story.image}
                    alt={story.alt}
                    width={600}
                    height={400}
                    className="h-full w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{story.title}</h3>
                  <p className="mb-4 text-gray-600">{story.description}</p>
                  <div className="rounded-lg bg-emerald-50 p-3 text-sm font-medium text-emerald-700">
                    Impact: {story.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline">View All Success Stories</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-xl bg-gray-50 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Stay Updated</h2>
            <p className="mb-6 text-gray-600">
              Subscribe to our newsletter to get updates on new campaigns and impact stories.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input type="email" placeholder="Your email address" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
