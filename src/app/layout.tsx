import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cyclone',
  description: '',
  keywords: ['Next.js', 'Docker', 'Jenkins', 'Kubernetes'],
  authors: {
    url: 'https://github.com/brandonwie',
    name: 'Brandon Wie',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
