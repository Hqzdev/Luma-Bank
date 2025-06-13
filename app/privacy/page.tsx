"use client"

import { motion } from "framer-motion"
import { Coins } from "lucide-react"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Last updated: April 1, 2023</p>

          <div className="prose dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              At Luma Bank, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our website, mobile application, and services (collectively,
              the "Services").
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you provide to us, such as:</p>
            <ul>
              <li>Name, email address, phone number, and mailing address</li>
              <li>Date of birth and social security number</li>
              <li>Financial information, such as bank account and credit card details</li>
              <li>Account credentials, such as usernames and passwords</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you use our Services, we may automatically collect certain information, including:</p>
            <ul>
              <li>Device information, such as IP address, browser type, and operating system</li>
              <li>Usage information, such as pages visited, time spent on pages, and links clicked</li>
              <li>Location information, such as general geographic location based on IP address</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing, maintaining, and improving our Services</li>
              <li>Processing transactions and managing your account</li>
              <li>Communicating with you about our Services, updates, and promotions</li>
              <li>Personalizing your experience and delivering relevant content</li>
              <li>Monitoring and analyzing usage patterns and trends</li>
              <li>Detecting, preventing, and addressing technical issues and security breaches</li>
              <li>Complying with legal obligations and enforcing our terms and policies</li>
            </ul>

            <h2>4. Information Sharing and Disclosure</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li>With service providers who perform services on our behalf</li>
              <li>With business partners with whom we jointly offer products or services</li>
              <li>In connection with a merger, acquisition, or sale of all or a portion of our assets</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, property, or safety, or the rights, property, or safety of others</li>
              <li>With your consent or at your direction</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your information from
              unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the
              Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>6. Your Rights and Choices</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
            <ul>
              <li>Accessing, correcting, or deleting your personal information</li>
              <li>Objecting to or restricting the processing of your personal information</li>
              <li>Requesting a copy of your personal information in a structured, machine-readable format</li>
              <li>Withdrawing your consent at any time</li>
            </ul>

            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy
              Policy periodically for any changes.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@lumabank.com or by mail
              at Luma Bank Privacy Department, 123 Finance St, New York, NY 10001.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
