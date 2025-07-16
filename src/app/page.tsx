import './globals.css'
import Header from './components/Header'
import About from './components/About'
import Products from './components/Products'
import Collections from './components/Collections'
import Footer from './components/Footer'

export const metadata = {
  title: 'MySite',
  description: 'A simple Next.js app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <About />
        <Products />
        <Collections />
        <Footer />
        <main>{children}</main>
      </body>
    </html>
  )
}