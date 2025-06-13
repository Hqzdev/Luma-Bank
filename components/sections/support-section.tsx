"use client"

import React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageSquare, Search, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function SupportSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I help you today?", isUser: false },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const faqs = [
    {
      id: "faq-1",
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password. Make sure to check your spam folder if you don't see the email in your inbox.",
    },
    {
      id: "faq-2",
      question: "How do I transfer money to another account?",
      answer:
        "To transfer money, navigate to the Wallet section and click on 'Transfer Money'. Enter the recipient's information and the amount you wish to send. Review the details and confirm the transaction. You'll receive a confirmation once the transfer is complete.",
    },
    {
      id: "faq-3",
      question: "What are the cashback categories?",
      answer:
        "Our cashback program includes categories such as Groceries (5%), Dining (4%), Travel (3%), Entertainment (3%), Gas (2%), and Online Shopping (2%). Some categories may need to be unlocked based on your spending habits and account level.",
    },
    {
      id: "faq-4",
      question: "How do I upgrade to a premium account?",
      answer:
        "To upgrade to a premium account, go to the Profile section and select 'Account Upgrade'. Review the benefits and pricing, then follow the prompts to complete your upgrade. Premium accounts offer higher cashback rates, lower fees, and exclusive investment opportunities.",
    },
    {
      id: "faq-5",
      question: "Is my personal information secure?",
      answer:
        "Yes, we take security very seriously. We use industry-standard encryption to protect your data, and we never share your personal information with third parties without your consent. We also offer two-factor authentication for an additional layer of security.",
    },
  ]

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // Add user message
    setMessages([...messages, { text: newMessage, isUser: true }])
    setNewMessage("")

    // Simulate typing
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      // Add bot response
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you for your message. Our support team will get back to you shortly.",
          isUser: false,
        },
      ])
    }, 2000)
  }

  // Scroll to bottom of chat when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Scroll when messages change
  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border-b border-gray-200 dark:border-gray-800 last:border-0 pb-4 last:pb-0"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="flex items-center justify-between w-full text-left py-2"
                    >
                      <h3 className="font-medium">{faq.question}</h3>
                      <motion.div animate={{ rotate: openFaq === faq.id ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="py-3 text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Need More Help?</CardTitle>
              <CardDescription>Search our knowledge base or contact support</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input placeholder="Search for help articles..." className="pl-10" />
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {["Account Issues", "Payments & Transfers", "Security", "Mobile App"].map((category) => (
                    <motion.div
                      key={category}
                      whileHover={{ y: -2 }}
                      className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                    >
                      {category}
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-4">Still need help? Chat with our support team</p>
                  <Button onClick={() => setChatOpen(true)} className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Start Chat
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Chat popup */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 w-80 md:w-96 bg-white dark:bg-gray-950 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden z-50"
          >
            <div className="p-4 bg-gray-900 dark:bg-gray-800 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 rounded-full" />
                <h3 className="font-medium">Support Chat</h3>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-gray-300 hover:text-white">
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "max-w-[80%] p-3 rounded-lg",
                    message.isUser
                      ? "bg-gray-900 text-white ml-auto rounded-br-none"
                      : "bg-gray-100 dark:bg-gray-800 rounded-bl-none",
                  )}
                >
                  {message.text}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-[80%] p-3 bg-gray-100 dark:bg-gray-800 rounded-lg rounded-bl-none flex items-center gap-1"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.5, delay: 0 }}
                    className="h-1.5 w-1.5 bg-gray-500 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.5, delay: 0.1 }}
                    className="h-1.5 w-1.5 bg-gray-500 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.5, delay: 0.2 }}
                    className="h-1.5 w-1.5 bg-gray-500 rounded-full"
                  />
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 dark:border-gray-800 flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={!newMessage.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
