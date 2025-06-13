"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export default function InvestSection() {
  const [activeTab, setActiveTab] = useState("stocks")
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const [assets, setAssets] = useState({
    stocks: [
      { id: "stock-1", name: "AAPL", price: 182.63, change: 1.25 },
      { id: "stock-2", name: "MSFT", price: 415.32, change: 2.47 },
      { id: "stock-3", name: "GOOGL", price: 175.98, change: -0.32 },
      { id: "stock-4", name: "AMZN", price: 178.75, change: 1.89 },
    ],
    crypto: [
      { id: "crypto-1", name: "BTC", price: 68432.15, change: 3.21 },
      { id: "crypto-2", name: "ETH", price: 3521.87, change: 2.15 },
      { id: "crypto-3", name: "SOL", price: 142.36, change: 5.67 },
      { id: "crypto-4", name: "DOGE", price: 0.12, change: -1.23 },
    ],
    etfs: [
      { id: "etf-1", name: "SPY", price: 512.36, change: 0.87 },
      { id: "etf-2", name: "QQQ", price: 432.15, change: 1.32 },
      { id: "etf-3", name: "VTI", price: 245.78, change: 0.54 },
      { id: "etf-4", name: "ARKK", price: 45.32, change: -2.13 },
    ],
  })

  const [compareAssets, setCompareAssets] = useState<any[]>([])

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const sourceId = result.source.droppableId
    const sourceIndex = result.source.index
    const destId = result.destination.droppableId
    const destIndex = result.destination.index

    if (destId === "compare") {
      // Add to compare list if not already there (max 2)
      if (compareAssets.length < 2) {
        const assetType = sourceId.split("-")[0]
        const assetToAdd = assets[assetType as keyof typeof assets][sourceIndex]
        if (!compareAssets.find((a) => a.id === assetToAdd.id)) {
          setCompareAssets([...compareAssets, assetToAdd])
        }
      }
      return
    }

    if (sourceId === "compare") {
      // Remove from compare list
      const newCompareAssets = [...compareAssets]
      newCompareAssets.splice(sourceIndex, 1)
      setCompareAssets(newCompareAssets)
      return
    }

    // Reorder within the same list
    if (sourceId === destId) {
      const assetType = sourceId.split("-")[0]
      const items = [...assets[assetType as keyof typeof assets]]
      const [removed] = items.splice(sourceIndex, 1)
      items.splice(destIndex, 0, removed)
      setAssets({
        ...assets,
        [assetType]: items,
      })
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="h-full border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$124,532.67</div>
              <p className="text-sm text-green-600 mt-1">+12.4% all time</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="h-full border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Today's Change</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">+$1,245.32</div>
              <p className="text-sm text-green-600 mt-1">+1.01% today</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="h-full border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Cash Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$15,432.21</div>
              <p className="text-sm text-gray-500 mt-1">Available to invest</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Card className="mb-8 border border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle>Market Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex border-b mb-4">
            {["stocks", "crypto", "etfs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors capitalize",
                  activeTab === tab
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
                )}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>
            ))}
          </div>

          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId={`${activeTab}-list`}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {assets[activeTab as keyof typeof assets].map((asset, index) => (
                    <Draggable key={asset.id} draggableId={asset.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={cn("transition-all duration-200", snapshot.isDragging && "opacity-70 scale-105")}
                        >
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="group relative overflow-hidden"
                          >
                            <Card className="border border-gray-200 dark:border-gray-800">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h3 className="text-lg font-bold">{asset.name}</h3>
                                    <p className="text-sm text-gray-500">
                                      {activeTab === "stocks"
                                        ? "Stock"
                                        : activeTab === "crypto"
                                          ? "Cryptocurrency"
                                          : "ETF"}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-xl font-bold">
                                      $
                                      {asset.price.toLocaleString(undefined, {
                                        minimumFractionDigits: activeTab === "crypto" ? 2 : 2,
                                        maximumFractionDigits: activeTab === "crypto" ? 2 : 2,
                                      })}
                                    </div>
                                    <p className={cn("text-sm", asset.change > 0 ? "text-green-600" : "text-red-600")}>
                                      {asset.change > 0 ? "+" : ""}
                                      {asset.change}%
                                    </p>
                                  </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <div className="text-xs text-gray-500">
                                    <div className="flex justify-between mb-1">
                                      <span>Market Cap</span>
                                      <span>$1.2T</span>
                                    </div>
                                    <div className="flex justify-between mb-1">
                                      <span>Volume</span>
                                      <span>$42.8B</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>52W Range</span>
                                      <span>$145.12 - $198.23</span>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                            <div className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                          </motion.div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-medium mb-4">Compare Assets</h3>
              <p className="text-sm text-gray-500 mb-4">Drag and drop assets to compare (max 2)</p>

              <Droppable droppableId="compare">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[100px] p-4 border border-dashed border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    {compareAssets.map((asset, index) => (
                      <Draggable key={asset.id} draggableId={asset.id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <Card className="border border-gray-200 dark:border-gray-800">
                              <CardContent className="p-4">
                                <div className="flex justify-between items-center">
                                  <h3 className="font-medium">{asset.name}</h3>
                                  <div className={cn("text-sm", asset.change > 0 ? "text-green-600" : "text-red-600")}>
                                    ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {compareAssets.length === 0 && (
                      <div className="col-span-2 flex items-center justify-center h-full text-gray-400 text-sm">
                        Drag assets here to compare
                      </div>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
        </CardContent>
      </Card>

      <Card className="border border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle>Signal Subscriptions</CardTitle>
          <CardDescription>Get notified about market opportunities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Trading Signals</h3>
                <p className="text-sm text-gray-500">Receive buy/sell signals for your watchlist</p>
              </div>
              <div className="relative">
                <Switch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
                {notificationsEnabled && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      className="absolute inset-0 bg-green-500 rounded-full opacity-60"
                    />
                  </motion.div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Price Alerts</h3>
                <p className="text-sm text-gray-500">Get notified when assets reach your target price</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Market News</h3>
                <p className="text-sm text-gray-500">Daily digest of important market news</p>
              </div>
              <Switch />
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-medium mb-2">Premium Signals</h3>
              <p className="text-sm text-gray-500 mb-4">Upgrade to Premium for advanced trading signals and analysis</p>
              <Button variant="outline" size="sm">
                Upgrade to Premium
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
