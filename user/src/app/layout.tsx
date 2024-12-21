import { CommonTemplate } from '@/templates/common-template/CommonTemplate';
import { AuthProvider } from '@/providers/AuthenProvider';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import '@/styles/tailwind.css';
import { cn } from '@/utils/cn';
import { type Metadata } from 'next';
import { Inter, Lexend, Source_Code_Pro } from 'next/font/google';
import { Header } from '@/templates/Header';

export const metadata: Metadata = {
  title: {
    template: '%s - TaxPal',
    default: 'TaxPal - Accounting made simple for small businesses',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

const Source_Code_Pro_variables = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Source_Code_Pro',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
        Source_Code_Pro_variables.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <ReactQueryProvider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
