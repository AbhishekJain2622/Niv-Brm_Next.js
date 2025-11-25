import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const netflixSans = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-netflix-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NIV BRM - Business Solutions",
  description: "Professional business solutions and services",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${netflixSans.variable} font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
