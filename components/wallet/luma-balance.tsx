"use client"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface LumaBalanceProps {
  onSend: () => void
}

export default function LumaBalance({ onSend }: LumaBalanceProps) {
  return (
    <Card className="h-full border border-gray-200 dark:border-gray-800 rounded-xl">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Luma Coins Balance</CardTitle>
            <CardDescription>Your digital currency</CardDescription>
          </div>
          <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
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
              className="h-6 w-6 text-gray-900 dark:text-gray-400"
            >
              <circle cx="8" cy="8" r="6" />
              <circle cx="16" cy="16" r="6" />
              <path d="M8.3 6.3 16 16" />
            </svg>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-4xl font-bold mb-2">100</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Available Luma Coins</div>
            <div className="flex items-center gap-1 mt-2 text-green-600 dark:text-green-400 text-sm">
              <ArrowUp className="h-3 w-3" />
              <span>+100 registration bonus</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto">
            <Button
              size="sm"
              className="flex-1 bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={onSend}
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Progress to Silver Tier</span>
            <span className="text-sm text-gray-500">20%</span>
          </div>
          <Progress value={20} className="h-2" />
          <p className="text-xs text-gray-500 mt-2">Earn 400 more Luma Coins to reach Silver Tier</p>
        </div>
      </CardContent>
    </Card>
  )
}
