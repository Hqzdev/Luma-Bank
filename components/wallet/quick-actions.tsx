"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Coins, Shield, Bell, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

export default function QuickActions() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleAction = (action: string) => {
    setOpenDialog(action)
  }

  const handleConfirm = () => {
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setOpenDialog(null)
    }, 2000)
  }

  return (
    <>
      <Card className="h-full border border-gray-200 dark:border-gray-800 rounded-xl">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-between" onClick={() => handleAction("rewards")}>
              <div className="flex items-center">
                <Coins className="h-4 w-4 mr-2" />
                <span>Luma Rewards</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>

            <Button variant="outline" className="w-full justify-between" onClick={() => handleAction("security")}>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                <span>Security Settings</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>

            <Button variant="outline" className="w-full justify-between" onClick={() => handleAction("notifications")}>
              <div className="flex items-center">
                <Bell className="h-4 w-4 mr-2" />
                <span>Notifications</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={openDialog !== null} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent className="rounded-xl">
          <DialogHeader>
            <DialogTitle>
              {openDialog === "rewards"
                ? "Luma Rewards"
                : openDialog === "security"
                  ? "Security Settings"
                  : "Notification Settings"}
            </DialogTitle>
            <DialogDescription>
              {openDialog === "rewards"
                ? "Manage your Luma Coin rewards and benefits"
                : openDialog === "security"
                  ? "Configure your security preferences"
                  : "Customize your notification preferences"}
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            {openDialog === "rewards" && (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <h3 className="font-medium mb-2">Current Rewards Level</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Bronze Level (100 Luma Coins)</p>
                  <p className="text-sm mt-2">Earn 400 more Luma Coins to reach Silver Level</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <h3 className="font-medium mb-2">Rewards Rate</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1x Luma Coins on all transactions</p>
                </div>
              </div>
            )}

            {openDialog === "security" && (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Enabled</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <h3 className="font-medium mb-2">Login Notifications</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Enabled</p>
                </div>
              </div>
            )}

            {openDialog === "notifications" && (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <h3 className="font-medium mb-2">Transaction Alerts</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Enabled</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <h3 className="font-medium mb-2">Promotional Notifications</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Disabled</p>
                </div>
              </div>
            )}

            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 mt-4 bg-green-50 text-green-700 rounded-md flex items-center gap-2 dark:bg-green-900/20 dark:text-green-400"
                >
                  <Check className="h-5 w-5" />
                  Settings updated successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDialog(null)}>
              Cancel
            </Button>
            <Button onClick={handleConfirm}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
