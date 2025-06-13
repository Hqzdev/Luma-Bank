"use client"

import { Coins } from "lucide-react"
import { motion } from "framer-motion"

export default function TransactionHistory() {
  const transactions = [
    {
      id: "tx1",
      type: "bonus",
      amount: 100,
      description: "Registration Bonus",
      date: new Date().toISOString(),
    },
  ]

  return (
    <div className="space-y-4">
      {transactions.map((transaction, index) => (
        <motion.div
          key={transaction.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
              <Coins className="h-5 w-5" />
            </div>
            <div>
              <div className="font-medium">{transaction.description}</div>
              <div className="text-xs text-gray-500">{new Date(transaction.date).toLocaleDateString()}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-green-600 dark:text-green-400">+{transaction.amount} Luma</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
