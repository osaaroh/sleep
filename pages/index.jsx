import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import RoyalBedImg from '@/assets/beds/royalbedsm.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SLEEP</title>
        <meta name="description" content="Choose your perfect bed frame" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`${styles.main} ${inter.className}`}>
        <nav>
          <div className="logo">Sleep</div>
          <div className="nav__list">
            <ul className="nav__list">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="cart">Cart</div>
        </nav>
      </header>
      <main className={`${styles.main} ${inter.className}`}>
        {/* <Header /> */}
      <section className="section__carousel">
        <div className="prev__btn">PREV</div>
        <Image src={RoyalBedImg} alt='Bed Frame'/>
        <h1>Green Desire</h1>
        <div className="nxt__btn">NEXT</div>
      </section>
      <div className="product__details">
        <div className="product__details-content">
          <h3>$3000</h3>
          <h5>Description</h5>
          <p>102 inches by 108 inches. Made from mahogany and crafted to <br /> suit better sleep</p>
        </div>
        <div className="product__details-action">
          <button>BUY NOW</button>
        </div>
      </div>


      </main>
    </>
  )
}
