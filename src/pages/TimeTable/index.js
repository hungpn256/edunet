import React from 'react';
import styles from './styles.module.scss';
import TimeTable from '../../components/TimeTable';

const index = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>Buổi học tiếp theo</div>
      <TimeTable />
    </div>
  );
};

export default index;
