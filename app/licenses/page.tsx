"use client"

import { motion } from "framer-motion"
import { Coins } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LicensesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-gray-950/80 dark:border-gray-900/30 sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Coins className="h-6 w-6 text-gray-900 dark:text-gray-400" />
            <span className="font-semibold text-xl">Luma Bank</span>
          </Link>
          <Link href="/wallet">
            <Button>Go to Wallet</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Licenses</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Information about the licenses and third-party software used in Luma Bank's products and services.
          </p>

          <Card className="mb-8 rounded-xl">
            <CardHeader>
              <CardTitle>Open Source Software</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Luma Bank uses various open source software components in our products and services. We are grateful to
                the developers who have contributed to these projects.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Below is a list of the major open source software we use, along with their respective licenses.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {[
              {
                name: "React",
                version: "18.2.0",
                license: "MIT License",
                description:
                  "A JavaScript library for building user interfaces. React makes it painless to create interactive UIs.",
              },
              {
                name: "Next.js",
                version: "14.0.0",
                license: "MIT License",
                description:
                  "The React Framework for Production. Next.js gives you the best developer experience with all the features you need for production.",
              },
              {
                name: "Tailwind CSS",
                version: "3.3.0",
                license: "MIT License",
                description:
                  "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
              },
              {
                name: "Framer Motion",
                version: "10.16.4",
                license: "MIT License",
                description:
                  "A production-ready motion library for React. Utilize the power behind Framer, the best prototyping tool for teams.",
              },
              {
                name: "Lucide React",
                version: "0.292.0",
                license: "ISC License",
                description: "Beautiful & consistent icon toolkit made by the community.",
              },
            ].map((lib, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-lg">{lib.name}</h3>
                      <span className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">{lib.license}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Version: {lib.version}</div>
                    <p className="text-gray-600 dark:text-gray-400">{lib.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 prose dark:prose-invert max-w-none">
            <h2>License Texts</h2>

            <h3>MIT License</h3>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg text-sm">
              <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
                associated documentation files (the "Software"), to deal in the Software without restriction, including
                without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
                following conditions:
              </p>
              <p className="mt-2">
                The above copyright notice and this permission notice shall be included in all copies or substantial
                portions of the Software.
              </p>
              <p className="mt-2">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
                NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>

            <h3 className="mt-6">ISC License</h3>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg text-sm">
              <p>
                Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is
                hereby granted, provided that the above copyright notice and this permission notice appear in all
                copies.
              </p>
              <p className="mt-2">
                THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
                INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE
                FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
                LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION,
                ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
