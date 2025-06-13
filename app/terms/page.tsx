"use client"

import { motion } from "framer-motion"
import { Coins } from "lucide-react"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Last updated: April 1, 2023</p>

          <div className="prose dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Luma Bank. These Terms of Service ("Terms") govern your use of our website, mobile application,
              and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by
              these Terms.
            </p>

            <h2>2. Definitions</h2>
            <p>
              <strong>"Luma Bank"</strong> refers to our company, its subsidiaries, affiliates, officers, directors,
              employees, and agents.
            </p>
            <p>
              <strong>"Luma Coin"</strong> refers to our proprietary digital currency that can be earned, saved, and
              redeemed within our ecosystem.
            </p>
            <p>
              <strong>"User"</strong> refers to any individual who accesses or uses our Services.
            </p>

            <h2>3. Account Registration</h2>
            <p>
              To use certain features of our Services, you may need to create an account. You agree to provide accurate,
              current, and complete information during the registration process and to update such information to keep
              it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding your account credentials and for all activities that occur under your
              account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2>4. Luma Coin</h2>
            <p>
              Luma Coins are a digital currency that can be earned through various activities within our ecosystem. Luma
              Coins have no cash value and cannot be exchanged for cash or transferred to other users.
            </p>
            <p>
              Luma Bank reserves the right to modify the ways in which Luma Coins can be earned or redeemed, as well as
              the value of Luma Coins, at any time without prior notice.
            </p>

            <h2>5. Prohibited Activities</h2>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            <ul>
              <li>Violating any applicable laws or regulations</li>
              <li>Infringing on the intellectual property rights of others</li>
              <li>Attempting to gain unauthorized access to our systems or user accounts</li>
              <li>Using our Services for any illegal or unauthorized purpose</li>
              <li>Interfering with or disrupting the integrity or performance of our Services</li>
            </ul>

            <h2>6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our Services at any time, with or without
              cause, and with or without notice. Upon termination, your right to use our Services will immediately
              cease, and any unused Luma Coins will be forfeited.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of any material changes by
              posting the updated Terms on our website or through other communications. Your continued use of our
              Services after such changes constitutes your acceptance of the new Terms.
            </p>

            <h2>8. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@lumabank.com or by mail at Luma
              Bank Legal Department, 123 Finance St, New York, NY 10001.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
