"use client"

import { motion } from "framer-motion"
import { Coins, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PressPage() {
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
          <h1 className="text-4xl font-bold mb-6">Press & Media</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Stay up to date with the latest news and announcements from Luma Bank. For press inquiries, please contact
            press@lumabank.com.
          </p>

          <Card className="mb-8 rounded-xl">
            <CardHeader>
              <CardTitle>Press Kit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Download our press kit for official logos, brand guidelines, and executive headshots.
              </p>
              <Button variant="outline">Download Press Kit</Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Recent Press Releases</h2>
          <div className="space-y-6 mb-8">
            {[
              {
                title: "Luma Bank Launches New Luma Coin Rewards Program",
                date: "April 10, 2023",
                excerpt:
                  "Luma Bank today announced the launch of its enhanced Luma Coin rewards program, offering customers more ways to earn and redeem digital currency.",
              },
              {
                title: "Luma Bank Reports Record Growth in Q1 2023",
                date: "March 15, 2023",
                excerpt:
                  "Luma Bank today reported record growth in the first quarter of 2023, with a 45% increase in new accounts and a 60% increase in Luma Coin transactions.",
              },
              {
                title: "Luma Bank Partners with Major Retailers for Expanded Rewards Program",
                date: "February 22, 2023",
                excerpt:
                  "Luma Bank announced new partnerships with major retailers, allowing customers to earn and spend Luma Coins at thousands of additional locations.",
              },
              {
                title: "Luma Bank Named 'Most Innovative Digital Bank' for Second Consecutive Year",
                date: "January 18, 2023",
                excerpt:
                  "Luma Bank has been recognized as the 'Most Innovative Digital Bank' by Financial Technology Awards for the second year in a row.",
              },
            ].map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{release.date}</span>
                    </div>
                    <h3 className="font-medium text-lg mb-2">{release.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{release.excerpt}</p>
                    <Button variant="outline" size="sm">
                      Read Full Release
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Media Coverage</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                source: "Financial Times",
                title: "How Luma Bank is Revolutionizing Digital Banking",
                date: "March 28, 2023",
              },
              {
                source: "Bloomberg",
                title: "Luma Coin: The Digital Currency Changing Banking Rewards",
                date: "February 15, 2023",
              },
              {
                source: "CNBC",
                title: "Luma Bank CEO Discusses Future of Digital Banking",
                date: "January 30, 2023",
              },
              {
                source: "TechCrunch",
                title: "Luma Bank's Innovative Approach to Customer Engagement",
                date: "December 12, 2022",
              },
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg"
              >
                <div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{article.source}</span>
                  <h3 className="font-medium">{article.title}</h3>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{article.date}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700">
              Contact Press Team
            </Button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
