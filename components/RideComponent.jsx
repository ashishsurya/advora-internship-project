import Image from 'next/image';
import React from 'react';
import styles from '../styles/RideComponent.module.css';
import RideData from './RideData';

// "city": "Anand",
//     "date": "03/29/2022 10:42 AM",
//     "destination_station_code": 97,
//     "id": 966,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 19,
//     "state": "Gujarat",
//     "station_path": [
//       61,
//       70,
//       83
//     ]

const RideComponent = ({ ride }) => {
  return (
    <div className={styles.ride__wrapper}>
      <div className={styles.ride__left}>
        <Image
          src={'/map.jpeg'}
          alt=''
          width={'296px'}
          height={'148px'}
          loading='lazy'
        />
      </div>
      <div className={styles.ride__center}>
        <RideData title='Ride ID' data={ride.id} />
        <RideData title='Origin Station' data={ride.origin_station_code} />
        <RideData
          title='Station Path'
          data={`[ ${ride.station_path.join(' ,')} ]`}
        />
        <RideData
          title='Date'
          data={ride.date}
        />
        <RideData title='Distance' data={ride.distance} />
      </div>
      <div className={styles.loaction__details_wrapper}>
        <p className={styles.loaction__chips}>{ride.city}</p>
        <p className={styles.loaction__chips}>{ride.state}</p>
      </div>
    </div>
  );
};

export default RideComponent;
