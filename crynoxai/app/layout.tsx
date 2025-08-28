import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Spotlight } from '@/components/ui/spotlight-new'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CrynoxAI',
  description: 'Your best friend for school.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white relative`}>
          <Spotlight />
          <header className="flex justify-end items-center p-4 gap-4 h-16 relative z-10 bg-transparent">
            <SignedOut>
              <SignInButton>
                <button className="bg-transparent border border-neutral-500 text-white rounded-md font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 hover:bg-neutral-900 transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-transparent border border-neutral-500 text-white rounded-md font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 hover:bg-neutral-900 transition">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </header>
          <main className="relative z-10">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
