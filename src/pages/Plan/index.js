import React from 'react';
import styles from './styles.module.scss';
import Plan from '../../components/Plan';

const index = () => {
  return (
    <div className={styles['container']}>
      <Plan />
    </div>
  );
};

export default index;
