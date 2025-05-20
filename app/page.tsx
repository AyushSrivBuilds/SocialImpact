import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CampaignGrid } from "@/components/campaign-grid"
import { OptimizedImage } from "@/components/optimized-image"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[600px] w-full overflow-hidden">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1000"
            alt="People working together on a community project"
            priority={true}
            className="h-full"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Make a Difference Today
          </h1>
          <p className="mb-8 max-w-2xl text-lg sm:text-xl">
            Join our community of changemakers and support campaigns that matter. Together, we can create a better
            world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/campaigns">Explore Campaigns</Link>
            </Button>
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Featured Campaigns</h2>
          <CampaignGrid limit={3} featured={true} />
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/campaigns">View All Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Success Stories</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="h-48 w-full">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1000"
                  alt="Beach cleanup volunteers"
                  className="h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Ocean Cleanup Initiative</h3>
                <p className="mb-4 text-slate-600">
                  Our volunteers removed over 5 tons of plastic from coastal areas, protecting marine life and improving
                  local ecosystems.
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link href="/campaigns">Read More</Link>
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="h-48 w-full">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000"
                  alt="Rural education program"
                  className="h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Rural Education Program</h3>
                <p className="mb-4 text-slate-600">
                  We've provided educational resources to over 50 rural schools, reaching more than 5,000 students in
                  underserved communities.
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link href="/campaigns">Read More</Link>
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="h-48 w-full">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000"
                  alt="Community garden project"
                  className="h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Community Garden Project</h3>
                <p className="mb-4 text-slate-600">
                  Our urban gardening initiative has created 15 community gardens, providing fresh produce and green
                  spaces in urban neighborhoods.
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link href="/campaigns">Read More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">What Our Supporters Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-16 w-16 overflow-hidden rounded-full">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000"
                    alt="Emily Johnson"
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Emily Johnson</h3>
                  <p className="text-sm text-slate-500">Monthly Donor</p>
                </div>
              </div>
              <p className="text-slate-600">
                "I've been supporting campaigns for over a year now, and I'm amazed at the transparency and impact. It's
                wonderful to see exactly how my contributions make a difference."
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-16 w-16 overflow-hidden rounded-full">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000"
                    alt="Marcus Chen"
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Marcus Chen</h3>
                  <p className="text-sm text-slate-500">Campaign Organizer</p>
                </div>
              </div>
              <p className="text-slate-600">
                "The platform made it incredibly easy to launch our community initiative. The support and resources
                provided helped us exceed our fundraising goals by 150%."
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-16 w-16 overflow-hidden rounded-full">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000"
                    alt="Sophia Rodriguez"
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Sophia Rodriguez</h3>
                  <p className="text-sm text-slate-500">Volunteer</p>
                </div>
              </div>
              <p className="text-slate-600">
                "Volunteering through this platform connected me with causes I'm passionate about. The community is
                supportive, and I've made lasting friendships while making a real impact."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-700 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Make an Impact?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Join thousands of changemakers who are creating a better world through community-driven campaigns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-emerald-700"
            >
              <Link href="/campaigns">Find a Campaign</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-emerald-700"
            >
              <Link href="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
