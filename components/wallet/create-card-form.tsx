"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface CreateCardFormProps {
  onClose: () => void
}

export default function CreateCardForm({ onClose }: CreateCardFormProps) {
  const [cardName, setCardName] = useState("")
  const [cardType, setCardType] = useState("visa")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleCreateCard = () => {
    if (!cardName) return

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
          <CardTitle>Create New Virtual Card</CardTitle>
          <CardDescription>Set up a new virtual card for Luma transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="cardName">Card Name</Label>
              <Input
                id="cardName"
                placeholder="e.g. Shopping Card, Travel Card"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <Label>Card Type</Label>
              <RadioGroup
                value={cardType}
                onValueChange={setCardType}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div>
                  <RadioGroupItem value="visa" id="visa" className="peer sr-only" />
                  <Label
                    htmlFor="visa"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="40"
                        height="40"
                        className="text-blue-600"
                      >
                        <path
                          fill="currentColor"
                          d="M32 42H16c-5.5 0-10-4.5-10-10V16c0-5.5 4.5-10 10-10h16c5.5 0 10 4.5 10 10v16c0 5.5-4.5 10-10 10z"
                        />
                        <path
                          fill="#fff"
                          d="M28.2 20.9h-4.7l-6.3 15.8h4.8l.9-2.2h5.3l.5 2.2h5.2l-5.7-15.8zm-4.2 10.5l2.1-5.4 1.2 5.4h-3.3zM20.9 20.9h-7.3l-.8 4.9c-.2 1.1.6 1.7 1.6 1.8.9.1 2.2-.1 2.2-.1l-.3 2.4s-1.2.4-3 .3c-1.8-.1-3.4-2-3-4.5l.9-4.8h-2.1l.7-3.8h2.1l.5-2.5h4.6l-.5 2.5h4.1l-.7 3.8zM32.7 20.9l.7-3.8h-4.6l-.7 3.8h-2.3l-2.9 15.8h4.8l1.7-9.2h2l1.7 9.2h5.1l-2-9.2h1.9c1.8 0 2.3-1.9 2.5-2.9.2-1.1.5-2.9.5-2.9h-8.4z"
                        />
                      </svg>
                    </div>
                    <div className="text-center">Visa</div>
                  </Label>
                </div>

                <div>
                  <RadioGroupItem value="mastercard" id="mastercard" className="peer sr-only" />
                  <Label
                    htmlFor="mastercard"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="mb-2 flex">
                      <div className="w-6 h-6 rounded-full bg-red-500 opacity-80 -mr-2"></div>
                      <div className="w-6 h-6 rounded-full bg-yellow-500 opacity-80"></div>
                    </div>
                    <div className="text-center">Mastercard</div>
                  </Label>
                </div>

                <div>
                  <RadioGroupItem value="amex" id="amex" className="peer sr-only" />
                  <Label
                    htmlFor="amex"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="40"
                        height="40"
                        className="text-green-700"
                      >
                        <path
                          fill="currentColor"
                          d="M45 35c0 2.209-1.791 4-4 4H7c-2.209 0-4-1.791-4-4V13c0-2.209 1.791-4 4-4h34c2.209 0 4 1.791 4 4v22z"
                        />
                        <path
                          fill="#fff"
                          d="M22.555 23.168v-4.003L25.387 23.168zM22.555 24.576L25.387 28.408v-3.832zM24.75 20.016L22.555 16.184v3.832zM24.75 28.408L22.555 32.24v-3.832zM10 16.184H7.5v12.48H10v-4.56h2.25v4.56h2.5v-12.48h-2.5v4.56H10zM15.5 16.184v12.48h7.5v-2.4h-5v-2.88h4.75v-2.4H18v-2.4h5v-2.4zM35.5 16.184v12.48h7.5v-2.4h-5v-2.88h4.75v-2.4H38v-2.4h5v-2.4z"
                        />
                      </svg>
                    </div>
                    <div className="text-center">American Express</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="enableLumaRewards">Enable Luma Coin Rewards</Label>
                <Switch id="enableLumaRewards" defaultChecked />
              </div>
              <p className="text-sm text-gray-500">Earn Luma Coins on all transactions with this card</p>
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
                  Card created successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleCreateCard} disabled={!cardName}>
            Create Card
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
