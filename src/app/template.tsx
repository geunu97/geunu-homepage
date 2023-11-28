import Header from '../../src/components/Header'

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
