import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SessionStorageLoader from '@/components/SessionStorageLoader';
import { UserProvider } from '@/store/UserProvider';
import { ToastContainer } from 'react-toastify';
import PageAuthGuard from '@/components/PageAuthGuard';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import TemporaryHeader from '@/components/TemporaryHeader';

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
            <PageAuthGuard>
              {/* <Header /> */}
              <TemporaryHeader />
              {children}
              <Footer />
              <ToastContainer />
            </PageAuthGuard>
          </SessionStorageLoader>
        </UserProvider>
      </body>
    </html>
  );
}
