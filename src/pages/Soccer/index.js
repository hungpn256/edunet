import React from 'react';
import styles from './styles.module.scss';
import Soccer from '../../components/Soccer';

const index = () => {
  return (
    <div className={styles['container']}>
      <Soccer />
    </div>
  );
};

export default index;
