import React from 'react';
import styles from '../styles/RideData.module.css';

const RideData = ({ title, data }) => {
  return (
    <div className={styles.ridedata__wrapper}>
      <p className={styles.ridedata__title}>{title}</p>
      <span>{" "}:{" "}</span>
      <p className={styles.ridedata__data}>{data}</p>
    </div>
  );
};

export default RideData;
