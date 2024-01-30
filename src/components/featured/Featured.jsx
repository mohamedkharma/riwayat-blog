import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Riwayat Blog</b> Explore and have fun reading!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/title.png" alt="" fill className={styles.imgae}></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>ADD TITLE</h1>
          <p className={styles.postDesc}>
            ADD DESCRIPTION
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured