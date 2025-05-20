"use client"

import { useState } from "react"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
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
  },
]

export function CampaignGrid({ limit, featured }: { limit?: number; featured?: boolean }) {
  const [campaigns] = useState(() => {
    let filteredCampaigns = campaignData

    if (featured !== undefined) {
      filteredCampaigns = campaignData.filter((campaign) => {
        // For demonstration purposes, let's consider campaigns with IDs 1, 2, and 4 as featured
        const featuredIds = [1, 2, 4]
        return featured ? featuredIds.includes(campaign.id) : !featuredIds.includes(campaign.id)
      })
    }

    return limit ? filteredCampaigns.slice(0, limit) : filteredCampaigns
  })

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {campaigns.map((campaign) => (
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
              <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">{campaign.community}</span>
              <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">{campaign.context}</span>
            </div>
            <h3 className="mb-2 text-xl font-bold">{campaign.title}</h3>
            <p className="mb-4 text-gray-600">{campaign.description}</p>
            <div className="mb-4 flex items-center text-sm text-gray-500">
              <span>Starts in: {formatDistanceToNow(campaign.startDate)}</span>
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
  )
}
