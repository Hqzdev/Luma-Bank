"use client"

import { motion } from "framer-motion"
import { Coins } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
          <h1 className="text-4xl font-bold mb-6">About Luma Coin</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Luma Coin is our proprietary digital currency designed to enhance your banking experience and provide
            exclusive rewards and benefits.
          </p>

          <Card className="mb-8 rounded-xl">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                At Luma Bank, our mission is to revolutionize the banking experience by combining traditional financial
                services with innovative digital solutions. Luma Coin is at the heart of this vision, providing our
                users with a versatile digital currency that can be earned, saved, and spent within our ecosystem.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">The Luma Coin Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Versatility",
                description: "Use Luma Coins across a wide range of services and products within our ecosystem.",
              },
              {
                title: "No Expiration",
                description: "Unlike traditional reward points, Luma Coins never expire.",
              },
              {
                title: "Exclusive Benefits",
                description: "Access premium features and offers available only with Luma Coins.",
              },
              {
                title: "Easy to Earn",
                description: "Earn Luma Coins through everyday banking activities and special promotions.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full rounded-xl">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Our History</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Luma Bank was founded in 2020 with a vision to create a more rewarding and engaging banking experience. Luma
            Coin was introduced in 2021 as a way to incentivize customer loyalty and provide additional value beyond
            traditional banking services.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Since then, we've grown to serve millions of customers worldwide, with Luma Coin becoming an integral part
            of our banking ecosystem. We continue to innovate and expand the utility of Luma Coin, making it more
            valuable and versatile for our users.
          </p>

          <div className="text-center">
            <Link href="/wallet">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700">
                Start Using Luma Coin
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
