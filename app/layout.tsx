import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import ReactQueryProvider from "./providers/ReactQueryProvider"
import ReduxProvider from "./providers/ReduxProvider"
import Header from "./components/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Yumify | What's For Dinner?",
  description: "Generated by create next app"
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={
          `bg-center bg-no-repeat bg-cover bg-fixed w-full
          ${geistSans.variable} ${geistMono.variable} antialiased`
        }
        style={{ backgroundImage: "url(./bgb.svg)" }}
      >
        <Toaster position="top-right" richColors />

        <ReduxProvider>

          <Header />

          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}