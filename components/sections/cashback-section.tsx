"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, ChevronRight, CreditCard, Gift, ShoppingBag, Star, Coins } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function CashbackSection() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("categories")
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null)
  const [lumaConversionRate, setLumaConversionRate] = useState(10) // 1 USD = 10 Luma Coins

  const categories = [
    { id: "groceries", name: "Groceries", icon: "🛒", cashback: "5%", lumaCoins: "50", unlocked: true },
    { id: "dining", name: "Dining", icon: "🍽️", cashback: "4%", lumaCoins: "40", unlocked: true },
    { id: "travel", name: "Travel", icon: "✈️", cashback: "3%", lumaCoins: "30", unlocked: true },
    { id: "entertainment", name: "Entertainment", icon: "🎬", cashback: "3%", lumaCoins: "30", unlocked: false },
    { id: "gas", name: "Gas", icon: "⛽", cashback: "2%", lumaCoins: "20", unlocked: true },
    { id: "shopping", name: "Online Shopping", icon: "🛍️", cashback: "2%", lumaCoins: "20", unlocked: false },
  ]

  const offers = [
    {
      id: "offer-1",
      merchant: "Amazon",
      logo: "🛒",
      discount: "10% off",
      lumaBonus: "+100 Luma",
      description: "Get 10% off your next purchase over $50",
      expiresIn: "5 days",
      code: "SAVE10NOW",
    },
    {
      id: "offer-2",
      merchant: "Starbucks",
      logo: "☕",
      discount: "Buy 1 Get 1 Free",
      lumaBonus: "+50 Luma",
      description: "Buy one drink, get one free on your next visit",
      expiresIn: "2 days",
      code: "BOGO2023",
    },
    {
      id: "offer-3",
      merchant: "Uber",
      logo: "🚗",
      discount: "15% off",
      lumaBonus: "+75 Luma",
      description: "15% off your next 3 rides",
      expiresIn: "7 days",
      code: "RIDE15OFF",
    },
    {
      id: "offer-4",
      merchant: "Netflix",
      logo: "🎬",
      discount: "1 Month Free",
      lumaBonus: "+200 Luma",
      description: "Get 1 month free when you upgrade to premium",
      expiresIn: "14 days",
      code: "NETFLIX1MO",
    },
  ]

  const redeemHistory = [
    {
      id: "redeem-1",
      item: "Wireless Earbuds",
      points: 12500,
      lumaCoins: 0,
      date: "Oct 15, 2023",
      status: "Delivered",
    },
    {
      id: "redeem-2",
      item: "$50 Amazon Gift Card",
      points: 5000,
      lumaCoins: 0,
      date: "Sep 22, 2023",
      status: "Delivered",
    },
    { id: "redeem-3", item: "Smart Watch", points: 0, lumaCoins: 2500, date: "Aug 10, 2023", status: "Delivered" },
    { id: "redeem-4", item: "Movie Tickets", points: 0, lumaCoins: 300, date: "Jul 05, 2023", status: "Expired" },
  ]

  const lumaExclusives = [
    {
      id: "luma-1",
      name: "Premium Account Upgrade",
      cost: 5000,
      description: "Upgrade to Premium account status for 3 months",
    },
    {
      id: "luma-2",
      name: "Exclusive Investment Access",
      cost: 2500,
      description: "Early access to premium investment opportunities",
    },
    {
      id: "luma-3",
      name: "Increased Transfer Limits",
      cost: 1000,
      description: "Double your daily transfer limits for 1 month",
    },
    { id: "luma-4", name: "VIP Customer Support", cost: 750, description: "Priority support access for 2 months" },
  ]

  const handleCardFlip = (id: string) => {
    if (flippedCard === id) {
      setFlippedCard(null)
    } else {
      setFlippedCard(id)
    }
  }

  const handleOfferSelect = (id: string) => {
    setSelectedOffer(id === selectedOffer ? null : id)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8 border border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle>Your Rewards Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="text-sm text-gray-500">Available Cashback</div>
              <div className="text-3xl font-bold">$124.56</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-500">Points Balance</div>
              <div className="text-3xl font-bold">12,456</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-500">Luma Coins</div>
              <div className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-amber-500" />
                <span className="text-3xl font-bold">1,245</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-500">Rewards Level</div>
              <div className="text-3xl font-bold">Gold</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Progress to Platinum</span>
              <span className="text-sm text-gray-500">65%</span>
            </div>
            <Progress value={65} className="h-2" />
            <p className="text-xs text-gray-500 mt-2">Spend $1,245 more to reach Platinum level</p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="w-full grid grid-cols-4 mb-6">
          <TabsTrigger value="categories" className="relative">
            Categories
            {activeTab === "categories" && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </TabsTrigger>
          <TabsTrigger value="offers" className="relative">
            Special Offers
            {activeTab === "offers" && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </TabsTrigger>
          <TabsTrigger value="luma" className="relative">
            Luma Coin
            {activeTab === "luma" && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </TabsTrigger>
          <TabsTrigger value="redeem" className="relative">
            Redeem
            {activeTab === "redeem" && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="categories">
          <h2 className="text-2xl font-bold mb-4">Cashback Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {categories.map((category) => (
              <div key={category.id} className="relative h-[180px] perspective">
                <motion.div
                  className="w-full h-full"
                  initial={false}
                  animate={{ rotateY: flippedCard === category.id ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => category.unlocked && handleCardFlip(category.id)}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front of card */}
                  <div
                    className={cn(
                      "absolute inset-0 backface-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4 flex flex-col",
                      !category.unlocked && "opacity-75",
                      category.unlocked && "cursor-pointer",
                    )}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className="text-3xl"
                        whileHover={category.unlocked ? { y: -5 } : {}}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        {category.icon}
                      </motion.div>
                      <div className="text-xl font-bold">{category.cashback}</div>
                    </div>
                    <h3 className="text-lg font-medium mb-2">{category.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Coins className="h-4 w-4 text-amber-500" />
                      <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                        +{category.lumaCoins} per $100
                      </span>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-sm text-gray-500">{category.unlocked ? "Active" : "Locked"}</span>
                      {category.unlocked ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="h-6 w-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center"
                        >
                          <Check className="h-3 w-3" />
                        </motion.div>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="h-6 w-6 bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-full flex items-center justify-center"
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
                            className="h-3 w-3"
                          >
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4 flex flex-col [transform:rotateY(180deg)]">
                    <h3 className="text-lg font-medium mb-2">{category.name} Details</h3>
                    <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>
                          Earn {category.cashback} on all {category.name.toLowerCase()} purchases
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Earn {category.lumaCoins} Luma Coins per $100 spent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>No limit on monthly cashback</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Automatic cashback deposit to your account</span>
                      </li>
                    </ul>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-auto self-end"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardFlip(category.id)
                      }}
                    >
                      Back
                    </Button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <Card className="border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Cashback Insights</CardTitle>
              <CardDescription>Your cashback earnings over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-end gap-2">
                {[35, 42, 58, 75, 68, 85, 90, 110, 95, 105, 120, 130].map((height, index) => (
                  <motion.div
                    key={index}
                    className="flex-1 bg-gray-200 dark:bg-gray-800 rounded-t-md relative group"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}px` }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gray-900 dark:bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-t-md"
                      whileHover={{ opacity: 0.2 }}
                    />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium">
                      ${height.toFixed(2)}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="offers">
          <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {offers.map((offer) => (
              <motion.div key={offer.id} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card
                  className={cn(
                    "border border-gray-200 dark:border-gray-800 cursor-pointer transition-colors",
                    selectedOffer === offer.id && "border-gray-900 dark:border-gray-100",
                  )}
                  onClick={() => handleOfferSelect(offer.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{offer.logo}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{offer.merchant}</h3>
                            <p className="text-sm text-gray-500">Expires in {offer.expiresIn}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-green-600 dark:text-green-400">{offer.discount}</div>
                            <div className="text-sm text-amber-600 dark:text-amber-400 flex items-center gap-1 justify-end mt-1">
                              <Coins className="h-3 w-3" />
                              {offer.lumaBonus}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm mt-2">{offer.description}</p>
                      </div>
                    </div>

                    <AnimatePresence>
                      {selectedOffer === offer.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-sm font-medium">Promo Code:</div>
                              <div className="text-lg font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded mt-1">
                                {offer.code}
                              </div>
                            </div>
                            <Button size="sm" className="flex items-center gap-1">
                              Copy Code
                              <motion.div initial={{ x: 0 }} whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                                <ArrowRight className="h-4 w-4" />
                              </motion.div>
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Card className="border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle>Partner Merchants</CardTitle>
                <CardDescription>Earn extra rewards with these partners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {["Amazon", "Starbucks", "Uber", "Netflix", "Spotify", "Airbnb", "DoorDash", "Target"].map(
                    (merchant, index) => (
                      <motion.div
                        key={merchant}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        {merchant}
                      </motion.div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="luma">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coins className="h-5 w-5 text-amber-500" />
                  Luma Coin Balance
                </CardTitle>
                <CardDescription>Your digital currency for exclusive rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-6">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="text-6xl font-bold text-center text-amber-600 dark:text-amber-400">1,245</div>
                    <div className="text-sm text-gray-500 text-center mt-2">Luma Coins</div>
                    <motion.div
                      className="absolute -top-2 -right-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium px-2 py-0.5 rounded-full"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      +125 this month
                    </motion.div>
                  </motion.div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Button variant="outline" className="w-full">
                    Convert Cashback
                  </Button>
                  <Button className="w-full">Earn More</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle>Luma Coin Rates</CardTitle>
                <CardDescription>Current conversion and earning rates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Conversion Rate</div>
                    <div className="font-bold">1 USD = {lumaConversionRate} Luma</div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Convert your cashback to Luma Coins at this rate
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="text-sm">Standard Earning Rate</div>
                    <div className="font-medium">10 Luma per $100 spent</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">Gold Member Bonus</div>
                    <div className="font-medium">+5 Luma per $100 spent</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">Special Category Bonus</div>
                    <div className="font-medium">Up to +50 Luma per $100</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-gray-200 dark:border-gray-800 mb-8">
            <CardHeader>
              <CardTitle>Luma Coin Exclusives</CardTitle>
              <CardDescription>Special rewards only available with Luma Coins</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lumaExclusives.map((exclusive) => (
                  <motion.div
                    key={exclusive.id}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="border border-gray-200 dark:border-gray-800 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{exclusive.name}</h3>
                      <Badge
                        variant="outline"
                        className="bg-amber-50 dark:bg-amber-900/10 text-amber-600 dark:text-amber-400"
                      >
                        <Coins className="h-3 w-3 mr-1" />
                        {exclusive.cost}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{exclusive.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Redeem
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Luma Coin Activity</CardTitle>
              <CardDescription>Your recent Luma Coin transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: "Earned", amount: 50, source: "Grocery purchase at Whole Foods", date: "Oct 18, 2023" },
                  { type: "Redeemed", amount: -300, source: "VIP Customer Support", date: "Oct 12, 2023" },
                  { type: "Earned", amount: 75, source: "Dining at Olive Garden", date: "Oct 10, 2023" },
                  { type: "Bonus", amount: 200, source: "Monthly Gold Member Bonus", date: "Oct 01, 2023" },
                  { type: "Converted", amount: 100, source: "Converted from cashback", date: "Sep 28, 2023" },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "h-10 w-10 rounded-full flex items-center justify-center",
                          activity.amount > 0
                            ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                            : "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
                        )}
                      >
                        {activity.amount > 0 ? (
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
                            className="h-5 w-5"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        ) : (
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
                            className="h-5 w-5"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{activity.type}</div>
                        <div className="text-xs text-gray-500">{activity.source}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={cn(
                          "font-medium flex items-center gap-1",
                          activity.amount > 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400",
                        )}
                      >
                        <Coins className="h-3 w-3" />
                        {activity.amount > 0 ? "+" : ""}
                        {activity.amount}
                      </div>
                      <div className="text-xs text-gray-500">{activity.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="redeem">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full border border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Gift Cards</CardTitle>
                    <Gift className="h-5 w-5 text-gray-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Redeem your points or Luma Coins for gift cards from popular retailers
                  </p>
                  <Button variant="outline" className="w-full">
                    Browse Gift Cards
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full border border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Cash Back</CardTitle>
                    <CreditCard className="h-5 w-5 text-gray-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Convert your points or Luma Coins to cash and deposit to your account
                  </p>
                  <Button variant="outline" className="w-full">
                    Redeem for Cash
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full border border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Products</CardTitle>
                    <ShoppingBag className="h-5 w-5 text-gray-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Exchange your points or Luma Coins for electronics, accessories and more
                  </p>
                  <Button variant="outline" className="w-full">
                    Shop Products
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <Card className="border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Redemption History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {redeemHistory.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <Star className="h-5 w-5 text-gray-500" />
                      </div>
                      <div>
                        <div className="font-medium">{item.item}</div>
                        <div className="text-xs text-gray-500">{item.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        {item.points > 0 && <div className="font-medium">{item.points.toLocaleString()} pts</div>}
                        {item.lumaCoins > 0 && (
                          <div className="font-medium flex items-center gap-1 text-amber-600 dark:text-amber-400">
                            <Coins className="h-3 w-3" />
                            {item.lumaCoins.toLocaleString()}
                          </div>
                        )}
                        <div
                          className={cn(
                            "text-xs",
                            item.status === "Delivered"
                              ? "text-green-600 dark:text-green-400"
                              : "text-red-600 dark:text-red-400",
                          )}
                        >
                          {item.status}
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All History
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
