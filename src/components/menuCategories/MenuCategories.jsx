import React from 'react'
import styles from "./menuCategories.module.css"
import Link from 'next/link'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link 
        href="/blog?cat=coding" 
        className={`${styles.categoryItem} ${styles.technology}`}
      >
        Coding
      </Link>
      <Link 
        href="/blog?cat=health" 
        className={`${styles.categoryItem} ${styles.health}`}
      >
        Health
      </Link>
      <Link 
        href="/blog?cat=travel" 
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        Travel
      </Link>
      <Link 
        href="/blog?cat=sport" 
        className={`${styles.categoryItem} ${styles.sport}`}
      >
        Sport
      </Link>
      <Link 
        href="/blog?cat=food" 
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