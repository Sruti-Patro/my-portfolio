import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sruti Patro - Full Stack Developer',
  description:
    'Welcome to my portfolio! I am a passionate full-stack developer specializing in building scalable server architectures, robust APIs, and high-performance distributed systems. With expertise in frontend and database optimization, I create efficient and reliable solutions.',
  keywords: [
    'Full Stack Developer',
    'Software Engineer',
    'System Architecture',
    'API Development',
    'Database Design',
    'Cloud Computing',
    'Microservices',
    'DevOps',
    'Sruti Patro',
    'React',
    'Node.js',
    'TypeScript',
    'Next.js',
    'System Design',
    'Backend Architecture',
  ],
  authors: [{ name: 'Sruti Patro' }],
  creator: 'Sruti Patro',
  openGraph: {
    title: 'Sruti Patro - Fullstack Developer Portfolio',
    description:
      'Passionate full-stack developer crafting scalable and efficient systems. Explore my projects and technical expertise.',
    url: 'https://your-domain.com',
    siteName: 'Sruti Patro - Portfolio',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Sruti Patro - Fullstack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // Instagram-like preview support
  other: {
    'instagram:title': 'Sruti Patro - Full Stack Developer',
    'instagram:description':
      'Building modern, scalable applications with Next.js, Node.js, and TypeScript. Explore my portfolio.',
    'instagram:image': '/api/og',
    'instagram:site': '@wasabi_oncloud9', // replace with your Insta username

    // LinkedIn prefers OpenGraph but we can still hint
    'linkedin:title': 'Sruti Patro - Full Stack Developer',
    'linkedin:description':
      'Explore my professional portfolio showcasing full-stack development skills, projects, and system design expertise.',
    'linkedin:image': '/api/og',
    'linkedin:author': 'Sruti Patro',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
