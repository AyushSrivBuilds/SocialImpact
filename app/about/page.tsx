import Link from "next/link"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/optimized-image"

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold">Our Mission</h1>
              <p className="mb-6 text-lg text-slate-700">
                We believe in the power of community-driven change. Our platform connects passionate individuals with
                meaningful campaigns that address pressing social and environmental challenges.
              </p>
              <p className="mb-8 text-lg text-slate-700">
                By facilitating collaboration between donors, volunteers, and organizers, we're building a more just,
                sustainable, and compassionate world—one campaign at a time.
              </p>
              <Button asChild size="lg">
                <Link href="/campaigns">Explore Our Campaigns</Link>
              </Button>
            </div>
            <div className="overflow-hidden rounded-lg">
              <OptimizedImage
                src="/images/about/team-photo.png"
                alt="Our diverse team working together"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Story</h2>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <OptimizedImage
                src="/images/about/our-story.png"
                alt="The beginning of our organization"
                className="rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="mb-4 text-2xl font-semibold">From Small Beginnings</h3>
              <p className="mb-4 text-slate-700">
                Founded in 2015 by a group of social entrepreneurs, our platform began with a simple idea: make it
                easier for people to support causes they care about.
              </p>
              <p className="mb-4 text-slate-700">
                What started as a small project supporting local initiatives has grown into a global community of
                changemakers, with thousands of successful campaigns across 30 countries.
              </p>
              <p className="text-slate-700">
                Despite our growth, our core values remain unchanged: transparency, community empowerment, and
                measurable impact in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Impact</h2>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">Making a Difference</h3>
              <p className="mb-4 text-slate-700">Over the past 8 years, our platform has facilitated:</p>
              <ul className="mb-6 space-y-2 text-slate-700">
                <li className="flex items-center">
                  <span className="mr-2 text-emerald-600">✓</span>
                  Over $15 million raised for social and environmental causes
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-emerald-600">✓</span>
                  More than 2,500 successful campaigns completed
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-emerald-600">✓</span>A community of 50,000+ donors and volunteers
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-emerald-600">✓</span>
                  Partnerships with 300+ organizations globally
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
            <div>
              <OptimizedImage
                src="/images/about/impact-report.png"
                alt="Visual representation of our impact"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                <OptimizedImage src="/images/team/sarah.png" alt="Sarah Johnson" width={192} height={192} />
              </div>
              <h3 className="mb-1 text-xl font-semibold">Sarah Johnson</h3>
              <p className="mb-3 text-emerald-600">Co-Founder & CEO</p>
              <p className="text-slate-600">
                Former nonprofit executive with 15+ years of experience in social impact initiatives.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                <OptimizedImage src="/images/team/michael.png" alt="Michael Chen" width={192} height={192} />
              </div>
              <h3 className="mb-1 text-xl font-semibold">Michael Chen</h3>
              <p className="mb-3 text-emerald-600">Co-Founder & CTO</p>
              <p className="text-slate-600">
                Tech entrepreneur passionate about using technology to solve social challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                <OptimizedImage src="/images/team/priya.png" alt="Priya Patel" width={192} height={192} />
              </div>
              <h3 className="mb-1 text-xl font-semibold">Priya Patel</h3>
              <p className="mb-3 text-emerald-600">Director of Campaigns</p>
              <p className="text-slate-600">
                Campaign strategist with experience in grassroots organizing and community engagement.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                <OptimizedImage src="/images/team/david.png" alt="David Okafor" width={192} height={192} />
              </div>
              <h3 className="mb-1 text-xl font-semibold">David Okafor</h3>
              <p className="mb-3 text-emerald-600">Head of Partnerships</p>
              <p className="text-slate-600">
                Relationship builder with a background in corporate social responsibility and nonprofit partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-emerald-700 py-16 text-white">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-emerald-800 p-6">
              <h3 className="mb-3 text-xl font-semibold">Transparency</h3>
              <p>
                We believe in complete openness about how funds are used and the impact of each campaign. Donors deserve
                to know exactly how their contributions make a difference.
              </p>
            </div>
            <div className="rounded-lg bg-emerald-800 p-6">
              <h3 className="mb-3 text-xl font-semibold">Community-Driven</h3>
              <p>
                We empower communities to identify their own needs and develop solutions. Change is most effective when
                it comes from within.
              </p>
            </div>
            <div className="rounded-lg bg-emerald-800 p-6">
              <h3 className="mb-3 text-xl font-semibold">Measurable Impact</h3>
              <p>
                We focus on tangible outcomes and measurable results. Every campaign has clear goals and metrics to
                track progress.
              </p>
            </div>
            <div className="rounded-lg bg-emerald-800 p-6">
              <h3 className="mb-3 text-xl font-semibold">Inclusivity</h3>
              <p>
                We create space for diverse voices and perspectives. Everyone has something valuable to contribute to
                positive change.
              </p>
            </div>
            <div className="rounded-lg bg-emerald-800 p-6">
              <h3 className="mb-3 text-xl font-semibold">Collaboration</h3>
              <p>
                We foster partnerships between individuals, organizations, and communities. Together, we can accomplish
                more than we ever could alone.
              </p>
            </div>
            <div className="rounded-lg bg-emerald-800 p-6">
              <h3 className="mb-3 text-xl font-semibold">Innovation</h3>
              <p>
                We embrace creative approaches to social and environmental challenges. New ideas drive progress and
                lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Join Our Community</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-700">
            Whether you want to donate, volunteer, or start your own campaign, there's a place for you in our community
            of changemakers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/campaigns">Explore Campaigns</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
