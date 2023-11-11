import type { Metadata } from 'next';
import { Inter , Lexend} from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { AppDataProvider } from '@/context/AppDataContext';

const inter = Lexend({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kyoto Protocol',
  description: 'Kyoto Protocol',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppDataProvider>
          <div className='flex flex-col w-full relative h-full'>
            <Header />

            <div className='flex w-full relative items-center overflow-y-auto'>
              {children}
            </div>
          </div>
        </AppDataProvider>
      </body>
    </html>
  );
}
