import type { Metadata } from 'next';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import { UserProvider } from '@/store/UserProvider';
import SessionStorageLoader from '@/components/SessionStorageLoader';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: "geunu's page",
  description: '개인 홈페이지입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <UserProvider>
          <SessionStorageLoader>
            <Header />
            {children}
            <Footer />
            <ToastContainer />
          </SessionStorageLoader>
        </UserProvider>
      </body>
    </html>
  );
}
