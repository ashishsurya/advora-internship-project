import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { stateFilter } from '../atoms/filters/stateFilter';
import { statesState } from '../atoms/statesState';
import Filters from '../components/Filters';
import NavBar from '../components/NavBar';
import RideComponent from '../components/RideComponent';
import styles from '../styles/Home.module.css';
import { calculateDistance } from '../utils/calculateDistance';
import { extractCities } from '../utils/extractCities';
import { extractPreviousRides } from '../utils/extractPreviousRides';
import { extractStates } from '../utils/extractStates';
import { extractUpcomingRides } from '../utils/extractUpcomingRides';
import { getLength } from '../utils/getLength';

export default function Home({ rides, user }) {
  const [tab, setTab] = useState('nearestrides');
  const [upComingRides, setUpComingRides] = useState(null);
  const [previousRides, setPreviousRides] = useState(null);
  const [states, setStates] = useRecoilState(statesState);
  const [state, setState] = useRecoilState(stateFilter);

  // to be implemented
  useEffect(() => {
    setStates(extractStates(rides));
    setUpComingRides(extractUpcomingRides(rides));
    setPreviousRides(extractPreviousRides(rides));
  }, [rides, setStates]);

  useEffect(() => {}, [state]);

  return (
    <div className={styles.pagewrapper}>
      <Head>
        <title>Edvora &middot; Rides</title>
      </Head>
      <NavBar user={user} />

      <nav className={styles.home__nav__wrapper}>
        <div className={styles.home__nav__wrapper__left}>
          <li>
            <p
              onClick={() => setTab('nearestrides')}
              className={
                tab === 'nearestrides' ? styles.activetab : styles.unactivetab
              }
            >
              Nearest Rides
            </p>
          </li>
          <li>
            <p
              onClick={() => setTab('upcomingrides')}
              className={
                tab === 'upcomingrides' ? styles.activetab : styles.unactivetab
              }
            >
              Upcoming Rides{' '}
              <span>({upComingRides && getLength(upComingRides)})</span>
            </p>
          </li>
          <li>
            <p
              onClick={() => setTab('previousrides')}
              className={
                tab === 'previousrides' ? styles.activetab : styles.unactivetab
              }
            >
              Previous Rides{' '}
              <span>({previousRides && getLength(previousRides)})</span>
            </p>
          </li>
        </div>

        <div className={styles.home__nav__wrapper__right}>
          <Filters />
        </div>
      </nav>

      {tab === 'nearestrides' && (
        <section className={styles.rides__wrapper}>
          {rides
            ?.filter((ride) => {
              if (state != '') {
                return ride.state === state;
              } else {
                return ride;
              }
            })
            .map(
              (ride) =>
                ride && <RideComponent key={ride.generated_id} ride={ride} />
            )}
        </section>
      )}

      {tab === 'upcomingrides' && (
        <section className={styles.rides__wrapper}>
          {upComingRides
            ?.filter((ride) => {
              if (state != '') {
                return ride?.state === state;
              } else {
                return ride;
              }
            })
            .map(
              (ride) =>
                ride && <RideComponent key={ride.generated_id} ride={ride} />
            )}
        </section>
      )}

      {tab === 'previousrides' && (
        <section className={styles.rides__wrapper}>
          {previousRides
            ?.filter((ride) => {
              if (state != '') {
                return ride?.state === state;
              } else {
                return ride;
              }
            })
            .map(
              (ride) =>
                ride && <RideComponent key={ride.generated_id} ride={ride} />
            )}
        </section>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const response1 = await fetch('https://assessment.api.vweb.app/rides');
  const response2 = await fetch('https://assessment.api.vweb.app/user');
  const rides = await response1.json();
  const user = await response2.json();

  rides.map((ride) => {
    ride.distance = calculateDistance(ride.station_path, user.station_code);
    ride.generated_id = uuidv4();

    return ride;
  });

  rides.sort((a, b) => a.distance - b.distance);
  return {
    props: {
      rides,
      user,
    },
  };
}
