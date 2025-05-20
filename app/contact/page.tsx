"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formState)
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    })
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "general",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-500 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight">Contact Us</h1>
            <p className="mb-8 text-xl">
              Have questions, feedback, or want to get involved? We'd love to hear from you. Reach out to our team using
              the contact information below or fill out the form.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Email Us</h3>
                <p className="mb-4 text-gray-600">For general inquiries and support</p>
                <Link href="mailto:info@socialimpact.org" className="text-emerald-600 hover:underline">
                  info@socialimpact.org
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Call Us</h3>
                <p className="mb-4 text-gray-600">Monday to Friday, 9am to 5pm EST</p>
                <Link href="tel:+1-555-123-4567" className="text-emerald-600 hover:underline">
                  +1 (555) 123-4567
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Visit Us</h3>
                <p className="mb-4 text-gray-600">Our headquarters location</p>
                <address className="not-italic text-emerald-600">
                  123 Impact Street
                  <br />
                  San Francisco, CA 94103
                </address>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select value={formState.subject} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                      <SelectItem value="campaign-support">Campaign Support</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="volunteer">Volunteer Information</SelectItem>
                      <SelectItem value="technical-support">Technical Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Inquiry Type</Label>
                  <RadioGroup
                    value={formState.inquiryType}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="general" />
                      <Label htmlFor="general" className="font-normal">
                        General Question
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="support" id="support" />
                      <Label htmlFor="support" className="font-normal">
                        Support Request
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="feedback" id="feedback" />
                      <Label htmlFor="feedback" className="font-normal">
                        Feedback
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="flex flex-col">
              <h2 className="mb-6 text-2xl font-bold">Our Location</h2>
              <div className="h-[400px] overflow-hidden rounded-lg border bg-white shadow-sm">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Map"
                  alt="Office location map"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 rounded-lg border bg-white p-4 shadow-sm">
                <h3 className="mb-2 font-semibold">SocialImpact Headquarters</h3>
                <address className="not-italic text-gray-600">
                  123 Impact Street
                  <br />
                  San Francisco, CA 94103
                  <br />
                  United States
                </address>
                <p className="mt-2 text-sm text-gray-500">
                  Open Monday to Friday, 9am to 5pm EST. Visitors are welcome by appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mx-auto grid max-w-4xl gap-6">
            {[
              {
                question: "How can I start a campaign on your platform?",
                answer:
                  "To start a campaign, you'll need to create an account and submit a campaign proposal through our platform. Our team will review your proposal and get back to you within 3-5 business days.",
              },
              {
                question: "I'm having technical issues with the website. Who should I contact?",
                answer:
                  "For technical support, please email support@socialimpact.org with details about the issue you're experiencing. Screenshots or screen recordings are helpful for our team to diagnose the problem.",
              },
              {
                question: "How can I volunteer for a campaign?",
                answer:
                  "You can browse active campaigns on our platform and look for volunteer opportunities. Each campaign has a 'Get Involved' section where you can sign up to volunteer.",
              },
              {
                question: "Do you offer partnership opportunities for businesses?",
                answer:
                  "Yes, we partner with businesses that align with our values and mission. Please contact partnerships@socialimpact.org with information about your business and how you'd like to collaborate.",
              },
              {
                question: "How can I donate to a campaign?",
                answer:
                  "Each campaign has a 'Donate' button that will take you to a secure payment page. You can make one-time or recurring donations using credit/debit cards or PayPal.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-lg border p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Join Our Community</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Connect with like-minded individuals and organizations committed to creating positive social change.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Start a Campaign
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
              Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
