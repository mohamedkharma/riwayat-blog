import React from 'react'
import styles from "./singelPage.module.css"
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>SOME TITLE TO ADD LATER</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/title.png" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Mohamed Kharma</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/title.png" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              RANDOME TEXT RANDOME TEXT RANDOME TEXTRANDOME TEXTRANDOME 
              TEXTRANDOME TEXTRANDOME TEXT RANDOME TEXTRANDOME TEXT 
            </p>
            <h2>RANDOME TEXT Title</h2>
            <p>
              RANDOME TEXT RANDOME TEXT RANDOME TEXTRANDOME TEXTRANDOME 
              TEXTRANDOME TEXTRANDOME TEXT RANDOME TEXTRANDOME TEXT 
            </p>
            <p>
              RANDOME TEXT RANDOME TEXT RANDOME TEXTRANDOME TEXTRANDOME 
              TEXTRANDOME TEXTRANDOME TEXT RANDOME TEXTRANDOME TEXT 
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage