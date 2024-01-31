import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Populer Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=technology" className={`${styles.category} ${styles.technology}`}>
          <Image 
            src="/technology.png" 
            alt="" 
            width={32} 
            height={32} 
            className={styles.image}
          /> 
          technology
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.health}`}>
          <Image 
            src="/health.png" 
            alt="" 
            width={32} 
            height={32} 
            className={styles.image}
          /> 
          health
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.travel}`}>
          <Image 
            src="/travel.png" 
            alt="" 
            width={32} 
            height={32} 
            className={styles.image}
          /> 
          travel
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.sport}`}>
          <Image 
            src="/sport.png" 
            alt="" 
            width={32} 
            height={32} 
            className={styles.image}
          /> 
          sport
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.food}`}>
          <Image 
            src="/food.png" 
            alt="" 
            width={32} 
            height={32} 
            className={styles.image}
          /> 
          food
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.book}`}>
          <Image 
            src="/book.png" 
            alt="" 
            width={32} 
            height={32} 
            className={styles.image}
          /> 
          book
        </Link>
      </div>
    </div>
  )
}

export default CategoryList