import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link"

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/title.png" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>01.01.2023 - </span>
          <span className={styles.category}>TECHNOLOGY</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>BLOG TITLE</h1>
        </Link>
        <p className={styles.desc}>
          BLOG DESCRIPTIOPION BLOG DESCRIPTIOPION BLOG DESCRIPTIOPION BLOG DESCRIPTIOPIONBLOG DESCRIPTIOPION
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card