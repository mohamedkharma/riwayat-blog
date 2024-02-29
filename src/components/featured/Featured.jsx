"use client";

import React, { useState, useEffect } from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  const [mainPost, setMainPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/posts/aaaa", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch MainPost");
        }
        const data = await res.json();
        setMainPost(data);
      } catch (error) {
        console.error("Error fetching MainPost:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleReadMore = () => {
    // Navigate to the post page when the button is clicked
    window.location.href = `/posts/aaaa`;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Riwayat</b> Explore and have fun reading!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/title.png" alt="" fill className={styles.imgae}></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{mainPost.title}</h1>
          <p className={styles.postDesc}>{mainPost.desc}</p>
          <button className={styles.button} onClick={handleReadMore}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
