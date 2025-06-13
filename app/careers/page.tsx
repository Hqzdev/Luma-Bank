"use client"

import { motion } from "framer-motion"
import { Coins } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-gray-950/80 dark:border-gray-900/30 sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Coins className="h-6 w-6 text-gray-900 dark:text-gray-400" />
            <span className="font-semibold text-xl">Luma Bank</span>
          </Link>
          <Link href="/wallet">
            <Button>Go to Wallet</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Careers at Luma Bank</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Join our team and help shape the future of digital banking. We're looking for talented individuals who are
            passionate about innovation and customer experience.
          </p>

          <Card className="mb-8 rounded-xl">
            <CardHeader>
              <CardTitle>Why Work With Us</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Innovative work environment focused on digital transformation</li>
                <li>• Competitive compensation and benefits package</li>
                <li>• Opportunities for professional growth and development</li>
                <li>• Flexible work arrangements and work-life balance</li>
                <li>• Collaborative and inclusive company culture</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Open Positions</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                title: "Senior Frontend Developer",
                location: "New York, NY (Remote Available)",
                department: "Engineering",
              },
              {
                title: "Product Manager",
                location: "San Francisco, CA",
                department: "Product",
              },
              {
                title: "UX/UI Designer",
                location: "Remote",
                department: "Design",
              },
              {
                title: "Financial Analyst",
                location: "Chicago, IL",
                department: "Finance",
              },
              {
                title: "Customer Success Manager",
                location: "Austin, TX",
                department: "Customer Support",
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg">{job.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{job.location}</p>
                      </div>
                      <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                        {job.department}
                      </span>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Hiring Process</h2>
          <ol className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
            <li className="flex gap-3">
              <span className="font-bold">1.</span>
              <div>
                <p className="font-medium">Application Review</p>
                <p>Our recruitment team reviews your application and resume</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">2.</span>
              <div>
                <p className="font-medium">Initial Interview</p>
                <p>A 30-minute call with a recruiter to discuss your experience and expectations</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">3.</span>
              <div>
                <p className="font-medium">Technical Assessment</p>
                <p>Role-specific assessment to evaluate your skills and expertise</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">4.</span>
              <div>
                <p className="font-medium">Team Interview</p>
                <p>Meet with potential team members and discuss your role in detail</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">5.</span>
              <div>
                <p className="font-medium">Final Decision</p>
                <p>We'll make a decision and extend an offer if you're the right fit</p>
              </div>
            </li>
          </ol>

          <div className="text-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700">
              View All Openings
            </Button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
