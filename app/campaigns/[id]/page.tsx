import Link from "next/link"
import { Calendar, DollarSign, Share2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import CountdownTimer from "@/components/countdown-timer"
import { FallbackImage } from "@/components/fallback-image"

// This would typically come from a database
const getCampaignData = (id: string) => {
  return {
    id,
    title: "Clean Ocean Initiative",
    description: "Help us clean the oceans and protect marine life from plastic pollution.",
    longDescription: `
      <p>Our oceans are facing an unprecedented crisis. Every year, millions of tons of plastic waste find their way into our oceans, threatening marine ecosystems and the livelihoods of communities that depend on them.</p>
      
      <p>The Clean Ocean Initiative is a comprehensive campaign aimed at addressing this crisis through a multi-faceted approach:</p>
      
      <ul>
        <li><strong>Beach Cleanups:</strong> Regular volunteer-driven cleanup activities at local beaches.</li>
        <li><strong>Education and Awareness:</strong> Workshops and seminars to educate communities about the impact of plastic pollution.</li>
        <li><strong>Policy Advocacy:</strong> Working with local governments to implement plastic reduction policies.</li>
        <li><strong>Innovation:</strong> Supporting research and development of sustainable alternatives to single-use plastics.</li>
      </ul>
      
      <p>Your support can make a significant difference. By joining our campaign, you become part of a global movement working towards cleaner oceans and a healthier planet.</p>
      
      <h3>Impact Stories</h3>
      
      <p>"After participating in the Clean Ocean Initiative's beach cleanup, I was shocked by the amount of plastic we collected in just a few hours. It opened my eyes to the scale of the problem and inspired me to make changes in my daily life." - Sarah, Volunteer</p>
      
      <p>"The educational workshops conducted by the Clean Ocean Initiative in our school have transformed how our students think about plastic use. They've become advocates for change in their homes and communities." - Mr. Johnson, School Principal</p>
      
      <h3>Join Us</h3>
      
      <p>There are many ways to get involved with the Clean Ocean Initiative:</p>
      
      <ul>
        <li>Volunteer for beach cleanups</li>
        <li>Attend our webinars and workshops</li>
        <li>Support our work through donations</li>
        <li>Purchase merchandise to spread awareness</li>
        <li>Share our campaign with your network</li>
      </ul>
      
      <p>Together, we can turn the tide on ocean pollution and create a sustainable future for our planet.</p>
    `,
    image: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=1000",
    cause: "Environment",
    community: "IIFT, Delhi",
    context: "Environment Campaign",
    startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    webinarDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
    webinarTitle: "Ocean Conservation: Challenges and Solutions",
    merchandise: [
      { id: 1, name: "Ocean Conservation T-Shirt", price: 25 },
      { id: 2, name: "Reusable Water Bottle", price: 15 },
      { id: 3, name: "Tote Bag", price: 10 },
    ],
    goals: [
      { title: "Beach Cleanups", target: 12, current: 5, unit: "events" },
      { title: "Volunteers", target: 500, current: 237, unit: "people" },
      { title: "Plastic Collected", target: 5000, current: 2150, unit: "kg" },
      { title: "Funds Raised", target: 25000, current: 12750, unit: "dollars" },
    ],
    team: [
      {
        name: "Priya Sharma",
        role: "Campaign Lead",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000",
      },
      {
        name: "Rahul Gupta",
        role: "Volunteer Coordinator",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
      },
      {
        name: "Ananya Patel",
        role: "Education Specialist",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000",
      },
    ],
    updates: [
      {
        date: "May 10, 2025",
        title: "Successful Beach Cleanup",
        content: "Our team collected over 200kg of plastic waste during our recent beach cleanup event.",
      },
      {
        date: "May 5, 2025",
        title: "New Partnership Announcement",
        content:
          "We're excited to announce our partnership with EcoSolutions to develop sustainable alternatives to single-use plastics.",
      },
      {
        date: "April 28, 2025",
        title: "Workshop at Delhi Public School",
        content:
          "Our education team conducted a workshop on ocean conservation for 150 students at Delhi Public School.",
      },
    ],
  }
}

export default function CampaignPage({ params }: { params: { id: string } }) {
  const campaign = getCampaignData(params.id)

  return (
    <div className="min-h-screen bg-white">
      {/* Campaign Header */}
      <div className="relative h-[300px] w-full overflow-hidden bg-gray-100 md:h-[400px]">
        <FallbackImage
          src={campaign.image}
          alt={campaign.title}
          className="h-full w-full object-cover"
          width={1200}
          height={400}
          fallbackSrc="https://images.unsplash.com/photo-1518399681705-1c1a55e5e883?q=80&w=1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <div className="mb-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-sm">{campaign.cause}</span>
            <span className="rounded-full bg-black/30 px-3 py-1 text-sm">{campaign.community}</span>
            <span className="rounded-full bg-black/30 px-3 py-1 text-sm">{campaign.context}</span>
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">{campaign.title}</h1>
        </div>
      </div>

      {/* Campaign Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div>
            <div className="mb-6 rounded-lg bg-emerald-50 p-4">
              <p className="text-emerald-800">
                Campaign starts in:
                <CountdownTimer targetDate={campaign.startDate} className="mt-2" />
              </p>
            </div>

            {/* Campaign Goals */}
            <div className="mb-8 rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-bold">Campaign Goals</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {campaign.goals.map((goal, index) => (
                  <div key={index} className="rounded-lg bg-gray-50 p-4">
                    <h3 className="mb-1 font-semibold">{goal.title}</h3>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span>
                        {goal.current} / {goal.target} {goal.unit}
                      </span>
                      <span className="font-medium text-emerald-600">
                        {Math.round((goal.current / goal.target) * 100)}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-emerald-600"
                        style={{ width: `${(goal.current / goal.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="prose prose-emerald max-w-none"
              dangerouslySetInnerHTML={{ __html: campaign.longDescription }}
            ></div>

            {/* Campaign Updates */}
            <div className="mt-8">
              <h2 className="mb-6 text-2xl font-bold">Campaign Updates</h2>
              <div className="space-y-6">
                {campaign.updates.map((update, index) => (
                  <div key={index} className="rounded-lg border p-4 shadow-sm">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold">{update.title}</h3>
                      <span className="text-sm text-gray-500">{update.date}</span>
                    </div>
                    <p className="text-gray-600">{update.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Webinar Section */}
            <div className="mt-8 rounded-lg border bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-bold">Upcoming Webinar</h3>
              <div className="mb-4 flex items-center gap-2 text-gray-600">
                <Calendar className="h-5 w-5" />
                <span>May 30, 2025 - 3:00 PM EST</span>
              </div>
              <h4 className="mb-2 text-lg font-semibold">{campaign.webinarTitle}</h4>
              <p className="mb-4 text-gray-600">
                Join our expert panel as they discuss the challenges facing our oceans and innovative solutions being
                developed around the world.
              </p>
              <Button>Register for Webinar</Button>
            </div>

            {/* Campaign Team */}
            <div className="mt-8">
              <h2 className="mb-6 text-2xl font-bold">Campaign Team</h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {campaign.team.map((member, index) => (
                  <div key={index} className="flex flex-col items-center rounded-lg border p-4 text-center">
                    <div className="mb-3 h-20 w-20 overflow-hidden rounded-full">
                      <FallbackImage
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                        width={80}
                        height={80}
                        fallbackSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000"
                      />
                    </div>
                    <h3 className="mb-1 font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">Take Action</h3>

              <div className="space-y-3">
                <Button className="w-full justify-start gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Buy Merchandise
                </Button>

                <Button className="w-full justify-start gap-2">
                  <Calendar className="h-5 w-5" />
                  Attend Webinar
                </Button>

                <Button className="w-full justify-start gap-2">
                  <DollarSign className="h-5 w-5" />
                  Donate
                </Button>

                <Button variant="outline" className="w-full justify-start gap-2">
                  <Share2 className="h-5 w-5" />
                  Share
                </Button>
              </div>
            </div>

            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">Merchandise</h3>
              <div className="space-y-4">
                {campaign.merchandise.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <span className="font-medium">${item.price}</span>
                  </div>
                ))}
                <Separator />
                <Button className="w-full">View All Products</Button>
              </div>
            </div>

            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">Campaign Organizer</h3>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-200">
                  <FallbackImage
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000"
                    alt="Organizer"
                    className="h-full w-full rounded-full object-cover"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="font-medium">IIFT Environmental Club</p>
                  <p className="text-sm text-gray-600">Delhi, India</p>
                </div>
              </div>
              <Button variant="outline" className="mt-4 w-full">
                Contact Organizer
              </Button>
            </div>

            {/* Volunteer Signup */}
            <div className="rounded-lg border bg-emerald-50 p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-emerald-800">Volunteer for this Campaign</h3>
              <p className="mb-4 text-sm text-emerald-700">
                We're looking for passionate volunteers to help with beach cleanups, educational workshops, and more.
              </p>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Sign Up to Volunteer</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Campaigns */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">Related Campaigns</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                id: 2,
                title: "Marine Life Protection",
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000",
              },
              {
                id: 3,
                title: "Plastic-Free Beaches",
                image: "https://images.unsplash.com/photo-1478184996413-22e8e5e6a601?q=80&w=1000",
              },
              {
                id: 4,
                title: "Coral Reef Restoration",
                image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?q=80&w=1000",
              },
              {
                id: 5,
                title: "Sustainable Fishing",
                image: "https://images.unsplash.com/photo-1545671953-0e564e4838a5?q=80&w=1000",
              },
            ].map((campaign) => (
              <div
                key={campaign.id}
                className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <FallbackImage
                    src={campaign.image}
                    alt={campaign.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-bold">{campaign.title}</h3>
                  <p className="mb-3 text-sm text-gray-600">Short description of the related campaign goes here.</p>
                  <Link
                    href={`/campaigns/${campaign.id}`}
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
