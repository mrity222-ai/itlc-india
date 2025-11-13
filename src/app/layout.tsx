
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Chatbot } from '@/components/chatbot';
import { EnquiryPopup } from '@/components/enquiry-popup';

export const metadata: Metadata = {
  title: {
    default: 'Global IT Solutions & Custom Software Development | ITLC INDIA',
    template: '%s | ITLC INDIA',
  },
  description: 'ITLC INDIA delivers cutting-edge IT solutions, custom software development, and digital transformation services worldwide. Partner with us for scalable cloud, AI, and cybersecurity solutions.',
  keywords: ['IT solutions', 'custom software development', 'digital transformation', 'IT consulting', 'global tech services', 'AI solutions', 'cloud services', 'cybersecurity'],
  openGraph: {
    title: 'Global IT Solutions & Custom Software Development | ITLC INDIA',
    description: 'Partner with ITLC INDIA for scalable cloud, AI, and cybersecurity solutions worldwide.',
    url: 'https://itlcindia.com',
    siteName: 'ITLC INDIA',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global IT Solutions & Custom Software Development | ITLC INDIA',
    description: 'ITLC INDIA delivers cutting-edge IT solutions and digital transformation services worldwide.',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Oxanium:wght@600&family=Rajdhani:wght@500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-background min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Chatbot />
            <EnquiryPopup />
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
