import React, { Fragment } from 'react';
import { useRecoilState } from 'recoil';
import { stateFilter } from '../atoms/filters/stateFilter';
import { statesState } from '../atoms/statesState';
import styles from '../styles/Filters.module.css';

const Filters = () => {
  const [state, setState] = useRecoilState(stateFilter);
  const [states, setStates] = useRecoilState(statesState);

  console.log(state)

  return (
    <div className={styles.filter__wrapper}>
      <select
        placeholder='Select a State'
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <Fragment>
          <option value={""}>Select a State</option>
          {states?.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </Fragment>
      </select>
    </div>
  );
};

export default Filters;
