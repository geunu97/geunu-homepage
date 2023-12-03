import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SessionStorageLoader from '@/components/SessionStorageLoader';
import { UserProvider } from '@/store/UserProvider';
import { ToastContainer } from 'react-toastify';
import AuthGuard from '@/components/AuthGuard';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

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
            <AuthGuard>
              <Header />
              {children}
              <Footer />
              <ToastContainer />
            </AuthGuard>
          </SessionStorageLoader>
        </UserProvider>
      </body>
    </html>
  );
}
