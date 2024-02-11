"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./categoryList.module.css";
import Link from "next/link";

const CategoryItem = ({ item }) => (
  <Link href={`/blog?cat=${item.slug}`} className={`${styles.category} ${styles[item.slug]}`}>
    {item.img && (
      <div className={styles.imageContainer}>
        <Image src={item.img} alt="" className={styles.image} width={32} height={32} />
      </div>
    )}
    <span className={styles.title}>{item.title}</span>
  </Link>
);

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/categories", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <CategoryItem key={category._id} item={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
