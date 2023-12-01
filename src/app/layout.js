
import Script from 'next/script';
import AnimatedPageTransition from './components/AnimatedPageTransition';
import Footer from './components/FooterComponent/Footer';
import Navbar from './components/NavbarComponent/Navbar';
// import SocialIcons from './components/SocialIcons';
import './globals.css'
import { Poppins } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({
  subsets: ['latin'], weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Pacezone - Become a better fast bowler</title>
        <meta name="title" content="Pacezone - Become a better fast bowler" />
        <meta name="description" content="Improve your fast bowling skills & technique and increase your fast bowling" />
        <meta name="keywords" content="pacezone, ball, cricket, practice match, fitness, physique transformation, mentoships, courses, cricket bowling practice" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="knowtorial" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={poppins.className}>
        <NextTopLoader
          showSpinner={false}
          color="#ffffff"
          height={4}
          crawl={true}
          shadow="0 0 10px #330E83,0 0 5px #330E83"
        />
        <AnimatedPageTransition>
          <main>
            <Navbar />
            {/* <SocialIcons /> */}
            {children}
          </main>
          <Footer />
        </AnimatedPageTransition>
      </body>
    </html>
  )
}
