import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import styles from '../styles/NavBar.module.css';

function NavBar({ user }) {
  return (
    <header className={styles.container}>
      <div className={styles.logowrapper}>
        <p>Edvora</p>
      </div>

      <div className={styles.profilewrapper}>
        <p>{user?.name}</p>
        <Image
          src={user?.url}
          alt=''
          width='44px'
          height='44px'
          className={styles.profileimage}
        />
        <p>{user?.station_code}</p>
      </div>
    </header>
  );
}

export default NavBar;
