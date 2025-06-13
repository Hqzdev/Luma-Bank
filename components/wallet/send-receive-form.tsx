"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SendReceiveFormProps {
  type: "send"
  onClose: () => void
}

export default function SendReceiveForm({ type, onClose }: SendReceiveFormProps) {
  const [amount, setAmount] = useState("")
  const [recipient, setRecipient] = useState("")
  const [note, setNote] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSendLuma = () => {
    if (!amount || !recipient) return

    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      onClose()
    }, 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="mt-8"
    >
      <Card className="border border-gray-200 dark:border-gray-800 rounded-xl">
        <CardHeader>
          <CardTitle>Send Luma Coins</CardTitle>
          <CardDescription>Transfer Luma coins to another user</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient</Label>
              <Input
                id="recipient"
                placeholder="Username or Luma ID"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="relative">
                <Input
                  id="amount"
                  type="number"
                  placeholder="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">Luma</div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="note">Note (Optional)</Label>
              <Input id="note" placeholder="What's this for?" value={note} onChange={(e) => setNote(e.target.value)} />
            </div>

            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 bg-green-50 text-green-700 rounded-md flex items-center gap-2 dark:bg-green-900/20 dark:text-green-400"
                >
                  <Check className="h-5 w-5" />
                  Transfer successful!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSendLuma} disabled={!amount || !recipient}>
            Send Luma
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
