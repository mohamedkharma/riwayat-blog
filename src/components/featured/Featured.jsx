"use client";

import React, { useState, useEffect } from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  const [mainPost, setMainPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/posts/beyond-the-field", {
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
    window.location.href = `/posts/beyond-the-field`;
  };

  const stripHTMLTags = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const truncateDesc = (desc, maxLength) => {
    if (!desc) {
      return ""; // Return an empty string if desc is undefined
    }
    if (desc.length <= maxLength) {
      return desc;
    }
    return desc.slice(0, maxLength) + "...";
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Riwayat</b> Explore and have fun reading!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={mainPost.img} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{mainPost.title}</h1>
          <p className={styles.postDesc}>
            {truncateDesc(stripHTMLTags(mainPost.desc), 150)}
          </p>
          <button className={styles.button} onClick={handleReadMore}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;