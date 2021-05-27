import React from 'react';
import styles from './styles.module.scss';
import Calender from '../../components/Calender';

const index = () => {
  return (
    <div className={styles['container']}>
      <Calender />
    </div>
  );
};

export default index;
