import '../globals.css';
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { dark } from "@clerk/themes";

import RightSidebar from '@/components/shared/RightSidebar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import Bottombar from '@/components/shared/Bottombar';
import Topbar from '@/components/shared/Topbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'X', 
    description: 'A Next.js 13 Meta X Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          
            <main className='flex flex-row'> 
              <LeftSidebar /> 
                <section className='main-container'>
                  <div className='w-full max-w-4xl'>
                    {children} 
                  </div>
                </section>

              < RightSidebar />
            </main> 

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  )
}
