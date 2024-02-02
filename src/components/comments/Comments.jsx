import React from 'react'
import styles from "./comments.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {

  const status = "authenticated"
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image 
              src="/title.png"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Mohamed Kharma</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            SOME RANDOM COMMENT  SOME RANDOM COMMENT  SOME RANDOM COMMENT SOME RANDOM COMMENT
            vSOME RANDOM COMMENT SOME RANDOM COMMENT SOME RANDOM COMMENT SOME RANDOM COMMENT 
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image 
              src="/title.png"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Mohamed Kharma</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            SOME RANDOM COMMENT  SOME RANDOM COMMENT  SOME RANDOM COMMENT SOME RANDOM COMMENT
            vSOME RANDOM COMMENT SOME RANDOM COMMENT SOME RANDOM COMMENT SOME RANDOM COMMENT 
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image 
              src="/title.png"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Mohamed Kharma</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            SOME RANDOM COMMENT  SOME RANDOM COMMENT  SOME RANDOM COMMENT SOME RANDOM COMMENT
            vSOME RANDOM COMMENT SOME RANDOM COMMENT SOME RANDOM COMMENT SOME RANDOM COMMENT 
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image 
              src="/title.png"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Mohamed Kharma</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            SOME RANDOM COMMENT  SOME RANDOM COMMENT  SOME RANDOM COMMENT SOME RANDOM COMMENT
            vSOME RANDOM COMMENT SOME RANDOM COMMENT SOME RANDOM COMMENT SOME RANDOM COMMENT 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comments