import './globals.css'
import Link from 'next/link';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>App</header>
        <div>
          <section>
          <nav>
                <ul>
                    <li> <Link href={'/'}>Carts</Link></li>
                    <li><Link href={'/infoproductos'}>Products</Link></li>
                    <li><Link href={'/nuevocarrito'}>New Carts</Link></li>
      
                    <li><Link href={'/nuevoproducto'}>New products</Link></li>
                    
                </ul>
            </nav>

          </section>

          <main>
            {children}

          </main>

        </div>
        <footer>Diana Juliana Carranza Fonseca- 55821502</footer>

      </body>
    </html>
  )
}
