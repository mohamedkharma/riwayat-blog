"use client"
import React, { useState, useEffect } from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';

const CardList = ({ page, cat }) => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `${baseUrl}/api/posts?page=${page}${cat ? `&cat=${cat}` : ''}`;
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setPosts(data.posts);
        setCount(data.count);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    getData();
  }, [page, cat]);

  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
