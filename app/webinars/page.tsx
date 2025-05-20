import Link from "next/link"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/optimized-image"

const upcomingWebinars = [
  {
    id: 1,
    title: "Ocean Conservation: Challenges and Solutions",
    date: "June 15, 2023",
    time: "2:00 PM - 3:30 PM EST",
    speaker: "Dr. Marina Santos",
    description:
      "Join marine biologist Dr. Marina Santos for an in-depth discussion on the current state of our oceans and innovative approaches to conservation.",
    image: "https://images.unsplash.com/photo-1518399681705-1c1a55e5e883?q=80&w=1000",
  },
  {
    id: 2,
    title: "Digital Education: Bridging the Gap",
    date: "June 22, 2023",
    time: "1:00 PM - 2:30 PM EST",
    speaker: "Prof. James Wilson",
    description:
      "Learn about strategies to address the digital divide in education and ensure equitable access to learning resources.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000",
  },
  {
    id: 3,
    title: "Sustainable Fashion: The Future of Clothing",
    date: "July 5, 2023",
    time: "11:00 AM - 12:30 PM EST",
    speaker: "Emma Rodriguez",
    description:
      "Explore the environmental impact of the fashion industry and discover sustainable alternatives for conscious consumers.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000",
  },
]

const pastWebinars = [
  {
    id: 4,
    title: "Food Security in Urban Communities",
    date: "May 28, 2023",
    speaker: "Dr. Robert Chen",
    description:
      "An examination of food deserts in urban areas and community-based solutions to improve access to nutritious food.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000",
  },
  {
    id: 5,
    title: "Climate Change: Local Actions, Global Impact",
    date: "May 15, 2023",
    speaker: "Dr. Amara Johnson",
    description: "Learn how small-scale community initiatives can contribute to addressing the global climate crisis.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000",
  },
  {
    id: 6,
    title: "Mental Health Awareness in Communities",
    date: "April 30, 2023",
    speaker: "Dr. Sarah Thompson",
    description: "Strategies for promoting mental health awareness and reducing stigma at the community level.",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=1000",
  },
  {
    id: 7,
    title: "Effective Fundraising for Social Causes",
    date: "April 18, 2023",
    speaker: "Michael Donovan",
    description: "Practical tips and best practices for fundraising to support social impact initiatives.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000",
  },
  {
    id: 8,
    title: "Digital Literacy for All Ages",
    date: "April 5, 2023",
    speaker: "Lisa Chen",
    description: "Approaches to promoting digital literacy across generations, from children to seniors.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000",
  },
]

export default function WebinarsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold">Webinars & Events</h1>
              <p className="mb-6 text-lg text-slate-700">
                Join our educational webinars and virtual events to deepen your understanding of social and
                environmental issues and connect with experts and fellow changemakers.
              </p>
              <p className="mb-8 text-lg text-slate-700">
                All webinars are free to attend and include Q&A sessions with speakers. Recordings are made available to
                registered participants.
              </p>
              <Button asChild size="lg">
                <a href="#upcoming">View Upcoming Webinars</a>
              </Button>
            </div>
            <div className="overflow-hidden rounded-lg">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000"
                alt="Speaker presenting at a webinar"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section id="upcoming" className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Upcoming Webinars</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {upcomingWebinars.map((webinar) => (
              <div key={webinar.id} className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="h-48 w-full">
                  <OptimizedImage src={webinar.image} alt={webinar.title} className="h-full" />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center text-sm text-emerald-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {webinar.date} • {webinar.time}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{webinar.title}</h3>
                  <p className="mb-2 text-sm text-slate-500">Speaker: {webinar.speaker}</p>
                  <p className="mb-4 text-slate-600">{webinar.description}</p>
                  <Button asChild>
                    <Link href={`/webinars/${webinar.id}`}>Register Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Past Webinars</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pastWebinars.map((webinar) => (
              <div key={webinar.id} className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="h-48 w-full">
                  <OptimizedImage src={webinar.image} alt={webinar.title} className="h-full" />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center text-sm text-slate-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {webinar.date}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{webinar.title}</h3>
                  <p className="mb-2 text-sm text-slate-500">Speaker: {webinar.speaker}</p>
                  <p className="mb-4 text-slate-600">{webinar.description}</p>
                  <Button asChild variant="outline">
                    <Link href={`/webinars/${webinar.id}`}>Watch Recording</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host a Webinar */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-lg bg-emerald-50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-emerald-800">Want to Host a Webinar?</h2>
            <p className="mb-6 text-lg text-emerald-700">
              Are you an expert in a field related to social or environmental impact? Share your knowledge with our
              community by hosting a webinar.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us to Propose a Topic</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="bg-slate-800 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Never Miss a Webinar</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Subscribe to our newsletter to receive updates about upcoming webinars and events.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-md border border-slate-600 bg-slate-700 px-4 py-2 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
