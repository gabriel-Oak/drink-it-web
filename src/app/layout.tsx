import './css/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from './theme-registry';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Drink.it',
  description: 'Find your favorite cocktail',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <ThemeRegistry options={{ key: 'mui' }}>
        <body className={inter.className}>
          {children}
        </body>
      </ThemeRegistry>
    </html>
  )
}

export default RootLayout;

