"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell, ChevronRight, Lock, Moon, Settings, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ProfileSection() {
  const [activeTab, setActiveTab] = useState("profile")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)
  const [showTooltip, setShowTooltip] = useState<string | null>(null)

  const menuItems = [
    { id: "profile", label: "Profile", icon: <User className="h-5 w-5" /> },
    { id: "security", label: "Security", icon: <Lock className="h-5 w-5" /> },
    { id: "notifications", label: "Notifications", icon: <Bell className="h-5 w-5" /> },
    { id: "appearance", label: "Appearance", icon: <Moon className="h-5 w-5" /> },
    { id: "settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar for desktop */}
        <div className="hidden md:block w-64 shrink-0">
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-4">
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "flex items-center gap-3 w-full px-3 py-2 text-sm rounded-md transition-colors",
                      activeTab === item.id
                        ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800/50",
                    )}
                  >
                    {item.icon}
                    {item.label}
                    {activeTab === item.id && (
                      <motion.div
                        layoutId="activeSidebarItem"
                        className="ml-auto h-4 w-1 bg-gray-900 dark:bg-white rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Mobile sidebar toggle */}
        <div className="md:hidden mb-4">
          <Button variant="outline" className="w-full justify-between" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <span className="flex items-center gap-2">
              {menuItems.find((item) => item.id === activeTab)?.icon}
              {menuItems.find((item) => item.id === activeTab)?.label}
            </span>
            <ChevronRight className={cn("h-4 w-4 transition-transform", sidebarOpen && "rotate-90")} />
          </Button>

          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <Card className="mt-2 border border-gray-200 dark:border-gray-800">
                  <CardContent className="p-2">
                    <nav className="space-y-1">
                      {menuItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveTab(item.id)
                            setSidebarOpen(false)
                          }}
                          className={cn(
                            "flex items-center gap-3 w-full px-3 py-2 text-sm rounded-md transition-colors",
                            activeTab === item.id
                              ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                              : "text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800/50",
                          )}
                        >
                          {item.icon}
                          {item.label}
                        </button>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>{menuItems.find((item) => item.id === activeTab)?.label}</CardTitle>
              <CardDescription>
                {activeTab === "profile"
                  ? "Manage your personal information"
                  : activeTab === "security"
                    ? "Configure your security settings"
                    : activeTab === "notifications"
                      ? "Control your notification preferences"
                      : activeTab === "appearance"
                        ? "Customize the look and feel"
                        : "Configure your account settings"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === "profile" && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="h-20 w-20 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-2xl font-bold text-gray-500 dark:text-gray-400">
                            JD
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="absolute -bottom-1 -right-1 h-6 w-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3"
                            >
                              <path d="M5 16V9h14V2H5l14 14H5v-9" />
                            </svg>
                          </motion.div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">John Doe</h3>
                          <p className="text-sm text-gray-500">john.doe@example.com</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">First Name</label>
                          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-md">John</div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Last Name</label>
                          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-md">Doe</div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email</label>
                          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-md">john.doe@example.com</div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Phone</label>
                          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-md">+1 (555) 123-4567</div>
                        </div>
                      </div>

                      <Button>Edit Profile</Button>
                    </div>
                  )}

                  {activeTab === "security" && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Two-Factor Authentication</h3>
                          <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                        </div>
                        <TooltipProvider>
                          <Tooltip
                            open={showTooltip === "2fa"}
                            onOpenChange={(open) => setShowTooltip(open ? "2fa" : null)}
                          >
                            <TooltipTrigger asChild>
                              <div>
                                <Switch
                                  checked={twoFactor}
                                  onCheckedChange={(checked) => {
                                    setTwoFactor(checked)
                                    if (checked) {
                                      setShowTooltip("2fa")
                                      setTimeout(() => setShowTooltip(null), 2000)
                                    }
                                  }}
                                />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent side="left">
                              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                2FA Enabled!
                              </motion.p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Password</h3>
                        <p className="text-sm text-gray-500">Last changed 3 months ago</p>
                        <Button variant="outline" size="sm">
                          Change Password
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Devices</h3>
                        <div className="space-y-2">
                          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md flex justify-between items-center">
                            <div>
                              <div className="font-medium">MacBook Pro</div>
                              <div className="text-xs text-gray-500">Current device • New York, USA</div>
                            </div>
                            <div className="text-xs text-green-600">Active now</div>
                          </div>
                          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md flex justify-between items-center">
                            <div>
                              <div className="font-medium">iPhone 13</div>
                              <div className="text-xs text-gray-500">New York, USA</div>
                            </div>
                            <div className="text-xs text-gray-500">3 hours ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "notifications" && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Push Notifications</h3>
                          <p className="text-sm text-gray-500">Receive notifications on your device</p>
                        </div>
                        <Switch checked={notifications} onCheckedChange={setNotifications} />
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-medium">Email Notifications</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="text-sm">Transaction Updates</label>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <label className="text-sm">Account Alerts</label>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <label className="text-sm">Marketing & Promotions</label>
                            <Switch />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "appearance" && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Dark Mode</h3>
                          <p className="text-sm text-gray-500">Switch between light and dark themes</p>
                        </div>
                        <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-medium">Theme Colors</h3>
                        <div className="flex gap-2">
                          {["#000000", "#0066FF", "#6E56CF", "#16A34A", "#DC2626"].map((color) => (
                            <motion.button
                              key={color}
                              className={cn(
                                "h-8 w-8 rounded-full border-2",
                                color === "#000000" ? "border-gray-900" : "border-transparent",
                              )}
                              style={{ backgroundColor: color }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Font Size</h3>
                        <div className="flex items-center gap-4">
                          <span className="text-sm">A</span>
                          <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="w-1/2 h-full bg-gray-900 dark:bg-white rounded-full" />
                          </div>
                          <span className="text-lg">A</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "settings" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-medium">Language</h3>
                        <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-md flex justify-between items-center">
                          <span>English (US)</span>
                          <ChevronRight className="h-4 w-4 text-gray-500" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Currency</h3>
                        <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-md flex justify-between items-center">
                          <span>USD ($)</span>
                          <ChevronRight className="h-4 w-4 text-gray-500" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Time Zone</h3>
                        <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-md flex justify-between items-center">
                          <span>Eastern Time (ET)</span>
                          <ChevronRight className="h-4 w-4 text-gray-500" />
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                        <Button variant="destructive" size="sm">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
