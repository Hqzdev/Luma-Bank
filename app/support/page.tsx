"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Coins, Search, ChevronDown, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What is Luma Coin?",
      answer:
        "Luma Coin is our proprietary digital currency that enhances your banking experience. You can earn Luma Coins through everyday banking activities and redeem them for exclusive rewards and benefits.",
    },
    {
      question: "How do I earn Luma Coins?",
      answer:
        "You can earn Luma Coins through various activities, including making purchases with your Luma Bank card, referring friends, participating in promotions, and maintaining certain account balances.",
    },
    {
      question: "How do I check my Luma Coin balance?",
      answer:
        "You can check your Luma Coin balance by logging into your Luma Bank account and visiting the Wallet section. Your current balance will be displayed prominently at the top of the page.",
    },
    {
      question: "Can Luma Coins expire?",
      answer: "No, Luma Coins do not expire. Once earned, they remain in your account until you choose to redeem them.",
    },
    {
      question: "How do I redeem my Luma Coins?",
      answer:
        "You can redeem your Luma Coins through the Wallet section of your account. Select the 'Redeem' option to view available rewards and benefits, then follow the prompts to complete your redemption.",
    },
  ]

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
          <h1 className="text-4xl font-bold mb-6">Support Center</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Find answers to common questions or contact our support team for assistance.
          </p>

          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input placeholder="Search for help articles..." className="pl-10 rounded-xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Account Issues", icon: "👤" },
              { title: "Luma Coin", icon: "🪙" },
              { title: "Virtual Cards", icon: "💳" },
              { title: "Security", icon: "🔒" },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card className="cursor-pointer rounded-xl">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="text-3xl">{category.icon}</div>
                    <h3 className="font-medium">{category.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="mb-8 rounded-xl">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-800 last:border-0 pb-4 last:pb-0"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex items-center justify-between w-full text-left py-2"
                    >
                      <h3 className="font-medium">{faq.question}</h3>
                      <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </motion.div>
                    </button>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="py-3 text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Live Chat
                </Button>
                <Button variant="outline">Email Support</Button>
              </div>
              <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                <p>Support Hours: Monday - Friday, 9am - 6pm EST</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
