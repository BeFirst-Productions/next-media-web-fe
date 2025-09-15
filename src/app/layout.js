import { Inter } from 'next/font/google';
import './globals.css';
import BackgroundEffects from '@/components/BackgroundEffect/BackgroundEffects';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CursorEffect from '@/components/Cursor/CursorEffect';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Media',
  description: 'Experience the cosmic journey',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} relative min-h-screen bg-black text-white overflow-x-hidden`}
      >
        <CursorEffect />
        <BackgroundEffects />
        <div className="relative z-10">
          {' '}
          {/* This wraps Navbar and main content */}
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            pauseOnHover
            draggable
            theme="colored"
          />{' '}
          {/* Your page content is injected here */}
        </div>
      </body>
    </html>
  );
}
