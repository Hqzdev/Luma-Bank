"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Send, Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function WalletSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [amount, setAmount] = useState("")
  const [recipient, setRecipient] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  const handleTransfer = () => {
    if (!amount || !recipient) return

    setShowSuccess(true)
    setAmount("")
    setRecipient("")
    setTimeout(() => setShowSuccess(false), 3000)
  }

  // Ripple effect for button
  const [ripples, setRipples] = useState<{ x: number; y: number; size: number; id: number }[]>([])

  const addRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const size = Math.max(rect.width, rect.height) * 2
    const id = Date.now()

    setRipples([...ripples, { x, y, size, id }])

    setTimeout(() => {
      setRipples((ripples) => ripples.filter((ripple) => ripple.id !== id))
    }, 600)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {!isLoggedIn ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full max-w-md mx-auto overflow-hidden">
            <CardHeader className="pb-0">
              <CardTitle>Sign In</CardTitle>
              <CardDescription>Access your wallet dashboard</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder=" "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="peer pt-4 border-b border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-gray-900 dark:focus-visible:border-gray-100"
                      required
                    />
                    <Label
                      htmlFor="email"
                      className="absolute left-0 -top-0.5 text-sm text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-0.5 peer-focus:text-sm transition-all"
                    >
                      Email
                    </Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder=" "
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="peer pt-4 border-b border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-gray-900 dark:focus-visible:border-gray-100 pr-10"
                      required
                    />
                    <Label
                      htmlFor="password"
                      className="absolute left-0 -top-0.5 text-sm text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-0.5 peer-focus:text-sm transition-all"
                    >
                      Password
                    </Label>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
                    >
                      <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.3 }}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </motion.div>
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full relative overflow-hidden group transition-all duration-200"
                  style={{
                    background: "linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
                    backgroundSize: "200% 100%",
                    backgroundPosition: "100% 0",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundPosition = "0% 0"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundPosition = "100% 0"
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Sign In
                    <motion.div initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Balance", amount: "$12,458.32", change: "+2.4% this week", color: "green" },
              { title: "Expenses", amount: "$2,845.65", change: "+12% this month", color: "red" },
              { title: "Savings", amount: "$4,125.00", change: "Goal: $10,000", color: "green" },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border border-gray-200 dark:border-gray-800">
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{card.amount}</div>
                    <p
                      className={`text-sm ${card.color === "green" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"} mt-1`}
                    >
                      {card.change}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle>Transfer Money</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="recipient">Recipient</Label>
                    <Input
                      id="recipient"
                      placeholder="Email or account number"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Checkbox
                        id="favorite"
                        checked={isFavorite}
                        onCheckedChange={() => setIsFavorite(!isFavorite)}
                        className="transition-all duration-300 data-[state=checked]:bg-gray-900 data-[state=checked]:border-gray-900"
                      />
                      <motion.div
                        className={cn(
                          "absolute inset-0 rounded-sm border border-gray-300 dark:border-gray-700",
                          isFavorite ? "scale-0" : "scale-100",
                        )}
                        initial={false}
                        animate={{ scale: isFavorite ? 0 : 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center text-white"
                        initial={false}
                        animate={{ scale: isFavorite ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isFavorite && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            className="h-3.5 w-3.5"
                          >
                            <path
                              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </motion.div>
                    </div>
                    <Label htmlFor="favorite" className="cursor-pointer">
                      Save as favorite
                    </Label>
                  </div>

                  <AnimatePresence>
                    {showSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-3 bg-green-50 text-green-700 rounded-md flex items-center gap-2 dark:bg-green-900/20 dark:text-green-400"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                        >
                          <path
                            d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Transfer successful!
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button
                    onClick={handleTransfer}
                    className="relative overflow-hidden"
                    disabled={!amount || !recipient}
                    onMouseDown={addRipple}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Money
                    </span>
                    {ripples.map((ripple) => (
                      <span
                        key={ripple.id}
                        className="absolute bg-white/30 rounded-full animate-ripple"
                        style={{
                          left: ripple.x,
                          top: ripple.y,
                          width: ripple.size,
                          height: ripple.size,
                          transform: "translate(-50%, -50%) scale(0)",
                        }}
                      />
                    ))}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  )
}
