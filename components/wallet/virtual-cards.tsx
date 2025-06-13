"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, Copy, Check, Plus, Coins } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import CreateCardForm from "@/components/wallet/create-card-form"

export default function VirtualCards() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [revealedCardNumber, setRevealedCardNumber] = useState<number | null>(null)
  const [isCopying, setIsCopying] = useState<number | null>(null)
  const [isCopied, setIsCopied] = useState<number | null>(null)
  const [showCreateCardForm, setShowCreateCardForm] = useState(false)
  const [showCVV, setShowCVV] = useState(false)
  const [showActionSuccess, setShowActionSuccess] = useState<string | null>(null)
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  const progressTimerRef = useRef<NodeJS.Timeout | null>(null)
  const copyTimerRef = useRef<NodeJS.Timeout | null>(null)
  const cvvTimerRef = useRef<NodeJS.Timeout | null>(null)

  const cards = [
    {
      id: 1,
      name: "Luma Visa",
      number: "4539 7845 2314 6789",
      maskedNumber: "4539 **** **** 6789",
      expiry: "05/28",
      cvv: "123",
      type: "Visa",
      status: "active",
      color: "bg-gradient-to-r from-blue-700 to-blue-900",
      textColor: "text-white",
      lumaRewards: "2x",
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40" className="text-white">
          <path
            fill="currentColor"
            d="M32 42H16c-5.5 0-10-4.5-10-10V16c0-5.5 4.5-10 10-10h16c5.5 0 10 4.5 10 10v16c0 5.5-4.5 10-10 10z"
          />
          <path
            fill="#fff"
            d="M28.2 20.9h-4.7l-6.3 15.8h4.8l.9-2.2h5.3l.5 2.2h5.2l-5.7-15.8zm-4.2 10.5l2.1-5.4 1.2 5.4h-3.3zM20.9 20.9h-7.3l-.8 4.9c-.2 1.1.6 1.7 1.6 1.8.9.1 2.2-.1 2.2-.1l-.3 2.4s-1.2.4-3 .3c-1.8-.1-3.4-2-3-4.5l.9-4.8h-2.1l.7-3.8h2.1l.5-2.5h4.6l-.5 2.5h4.1l-.7 3.8zM32.7 20.9l.7-3.8h-4.6l-.7 3.8h-2.3l-2.9 15.8h4.8l1.7-9.2h2l1.7 9.2h5.1l-2-9.2h1.9c1.8 0 2.3-1.9 2.5-2.9.2-1.1.5-2.9.5-2.9h-8.4z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Luma Mastercard",
      number: "5412 7534 9876 1234",
      maskedNumber: "5412 **** **** 1234",
      expiry: "09/27",
      cvv: "456",
      type: "Mastercard",
      status: "active",
      color: "bg-gradient-to-r from-red-600 to-orange-600",
      textColor: "text-white",
      lumaRewards: "3x",
      logo: (
        <div className="flex">
          <div className="w-6 h-6 rounded-full bg-red-500 opacity-80 -mr-2"></div>
          <div className="w-6 h-6 rounded-full bg-yellow-500 opacity-80"></div>
        </div>
      ),
    },
    {
      id: 3,
      name: "Luma Amex",
      number: "3782 8224 6310 005",
      maskedNumber: "3782 ****** 0005",
      expiry: "12/26",
      cvv: "789",
      type: "American Express",
      status: "active",
      color: "bg-gradient-to-r from-green-700 to-teal-700",
      textColor: "text-white",
      lumaRewards: "4x",
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40" className="text-white">
          <path
            fill="currentColor"
            d="M45 35c0 2.209-1.791 4-4 4H7c-2.209 0-4-1.791-4-4V13c0-2.209 1.791-4 4-4h34c2.209 0 4 1.791 4 4v22z"
          />
          <path
            fill="#fff"
            d="M22.555 23.168v-4.003L25.387 23.168zM22.555 24.576L25.387 28.408v-3.832zM24.75 20.016L22.555 16.184v3.832zM24.75 28.408L22.555 32.24v-3.832zM10 16.184H7.5v12.48H10v-4.56h2.25v4.56h2.5v-12.48h-2.5v4.56H10zM15.5 16.184v12.48h7.5v-2.4h-5v-2.88h4.75v-2.4H18v-2.4h5v-2.4zM35.5 16.184v12.48h7.5v-2.4h-5v-2.88h4.75v-2.4H38v-2.4h5v-2.4z"
          />
        </svg>
      ),
    },
  ]

  const handleRevealCardNumber = (cardId: number) => {
    setRevealedCardNumber(cardId)

    // Start timer to hide card number after 5 seconds
    if (progressTimerRef.current) {
      clearTimeout(progressTimerRef.current)
    }

    progressTimerRef.current = setTimeout(() => {
      setRevealedCardNumber(null)
    }, 5000)
  }

  const handleCopyCardNumber = (cardId: number, cardNumber: string) => {
    navigator.clipboard.writeText(cardNumber.replace(/\s/g, ""))
    setIsCopying(null)
    setIsCopied(cardId)

    if (copyTimerRef.current) {
      clearTimeout(copyTimerRef.current)
    }

    copyTimerRef.current = setTimeout(() => {
      setIsCopied(null)
    }, 2000)
  }

  const handleViewCVV = () => {
    setShowCVV(true)

    if (cvvTimerRef.current) {
      clearTimeout(cvvTimerRef.current)
    }

    cvvTimerRef.current = setTimeout(() => {
      setShowCVV(false)
    }, 5000)
  }

  const handleCardAction = (action: string) => {
    setOpenDialog(action)
  }

  const handleConfirmAction = () => {
    setShowActionSuccess(openDialog)
    setTimeout(() => {
      setShowActionSuccess(null)
      setOpenDialog(null)
    }, 2000)
  }

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (progressTimerRef.current) {
        clearTimeout(progressTimerRef.current)
      }
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current)
      }
      if (cvvTimerRef.current) {
        clearTimeout(cvvTimerRef.current)
      }
    }
  }, [])

  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Your Virtual Cards</h2>
        <Button onClick={() => setShowCreateCardForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Card
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
            className="cursor-pointer"
          >
            <Card className="border border-gray-200 dark:border-gray-800 overflow-hidden rounded-xl">
              <div className={cn("p-6 rounded-t-xl relative overflow-hidden", card.color)}>
                <div className="flex justify-between items-start mb-6">
                  <div className={cn("font-medium", card.textColor)}>
                    {card.name}
                    <Badge className="ml-2 bg-white/20 text-white border-white/10">Virtual</Badge>
                  </div>
                  <div className={cn("text-sm", card.textColor)}>{card.type}</div>
                </div>

                <div className={cn("mb-6 flex items-center", card.textColor)}>
                  <div className="text-lg font-mono">
                    {revealedCardNumber === card.id ? card.number : card.maskedNumber}
                  </div>
                  <div className="ml-2">
                    {revealedCardNumber === card.id ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 rounded-full bg-blue-500/20 hover:bg-blue-500/30 text-white relative"
                              onClick={(e) => {
                                e.stopPropagation()
                                setIsCopying(card.id)
                                handleCopyCardNumber(card.id, card.number)
                              }}
                            >
                              {isCopied === card.id ? (
                                <Check className="h-3 w-3" />
                              ) : isCopying === card.id ? (
                                <Copy className="h-3 w-3" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}

                              {/* Circular progress indicator */}
                              {revealedCardNumber === card.id && (
                                <svg className="absolute inset-0 w-full h-full -rotate-90">
                                  <circle
                                    className="text-blue-500/20"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    r="10"
                                    cx="12"
                                    cy="12"
                                  />
                                  <motion.circle
                                    className="text-green-500"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    r="10"
                                    cx="12"
                                    cy="12"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 5, ease: "linear" }}
                                  />
                                </svg>
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>{isCopied === card.id ? "Copied!" : "Copy card number"}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 rounded-full bg-blue-500/20 hover:bg-blue-500/30 text-white"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleRevealCardNumber(card.id)
                              }}
                            >
                              <Eye className="h-3 w-3" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Show card number</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className={cn("text-sm", card.textColor)}>
                    <div>Expires: {card.expiry}</div>
                    <div className="mt-1 flex items-center gap-1">
                      <Coins className="h-3 w-3" />
                      <span>{card.lumaRewards} Luma Rewards</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={cn("text-right text-sm", card.textColor)}>
                      <div>CVV</div>
                      <div className="font-medium">{showCVV ? card.cvv : "***"}</div>
                    </div>
                    <div>{card.logo}</div>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {selectedCard === card.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="p-6 border-t border-gray-200 dark:border-gray-800">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-medium mb-3">Card Details</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Card Number</span>
                              <span className="text-sm font-medium font-mono">{card.maskedNumber}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Expiry Date</span>
                              <span className="text-sm font-medium">{card.expiry}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">CVV</span>
                              <span className="text-sm font-medium">{showCVV ? card.cvv : "***"}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Status</span>
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800"
                              >
                                {card.status.charAt(0).toUpperCase() + card.status.slice(1)}
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Card Type</span>
                              <span className="text-sm font-medium">{card.type}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium mb-3">Card Actions</h3>
                          <div className="space-y-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full justify-start"
                              onClick={handleViewCVV}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View CVV
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full justify-start"
                              onClick={() => handleCardAction("rewards")}
                            >
                              <Coins className="h-4 w-4 mr-2" />
                              Luma Rewards Settings
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full justify-start text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-950/20"
                              onClick={() => handleCardAction("deactivate")}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 mr-2"
                              >
                                <path d="M3 6h18" />
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                <line x1="10" x2="10" y1="11" y2="17" />
                                <line x1="14" x2="14" y1="11" y2="17" />
                              </svg>
                              Deactivate Card
                            </Button>
                          </div>

                          <AnimatePresence>
                            {showActionSuccess && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="p-3 mt-4 bg-green-50 text-green-700 rounded-md flex items-center gap-2 dark:bg-green-900/20 dark:text-green-400"
                              >
                                <Check className="h-5 w-5" />
                                {showActionSuccess === "rewards"
                                  ? "Rewards settings updated!"
                                  : "Card deactivated successfully!"}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>

      {showCreateCardForm && <CreateCardForm onClose={() => setShowCreateCardForm(false)} />}

      <Dialog open={openDialog !== null} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent className="rounded-xl bg-white dark:bg-gray-950">
          <DialogHeader>
            <DialogTitle>{openDialog === "rewards" ? "Luma Rewards Settings" : "Deactivate Card"}</DialogTitle>
            <DialogDescription>
              {openDialog === "rewards"
                ? "Customize your Luma Coin rewards preferences"
                : "Are you sure you want to deactivate this card?"}
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            {openDialog === "rewards" && (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <h3 className="font-medium mb-2">Current Rewards Rate</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2x Luma Coins on all transactions</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <h3 className="font-medium mb-2">Bonus Categories</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">None selected</p>
                </div>
              </div>
            )}

            {openDialog === "deactivate" && (
              <div className="p-4 bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-400 rounded-lg">
                <p>Deactivating this card will prevent any future transactions. This action can be reversed later.</p>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDialog(null)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmAction} variant={openDialog === "deactivate" ? "destructive" : "default"}>
              {openDialog === "rewards" ? "Save Changes" : "Deactivate Card"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
