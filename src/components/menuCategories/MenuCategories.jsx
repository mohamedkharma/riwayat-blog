import React from 'react'
import styles from "./menuCategories.module.css"
import Link from 'next/link'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link 
        href="/blog?cat=book" 
        className={`${styles.categoryItem} ${styles.technology}`}
      >
        Tech
      </Link>
      <Link 
        href="/blog?cat=book" 
        className={`${styles.categoryItem} ${styles.health}`}
      >
        Fashion
      </Link>
      <Link 
        href="/blog?cat=book" 
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        Travel
      </Link>
      <Link 
        href="/blog?cat=book" 
        className={`${styles.categoryItem} ${styles.sport}`}
      >
        Sport
      </Link>
      <Link 
        href="/blog?cat=book" 
        className={`${styles.categoryItem} ${styles.food}`}
      >
        Food
      </Link>
      <Link 
        href="/blog?cat=book" 
        className={`${styles.categoryItem} ${styles.book}`}
      >
        Book
      </Link>
   </div>
  )
}

export default MenuCategories