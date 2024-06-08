
import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
export const metadata = {
    title: 'Auth',
    description: 'Social media',
  }
 
  export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
      <html lang="en">
        <body className={` bg-purple-2 text-light-1`}>{children}</body>
      </html>
        </ClerkProvider>
    )
  }
  