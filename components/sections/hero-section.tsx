"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-gray-100 dark:bg-gray-800/20 rounded-full blur-3xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-gray-100 dark:bg-gray-800/20 rounded-full blur-3xl"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full"
        initial={{ y: 0 }}
        animate={{ y: [10, -10, 10] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 left-1/3 w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full"
        initial={{ y: 0 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" variants={itemVariants}>
            The future of{" "}
            <span className="relative">
              finance
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gray-900 dark:bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </span>{" "}
            is here
          </motion.h1>
          <motion.p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto" variants={itemVariants}>
            Manage your money professionally, conveniently, and beautifully with our next-generation digital financial
            ecosystem.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link href="/wallet">
                <Button size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <motion.div
                    className="ml-2 relative z-10"
                    initial={{ x: 0 }}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gray-800 dark:bg-gray-200"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ opacity: 0.1 }}
                  />
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated card mockups */}
          <motion.div
            className="mt-16 relative h-64 md:h-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <motion.div
              className="absolute left-1/2 top-0 -translate-x-1/2 w-64 h-40 md:w-80 md:h-48 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-xl overflow-hidden"
              initial={{ y: 100, rotate: -5, opacity: 0 }}
              animate={{ y: 0, rotate: -5, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.7, type: "spring" }}
            >
              <div className="p-4 text-white">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xs opacity-80">FinanceOS</div>
                  <div className="text-xs opacity-80">VISA</div>
                </div>
                <div className="text-xs opacity-80 mb-1">Card Number</div>
                <div className="font-mono mb-4">**** **** **** 4321</div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs opacity-80">Card Holder</div>
                    <div className="text-sm">JOHN DOE</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-80">Expires</div>
                    <div className="text-sm">12/28</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute left-1/2 top-10 -translate-x-1/2 w-64 h-40 md:w-80 md:h-48 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-xl shadow-xl overflow-hidden"
              initial={{ y: 100, rotate: 5, opacity: 0 }}
              animate={{ y: 20, rotate: 5, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.9, type: "spring" }}
            >
              <div className="p-4 text-white">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xs opacity-80">FinanceOS Premium</div>
                  <div className="text-xs opacity-80">MASTERCARD</div>
                </div>
                <div className="text-xs opacity-80 mb-1">Card Number</div>
                <div className="font-mono mb-4">**** **** **** 8765</div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs opacity-80">Card Holder</div>
                    <div className="text-sm">JOHN DOE</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-80">Expires</div>
                    <div className="text-sm">10/29</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
