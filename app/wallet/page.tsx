"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Coins } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LumaBalance from "@/components/wallet/luma-balance"
import VirtualCards from "@/components/wallet/virtual-cards"
import TransactionHistory from "@/components/wallet/transaction-history"
import SendReceiveForm from "@/components/wallet/send-receive-form"
import QuickActions from "@/components/wallet/quick-actions"

export default function WalletPage() {
  const [showSendForm, setShowSendForm] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Set mounted to true after component mounts to enable animations
  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 py-8"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
          >
            <div>
              <h1 className="text-3xl font-bold">Luma Wallet</h1>
              <p className="text-gray-500 dark:text-gray-400">Manage your Luma coins</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="col-span-1 md:col-span-2"
            >
              <LumaBalance onSend={() => setShowSendForm(true)} />
            </motion.div>

            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <QuickActions />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <VirtualCards />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border border-gray-200 dark:border-gray-800 mb-8 rounded-xl">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Transaction History</CardTitle>
                  <div className="flex items-center gap-2">
                    <Coins className="h-5 w-5 text-gray-900 dark:text-gray-400" />
                    <span className="font-medium">Luma Coins</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <TransactionHistory />
              </CardContent>
            </Card>
          </motion.div>

          {showSendForm && <SendReceiveForm type="send" onClose={() => setShowSendForm(false)} />}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
