"use client"

import { motion } from "framer-motion"
import { Coins } from "lucide-react"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
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
          <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Last updated: April 1, 2023</p>

          <div className="prose dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              This Cookie Policy explains how Luma Bank uses cookies and similar technologies to recognize you when you
              visit our website and mobile applications. It explains what these technologies are and why we use them, as
              well as your rights to control our use of them.
            </p>

            <h2>2. What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website.
              Cookies are widely used by website owners to make their websites work, or to work more efficiently, as
              well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, Luma Bank) are called "first-party cookies." Cookies set
              by parties other than the website owner are called "third-party cookies." Third-party cookies enable
              third-party features or functionality to be provided on or through the website (e.g., advertising,
              interactive content, and analytics).
            </p>

            <h2>3. Types of Cookies We Use</h2>
            <h3>3.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function and cannot be switched off in our systems. They
              are usually only set in response to actions made by you which amount to a request for services, such as
              setting your privacy preferences, logging in, or filling in forms.
            </p>

            <h3>3.2 Performance Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance
              of our site. They help us to know which pages are the most and least popular and see how visitors move
              around the site.
            </p>

            <h3>3.3 Functional Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by
              us or by third-party providers whose services we have added to our pages.
            </p>

            <h3>3.4 Targeting Cookies</h3>
            <p>
              These cookies may be set through our site by our advertising partners. They may be used by those companies
              to build a profile of your interests and show you relevant advertisements on other sites.
            </p>

            <h2>4. How to Manage Cookies</h2>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or
              access cookies. If you disable or refuse cookies, please note that some parts of this website may become
              inaccessible or not function properly.
            </p>

            <h2>5. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page and updating the "Last updated" date.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy, please contact us at privacy@lumabank.com or by mail
              at Luma Bank Privacy Department, 123 Finance St, New York, NY 10001.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
