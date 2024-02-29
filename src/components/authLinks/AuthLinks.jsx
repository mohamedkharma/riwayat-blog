"use client";

// Inside your React component

import React, { useState } from 'react';
import styles from "./authLinks.module.css"
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";

const AuthLinks = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const { status } = useSession();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('menuOpen');
    } else {
      document.body.classList.remove('menuOpen');
    }
  }

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close the menu when a menu item is clicked
    document.body.classList.remove('menuOpen');
  }

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link} onClick={signOut}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {menuOpen && (
        <>
          <div className={styles.overlay} onClick={toggleMenu}></div>
          <div className={styles.responsiveMenu}>
            <Link href="/" onClick={handleMenuItemClick}>Homepage</Link>
            <Link href="/" onClick={handleMenuItemClick}>Contact</Link>
            <Link href="/" onClick={handleMenuItemClick}>About</Link>
            {status === "unauthenticated" ? (
              <Link href="/login" onClick={() => { handleMenuItemClick(); signIn(); }}>Login</Link>
            ) : (
              <>
              <Link href="/write" onClick={handleMenuItemClick}>Write</Link>
              <Link href="/" onClick={() => { handleMenuItemClick(); signOut(); }}>Logout</Link>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default AuthLinks;

