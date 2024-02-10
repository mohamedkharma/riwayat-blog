import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link"

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
            <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>{item.createdAt} - </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc.substring(0, 60)}</p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card