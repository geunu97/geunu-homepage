import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
