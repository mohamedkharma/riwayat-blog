import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="riwayat blog" width={50} height={50} />
          <h1 className={styles.logoText}>Riwayat Blog</h1>
        </div>
        <p className={styles.desc}>SOME DESCROPTION TO ADD LATERR</p>
        <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
        <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24}/>
        <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
      </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Technology</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Sport</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer